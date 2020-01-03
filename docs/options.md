# Options

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

## Define your own options

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
