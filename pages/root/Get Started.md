---
title: Get Started
url: /get-started
---

This template is based on the official [zoxjs.com](http://zoxjs.com/) website.

## Usage

`npm run start` will run the preview server on `http://localhost:8080`.

`npm run build` will build the static html files
and save them to a directory called `www` next to this project.

`npm run static` will serve those static files on `http://localhost:8080`.

## Project directories

The `pages` directory is where all of your content is going to be.  
It has 2 sub-directories.
The `root` directory is for individual pages
and the `partials` directory is for content that can be included on other pages.  
An example post can be viewed [here](/blog/first-post).

The `blocks` directory contains blocks that are common for all pages
and this template project features `navbar` and `footer` blocks.

The `config` directory contains configuration for installed services and plugins.  
For example `config/default/static.page.yaml` has the location of your static pages
and `config/default/blocks.yaml` contains a list of blocks divided into regions.  

The `src/templates` and `src/partials` directories contain the Handlebars templates.

## Frontend scripts and CSS

Scripts and styles are located in `src/frontend` and `src/styles` respectively.

To build scripts and styles you will need to install

```bash
npm i -g browserify watchify uglify-es sass
```

You can then run

```js
npm run build-js      // to build the bundle.js
npm run build-js-min  // to build the minified bundle.js
npm run watch-js      // to build the bundle.js and watch for changes
npm run build-css     // to build the bundle.css
npm run watch-css     // to build the bundle.css and watch for changes
```

Bundles will be saved to the `files` directory and this template comes with pre-built bundles.  
You should not commit the bundles.

## Notes

The `build` script will render the home page
and recursively add all pages that it links to,
including static files.

In case you want to include or exclude some pages
you will have to customize the `build` script.
