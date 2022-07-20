const form = document.querySelector('#form')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    if(!validate()){
        form.submit()

        document.querySelector('#name').value = ''
    }
})


function validate(){
   let error = false
    
    if(nameValidate() || lastNameValidate() || ageValidate() || classValidate()){
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

function ageValidate(){
    const age = document.querySelector('#age').value
    const ageError = document.querySelector('#ageError')

    ageError.innerHTML = ''

    if(!age){
        ageError.innerHTML = '* O Campo "idade" está vazio.'
        return true
    }

    return false
}

function classValidate(){
    const turma = document.querySelector('#class').value
    const turmaError = document.querySelector('#classError')

    turmaError.innerHTML = ''

    if(!turma){
        turmaError.innerHTML = '* O campo "turma" está vazio. <br>'
        return true
    }

    if(turma != '310' && turma != '311' && turma != '312'){
        turmaError.innerHTML += '* Está turma não existe.'
        return true
    }

    return false
}