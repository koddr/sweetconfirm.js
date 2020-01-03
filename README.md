<p align="center">
  <img width="600px" src="https://user-images.githubusercontent.com/11155743/70644758-ac31d900-1c54-11ea-854b-ef0847071dba.png" alt="sweetconfirm.js logo github"/>
</p>

<h1 align="center">Throw out pop-ups confirming the submission of form!</h1>

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/11155743/70600686-613aa600-1c01-11ea-9002-5825ec8f98cf.gif" alt="sweetconfirm.js demo gif"/>
</p>

<p align="center">
  <img src="https://badge.fury.io/js/sweetconfirm.js.svg" alt="npm version"/>
  <img src="https://img.shields.io/badge/minified_and_gzipped-446_Bytes-blue.svg" alt="bundle size"/>
  <a href="https://www.jsdelivr.com/package/npm/sweetconfirm.js" target="_blank">
    <img src="https://data.jsdelivr.com/v1/package/npm/sweetconfirm.js/badge?style=rounded" alt="jsDelivr download"/>
  </a>
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="code style: prettier"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat" alt="license"/>
  <a href="https://twitter.com/intent/tweet?text=Throw%20out%20pop-ups%20confirming%20the%20submission%20of%20form!&url=https://github.com/koddr/sweetconfirm.js" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/github.com/koddr/sweetconfirm.js.svg" alt="twit link"/>
  </a>
</p>

<p align="center">
  A useful <strong>zero-dependencies</strong>, less than <strong>450 Bytes</strong> (gzipped), <strong>pure</strong> JavaScript & CSS solution<br/>for <strong>drop an annoying pop-ups</strong> confirming the submission of form in your web apps.
</p>

## [Docs](https://sweetconfirm.js.org), [Change log](CHANGELOG.md)

## Install

Simple install to your project via `npm`:

```console
foo@bar:~$ npm install --save sweetconfirm.js
```

Or include to your html page from fast CDN [jsDelivr](https://www.jsdelivr.com/):

```html
<script src="https://cdn.jsdelivr.net/npm/sweetconfirm.js@0/sweetconfirm.min.js"></script>
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

### Use via CDN

Similar to `npm` way, but easily (all-in-one `./index.html` file):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <button type="submit" id="button">💬 Push the button!</button>

    <div id="message"></div>

    <script src="https://cdn.jsdelivr.net/npm/sweetconfirm.js@0/sweetconfirm.min.js"></script>
    <script>
      // Define vars
      var button, message;
      button = document.getElementById("button");
      message = document.getElementById("message");

      // Callback function
      function showMessage(element, text) {
        element.innerText = text;
      }

      // Init SweetConfirm.js
      new SweetConfirm(button, () => {
        showMessage(message, "OK! Refresh page for try again.");
      });
    </script>
  </body>
</html>
```

## What about options?

```console
function SweetConfirm ( element, function () {...}, [options, ...] )
```

| **Option**              | **Description**                                                                               | **Default value**  |
| ----------------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| `bg`            | Background color for initial state, usually equal to `gradient.from_color`                    | `#0f4c81`          |
| `bgSize`        | Size of `background`; for better effect must be greater than 100% at the first value          | `215% 100%`        |
| `bgPositionIn`  | Background position for init animation                                                        | `right bottom`     |
| `bgPositionOut` | Background position for end animation                                                         | `left bottom`      |
| `trans.init`       | Enabled initial `transition` when page is loaded (`DOMContentLoaded` event)                   | `true`             |
| `trans.in`         | A `transition` speed in seconds for `DOMContentLoaded` event                                  | `0.5`              |
| `trans.out`        | A `transition` speed in seconds for `mouseup` event                                           | `0.5`              |
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
  bg: "#0f4c81",
  bgSize: "215% 100%",
  bgPositionIn: "right bottom",
  bgPositionOut: "left bottom",
  trans: {
    init: true,
    in: 0.5,
    out: 0.5
  },
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

## Demo on localhost

You may serve downloaded repository by simple Python 3 CLI snippet (for macOS/Linux/Windows WSL).

First, clone repository:

```console
foo@bar:~$ git clone https://github.com/koddr/sweetconfirm.js.git
foo@bar:~$ cd sweetconfirm.js
```

Let's serve it:

```console
foo@bar:~$ python3 -m http.server 8080 --bind 127.0.0.1
```

And now, go to browser to see `SweetConfirm.js Example` page:

```console
http://127.0.0.1:8080/examples
```

## Size-limit report

```console
foo@bar:~$ npm run size

  Time limit:   70 ms
  Size:         444 B with all dependencies, minified and gzipped
  Loading time: 10 ms on slow 3G
  Running time: 58 ms on Snapdragon 410
  Total time:   68 ms
```

_Thanks to Andrey Sitnik [@ai/size-limit](https://github.com/ai/size-limit)._

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `SweetConfirm.js`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=Throw%20out%20pop-ups%20confirming%20the%20submission%20of%20form!&url=https://github.com/koddr/sweetconfirm.js).
3. Donate some money to project author via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).
4. Join DigitalOcean at our [referral link](https://m.do.co/c/b41859fa9b6e) (your profit is **$100** and we get $25).

Thanks for your support! 😘 Together, we make this project better every day.

## License

MIT
