# twig-sass-boilerplate

## Installation

`yarn add chayuan-front-builder`
In your project, create a `.env` file

Those are the variables of the `.env` file to specify
```
DEST=dist

SCRIPTS_FOLDER=./src/js
STYLES_FOLDER=./src/scss
VIEWS_FOLDER=./src/views

DEST_VIEWS=views
DEST_STYLES=css
DEST_SCRIPTS=js
```

## How to use


Build :

- developpement mode `yarn build`

## List of specific tasks (lust be prefixed with yarn)

- `scripts`
- `styles`

## What it does

- Compile scss files to a single `app.css` file (with a sourcemap for developpement)

- Compile Twig templates to html static files

- Bundle scripts to a single `app.js` file but allow multiple entry point 
<small>(see <a href="#">How to add a javascript entrypoint)</a></small>

- Scripts will be minified and uglified for production

- A sourcemap will be created while in development

- Supported extensions are `.ts`, `.tsx`, `.js`, `.jsx`

- Support react applications

- Support import syntax and resolve folders indexes

- Support old browser

## How to add a javascript entry

// TODO

## Under the hood

Using gulp as a task runner.
Webpack as a script bundler, minifier and uglifier
Babel to transpile JavaScript
