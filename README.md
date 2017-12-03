# React Vivus

This react component allows you to make drawing animation on SVG.

This component makes use of [vivus.js](https://github.com/maxwellito/vivus) plugin.

## Installation

To install this Component, run `yarn add react-vivus` or `npm install react-vivus --save`, Don't forget to install vivus by running `yarn add vivus` or `npm install vivus --save`.

## Usage

To use the component, In your react Application just do

```javascript
import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './example.svg';

const MyComponent = () => (
  <ReactVivus
    id="logo"
    width="100px"
    height="100px"
    file={svg}
    animTimingFunction="EASE"
    type="oneByOne"
  />
);
export default MyComponent;

```

You can also provide additional configuration like

```javascript
TODO
```

You can view all the different options to create a custom animation to draw your SVG in whatever way you like here https://github.com/maxwellito/vivus#option-list
