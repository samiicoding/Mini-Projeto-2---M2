const tableForm = document.getElementsByClassName('container-table')[0]
const form = document.querySelector('form')
const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const number = document.querySelector('#number')
const genders = document.getElementsByName('gender')
const setLocalStorage = (database) =>
  localStorage.setItem("users", JSON.stringify(database));

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("users")) ?? [];

const readLocalStorage = () => getLocalStorage();
const createRegistration = (register) => {
    const db = getLocalStorage();
    db.push(register);
    setLocalStorage(db);
  };
form.addEventListener('submit', e => {
    e.preventDefault()
    let genderInput;
    let db = readLocalStorage() 
    for (let radio of genders)
      if (radio.checked) {
        genderInput = radio.value
      }
    
    let Matricula = {
        name: firstName.value + ' ' + lastName.value,
        email: email.value , 
        number: number.value ,
        gender: genderInput 
    }
    createRegistration(Matricula)
})

