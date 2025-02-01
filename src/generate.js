const fs = require('fs');
const path = './Icon/Arrows';

fs.readdirSync(path).forEach(file => {
    console.log(`Generated <i> tag: <i class="i-${file.replace('.svg', '')}"></i>`);
});
