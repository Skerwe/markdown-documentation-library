# Markdown Documentation Library (MDL)

```text
  _____           _           _     __  __ _____  _
 |  __ \         (_)         | |   |  \/  |  __ \| |
 | |__) | __ ___  _  ___  ___| |_  | \  / | |  | | |
 |  ___/ '__/ _ \| |/ _ \/ __| __| | |\/| | |  | | |
 | |   | | | (_) | |  __/ (__| |_  | |  | | |__| | |____
 |_|   |_|  \___/| |\___|\___|\__| |_|  |_|_____/|______|
                _/ |
               |__/
```

![Node.js CI][github-ci-url] [![DevDependency Status][daviddm-image]][daviddm-url] [![Known Vulnerabilities][snyk-image]][snyk-url]

> Software development notes and links documented in markdown format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [npm](https://www.npmjs.com/get-npm) or equivilant
- [Docsify](https://docsify.js.org/#/) 

You should install Docsify globally, `npm i docsify-cli -g`

### Quick Start

Clone the repository:

```shell
git clone https://github.com/Skerwe/markdown-documentation-library.git
```

Install the dependencies

1. In bash/terminal/command line, `cd` into the project directory.
2. Run `npm install` to install required files and dependencies.

Serve the documentation website on `localhost:3000`

```shell
docsify serve docs
```

## Running the tests

Run [markdownlint](https://github.com/DavidAnson/markdownlint) to validate the markdown files.

```bash
npm test
```

## The project was built with

1. [Markdown](https://www.markdownguide.org/getting-started/) -- creating the notes and documentation
2. [Docsify](https://docsify.js.org/#/) -- generate the documentation website
3. [GitHub Pages](https://pages.github.com/) -- hosting the documentation website

## License

The source code is free -- see the [LICENSE](LICENSE) file for details

[daviddm-image]: https://david-dm.org/Skerwe/markdown-documentation-library/dev-status.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Skerwe/markdown-documentation-library?type=dev
[github-ci-url]: https://github.com/Skerwe/markdown-documentation-library/workflows/Node.js%20CI/badge.svg?branch=master
[snyk-image]: https://snyk.io/test/github/Skerwe/markdown-documentation-library/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/Skerwe/markdown-documentation-library?targetFile=package.json
