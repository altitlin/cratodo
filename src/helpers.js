export const getId = length => (length + 1).toString()

export const delay = ms => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, ms)
})

export const isValid = nameTask => nameTask !== '' && nameTask.length > 3
