import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

// Configure markdown-it to use custom renderers for tables
const md = new MarkdownIt();

// Override table rendering to use CSS classes instead of inline styles
md.renderer.rules.table_open = () => '<table class="table">\n';
md.renderer.rules.table_close = () => '</table>\n';
md.renderer.rules.thead_open = () => '<thead class="table__head">\n';
md.renderer.rules.thead_close = () => '</thead>\n';
md.renderer.rules.tbody_open = () => '<tbody class="table__body">\n';
md.renderer.rules.tbody_close = () => '</tbody>\n';
md.renderer.rules.tr_open = () => '<tr class="table__row">\n';
md.renderer.rules.tr_close = () => '</tr>\n';

// Render th without inline style, add class
md.renderer.rules.th_open = (tokens, idx) => {
    const token = tokens[idx];
    // Remove the style attribute if present (markdown-it default adds text-align)
    token.attrJoin('class', 'table__cell table__cell--header');
    token.attrs = token.attrs.filter(attr => attr[0] !== 'style');
    return '<th' + md.renderer.renderAttrs(token) + '>';
};
md.renderer.rules.th_close = () => '</th>\n';

// Render td without inline style, add class
md.renderer.rules.td_open = (tokens, idx) => {
    const token = tokens[idx];
    token.attrJoin('class', 'table__cell');
    token.attrs = token.attrs.filter(attr => attr[0] !== 'style');
    return '<td' + md.renderer.renderAttrs(token) + '>';
};
md.renderer.rules.td_close = () => '</td>\n';

// Auto-discover meetings and generate the list of files to convert
function generateFilesList() {
    const files = [
        {
            mdFile: 'content/DORA_AI_Paradox.md',
            htmlFile: 'docs/DORA_AI_Paradox.html',
            tabId: 'overview'
        },
        {
            mdFile: 'content/DORA_AI_Paradox_Facilitator_Guide.md',
            htmlFile: 'docs/DORA_AI_Paradox_Facilitator_Guide.html',
            tabId: 'facilitator-guide'
        },
        {
            mdFile: 'content/The_AI_Paradox_Visual_Summary.md',
            htmlFile: 'docs/The_AI_Paradox_Visual_Summary.html',
            tabId: 'visual-summary'
        }
    ];

    // Auto-discover meetings
    const meetings = fs.readdirSync('meetings')
        .filter(f => f.match(/^meeting\d+\.md$/))
        .sort(); // Sort to ensure consistent order (meeting0, meeting1, etc.)

    for (const meetingFile of meetings) {
        const meetingNum = meetingFile.match(/\d+/)[0];
        files.push({
            mdFile: `meetings/${meetingFile}`,
            htmlFile: `docs/${meetingFile.replace('.md', '.html')}`,
            tabId: `meeting-${meetingNum}`
        });
    }

    return files;
}

const filesToConvert = generateFilesList();

function convertMarkdownToHtml() {
    console.log('Converting Markdown to HTML...');
    // Ensure the docs directory exists
    fs.mkdirSync('./docs', { recursive: true }); 
    for (const file of filesToConvert) {
        try {
            if (!fs.existsSync(file.mdFile)) {
                throw new Error(`Source Markdown file not found: ${file.mdFile}`);
            }
            const mdContent = fs.readFileSync(file.mdFile, 'utf8');
            const htmlContent = md.render(mdContent);
            fs.writeFileSync(file.htmlFile, htmlContent);
            console.log(`✓ Converted ${file.mdFile} to ${file.htmlFile}`);
        } catch (error) {
            console.error(`✗ ERROR: Failed to convert ${file.mdFile}`);
            console.error(`  Reason: ${error.message}`);
            process.exit(1); // Exit with error code
        }
    }
    console.log('Markdown to HTML conversion complete.');
}

function generateIndexHtml() {
    console.log('Generating index.html...');
    let indexHtmlTemplate = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DORA AI Paradox Book Club</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <h1>DORA AI Paradox Book Club</h1>

            <div class="tab">
`;
    // Dynamically generate tab buttons
    for (const file of filesToConvert) {
        indexHtmlTemplate += `                <button class="tab__button" type="button" data-tab="${file.tabId}">
                    ${file.tabId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>\n`;
    }
    indexHtmlTemplate += `            </div>
`;

    for (const file of filesToConvert) {
        try {
            if (!fs.existsSync(file.htmlFile)) {
                throw new Error(`Generated HTML file not found: ${file.htmlFile}`);
            }
            const htmlContent = fs.readFileSync(file.htmlFile, 'utf8');
            indexHtmlTemplate += `
            <div id="${file.tabId}" class="tabcontent">
                ${htmlContent}
            </div>
`;
        } catch (error) {
            console.error(`✗ ERROR: Failed to embed ${file.htmlFile} into index.html`);
            console.error(`  Reason: ${error.message}`);
            process.exit(1); // Exit with error code
        }
    }

    indexHtmlTemplate += `
            <script src="main.js"></script>
        </div>
    </body>
</html>`;

    try {
        fs.writeFileSync('docs/index.html', indexHtmlTemplate);
        console.log('✓ Generated docs/index.html');
    } catch (error) {
        console.error(`✗ ERROR: Failed to write docs/index.html`);
        console.error(`  Reason: ${error.message}`);
        process.exit(1); // Exit with error code
    }
}

convertMarkdownToHtml();
generateIndexHtml();