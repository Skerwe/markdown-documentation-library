# [Visual Studio Code](https://code.visualstudio.com/)

## Basic Shortcuts

- Open the command panel: **Ctrl + Shift + P**
- Change the theme: **Ctrl + K, Ctrl + T**
- Format the current opened document: **Shift + Alt + F**
- Open terminal on current project folder: **Ctrl + Shift + ~**

:link: [Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

## Themes and Icons

### File Icons

- [VSCode Icon Theme](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
- [Seti Icon Theme](https://marketplace.visualstudio.com/items?itemName=qinjia.seti-icons)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

`Ctrl+Shift+P > Preferences: File Icon Theme`

### Syntax Themes

- [New Moon Syntax Theme for Web Development](https://taniarascia.github.io/new-moon/)
- [Sublime Material Theme](https://marketplace.visualstudio.com/items?itemName=jprestidge.theme-material-theme)

`Ctrl+Shift+P > Preferences: Color Theme`

## Programmer Font

Monospaced font with programming ligatures:  

1. [Fira Code](https://github.com/tonsky/FiraCode)
2. [microsoft/cascadia-code](https://github.com/microsoft/cascadia-code)
3. [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

## EditorConfig

[EditorConfig](https://editorconfig.org/) helps maintain consistent coding style.

1. Install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension
2. Right click project folder and select '__Generate .editorconfig__'

## Editor Enhancements

### Project Management

- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager) - 
Easily switch between projects

## Development Enhancements

- [Copy Relative Path](https://marketplace.visualstudio.com/items?itemName=alexdima.copy-relative-path)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

### Programming Metrics

1. [Code::Stats](https://marketplace.visualstudio.com/items?itemName=riussi.code-stats-vscode)
2. [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)

### Git Source Control

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore) | [collection of .gitignore templates](https://github.com/github/gitignore)

### Node Package Manager (NPM)

- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

## Java Development

[Java in VS Code](https://code.visualstudio.com/docs/languages/java) documentation.  

1. Install the [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) 
which includes:
    - [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
    - [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
    - [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
    - [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
    - [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
    - [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

2. [Gradle Language Support](https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language)

## [Markdown](markdown.md)

Open preview side-by-side `Ctrl+K V`
How to setup [Compiling Markdown into HTML](https://code.visualstudio.com/docs/languages/markdown#_compiling-markdown-into-html)
How to configure VSCode as a [Markdown Editor](https://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/)

### Markdown Linting

- [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [markdownlint on GitHub](https://github.com/DavidAnson/markdownlint)

### Markdown Converters

- [Pandoc](http://pandoc.org/) a universal document converter

## Web Development

1. [JavaScript in VS Code](https://code.visualstudio.com/docs/languages/javascript) documentation.
2. [HTML programming in VS Code](https://code.visualstudio.com/docs/languages/html) documentation.
3. [CSS, Sass and Less](https://code.visualstudio.com/docs/languages/css) documentation.
4. [Emmet in Visual Studio Code](https://code.visualstudio.com/docs/editor/emmet) documentation.

### Extensions for HTML, CSS and JavaScript

- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) 
includes these 2 extensions:
  - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 
  Automatically add HTML/XML close tag
  - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 
  Auto rename paired HTML/XML tag
- [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)

[TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.ts-extension-pack)

### Template Engines

#### Nunjucks

- [Nunjucks VSCode Extension Pack](https://marketplace.visualstudio.com/items?itemName=douglaszaltron.nunjucks-vscode-extensionpack)
- [Nunjucks Template Formatter](https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter)

Configure emmit to work in Nunjucks templates:

```json
"html.suggest.html5": true,
  "emmet.includeLanguages": {
      "njk": "html"
  },
  "files.associations": {
      "*.njk": "njk"
  }
```

### Web Application Development

[Web Template Studio](https://marketplace.visualstudio.com/items?itemName=WASTeamAccount.WebTemplateStudio-dev-nightly) 
enables developers to quickly scaffold full-stack web applications with cloud services.

1. [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
2. [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)

#### Frameworks

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Vue tooling

## Python 

The [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) extension adds 
linting, debugging (multi-threaded, remote), intellisense, code formatting, refactoring, unit tests, snippets, and more.

## Miscellaneous

- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - YAML Language Support by Red Hat
- [XML Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml) - 
XML Formatting, XQuery, and XPath Tools
- [C# for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)

***

## Static Code Analysis and Code Quality Tools

VS Code provides support for JavaScript linters, including ESLint, JSHint and StandardJS.

### [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)

VS Code integration for [HTMLHint](https://github.com/htmlhint/HTMLHint) - A Static Code Analysis Tool for HTML

.htmlhintrc

### [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Integration for [ESLint](https://eslint.org/) - Pluggable JavaScript linter

1. Install ESLint globally `npm install -g eslint`
2. Run `eslint --init` (requires package.json)

### [JSHint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)

Integration for [JSHint](https://jshint.com/) - a JavaScript Code Quality Tool

## Beautifiers and Code formatters

### [Unibeautify](https://unibeautify.com/)

1. install [Unibeautify for VSCode](https://github.com/Unibeautify/vscode) extension

2. Install the unibeautify-cli
   `npm install --global unibeautify unibeautify-cli`
   
3. Then install required beautifiers
  `npm install --global @unibeautify/beautifier-eslint`
  `npm install --global @unibeautify/beautifier-prettier`
  `npm install --global @unibeautify/beautifier-prettydiff`
  `npm install --global @unibeautify/beautifier-js-beautify`

4. Install required peer dependencies
  `npm install --global prettier`
  `npm install --global js-beautify`
  `npm install --global prettydiff2`

### [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

1. [prettier/prettier-eslint: Code prettier eslint --fix Formatted Code](https://github.com/prettier/prettier-eslint)
2. [azz/prettier-tslint: Code ➡️ prettier ➡️ tslint --fix ➡️ Formatted Code ✨](https://github.com/azz/prettier-tslint)
3. [hugomrdias/prettier-stylelint: code > prettier > stylelint > formatted code](https://github.com/hugomrdias/prettier-stylelint)

### [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) 

[Online JavaScript beautifier](https://beautifier.io/)

.jsbeautifyrc

### [Pretty Diff - The difference tool](https://prettydiff.com/)

***

## Game Development

1. [Godot Tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools)
2. [Debugger for Unity](https://marketplace.visualstudio.com/items?itemName=Unity.unity-debug)
