/**
 * @name SweetConfirm.js
 * @description A useful zero-dependencies, less than 450 Bytes (gzipped), pure JavaScript & CSS solution for drop an annoying pop-ups confirming the submission of form in your web apps.
 * @copyright 2019 Vic Shóstak <truewebartisans@gmail.com> (https://1wa.co)
 *
 * @author Vic Shóstak
 * @param {HTMLElement} element
 * @param {CallableFunction} callback
 * @param {Object} options
 */

var SweetConfirm = function(element, callback, options) {
  // Define vars
  var timer, name;

  // If options is not define use default
  if (!options) {
    options = {
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
  }

  // Save element name
  name = element.innerText;

  // Init styles for element
  element.style.background = options.background;
  element.style.background = `linear-gradient(${options.gradient.deg}, ${options.gradient.from_color}, ${options.gradient.to_color})`;
  element.style.backgroundSize = options.backgroundSize;
  element.style.backgroundPosition = options.backgroundPositionIn;
  element.style.transition = `all ${options.timeout / 1000}s ease`;

  // Event: hold mouse/key button on element
  ["mousedown"].forEach(event => {
    element.addEventListener(event, () => {
      // Show question when holding
      element.innerText = options.question;
      element.style.backgroundPosition = options.backgroundPositionOut;
      element.style.transition = `all ${options.timeout / 1000}s ease`;

      // Run timeout function when holding
      timer = window.setTimeout(function() {
        // If timeout is gone: apply success color, disabled element
        // and change transition
        element.disabled = true;
        element.style.background = options.success.color;
        element.style.transition = `all ${options.transitionOut}s ease`;

        // Show success message
        element.innerText = options.success.message;

        // Run callback function
        callback();
      }, options.timeout);
    });
  });

  // Event: un-hold mouse/key button on element
  ["mouseup"].forEach(event => {
    element.addEventListener(event, () => {
      // Return element name
      element.innerText = name;

      // Follow back effect: change background and transition
      element.style.backgroundPosition = options.backgroundPositionIn;
      element.style.transition = `all ${options.transitionOut}s ease`;

      // Clear timeout
      window.clearTimeout(timer);
    });
  });
};

export default SweetConfirm;
