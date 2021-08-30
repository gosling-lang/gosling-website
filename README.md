# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Working with submodule
This repository includes github submodules: [gosling-docs](https://github.com/gosling-lang/gosling-docs)

### Clone with submodules:
```sh
git clone --recursive https://github.com/gosling-lang/gosling-website
```

#### Pull all changes in this repository including changes in the submodules
```sh
git pull --recurse-submodules
```

## Installation

```sh
yarn install
```

## Local Development

```sh
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
