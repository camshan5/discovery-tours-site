//
// user.js
// Use this to write your custom JS
//

const yearsInBusiness = (yearFounded) => {
  let dateNow = Date.now()
  let currentYear = new Date(dateNow).getFullYear()

  return Math.abs(currentYear - yearFounded)
}

document.getElementById("years-in-business").innerHTML = yearsInBusiness(1983)
