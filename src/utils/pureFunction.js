export const delay = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1500)
  })

/**
 *
 * @param {string} date
 */
export const normalizeDate = fullDate => {
  const arr = fullDate.split('T')
  const date = arr[0]
  const time = arr[1].split('.')[0]
  const str = date + ' ' + time
  return str
}
