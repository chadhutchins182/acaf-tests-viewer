# ACAF Tests Viewer

<div align="center">

[![Run Webpack Build](https://github.com/chadhutchins182/acaf-tests-viewer/actions/workflows/build.js.yml/badge.svg)](https://github.com/chadhutchins182/acaf-tests-viewer/actions/workflows/build.js.yml)
[![CodeQL](https://github.com/chadhutchins182/acaf-tests-viewer/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/chadhutchins182/acaf-tests-viewer/actions/workflows/codeql-analysis.yml)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/chadhutchins182/acaf-tests-viewer.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/chadhutchins182/acaf-tests-viewer/alerts/)
[![GitHub Open Issues](https://img.shields.io/github/issues-raw/chadhutchins182/acaf-tests-viewer)](https://github.com/chadhutchins182/acaf-tests-viewer/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/chadhutchins182/acaf-tests-viewer)](https://github.com/chadhutchins182/acaf-tests-viewer/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)

## About <a name = "about"></a>

Parses and displays the test data log file from ACAF.

## Getting Started <a name = "getting_started"></a>

Use the __Upload ACAF Tests File__ button to upload a ACAF Tests log file.

## Installing <a name = "installing"></a>

### GitHub Releases Bundle :dog: (This is the way)

The [releases](https://github.com/chadhutchins182/acaf-tests-viewer/releases) bundles on GitHub contain the complete distribution. Simply unzip and open index.html.

### From repo

Use the files located in `/dist` folder.

## Building from Source <a name = "building"></a>

### Prerequisites 

* `nodejs`

## Building

This code utilizes [webpack](https://webpack.js.org). While not required, you should be somewhat familiar with how it works.

1. `npm i` for installing libraries
2. `npm run build:prod` for building the distribution 
    * `npm run build:ci` currently does the same as `build:prod`
    * `npm run build:dev` will open up a development webserver for testing