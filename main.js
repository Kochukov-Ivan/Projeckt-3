let inp = document.querySelector(".text");
let btn = document.querySelector(".chek-in"); // кнопка
let div = document.querySelector(".out"); // теперь
btn.onclick = function () {
  if (inp.value >= 100) {
    let e = +inp.value;
    div.innerHTML = e;
  } else {
    console.log("Вывод в консоль");
    console.log(inp.value);
  }

  //   document.querySelector(".Out").innerHTML = inp.value;
  // }
};
// let e = +inp.value;
// div.innerHTML = e;
// if (inp >= 100) {
//   console.log("Вывод в консоль");
//   console.log(inp.value);
// } else {
//   let e = +inp.value;
//   div.innerHTML = e;
// }
// btn.onclick = function () {
//   console.log("Вывод в консоль");
//   console.log(inp.value);
// // };
// let myhappy = prompt("сколько вам лет?");
// console.log(myhappy);
// if (myhappy > 100) {
//   alert("Вывод в консоль");
// } else {
//   alert("Вывод на страницу");
// }
