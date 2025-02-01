// icons-cdn.js
(function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    
    // Add CSS for the icons
    style.innerHTML = `
        .i-arrow-up, .i-arrow-down, .i-arrow-left, .i-arrow-right {
            display: inline-block;
            width: 24px;
            height: 24px;
            background-size: contain;
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
})();

