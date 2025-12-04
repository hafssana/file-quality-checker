const fs = require("fs");
const path = require("path");

console.log("File Quality Checker running...");

const checkHTML = (file, content) => {
    let warnings = [];
    if (!content.includes("<")) warnings.push("No HTML tags found");
    return warnings;
};

const checkCSS = (file, content) => {
    let warnings = [];
    if (!content.includes("{")) warnings.push("Probably missing CSS blocks");
    return warnings;
};

const checkJS = (file, content) => {
    let warnings = [];
    if (!content.includes(";")) warnings.push("Missing semicolons (not always wrong)");
    return warnings;
};

const checkJSON = (file, content) => {
    try {
        JSON.parse(content);
        return [];
    } catch {
        return ["Invalid JSON structure"];
    }
};

const checkCSV = (file, content) => {
    if (!content.includes(",")) return ["File might not be valid CSV"];
    return [];
};

const checkSQL = (file, content) => {
    if (!content.toLowerCase().includes("select") &&
        !content.toLowerCase().includes("insert") &&
        !content.toLowerCase().includes("create"))
        return ["SQL file seems empty or incomplete"];
    return [];
};

const checkers = {
    ".html": checkHTML,
    ".css": checkCSS,
    ".js": checkJS,
    ".json": checkJSON,
    ".csv": checkCSV,
    ".sql": checkSQL
};

const inspectFolder = (folderPath) => {
    const files = fs.readdirSync(folderPath);

    files.forEach(f => {
        const filePath = path.join(folderPath, f);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) return;

        const ext = path.extname(f).toLowerCase();
        const checker = checkers[ext];

        if (checker) {
            const content = fs.readFileSync(filePath, "utf8");
            const warnings = checker(filePath, content);

            if (warnings.length === 0) {
                console.log(`✔ OK: ${filePath}`);
            } else {
                warnings.forEach(w => {
                    console.log(`⚠ Warning: ${filePath} → ${w}`);
                });
            }
        }
    });
};

inspectFolder(process.cwd());
