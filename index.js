
let input1=document.querySelector("#input1")
let input2=document.querySelector("#input2")
let button=document.querySelector("#button")
let fruits=[
    { fruit: "Pear", meyve: "Armud" },
    { fruit: "Peach", meyve: "Saftali" },
    { fruit: "Apricot", meyve: "Erik" },
    { fruit: "Coconut", meyve: "Kakos" },
    { fruit: "Pomegranete", meyve: "Nar" },
    { fruit: "Cherry", meyve: "Albali" },
    { fruit: "Banana", meyve: "Banan" },
    { fruit: "Orange", meyve: "Portagal" },
    { fruit: "Cacao", meyve: "Kakao" },
    { fruit: "Apple", meyve: "Alma" },
    { fruit: "Mango", meyve: "Manqo" },
    { fruit: "Raspberry", meyve: "Moruq" },
    { fruit: "Strawberry", meyve: "Ciyelek" },
    { fruit: "BlueBerry", meyve: "Qaragile" },
    { fruit: "BlackBerry", meyve: "Boyurtken" },
    { fruit: "Currant", meyve: "Qaragat" },
    { fruit: "Pineapple", meyve: "Ananas" },
    { fruit: "Melon", meyve: "Yemis" },
    { fruit: "Grape", meyve: "Uzum" },
    { fruit: "Plum", meyve: "Gavali" },
    { fruit: "Watermelon", meyve: "Qarpiz" },
    { fruit: "Lemon", meyve: "Limon" },
    { fruit: "Kiwi", meyve: "Kivi" },
    { fruit: "Avocado", meyve: "Avokado" },
    { fruit: "Quince", meyve: "Heyva" },
    { fruit: "Mulberry", meyve: "Tut" },
]

// button.addEventListener("click",()=>{
//     let obj={
//         fruit:input1.value,
//         meyve:input2.value,
//     }
//     console.log(input1.value)
// })
button.addEventListener("click",()=>{
    fruits.find((e) => {
        if (e.fruit === input1.value) {
            input2.value=e.meyve
    
        }
        if (e.meyve === input2.value) {
            input1.value=e.fruit
    
        }
})})

