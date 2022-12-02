//4. Отримати від користувача дані про користувача: ім'я, прізвище, вік.
// Обробити їх та вивести на екран.

function alertInfo() {
  let name = prompt(`Введіть Ваше ім'я:`);
  let surname = prompt(`Введіть Ваше прізвище:`);
  let age = +prompt(`Введіть Ваш вік:`);

  if (!Number(age)) {
    alert(`Enter correct age value(number)`);
  } else if (Number(name) || Number(surname)) {
    alert(`Enter correct data(name or surname)`);
  } else {
    alert(`Вас звуть ${name} ${surname}, Вам ${age} роки(-ів).`);
  }
}

alertInfo();
