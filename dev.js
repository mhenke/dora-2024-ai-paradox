import nodemon from 'nodemon';
import browserSync from 'browser-sync';
import { exec } from 'child_process';
import path from 'path';

const bs = browserSync.create();

// Function to run the build script
function runBuild(callback) {
    console.log('🔨 Running build script...');
    const startTime = Date.now();
    exec('npm run build', (error, stdout, stderr) => {
        const duration = Date.now() - startTime;
        if (error) {
            console.error(`❌ BUILD FAILED (${duration}ms):`);
            console.error(stderr); // Show stderr on build error
            return; // Do not call callback, do not reload browser
        }
        if (stderr) {
            console.warn(`⚠️ Build warnings (${duration}ms):\n${stderr}`);
        }
        console.log(`✅ Build succeeded (${duration}ms)`);
        console.log(stdout); // Show stdout from build script
        if (callback) callback();
    });
}

// Initialize BrowserSync
bs.init({
    server: 'docs',
    files: 'docs/**/*.{html,css,js}', // Watch generated HTML, CSS, and JS files for changes to trigger browser reload
    port: 3000, // Or any other port you prefer
    open: false // Don't automatically open a new browser window
}, (err, bsInstance) => {
    if (err) {
        console.error('BrowserSync init error:', err);
        return;
    }
    console.log('BrowserSync initialized. Watching docs/**/*.{html,css,js} for changes.');

    // Initial build
    runBuild(() => {
        bs.reload(); // Reload browser after initial build
    });

    // Watch for changes in source files (Markdown, static assets, and build.js)
    nodemon({
        watch: [
            'content/**/*.md',
            'meetings/**/*.md',
            'static/**/*',
            'build.js'
        ],
        ignore: [
            'docs/'
        ],
        ext: 'md,js,css',
        exec: 'npm run build',
        stdout: false,
        stderr: true
    })
    .on('start', () => console.log('Nodemon started watching source files.'))
    .on('restart', (files) => {
        console.log('🔄 Nodemon detected changes, rebuilding...');
        // The 'exec' command above already runs 'npm run build'
        // BrowserSync's 'files' watch on 'docs/**/*.{html,css,js}' will handle the reload
        // after 'npm run build' updates the HTML files.
    })
    .on('quit', () => {
        console.log('Nodemon quit.');
        process.exit();
    })
    .on('crash', () => {
        console.error('');
        console.error('❌ Nodemon crashed! Check build.js for errors.');
        console.error('   Try:');
        console.error('   1. Run: npm run build   (for full output)');
        console.error('   2. Fix the error and save');
        console.error('   3. Nodemon will automatically restart');
        console.error('');
    });
});