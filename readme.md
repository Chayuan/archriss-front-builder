# chayuan-front-builder

It's time we allow front end developers to actually focus on the code and stop wasting their time configurating the stack, wich is becoming more and more complex everyday.

**chayuan-front-builder** is an un-opinionated package to allow consistent frontend development from a project to another with minimal configuration but yet plenty of customization possibilities.

## Installation

`yarn add chayuan-front-builder`

In your project, create a `.env` file
and specify the following variables

```
SCRIPTS_FOLDER=./path_to_scripts
STYLES_FOLDER=./path_to_scss_files

DEST=name_of_destination_folder

DEST_STYLES=name_of_dest_stylesheets_folder
DEST_SCRIPTS=name_of_dest_stylesheets_folder
```

## How to use


Build :

- development mode `yarn build`
- production mode `yarn build:prod`

## List of specific tasks (must be prefixed with yarn)

- `scripts`
- `scripts:prod`
- `styles`
- `styles:prod`

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
