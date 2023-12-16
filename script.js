

let myForm = document.createElement('form')
let myNameLabel = document.createElement('label')
let myNameInput = document.createElement('input')

myNameLabel.innerHTML = 'Name'

myForm.append(myNameLabel)
myForm.append(myNameInput)

document.body.append(myForm)

let myEmailLabel = document.createElement('label')
let myEmailInput = document.createElement('input')

myEmailLabel.innerHTML = 'Email'

mySubmitButton = document.createElement('button')
mySubmitButton.innerHTML = 'Submit'

myForm.append(myEmailLabel)
myForm.append(myEmailInput)
myForm.append(mySubmitButton)




myForm.style.backgroundColor = 'Green'
myForm.style.color = 'white'
myForm.style.display = 'flex'
myForm.style.flexDirection = 'column'
myForm.style.maxWidth = '250px'

let myTable = document.createElement('table')
let myTr = document.createElement('tr')
let myTdName = document.createElement('td')
let myTdEmail = document.createElement('td')

myTdName.innerHTML = 'Name'
myTdEmail.innerHTML = 'Email'

myTable.append(myTr)
myTable.append(myTdName)
myTable.append(myTdEmail)

document.body.append(myTable)

myTable.style.border = '1px solid black'

const changeBackgroundColor = document.getElementById('myButton').addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.randon() * 255}, ${Math.random() * 255})`

    
});




