# chayuan-front-builder

It's time we allow front end developers to actually focus on the code and stop wasting their time configurating the stack, wich is becoming more and more complex everyday.

**chayuan-front-builder** is an un-opinionated package to allow consistent frontend development from a project to another with minimal configuration but yet plenty of customization possibilities.

## Installation

`yarn add chayuan-front-builder`

In your project, create a `.env` file
and specify the following variables

|  Name                      |  Default   | Help                         |
|----------------------------|------------|------------------------------|
| SCRIPTS_ENTRY_POINTS       | index.js   |                              |
| SCRIPTS_FOLDER             | ./src/js   |                              |
| STYLES_FOLDER              | ./src/scss |                              |
| DEST_STYLES                | ./dist/css |                              |
| DEST_SCRIPTS               | ./dist/js  |                              |
|                            |            |                              |
| Additional configuration   |            |                              |
| WEBPACK_CUSTOM_CONFIG_FILE |            |<a name="webpack">webpack</a> |


Here is a basic example

```
SCRIPTS_ENTRY_POINTS=your_entry_point_separated_with_spaces

SCRIPTS_FOLDER=./path_to_scripts
STYLES_FOLDER=./path_to_scss_files

DEST_STYLES=./path_to_styles_dest
DEST_SCRIPTS=./path_to_scripts_dest
```

## How to use

- development mode `yarn build`
- production mode `yarn build:prod`

## List of more specific tasks

- `yarn scripts`
- `yarn  scripts:prod`
- `yarn  styles`
- `yarn  styles:prod`

## What it does

- Compile scss files to a single `app.css` file (with a sourcemap for developpement)

- Compile Twig templates to html static files

- Bundle scripts to a single `index.js` file (by default) but allow multiple entry points
<small>(see <a name="jsentrypoint">How to add a javascript entrypoint)</a></small>

- Scripts will be minified and uglified for production

- A sourcemap will be created for development

- Supported extensions are `.ts`, `.tsx`, `.js`, `.jsx`

- Support react applications

- Support import syntax and resolve folders indexes

## How to add a javascript entry
[](#jsentrypoint)
Specify the list of your javascript entry points in the `.env`
like so

`SCRIPTS_ENTRY_POINTS=index.js app.js`

## Overwriting webpack configuration
[](#webpack)
**!! Warning !!** Advanced user only

chayuan-front-builder is bundled with two webpack configuration, 
the dev one, and the prod one.

You can overwrite the global configuration (prod and dev) by creating a webpack configuration file
such as `webpack.config` containing the configuration points you want to overwrite

than, you want to specify the path of the configuration file in your `.env` by using the following key
`WEBPACK_CUSTOM_CONFIG_FILE`

here is an example

```js
module.exports = {
    entry: {
      app: './srcExemple/js/index.js'
    }
}
```

`WEBPACK_CUSTOM_CONFIG_FILE=./webpack.config`

Beware, overwriting the configuration may break the build process, use with care.

## Under the hood

Using gulp as a task runner.
Webpack as a script bundler, minifier and uglifier
Babel to transpile JavaScript
