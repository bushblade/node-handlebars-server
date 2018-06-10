const dqs = element => document.querySelector(element)

const validator = state => ({
  validate() {
    if (state.re.test(state.input.value)) {
      state.valid = true
      state.input.classList.remove('is-danger')
      state.input.classList.add('is-success')
      state.success.classList.remove('is-hidden')
      state.fail.classList.add('is-hidden')
      state.message ? state.message.textContent = '' : false
    } else {
      state.valid = false
      state.input.classList.remove('is-success')
      state.input.classList.add('is-danger')
      state.success.classList.add('is-hidden')
      state.fail.classList.remove('is-hidden')
      state.message ? state.message.textContent = 'This email is invalid!' : false
    }
  }
})

const fields = [{
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
    message: dqs('#emailMessage')
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