let weight = document.getElementById('weight')
let height = document.getElementById('height')

let calculator = document.getElementById('calculate')
let reset = document.getElementById('reset')

let result = document.getElementById('result')
let message = document.getElementById('msg')

function calculatembi() {
  let high, weigh, bmi
  high = Number(height.value)
  weigh = Number(weight.value)
  bmi = weigh / (high * 0.0254 * high * 0.0254)
  result.textContent = bmi.toFixed(2)
  let msg = messages(bmi)
  message.textContent = msg
}

function messages(bmiValue) {
  if (bmiValue < 16) {
    return 'You are Sever Thin'
  } else if (bmiValue >= 16 && bmiValue <= 17) {
    return "You are moderate Thin"
  } else if (bmiValue > 17 && bmiValue <= 18.5) {
    return 'You are Mid Thin'
  } else if (bmiValue > 18.5 && bmiValue <= 25) {
    return 'You are Normal'
  } else if (bmiValue > 25) {
    return 'You are overweight'
  }
}

function eventHandler() {
  if (Number(weight.value) && Number(height.value)) {
    calculatembi()
  } else {
    alert('Please provide valid number')
    resets()
  }
}
function resets() {
  weight.value = ''
  height.value = ''
  result.textContent = '______'
  message.textContent = ''
}

calculator.addEventListener('click', eventHandler)
reset.addEventListener('click', resets)