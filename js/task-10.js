function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const outcomeDiv = document.querySelector("#boxes");


// присавиваем атрибут value(счетчик) для input-a
input.addEventListener("input", (event) => {
  let amount = input.setAttribute("value", event.currentTarget.valueAsNumber);

  console.log(event.currentTarget.valueAsNumber);
  // console.log(Number(event.currentTarget.value))
});


const createBoxes = (value) => {
  // получаем значение value(счетчика) в input-е
  let amount = Number(input.getAttribute("value"));
  let firstDivSize = 20;

   for (let i = 0; i < amount; i += 1) { 
    firstDivSize += 10;
    const newDiv = document.createElement("div");
    
    newDiv.style.width = firstDivSize + 'px';
    newDiv.style.height = firstDivSize + 'px';

    newDiv.style.backgroundColor = getRandomHexColor();
    outcomeDiv.append(newDiv);

    // добавляем классы новым div-ам
    newDiv.classList.toggle("new_box");
  }
  
};

createBtn.addEventListener("click", createBoxes);

// console.log(outcomeDiv.childNodes)


function destroyBoxes() { 
  const arrNewBoxes = outcomeDiv.querySelectorAll('.new_box');
  console.log(arrNewBoxes);

  for (const box of arrNewBoxes) { 
    outcomeDiv.firstChild.remove();
  }
};
  
destroyBtn.addEventListener("click", destroyBoxes);



// const createbox = () => {
//   let countBox = Number(input.getAttribute("count"));
//   console.log(countBox);
//   for (let i = 0; i < countBox; i++) {
//     baseboxSize += 10;
//     const newBox = document.createElement("div");
//     newBox.style.background = random_bg_color();
//     newBox.style.height = baseboxSize + "px";
//     newBox.style.width = baseboxSize + "px";
//     newBox.style.margin = "10px";
//     newBox.classList.add("new-box");
//     boxes.append(newBox);
//   }
// };

// createboxBtn.addEventListener("click", createbox);

// createBtn.addEventListener("click", (event) => {
//   const newDiv = document.createElement("div");
//   newDiv.style.width = "20px";
//   newDiv.style.height = "20px";
//   newDiv.style.backgroundColor = getRandomHexColor();
//   outcomeDiv.append(newDiv);

  
// // console.log(Number(input.value))
//   // console.log(event.currentTarget.value);
// });

// console.log(Number(input.value));
