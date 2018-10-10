# react-photo-gallery

## Overview:

This branch of this repo contains a webpack config file that meets the following specifications:

- Has a single javascript file as the entrypoint into the application.
- Handles Javascript/ES6/React code with both .js and .jsx file extensions; outputs a single ES5 .js
bundle with a unique hash added to the filename.
- Handles SCSS code with .scss extensions in addition to CSS; outputs a single .css file with a unique hash added to the filename.
- Handles IMG files with .jpeg, .jpg, .png, and .gif extensions; returns a link referencing the file.
- Handles SVG files with .svg extension; returns a base-64 data-encoded string if the file is &lt; 1mb and a link to the file otherwise.

## Functionality:

To see that the webpack config works as intended:

```console
$ npm install
$ npm run build-dev
```

Then open up the generated html file in your browser.