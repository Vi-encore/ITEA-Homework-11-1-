//5. Запитайте у користувача його вік, після чого виведіть на екран модальне вікно із запитанням:
//"Ваш вік ...(введене користувачем число) років?".
//Далі, залежно від вибору користувача, виводиться модальне вікно з інформацією true або false.

function isAge() {
  let age = +prompt(`Скільки Вам років?`);
  if (!Number(age)) {
    alert(`Enter correct age value (number)`);
  } else {
    let submitAge = confirm(`Вам ${age} роки(-ів)?`);
    if (!submitAge) {
      alert(`Вам НЕ ${age} роки(-ів)!!! 😢`); //false
    } else {
      alert(`Вам ${age} роки(-ів) 😄`); //true
    }
  }
}

isAge();
