# Game Of Life

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Problem

The "game" is a zero-player game, meaning that its evolution is determined by its initial state,
requiring no further input. One interacts with the Game of Life by creating an initial configuration
and observing how it evolves.
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells,
each of which is in one of two possible states, alive or dead. Every cell interacts with its eight
neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each
step in time, the following transitions occur:
1. Any live cell with fewer than two live neighbours dies, as if caused by under-population​.
2. Any live cell with two or three live neighbours lives on to the next​ ​generation​.
3. Any live cell with more than three live neighbours dies, as if by overcrowding​.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction​.

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  
## Overview
### Requirements
  - ES6 (for your IDE)
  - Node 8.9.0
  


## Folder Structure

After creation, your project should look like this:

```
my-app/
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
      atoms/
      molecules/       
      organisms/
    helpers/
    logic/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Setup

1. Clone this repository
2. cd app/
3. run `npm install`
4. run `npm start`

## Build and Run Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
