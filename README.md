<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/11155743/70644758-ac31d900-1c54-11ea-854b-ef0847071dba.png" alt="sweetconfirm.js logo github"/>
</p>

<h1 align="center">Throw out pop-ups confirming the submission of form!</h1>

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/70600686-613aa600-1c01-11ea-9002-5825ec8f98cf.gif" alt="sweetconfirm.js demo gif"/>
</p>

<p align="center">
  <img src="https://badge.fury.io/js/sweetconfirm.js.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/minified_and_gzipped-438_Bytes-blue.svg" alt="bundle size"/>
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
  A useful <strong>zero-dependencies</strong>, less than <strong>450 Bytes</strong> (gzipped), <strong>pure</strong> JavaScript & CSS solution<br/>for <strong>drop an annoying pop-ups</strong> confirming the submission of form in your web apps.
</p>

## Install

Simple install via `npm`:

```console
foo@bar:~$ npm install --save sweetconfirm.js
```

## How to use?

Let's start with HTML page and some CSS styles for submit button (`./index.html`):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      button {
        display: block;
        border-radius: 30px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <button type="submit" id="button">💬 Push the button!</button>
    <script src="./script.js"></script>
  </body>
</html>
```

Next, time for JavaScript (`./script.js`):

```js
import { SweetConfirm } from "sweetconfirm.js";

// Define element (button)
var button = document.getElementById("button");

// Init SweetConfirm.js to element with callback
new SweetConfirm(button, () => {
  console.log("This is fake data!");
});
```

## What about options?

```console
function SweetConfirm ( element, function () {...}, [options, ...] )
```

| **Option**              | **Description**                                                                               | **Default value**  |
| ----------------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| `background`            | Background color for initial state, may be equal to `gradient.from_color`                     | `#0f4c81`          |
| `backgroundSize`        | Size of `background`; for better effect must be greather than 100% at the first value         | `215% 100%`        |
| `backgroundPositionIn`  | Background position for init animation                                                        | `right bottom`     |
| `backgroundPositionOut` | Background position for end animation                                                         | `left bottom`      |
| `transitionOut`         | A `transition` speed of out action, like `mouseup`                                            | `0.5`              |
| `gradient.deg`          | Angle or position of the gradient line's starting point                                       | `135deg`           |
| `gradient.from_color`   | From (start) color                                                                            | `#0f4c81 50%`      |
| `gradient.to_color`     | To (stop, end) color                                                                          | `#fa7268 50%`      |
| `question`              | Message during holding mouse/key button on `element`                                          | `🤔 Are you sure?` |
| `success.message`       | Message after callback function                                                               | `👍 Success!`      |
| `success.color`         | Color of success message                                                                      | `#00b16a`          |
| `timeout`               | Time for `setTimeout()` function in miliseconds; this option also define a `transition` speed | `3000`             |

### Use SweetConfirm.js with custom options

```js
// Define options
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

// Init SweetConfirm.js with options
new SweetConfirm(element, () => {}, options);
```

## Size limit report

```console
foo@bar:~$ npm run size

  Time limit:   90 ms
  Size:         438 B with all dependencies, minified and gzipped
  Loading time: 10 ms on slow 3G
  Running time: 73 ms on Snapdragon 410
  Total time:   83 ms
```

_Thanks to Andrey Sitnik [@ai/size-limit](https://github.com/ai/size-limit)._

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `sweetconfirm.js`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=Drop%20an%20annoying%20pop-ups%20confirming%20the%20submission%20of%20form%20in%20your%20web%20apps%26url%3Dhttps%3A%2F%2Fgithub.com%2Fkoddr%2Fsweetconfirm.js).
3. If you want, send to project's author some money via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).

## License

MIT
