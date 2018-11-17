const dqs = element => document.querySelector(element)

const validator = state => {
  const { re, input, success, fail, message } = state
  return {
    validate() {
      if (re.test(input.value)) {
        state.valid = true
        input.classList.remove('is-danger')
        input.classList.add('is-success')
        success.classList.remove('is-hidden')
        fail.classList.add('is-hidden')
        message ? (message.textContent = '') : false
      } else {
        state.valid = false
        input.classList.remove('is-success')
        input.classList.add('is-danger')
        success.classList.add('is-hidden')
        fail.classList.remove('is-hidden')
        message ? (message.textContent = 'This email is invalid!') : false
      }
    }
  }
}

const fields = [
  {
    input: '#name',
    success: '#nameSuccess',
    fail: '#nameFail',
    re: /\S/
  },
  {
    input: '#email',
    success: '#emailSuccess',
    fail: '#emailFail',
    re: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    message: '#emailMessage'
  },
  {
    input: '#text',
    success: '#textSuccess',
    fail: '#textFail',
    re: /\S/
  }
]

fields.forEach(field => {
  field.input = dqs(field.input)
  field.success = dqs(field.success)
  field.fail = dqs(field.fail)
  if (field.message) field.message = dqs(field.message)
  field.valid = false
  Object.assign(field, validator(field))
  field.input.addEventListener('keyup', field.validate)
  field.input.addEventListener('blur', field.validate)
})

dqs('form').addEventListener('submit', e => {
  if (!fields.every(input => input.valid)) {
    e.preventDefault()
    fields.forEach(input => input.validate())
    return
  }
})
