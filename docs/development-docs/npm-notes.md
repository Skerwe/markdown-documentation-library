# Node Package Manager (NPM) Notes

:link: [get-npm](https://www.npmjs.com/get-npm)  
:link: [npm-package.json](https://docs.npmjs.com/files/package.json)

## Application Config

[GitHub - davidtheclark/cosmiconfig](https://github.com/davidtheclark/cosmiconfig): 
Find and load configuration from a package.json property, rc file, or CommonJS module

## Environment Variable

[cross-env](https://www.npmjs.com/package/cross-env): 
Run scripts that set and use environment variables across platforms

## Standalone Packages

### Check for out of date packages

`npm -g outdated --depth=0`

- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) -- Upgrades dependencies to the latest versions.
- [npm-check](https://www.npmjs.com/package/npm-check) - Check for outdated, incorrect, and unused dependencies.

### NPX

[Introducing npx: an npm package runner – Kat Marchán – Medium](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

1. [npx](https://www.npmjs.com/package/npx) -- execute npm package binaries
2. [awesome-npx](https://github.com/junosuarez/awesome-npx) -- packages and resources that work really well with npx

## Wireit

[Wireit](docs/development-docs/game-development/game-design.md) upgrades your npm scripts to make them smarter and more efficient.

`npm i -D wireit`

### [ProjectMan](https://www.npmjs.com/package/projectman)

`npm install -g projectman`

Add a project

```shell
cd /till/the/project
pm add
```

Open a project

```shell
pm open [projectName]
```

Remove a project

```shell
pm remove
```

Edit ProjectMan config

```shell
pm edit
```

## :warning: Fixing Issues with the NPM Environment

### NPM global packages not accessable

The bin path needs to be on the PATH variable

```shell
npm bin -g
```
