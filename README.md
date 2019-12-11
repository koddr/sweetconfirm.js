<h1 align="center">👌 SweetConfirm.js</h1>
<h4 align="center">Drop an annoying pop-ups confirming the submission of form in your web apps!</h4>

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/70600686-613aa600-1c01-11ea-9002-5825ec8f98cf.gif" alt="sweetconfirm.js logo github"/>
</p>

<p align="center">
  <img src="https://badge.fury.io/js/sweetconfirm.js.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/minified_and_gzipped-608_Byte-blue.svg" alt="bundle size"/>
  <a href="https://www.jsdelivr.com/package/npm/sweetconfirm.js" target="_blank">
    <img src="https://data.jsdelivr.com/v1/package/npm/sweetconfirm.js/badge?style=rounded" alt="jsDelivr download"/>
  </a>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="code style: prettier"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat" alt="license"/>
  <a href="https://twitter.com/intent/tweet?text=Drop%20an%20annoying%20pop-ups%20confirming%20the%20submission%20of%20form%20in%20your%20web%20apps%26url%3Dhttps%3A%2F%2Fgithub.com%2Fkoddr%2Fsweetconfirm.js" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/github.com/koddr/sweetconfirm.js.svg" alt="twit link"/>
  </a>
</p>

<p align="center">
  A useful <strong>zero-dependencies</strong>, only <strong>608 Byte</strong> (gzipped), <strong>pure</strong> JavaScript & CSS solution<br/>for <strong>drop an annoying pop-ups</strong> confirming the submission of form in your web apps.
</p>

## Install

```console
foo@bar:~$ npm install --save sweetconfirm.js
```

## How to use?

```html
<button id="button">💬 Push the button!</button>
```

```js
import { SweetConfirm } from "sweetconfirm.js";

//
var button = document.getElementById("button");

//
new SweetConfirm(button, text => {
  console.log("This is fake data!");
});
```

### What about options?

```console
SweetConfirm ( element, function () {...}, [options, ...] )
```

```js
//
var options = {
  background: "#0f4c81",
  backgroundSize: "215% 100%",
  backgroundPositionIn: "right bottom",
  backgroundPositionOut: "left bottom",
  transitionOut: 0.5,
  gradient: {
    deg: "135deg",
    from_color: "#0f4c81 50%",
    to_color: "#fa7268 50%"
  },
  question: "🤔 Are you sure?",
  success: {
    message: "👍 Success!",
    color: "#00b16a"
  },
  timeout: 3000
};

//
new SweetConfirm(button, () => SendMessage("This is fake data!"), options);
```
