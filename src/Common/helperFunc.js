export const SetItem = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj))
}

export const GetItem = (name) => {
  return JSON.parse(localStorage.getItem(name))
}

export const FormValidation = (obj) => {
  const objKeys = Object.keys(obj)
  let isValid = false
  let key = ''
  for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i]
    if (obj && obj[element] !== '') {
      if (element === 'mobileNumber' && obj[element].length !== 10) {
        isValid = false
        key = 'mobileNumber'
        break
      } else {
        isValid = true
        key = element
      }
    } else {
      isValid = false
      key = element
      break
    }
  }
  return {
    isValid: isValid,
    key: key
  }
}
