# Use via CDN

Similar to `npm` way, but easily (all-in-one `./index.html` file):

```html hl_lines="11 14 15 16 19 20 21 24 25 26"
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
