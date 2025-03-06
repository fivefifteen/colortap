/*!
  ColorTap v0.3.0 (https://colortap.js.org)
  by Five Fifteen (https://fivefifteen.com)
*/

const colortap = () => {
  const elements = document.getElementsByClassName('colortap')

  for (let i = 0; i < elements.length; i++) {
    (function (element) {
      const input = element.querySelector('input[type="color"]')

      if (input) {
        const openElements = element.getElementsByClassName('colortap-open')
        const valueInputs = element.getElementsByClassName('colortap-input')
        const valueElements = element.getElementsByClassName('colortap-value')
        const stylePropElements = element.querySelectorAll('[data-colortap-style-prop]')

        element.open = function () {
          input.focus()
          input.click()
        }

        element.set = function (value) {
          const currentValue = input.value

          if (value.charAt(0) !== '#') value = '#' + value
          if (value === currentValue) return
          if (value.length > 7) value = value.substr(0, 7)

          if (value.length >= 4 && value.length < 7) {
            value = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3]
          }

          input.value = value

          colortap.triggerEvent('change', input)
        }

        element.get = function () {
          return input.value
        }

        if (openElements.length) {
          for (let j = 0; j < openElements.length; j++) {
            const openElement = openElements[j]

            openElement.addEventListener('click', function (e) {
              element.open()
            }, false)

            openElement.addEventListener('focus', function (e) {
              element.open()
            }, false)
          }
        }

        if (valueInputs.length) {
          for (let v = 0; v < valueInputs.length; v++) {
            const valueInput = valueInputs[v]

            valueInput.addEventListener('change', function (e) {
              if (!e.colortapTriggered) {
                element.set(valueInput.value)
              }
            }, false)

            valueInput.addEventListener('input', function (e) {
              if (valueInput.colortapTimer) {
                clearTimeout(valueInput.colortapTimer)
              }

              valueInput.colortapTimer = colortap.triggerEvent('change', valueInput, {}, 1000)
            })
          }
        }

        input.addEventListener('change', function (e) {
          if (valueInputs.length) {
            for (let a = 0; a < valueInputs.length; a++) {
              const valueInput = valueInputs[a]
              valueInput.value = input.value
            }
          }

          if (valueElements.length) {
            for (let b = 0; b < valueElements.length; b++) {
              const valueElement = valueElements[b]
              const valueElementType = valueElement.tagName.toLowerCase()

              if (valueElementType === 'input') {
                valueElement.val = input.value
              } else {
                valueElement.textContent = input.value
              }
            }
          }

          if (stylePropElements.length) {
            for (let c = 0; c < stylePropElements.length; c++) {
              const stylePropElement = stylePropElements[c]
              const styleProps = stylePropElement.getAttribute('data-colortap-style-prop').split(',')

              for (let k = 0; k < styleProps.length; k++) {
                stylePropElement.style[styleProps[k]] = input.value
              }
            }
          }
        })

        colortap.triggerEvent('change', input)
      } else {
        console.warn(element, 'An color input field is required for each colortap instance.')
      }
    })(elements[i])
  }

  return elements
}

colortap.triggerEvent = (type, element, data, delay) => {
  return setTimeout(function () {
    const e = new Event(type, { bubbles: true })

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        e[key] = data[key]
      }
    }

    element.dispatchEvent(e)
  }, delay || 1)
}

export default colortap
