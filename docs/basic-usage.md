# Basic usage

Let's start with HTML page and some CSS styles for submit button (`./index.html`):

```html hl_lines="9 10 11 12 13 17 18"
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
