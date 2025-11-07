import MarkdownIt from 'markdown-it';
import fs from 'fs';
import path from 'path';

const md = new MarkdownIt();

const filesToConvert = [
    {
        mdFile: 'DORA_AI_Paradox.md',
        htmlFile: 'docs/DORA_AI_Paradox.html',
        tabId: 'overview'
    },
    {
        mdFile: 'DORA_AI_Paradox_Facilitator_Guide.md',
        htmlFile: 'docs/DORA_AI_Paradox_Facilitator_Guide.html',
        tabId: 'facilitator-guide'
    },
    {
        mdFile: 'The_AI_Paradox_Visual_Summary.md',
        htmlFile: 'docs/The_AI_Paradox_Visual_Summary.html',
        tabId: 'visual-summary'
    },
    {
        mdFile: 'meeting0.md',
        htmlFile: 'docs/meeting0.html',
        tabId: 'meeting-0'
    },
    {
        mdFile: 'meeting1.md',
        htmlFile: 'docs/meeting1.html',
        tabId: 'meeting-1'
    },
    {
        mdFile: 'meeting2.md',
        htmlFile: 'docs/meeting2.html',
        tabId: 'meeting-2'
    },
    {
        mdFile: 'meeting3.md',
        htmlFile: 'docs/meeting3.html',
        tabId: 'meeting-3'
    }
];

function convertMarkdownToHtml() {
    console.log('Converting Markdown to HTML...');
    for (const file of filesToConvert) {
        const mdContent = fs.readFileSync(file.mdFile, 'utf8');
        const htmlContent = md.render(mdContent);
        fs.writeFileSync(file.htmlFile, htmlContent);
        console.log(`Converted ${file.mdFile} to ${file.htmlFile}`);
    }
    console.log('Markdown to HTML conversion complete.');
}

function generateIndexHtml() {
    console.log('Generating index.html...');
    let indexHtmlTemplate = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DORA AI Paradox Book Club</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div class="container">
            <h1>DORA AI Paradox Book Club</h1>

            <div class="tab">
                <button class="tab__button" type="button" data-tab="overview">
                    Overview
                </button>
                <button class="tab__button" type="button" data-tab="facilitator-guide">
                    Facilitator Guide
                </button>
                <button class="tab__button" type="button" data-tab="visual-summary">Visual Summary</button>
                <button class="tab__button" type="button" data-tab="meeting-0">Meeting 0</button>
                <button class="tab__button" type="button" data-tab="meeting-1">Meeting 1</button>
                <button class="tab__button" type="button" data-tab="meeting-2">Meeting 2</button>
                <button class="tab__button" type="button" data-tab="meeting-3">Meeting 3</button>
            </div>
`;

    for (const file of filesToConvert) {
        const htmlContent = fs.readFileSync(file.htmlFile, 'utf8');
        indexHtmlTemplate += `
            <div id="${file.tabId}" class="tabcontent">
                ${htmlContent}
            </div>
`;
    }

    indexHtmlTemplate += `
            <script src="main.js"></script>
        </div>
    </body>
</html>`;

    fs.writeFileSync('docs/index.html', indexHtmlTemplate);
    console.log('Generated docs/index.html');
}

convertMarkdownToHtml();
generateIndexHtml();