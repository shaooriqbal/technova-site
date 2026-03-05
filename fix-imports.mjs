import fs from 'fs';
import path from 'path';

const filesToFix = [
    'src/App.tsx',
    'src/components/Layout.tsx',
    'src/components/Navbar.tsx',
    'src/components/Footer.tsx',
    'src/pages/Home.tsx',
    'src/pages/Services.tsx',
    'src/pages/About.tsx',
    'src/pages/Careers.tsx'
];

for (const file of filesToFix) {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        content = content.replace(/^import React from 'react';\n/m, '');
        fs.writeFileSync(filePath, content);
    }
}

// Fix AuthContext.tsx
const authCtxPath = path.join(process.cwd(), 'src/context/AuthContext.tsx');
if (fs.existsSync(authCtxPath)) {
    let content = fs.readFileSync(authCtxPath, 'utf-8');
    content = content.replace(
        /^import React, { createContext, useContext, useState, ReactNode } from 'react';/m,
        "import { createContext, useContext, useState } from 'react';\nimport type { ReactNode } from 'react';"
    );
    fs.writeFileSync(authCtxPath, content);
}
