document.querySelectorAll("i").forEach(icon => {
    let classList = Array.from(icon.classList);
    let iconClass = classList.find(cls => cls.startsWith("i-"));
    
    if (iconClass) {
        let iconName = iconClass.replace("i-", "");
        icon.style.backgroundImage = `url('https://cdn.jsdelivr.net/gh/FumblePin/BumbleBird@0376a93099d0f62baf3cdfc07f5a247c6b597b34/Icon/${iconName}.svg')`;
    }
});

        document.documentElement.style.setProperty('--icon-size', size);
        document.documentElement.style.setProperty('--icon-color', color);
    };
})();

