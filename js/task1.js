//1. За координатами двох точок, які вводить користувач, визначити рівняння прямої, що проходить через ці точки.
//Загальний вид рівняння:
//y = kx + b; де
//
//k = (y1 - y2) / (x1 - x2),
//b = y2 - k * x2.
//
//=> "y = 4x + 1"

function equation() {
  let y1 = prompt(`Введіть у-координату першої точки`);
  let x1 = prompt(`Введіть х-координату першої точки`);
  let y2 = prompt(`Введіть у-координату другої точки`);
  let x2 = prompt(`Введіть х-координату другої точки`);

  let k = (y1 - y2) / (x1 - x2);

  let b = y2 - k * x2;

  let y = `${k}x + ${b}`;
  alert(y);
}

equation();
