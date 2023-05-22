# Tidy-cz
Installs commitizen/prettier to your project
adds custom run scripts for formatting and committing code.  
Adds .prettierignore/.prettierrc files to the root directory

## Installation
```
npm install tidy-cz --save-dev
```

## Peer dependencies
| Package Name | Description |
| ------------ | ----------- |
| [Commitizen](https://www.npmjs.com/package/commitizen)   | A tool for generating structured commit messages. | 
| [Prettier](https://www.npmjs.com/package/prettier)     | A code formatter that enforces code style and consistency. |

# Scripts
| Command | Description |
| ------- | ----------- |
| `npm run commit`  | Runs a git add . & then runs the commitizen |
| `npm run format`  | Formats all code to prettierrc.json config  |

## .prettierrc
[prettierrc](https://prettier.io/docs/en/configuration.html)  
The .prettierrc file contains custom config settings, please read the prettier documentation for more information

## .prettierignore
[prettierignore](https://prettier.io/docs/en/ignore.html)
This file contains `node_modules` for prettier to ignore when running