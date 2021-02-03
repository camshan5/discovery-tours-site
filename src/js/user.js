//
// user.js
// Use this to write your custom JS
//

const yearsInBusiness = (yearFounded) => {
  let dateNow = Date.now()
  let currentYear = new Date(dateNow).getFullYear()

  return Math.abs(currentYear - yearFounded)
}

const daysTo = () => {
  let oneDay = 1000 * 60 * 60 * 24 // in milliseconds

  let today = new Date()
  let todayTime = today.getTime()
  console.log(`todayTime = ${todayTime}`)

  let currentYear = today.getFullYear()
  // Month date math starts with Jan at 0
  // getTime() converts to ms
  let febDueDate = new Date(currentYear, 1, 15).getTime()
  console.log(`febDueDate = ${febDueDate}`)

  let marDueDate = new Date(currentYear, 2, 15).getTime()
  let aprDueDate = new Date(currentYear, 3, 15).getTime()
  let mayDueDate = new Date(currentYear, 4, 15).getTime()

  if (febDueDate >= todayTime) {
    let daysUntil = (febDueDate - todayTime) / oneDay
    console.log(`daysUntil = ${Math.ceil(daysUntil)}`)

    return Math.ceil(daysUntil)
  } else if (marDueDate <= todayTime >= febDueDate) {
    let daysUntil = (marDueDate - todayTime) / oneDay
    return Math.ceil(daysUntil)
  } else if (aprDueDate <= todayTime >= marDueDate) {
    let daysUntil = (aprDueDate - todayTime) / oneDay
    return Math.ceil(daysUntil)
  } else if (mayDueDate <= todayTime >= aprDueDate) {
    let daysUntil = (mayDueDate - todayTime) / oneDay
    return Math.ceil(daysUntil)
  } else if (todayTime > mayDueDate) {
    return "Final payments due."
  }
}

// document.querySelector(".days-to").innerHTML = daysTo()

document.querySelector("#years-in-business").innerHTML = yearsInBusiness(1983)
