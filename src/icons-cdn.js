// icons-cdn.js
(function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    
    // Add CSS for the icons
    style.innerHTML = `
        .i-arrow-up, .i-arrow-down, .i-arrow-left, .i-arrow-right {
            display: inline-block;
            width: var(--icon-size, 24px); /* Default size */
            height: var(--icon-size, 24px); /* Default size */
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            fill: var(--icon-color, black); /* Default color */
        }
        .i-arrow-up {
            background-image: url('https://your-cdn-link/arrow-up.svg');
        }
        .i-arrow-down {
            background-image: url('https://your-cdn-link/arrow-down.svg');
        }
        .i-arrow-left {
            background-image: url('https://your-cdn-link/arrow-left.svg');
        }
        .i-arrow-right {
            background-image: url('https://your-cdn-link/arrow-right.svg');
        }
    `;
    
    document.head.appendChild(style);
    
    // Function to change the size and color of icons
    window.changeIconStyles = function(size, color) {
        document.documentElement.style.setProperty('--icon-size', size);
        document.documentElement.style.setProperty('--icon-color', color);
    };
})();

