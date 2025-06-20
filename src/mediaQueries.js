const mediaQuery = window.matchMedia('(max-width: 768px)');

const handleMediaQueryChange = (e) => {
    if (e.matches) {
        // For small screens
        // Example: Hide a navigation menu on small screens
        const navigationMenu = document.getElementById('navigation-menu');
        if (navigationMenu) {
            navigationMenu.style.display = 'none';
        }
    } else {
        // For larger screens
        // Example: Show the navigation menu on larger screens
        const navigationMenu = document.getElementById('navigation-menu');
        if (navigationMenu) {
            navigationMenu.style.display = 'block';
        }
    }
};

mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

export default mediaQuery;
