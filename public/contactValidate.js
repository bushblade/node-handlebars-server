const dqs = element => document.querySelector(element)

const listener = (state) => ({
  listen() {
    state.input.addEventListener('keyup', state.validate)
  }
})

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

const formInput = (input, success, fail, re = /\S/, message = null) => {
  const state = {
    valid: false,
    input: dqs(input),
    success: dqs(success),
    fail: dqs(fail),
    re,
    message: dqs(message)
  }
  return Object.assign(state, listener(state), validator(state))
}

const name = formInput('#name',
                       '#nameSuccess',
                       '#nameFail')

const email = formInput('#email',
                        '#emailSuccess',
                        '#emailFail',
                        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                        '#emailMessage')

const text = formInput('#text', 
                       '#textSuccess',
                       '#textFail')

const fields = [name, email, text]

fields.forEach(input => input.listen())

dqs('form').addEventListener('submit', e => {
  if (!fields.every(input => input.valid)) {
    e.preventDefault()
    fields.forEach(input => input.validate())
    return
  }
})