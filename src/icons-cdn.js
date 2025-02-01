document.querySelectorAll("i").forEach(icon => {
    let classList = Array.from(icon.classList);
    let iconClass = classList.find(cls => cls.startsWith("i-"));
    
    if (iconClass) {
        let iconName = iconClass.replace("i-", "");
        icon.style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/FumblePin/BumbleBird/Icon/${iconName}.svg')`;
    }
});

        document.documentElement.style.setProperty('--icon-size', size);
        document.documentElement.style.setProperty('--icon-color', color);
    };
})();

https://cdn.jsdelivr.net/gh/FumblePin/BumbleBird@bf3178cf53fca6cfdd58a4d2377fd1893bf2c93d/css/icon.css

