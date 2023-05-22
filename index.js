const fs = require("fs");
const { resolve } = require("path");
const cp = require("child_process");

try {
  const prettierrcContent = `{
    "singleQuote": false,
    "semi": true,
    "tabWidth": 2,
    "printWidth": 85
  }`;

  const prettierIgnoreContent = `node_modules`;

  const prettierrcPath = resolve(__dirname, "..", "..", ".prettierrc.json");
  fs.writeFileSync(prettierrcPath, prettierrcContent, "utf8");
  console.log(".prettierrc.json file created.");

  const prettierIgnorePath = resolve(__dirname, "..", "..", ".prettierignore");
  fs.writeFileSync(prettierIgnorePath, prettierIgnoreContent, "utf8");
  console.log(".prettierignore file created.");

  // Update package.json scripts and devDependencies
  const packageJsonPath = resolve(__dirname, "..", "..", "package.json");
  const packageJson = require(packageJsonPath);

  packageJson.scripts = {
    ...packageJson.scripts,
    commit: "git add . && git-cz",
    format: "prettier --write .",
  };

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8"
  );

  cp.execSync(
    "npx commitizen init cz-conventional-changelog --save-dev --save-exact"
  );

  console.log("Scripts added to package.json");
} catch (error) {
  console.error("Failed to install packages:", error.message);
}
