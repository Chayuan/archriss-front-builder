# twig-sass-boilerplate

## Installation

Clone the project and run `yarn install`

## How to use

Build :

- production mode `yarn build:prod`
- developpement mode `yarn build`

Watch :

- `yarn dev` or `yarn watch`

That's it folks, you can start coding in the `src/` folder and let the magic happen.

> All the folder, srcs and destinations are customizable. Just edit the .env file depending on your needs

## List of specific tasks (lust be prefixed with yarn)

- `scripts`
- `scripts:prod`
- `styles`
- `styles:prod`
- `imgs`
- `imgs:prod`
- `assets`
- `assets:prod`
- `views`
- `views:prod`

## What it does

- Minify and copy image from `src/imgs` to `dist/imgs` (path are editable)

  > You should not rely on gulp minifier to minify your images though, and a pre-minification is strongly recommanded

- Compile scss files to a single `app.css` file (with a sourcemap for developpement)

- Compile Twig templates to html static files

- Bundle scripts to a single `app.js` file but allow multiple entry point 
<small>(see <a href="#">How to add a javascript entry)</a></small>
- Scripts will be minified and uglified for production

- A sourcemap will be created while in development

- Supported extensions are `.ts`, `.tsx`, `.js`, `.jsx`

- Support react applications

- Support import syntax and resolve folders indexes

- Support old browser (targets can be configured in `.babelrc`)

## How to add a javascript entry

Edit the `webpack.config.dev.js` and in the entry object, add a new one like so : 

```
 entry: {
    [mainJsFileName]: `./${process.env.SCRIPTS_FOLDER}/index.js`,

    // here
    otherEntry: `./${process.env.SCRIPTS_FOLDER}/otherEntry.ts`
  }
```

Do not forget to apply the exact same modification on your `webpack.config.prod.js`

## Under the hood

Using gulp as a task runner.
Webpack as a script bundler, minifier and uglifier
Babel to transpile JavaScript
