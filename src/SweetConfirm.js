/**
 * @name SweetConfirm.js
 * @description A useful zero-dependencies, less than 450 Bytes (gzipped), pure JavaScript & CSS solution for drop an annoying pop-ups confirming the submission of form in your web apps.
 * @copyright 2020 Vic Shóstak <truewebartisans@gmail.com> (https://1wa.co)
 *
 * @author Vic Shóstak
 * @param {HTMLElement} element
 * @param {CallableFunction} callback
 * @param {Object} options
 */

const SweetConfirm = function(element, callback, options) {
  // Define vars
  let timer, name;

  // Save element name
  name = element.innerText;

  // If options is not define use default
  if (!options) {
    options = {
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
  }

  // Init styles for element
  element.style.background = options.bg;
  element.style.background = `linear-gradient(${options.gradient.deg}, ${options.gradient.from_color}, ${options.gradient.to_color})`;
  element.style.backgroundSize = options.bgSize;
  element.style.backgroundPosition = options.bgPositionIn;

  // Init transition effect
  if (options.trans.init) {
    element.style.transition = `all ${options.trans.in}s ease`;
  }

  // Event: hold mouse button on element
  element.addEventListener("mousedown", () => {
    // Show question when holding
    element.innerText = options.question;
    element.style.backgroundPosition = options.bgPositionOut;
    element.style.transition = `all ${options.timeout / 1000}s ease`;

    // Run timeout function when holding
    timer = window.setTimeout(() => {
      // If timeout is gone: apply success color, disabled element
      // and change transition
      element.disabled = true;
      element.style.background = options.success.color;
      element.style.transition = `all ${options.trans.out}s ease`;

      // Show success message
      element.innerText = options.success.message;

      // Run callback function
      callback();
    }, options.timeout);
  });

  // Event: un-hold mouse button from element
  element.addEventListener("mouseup", () => {
    // Clear timeout
    window.clearTimeout(timer);

    // Return element name
    element.innerText = name;

    // Follow back effect: change background and transition
    element.style.backgroundPosition = options.bgPositionIn;
    element.style.transition = `all ${options.trans.out}s ease`;
  });
};

export default SweetConfirm;
