(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.colortap = factory());
})(this, (function () { 'use strict';

  /*!
    colortap v0.3.0 (https://colortap.js.org)
    by Five Fifteen (https://fivefifteen.com)
  */

  var _colortap = function colortap() {
    var elements = document.getElementsByClassName('colortap');
    for (var i = 0; i < elements.length; i++) {
      (function (element) {
        var input = element.querySelector('input[type="color"]');
        if (input) {
          var openElements = element.getElementsByClassName('colortap-open');
          var valueInputs = element.getElementsByClassName('colortap-input');
          var valueElements = element.getElementsByClassName('colortap-value');
          var stylePropElements = element.querySelectorAll('[data-colortap-style-prop]');
          element.open = function () {
            input.focus();
            input.click();
          };
          element.set = function (value) {
            var currentValue = input.value;
            if (value.charAt(0) !== '#') value = '#' + value;
            if (value === currentValue) return;
            if (value.length > 7) value = value.substr(0, 7);
            if (value.length >= 4 && value.length < 7) {
              value = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3];
            }
            input.value = value;
            _colortap.triggerEvent('change', input);
          };
          element.get = function () {
            return input.value;
          };
          if (openElements.length) {
            for (var j = 0; j < openElements.length; j++) {
              var openElement = openElements[j];
              openElement.addEventListener('click', function (e) {
                element.open();
              }, false);
              openElement.addEventListener('focus', function (e) {
                element.open();
              }, false);
            }
          }
          if (valueInputs.length) {
            var _loop = function _loop() {
              var valueInput = valueInputs[v];
              valueInput.addEventListener('change', function (e) {
                if (!e.colortapTriggered) {
                  element.set(valueInput.value);
                }
              }, false);
              valueInput.addEventListener('input', function (e) {
                if (valueInput.colortapTimer) {
                  clearTimeout(valueInput.colortapTimer);
                }
                valueInput.colortapTimer = _colortap.triggerEvent('change', valueInput, {}, 1000);
              });
            };
            for (var v = 0; v < valueInputs.length; v++) {
              _loop();
            }
          }
          input.addEventListener('change', function (e) {
            if (valueInputs.length) {
              for (var a = 0; a < valueInputs.length; a++) {
                var valueInput = valueInputs[a];
                valueInput.value = input.value;
              }
            }
            if (valueElements.length) {
              for (var b = 0; b < valueElements.length; b++) {
                var valueElement = valueElements[b];
                var valueElementType = valueElement.tagName.toLowerCase();
                if (valueElementType === 'input') {
                  valueElement.val = input.value;
                } else {
                  valueElement.textContent = input.value;
                }
              }
            }
            if (stylePropElements.length) {
              for (var c = 0; c < stylePropElements.length; c++) {
                var stylePropElement = stylePropElements[c];
                var styleProps = stylePropElement.getAttribute('data-colortap-style-prop').split(',');
                for (var k = 0; k < styleProps.length; k++) {
                  stylePropElement.style[styleProps[k]] = input.value;
                }
              }
            }
          });
          _colortap.triggerEvent('change', input);
        } else {
          console.warn(element, 'An color input field is required for each colortap instance.');
        }
      })(elements[i]);
    }
    return elements;
  };
  _colortap.triggerEvent = function (type, element, data, delay) {
    return setTimeout(function () {
      var e = new Event(type, {
        bubbles: true
      });
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          e[key] = data[key];
        }
      }
      element.dispatchEvent(e);
    }, delay || 1);
  };

  return _colortap;

}));
//# sourceMappingURL=colortap.js.map
