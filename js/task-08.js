const formEl = document.querySelector("form.login-form");

console.log(formEl);

formEl.addEventListener('submit', onFormEvent);



function onFormEvent (event) {
    event.preventDefault();
    
const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;
    
if (mail === '' || password === '') {
return alert(`Все поля формы должны быть заполнены!`);
}
    
console.log({
mail,
password,
});
    
    
event.currentTarget.reset();
};


