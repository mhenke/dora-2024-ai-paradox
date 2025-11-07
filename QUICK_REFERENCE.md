# Quick Reference: Issues & Fixes

## Critical Issues (Fix Today)

### ❌ Issue 1: Git Repository is Incomplete

**Problem**: Only README.md is committed to git.

**Check**:
```bash
git ls-files
# Should show many files, not just README.md
```

**Fix** (5 minutes):
```bash
git add DORA_AI_Paradox.md DORA_AI_Paradox_Facilitator_Guide.md \
        The_AI_Paradox_Visual_Summary.md meeting*.md \
        build.js dev.js \
        .htmlvalidate.json .prettierrc.json .stylelintrc.json \
        eslint.config.mjs package.json

echo "docs/" >> .gitignore
git add .gitignore

git commit -m "Add project source files and tooling"
git push
```

**Impact**: New contributors can now clone and run the project.

---

### ❌ Issue 2: Build Errors Are Silent

**Problem**: When build fails, developer sees no error message.

**Check**:
```bash
npm run dev
# Edit build.js, add syntax error
# dev server shows "Nodemon crashed!" but not the actual error
```

**Fix** (1 minute):

File: `dev.js`, line 55

Change:
```javascript
stderr: false  // ← BEFORE
```

To:
```javascript
stderr: true   // ← AFTER
```

**Impact**: Errors are now visible when build breaks.

---

### ❌ Issue 3: CSS and JavaScript Changes Don't Reload

**Problem**: Only HTML file changes trigger browser reload.

**Check**:
```bash
npm run dev
# Edit docs/style.css
# Browser does NOT reload
```

**Fix** (1 minute):

File: `dev.js`, line 27

Change:
```javascript
files: 'docs/**/*.html',  // ← BEFORE
```

To:
```javascript
files: 'docs/**/*.{html,css,js}',  // ← AFTER
```

**Impact**: CSS and JavaScript changes now trigger browser reload.

---

## High Priority Issues (Fix This Week)

### ⚠️ Issue 4: Inline Styles Violate Linting Rules

**Problem**: Markdown-it generates `<th style="text-align:left">` → 100+ linting errors.

**Check**:
```bash
npm run lint
# Shows 100+ "Inline style is not allowed" errors
```

**Fix** (20 minutes):

File: `build.js`, after line 4

Add:
```javascript
// Override table rendering to use CSS classes instead of inline styles
const originalThOpen = md.renderer.rules.th_open;
md.renderer.rules.th_open = (tokens, idx) => {
    const token = tokens[idx];
    token.attrSet('class', 'table__header-cell');
    token.attrRemove('style');
    return `<th class="table__header-cell">`;
};

const originalTdOpen = md.renderer.rules.td_open;
md.renderer.rules.td_open = (tokens, idx) => {
    const token = tokens[idx];
    token.attrSet('class', 'table__cell');
    token.attrRemove('style');
    return `<td class="table__cell">`;
};
```

**Verification**:
```bash
npm run build
npm run lint
# Should have significantly fewer errors now
```

**Impact**: Linting becomes effective, HTML is semantic.

---

### ⚠️ Issue 5: No Error Handling in Build

**Problem**: File operations have no try/catch → cryptic errors.

**Check**:
```bash
rm DORA_AI_Paradox.md
npm run build
# Shows unhelpful error message
```

**Fix** (15 minutes):

File: `build.js`, lines 45-52

Change:
```javascript
function convertMarkdownToHtml() {
    console.log('Converting Markdown to HTML...');
    for (const file of filesToConvert) {
        try {
            if (!fs.existsSync(file.mdFile)) {
                throw new Error(`Source file not found: ${file.mdFile}`);
            }
            const mdContent = fs.readFileSync(file.mdFile, 'utf8');
            const htmlContent = md.render(mdContent);
            fs.writeFileSync(file.htmlFile, htmlContent);
            console.log(`✓ Converted ${file.mdFile}`);
        } catch (error) {
            console.error(`✗ ERROR: ${file.mdFile}`);
            console.error(`  ${error.message}`);
            process.exit(1);
        }
    }
}
```

**Impact**: Clear error messages when something fails.

---

### ⚠️ Issue 6: Browser Reloads on Failed Builds

**Problem**: BrowserSync reloads even if build failed.

**Check**:
```bash
npm run dev
# Break build.js
# Browser still reloads (showing stale content)
```

**Fix** (20 minutes):

File: `dev.js`, lines 11-22

Change:
```javascript
exec('npm run build', (error, stdout, stderr) => {
    if (error) {
        console.error('❌ BUILD FAILED');
        console.error(stderr);
        return;  // ← Don't call callback, don't reload
    }
    console.log('✓ Build succeeded');
    if (callback) callback();  // ← Only reload on success
});
```

**Impact**: Browser only reloads after successful builds.

---

## Medium Priority Issues

### 🟡 Issue 7: Manual Configuration for New Meetings

**Problem**: Adding a new meeting requires editing build.js.

**Current** (manual):
```javascript
const filesToConvert = [
    { mdFile: 'meeting0.md', ... },
    { mdFile: 'meeting1.md', ... },
    { mdFile: 'meeting2.md', ... },
    { mdFile: 'meeting3.md', ... },
    // Must add each new meeting here ↑
];
```

**Better** (auto-discovery):
```javascript
function generateFilesList() {
    const files = [ /* core files */ ];
    
    // Auto-discover meetings
    const meetings = fs.readdirSync('.')
        .filter(f => f.match(/^meeting\d+\.md$/))
        .sort();
    
    for (const meetingFile of meetings) {
        const num = meetingFile.match(/\d+/)[0];
        files.push({
            mdFile: meetingFile,
            htmlFile: `docs/${meetingFile.replace('.md', '.html')}`,
            tabId: `meeting-${num}`
        });
    }
    
    return files;
}

const filesToConvert = generateFilesList();
```

**Impact**: Adding new meetings only requires creating a markdown file.

---

## All Issues at a Glance

| # | Issue | Severity | Fix Time | Files | Status |
|---|-------|----------|----------|-------|--------|
| 1 | Git incomplete | CRITICAL | 5 min | .git | ✗ TODO |
| 2 | Build errors silent | CRITICAL | 1 min | dev.js:55 | ✗ TODO |
| 3 | CSS/JS not watched | CRITICAL | 1 min | dev.js:27 | ✗ TODO |
| 4 | Inline styles | HIGH | 20 min | build.js:5 | ✗ TODO |
| 5 | No error handling | HIGH | 15 min | build.js:45 | ✗ TODO |
| 6 | No build verification | HIGH | 20 min | dev.js:11 | ✗ TODO |
| 7 | Manual meetings | MEDIUM | 20 min | build.js:6 | ✗ TODO |
| 8 | Output suppressed | MEDIUM | 1 min | dev.js:56 | ✗ TODO |
| 9 | Single-page app | MEDIUM | 2-3 hours | docs/ | ✗ FUTURE |

---

## Fix Timeline

### Immediate (30 minutes)
1. Commit source files (5 min)
2. Enable stderr (1 min)
3. Expand watch pattern (1 min)

### This Week (1 hour)
4. Configure markdown-it (20 min)
5. Add error handling (15 min)
6. Add build verification (20 min)

### Next Sprint (20 minutes)
7. Auto-discover meetings (20 min)

### Future (2-3 hours)
8. Convert to multi-page site

---

## Testing Checklist

After each fix:

- [ ] Run `npm run build` - succeeds with clear output
- [ ] Run `npm run lint` - errors reduced
- [ ] Run `npm run dev` - starts without errors
- [ ] Edit markdown - reload works
- [ ] Edit CSS - reload works
- [ ] Break build - error message is visible
- [ ] Fix build - recovery is automatic

---

## One-Liner Fixes

### Fix 1: Commit files
```bash
git add . && git commit -m "Add project files" && git push
```

### Fix 2: Enable stderr
```bash
sed -i "s/stderr: false/stderr: true/" dev.js
```

### Fix 3: Expand watch pattern
```bash
sed -i "s/files: 'docs\/\*\*\/\*.html'/files: 'docs\/**\/*.{html,css,js}'/" dev.js
```

---

## How to Use This Reference

1. **Find your issue**: Search by symptom in "Critical Issues" section
2. **Understand the problem**: Read the "Problem" subsection
3. **Verify it's real**: Run the "Check" command
4. **Apply the fix**: Follow the "Fix" section step-by-step
5. **Verify it worked**: Run the "Impact" check

If stuck: Refer to IMPLEMENTATION_ROADMAP.md for detailed context.

---

## Need Help?

- **Detailed explanation**: See DEV_WORKFLOW_REVIEW.md
- **Architecture context**: See ARCHITECTURE_REVIEW.md
- **Step-by-step guide**: See IMPLEMENTATION_ROADMAP.md
- **Executive overview**: See REPOSITORY_REVIEW_SUMMARY.md
