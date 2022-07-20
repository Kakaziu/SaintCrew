const form = document.querySelector('#form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(!validate()){
        form.submit()
    }
})


function validate(){
   let error = false
    
    if(nameValidate() || lastNameValidate()){
        error = true
    }

    return error
}

function nameValidate(){
    const name = document.querySelector('#name').value
    const nameError = document.querySelector('#nameError')

    nameError.innerHTML = ''

    if(!name){
        nameError.innerHTML = '* O campo "nome" está vazio.'
        return true
    }

    return false
}

function lastNameValidate(){
    const lastName = document.querySelector('#lastName').value
    const lastNameError = document.querySelector('#lastNameError')

    lastNameError.innerHTML = ''

    if(!lastName){
        lastNameError.innerHTML = '* O campo "sobrenome" está vazio.'
        return true
    }

    return false
}