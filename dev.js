import nodemon from 'nodemon';
import browserSync from 'browser-sync';
import { exec } from 'child_process';
import path from 'path';

const bs = browserSync.create();

// Function to run the build script
function runBuild(callback) {
    console.log('Running build script...');
    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`Build error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Build stderr: ${stderr}`);
        }
        console.log(`Build stdout: ${stdout}`);
        if (callback) callback();
    });
}

// Initialize BrowserSync
bs.init({
    server: 'docs',
    files: 'docs/**/*.html', // Watch generated HTML files for changes to trigger browser reload
    port: 3000, // Or any other port you prefer
    open: false // Don't automatically open a new browser window
}, (err, bsInstance) => {
    if (err) {
        console.error('BrowserSync init error:', err);
        return;
    }
    console.log('BrowserSync initialized. Watching docs/**/*.html for changes.');

    // Initial build
    runBuild(() => {
        bs.reload(); // Reload browser after initial build
    });

    // Watch for changes in source files (Markdown and build.js)
    nodemon({
        watch: [
            '*.md', // Watch root Markdown files
            'build.js' // Watch the build script itself
        ],
        ignore: [
            'docs/' // Ignore the entire docs directory from nodemon's watch
        ],
        ext: 'md,js', // Only watch md and js files as source
        exec: 'npm run build', // Execute build script on changes
        stdout: false, // Don't show nodemon's stdout
        stderr: false // Don't show nodemon's stderr
    })
    .on('start', () => console.log('Nodemon started watching source files.'))
    .on('restart', (files) => {
        console.log('Nodemon detected changes, rebuilding...');
        // BrowserSync's 'files' watch on 'docs/**/*.html' will handle the reload
        // after 'npm run build' updates the HTML files.
    })
    .on('quit', () => {
        console.log('Nodemon quit.');
        process.exit();
    })
    .on('crash', () => console.error('Nodemon crashed!'));
});