document.querySelectorAll("i").forEach(icon => {
    let classList = Array.from(icon.classList);
    let iconClass = classList.find(cls => cls.startsWith("i-"));
    
    if (iconClass) {
        let iconName = iconClass.replace("i-", "");
        icon.style.backgroundImage = `url('https://your-cdn-link/Icon/${iconName}.svg')`;
    }
});

        document.documentElement.style.setProperty('--icon-size', size);
        document.documentElement.style.setProperty('--icon-color', color);
    };
})();

