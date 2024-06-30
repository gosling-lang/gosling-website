# A Documentation Website for Gosling

This is a repository for the official documentation of the Gosling project. The documentation is hosted at http://gosling-lang.org.

## Development

```sh
yarn install
yarn start
```

The above commands will install all dependencies, start a local development server, and open a web browser. Most changes will be reflected live without having to restart the server.

This website uses `assets/gosling.schema.json` to generate property tables.
You can run the following command if you want to update the property tables based on the updated Gosling schema in your local copy of `gosling-lang/gosling.js`.
This assumes your local copies of `gosling-lang/gosling-website` and `gosling-lang/gosling.js` are in the same directory.

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

The Gosling-Website is deployed to AWS S3 BUCKET `http://gosling-lang.org` using [this GitHub Workflow](https://github.com/gosling-lang/gosling-website/blob/main/.github/workflows/deploy_action.yml).

The deployment is triggered when a push is made to the main branch.

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

We edit any documents under `./docs` whenever we make changes to gosling.js.
When we are sure that the current docs (`/docs`) is ready to be deployed (typically, when we bump a minor version of gosling.js), the following script should be run:

```
yarn run tag_version x.x.x
```

This command:
- Copy the full `./docs` folder contents into a new `versioned_docs/version-<x.x.x>` folder;
- Create a versioned sidebars file based on your current sidebar configuration, if exists, such as `versioned_sidebars/version-<x.x.x>-sidebars.json`; and
- Append the new version number to `versions.json`.
