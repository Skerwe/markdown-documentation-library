# NPM

[npm-package.json \| npm Documentation](https://docs.npmjs.com/files/package.json)

## cosmiconfig

[GitHub - davidtheclark/cosmiconfig](https://github.com/davidtheclark/cosmiconfig): 
Find and load configuration from a package.json property, rc file, or CommonJS module

## Environment Variable

[cross-env](https://www.npmjs.com/package/cross-env): 
Run scripts that set and use environment variables across platforms

## Standalone Packages

### Check for out of date packages

`npm -g outdated --depth=0`

- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) - Upgrades dependencies to the latest versions.
- [npm-check](https://www.npmjs.com/package/npm-check) - Check for outdated, incorrect, and unused dependencies.

### npx

[Introducing npx: an npm package runner – Kat Marchán – Medium](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

1. [npx](https://www.npmjs.com/package/npx) - execute npm package binaries
2. [awesome-npx](https://github.com/junosuarez/awesome-npx) - packages and resources that work really well with npx

### [ProjectMan](https://www.npmjs.com/package/projectman)

`npm install -g projectman`

1. Add a project

    ```bash
    cd /till/the/project
    pm add
    ```

2. Open a project

    ```bash
    pm open [projectName]
    ```

3. Remove a project

    ```bash
    pm remove
    ```

4. Edit ProjectMan config

    ```bash
    pm edit
    ```

## Fixing Issues with environment

### NPM global packages not accessable

The bin path needs to be on the PATH variable

```bash
npm bin -g
```
