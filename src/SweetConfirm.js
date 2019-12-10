/**
 * @name SweetConfirm.js
 * @description A zero-dependencies pure JavaScript UX tool for improve confirmation when user submit form.
 * @copyright 2019 Vic Shóstak (https://1wa.co)
 *
 * @author Vic Shóstak
 * @param {HTMLElement} element
 * @param {CallableFunction} callback
 * @param {Object} options
 */

var SweetConfirm = function(element, callback, options = {}) {
  //
  var timer, name;

  //
  name = element.innerHTML;

  //
  element.style.background = options.background;
  element.style.background = `linear-gradient(${options.gradient.deg}, ${options.gradient.from_color}, ${options.gradient.to_color})`;
  element.style.backgroundSize = options.backgroundSize;
  element.style.backgroundPosition = options.backgroundPositionIn;
  element.style.transition = `all ${options.timeout / 1000}s ease`;

  //
  ["mousedown"].forEach(event => {
    //
    element.addEventListener(event, () => {
      //
      element.innerHTML = options.question;
      element.style.backgroundPosition = options.backgroundPositionOut;
      element.style.transition = `all ${options.timeout / 1000}s ease`;

      //
      timer = window.setTimeout(function() {
        //
        element.disabled = true;
        element.style.background = options.success.color;
        element.style.transition = `all ${options.transitionOut}s ease`;

        //
        element.innerHTML = options.success.message;

        //
        callback();
      }, options.timeout);
    });
  });

  //
  ["mouseup"].forEach(event => {
    element.addEventListener(event, () => {
      //
      element.innerHTML = name;

      //
      element.style.backgroundPosition = options.backgroundPositionIn;
      element.style.transition = `all ${options.transitionOut}s ease`;

      //
      window.clearTimeout(timer);
    });
  });
};

export default SweetConfirm;
