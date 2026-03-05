import fs from 'fs';
import path from 'path';

const filesToFix = [
    'src/components/Footer.tsx',
    'src/components/Layout.tsx',
    'src/components/Navbar.tsx',
    'src/pages/About.tsx',
    'src/pages/Careers.tsx',
    'src/pages/Home.tsx',
    'src/pages/Services.tsx'
];

for (const file of filesToFix) {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/import React from 'react';\r?\n/g, '');
        fs.writeFileSync(filePath, content);
    }
}
