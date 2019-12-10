# SweetConfirm.js

A zero-dependencies pure JavaScript UX tool for improve confirmation when user submit form.

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
SweetConfirm(element, function () {...}, [options, ...]);
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
