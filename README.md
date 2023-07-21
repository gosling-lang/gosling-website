# A Documentation Website for Gosling.js

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.


## Installation

```sh
yarn install
```

## Local Development


```sh
yarn start
```

The above command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.


Gosling uses `assets/gosling.schema.json` to generate property tables.  
If you have a local `gosling.js` repo and want to update the gosling.schema from that repo.  
Assuming your `gosling-website` and `gosling.js` repos are in the same directory, you can run
```
cd assets
. copy.sh
```

## Build

```sh
yarn build
```

The above command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

<!-- ```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. -->

The Gosling-Website is deployed to AWS S3 BUCKET `gosling-lang.org` using [this github action](https://github.com/gosling-lang/gosling-website/blob/main/.github/workflows/deploy_action.yml).

The deployment is trigger when a push is made to the main branch.

## Versioning
```
website
├── versions.json        # file to indicate what versions are available
├── docs                 # the current underdevelopment docs, available at https://gosling-lang.org/docs/next/
│   ├── foo
│   └── bar.md        
├── versioned_docs
│   ├── version-0.9.30   # the latest version, available at https://gosling-lang.org/docs/
│   │   ├── foo.md  
│   │   └── bar.md
│   └── version-0.9.20   # an older version, available at https://gosling-lang.org/docs/0.9.20/
│       ├── foo
│       └── bar.md
├── sidebars.json        # sidebar for the current underdevelopment docs 
└── versioned_sidebars
    ├── version-0.9.30-sidebars.json
    └── version-0.9.20-sidebars.json

```

We will edit the ./docs whenever we make changes to gosling.js.
When we are sure that the current docs (`/docs`) is ready to be frozen (typically when we bump a major gosling.js version), run the script below
```
yarn run tag_version x.x.x
```

This command will:
- Copy the full `./docs` folder contents into a new `versioned_docs/version-<x.x.x>` folder.
- Create a versioned sidebars file based from your current sidebar configuration (if it exists) - saved as `versioned_sidebars/version-<x.x.x>-sidebars.json`.
- Append the new version number to `versions.json`.
