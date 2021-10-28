const form = document.getElementById('form')
const username = document.getElementById('uname')
const password = document.getElementById('password')
const chosen_plan = document.getElementById('chosen_plan')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    var gender = document.getElementsByName('gender')
    var valid = false
    var checkbox = document.getElementById('checkbox')
    var checkVal = false

    let messages = []
    if (username.value === '' || username.value == null) {
      messages.push('Name is required')
    }
  
    if (password.value.length < 6) {
      messages.push('Password must be longer than 5 characters')
    }
  
    if (password.value.length >= 18) {
      messages.push('Password must be less than 18 characters')
    }

    for(var i=0; i<gender.length; i++){
        if(gender[i].checked){
            valid = true
            break;
        } 
    }

    if(valid){
    } else {
        messages.push('Please select your gender')
    }
    
    if(checkbox.checked)checkVal = true

    if(checkVal){   
    } else {
        messages.push('Please check the Customers agreement')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    
  })