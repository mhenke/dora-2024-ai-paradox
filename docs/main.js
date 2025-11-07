document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab__button');
    const tabContents = document.querySelectorAll('.tabcontent');

    // Function to activate a specific tab
    function activateTab(tabId) {
        // Hide all tab contents and deactivate all buttons
        tabContents.forEach((content) => {
            content.classList.remove('tabcontent--active');
            content.style.display = 'none';
        });

        buttons.forEach((btn) => {
            btn.classList.remove('tab__button--active');
        });

        // Show the target tab content and activate its button
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.add('tabcontent--active');
            targetTab.style.display = 'block';

            // Find and activate the corresponding button
            const correspondingButton = document.querySelector(`.tab__button[data-tab="${tabId}"]`);
            if (correspondingButton) {
                correspondingButton.classList.add('tab__button--active');
            }
        } else {
            // If the tabId is invalid, default to 'overview'
            activateTab('overview');
            return;
        }
    }

    // Handle initial page load or direct link with hash
    function handleHashChange() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        if (hash) {
            activateTab(hash);
        } else {
            // Default to the 'overview' tab if no hash is present
            activateTab('overview');
        }
    }

    // Add event listeners to buttons to update the hash
    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            const tabId = event.currentTarget.dataset.tab;
            window.location.hash = tabId; // This will trigger the hashchange event
        });
    });

    // Listen for hash changes (e.g., browser back/forward, manual hash change)
    window.addEventListener('hashchange', handleHashChange);

    // Initial tab activation
    handleHashChange();
});
