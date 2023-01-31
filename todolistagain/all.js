let box = document.querySelectorAll(".box");
let check = document.querySelector(".check");
// check.addEventListener("click",() => {
//     for(let i=0;i<box.length;i++){
//         box[i].classList.toggle("red");
//     }
// });

check.addEventListener("click",() => {
    box.forEach(v => {
        v.classList.toggle("red");
    })
});
box.forEach(v => {
    v.addEventListener("click",e => {
        let box_v = e.target;
        // console.log(e.target);
        box_v.classList.toggle("red");
    })
})

// box.forEach(v => {
//     if(v.innerText>14){
//         console.log(v.innerText);
//         console.log(typeof v.innerText);
//     }
// });

let data = [8,6,3,5,9,10,2,7,4,1]


// console.log([data[0],data[1]] = [data[1],data[0]])
// console.log([data[1],data[2]] = [data[2],data[1]])
// console.log([data[0],data[1]] = [data[1],data[0]])
// console.log(data)

/* insertion sort
function InsertSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]]
                i--;
            } 
        }
    }
    return array;
}
console.log(InsertSort(data))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/

/* bubble sort
  function InsertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]] = [arr[j],arr[i]]
            } 
      }
    }
    return arr;
  }
  console.log(InsertSort(data))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] */
