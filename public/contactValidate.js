const dqs = element => document.querySelector(element)

const form = dqs('form'),
  name = dqs('#name'),
  email = dqs('#email'),
  emailMessage = dqs('#emailMessage'),
  emailSuccess = dqs('#emailSuccess'),
  emailFail = dqs('#emailFail'),
  text = dqs('#text'),
  textSuccess = dqs('#textSuccess'),
  textFail = dqs('#textFail')

const valid = {
  name: false,
  email: false,
  message: false
}

email.addEventListener('keyup', validateEmail)
name.addEventListener('keyup', validateName)
text.addEventListener('keyup', validateText)

form.addEventListener('submit', e => {
  if (!Object.values(valid).every(x => x)) {
    e.preventDefault()
    validateEmail()
    validateName()
    validateText()
    return
  }
})

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if (!re.test(email.value)) {
    valid.email = false
    email.classList.remove('is-success')
    email.classList.add('is-danger')
    emailMessage.classList.add('help', 'is-danger')
    emailMessage.textContent = 'This email is invalid!'
    emailSuccess.classList.add('is-hidden')
    emailFail.classList.remove('is-hidden')
  } else {
    valid.email = true
    email.classList.remove('is-danger')
    email.classList.add('is-success')
    emailMessage.textContent = ''
    emailSuccess.classList.remove('is-hidden')
    emailFail.classList.add('is-hidden')
  }
}

function validateName() {
  if (/\S/.test(name.value)) {
    valid.name = true
    name.classList.remove('is-danger')
    name.classList.add('is-success')
    nameSuccess.classList.remove('is-hidden')
    nameFail.classList.add('is-hidden')
  } else {
    valid.name = false
    name.classList.remove('is-success')
    name.classList.add('is-danger')
    nameSuccess.classList.add('is-hidden')
    nameFail.classList.remove('is-hidden')
  }
}

function validateText() {
  if (/\S/.test(text.value)) {
    valid.message = true
    text.classList.remove('is-danger')
    text.classList.add('is-success')
    textSuccess.classList.remove('is-hidden')
    textFail.classList.add('is-hidden')
  } else {
    valid.message = false
    text.classList.remove('is-success')
    text.classList.add('is-danger')
    textSuccess.classList.add('is-hidden')
    textFail.classList.remove('is-hidden')
  }
}