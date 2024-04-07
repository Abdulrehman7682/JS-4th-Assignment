let cities = ["Chichawatni", "Faisalabad", "Lahore", "Karachi", "Islamabad", "Burawala", "Pindi"]
let OriginalText = "I love my country Pakistan<br/>I like my city Faisalabad<br/>I love my Homeland"

// showNotification
const showNotification=(msg, type)=>{
    let bgColor;
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;
        default:
            break;
    }
    
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
    }
// Lowercase Text 
function lowerCase() {
    let lowerCaseText = OriginalText.toLowerCase()
    document.getElementById("output").innerHTML = lowerCaseText
    document.getElementById("output").style.color = "red"
}
// UpperCase Text
function upperCase() {
    let upperCaseText = OriginalText.toUpperCase()
    document.getElementById("output").innerHTML = upperCaseText
    document.getElementById("output").style.color = "brown"
}
// Capitalize Text
function capitalize() {
    document.getElementById("output").innerHTML = '<span style = "text-transform:capitalize; color:green;">' + OriginalText + '</span>'
}
//
// Better Formatting
function betterformatting() {
    let text = document.getElementById("inputText").value;
    if (!text) {
        alert("Please Enter Your Text")
        return
    }
    text = text.toLowerCase()
    document.getElementById("output").style.textTransform = "capitalize"
    document.getElementById("output").innerHTML = text
}
// Print All Cities 
function printAllCities() {
    document.getElementById("output").innerHTML = " "
    for (i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + " " + cities[i] + "<br/>"
    }
}
// Add Your City In List 
function AddCity() {
    let city = document.getElementById("inputText").value
    if (city.length < 3) {
        alert("Please Enter Your City Correctly")
        return
    }
    let cityFirstLetter = city.slice(0, 1).toUpperCase()
    console.log(cityFirstLetter)
    let citysecondLetter = city.slice(1).toLowerCase()
    console.log(citysecondLetter)
    let cityWordInCapitalize = cityFirstLetter + citysecondLetter
    console.log(cityWordInCapitalize)
    let cityFound = false
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true
            let html = '<span style = "color:red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list.';
            document.getElementById("output").innerHTML = html
        }
    }
    if (cityFound === false) {
        cities.push(cityWordInCapitalize)
        let html = '<span style = "color: green; font-size: 20px">"' + cityWordInCapitalize + '"</span> has been successfully added into list.'
        document.getElementById("output").innerHTML = html
    }
}
// Check Your City In List 
function checkCity() {
    let city = document.getElementById("inputText").value
    if (city.length < 3) {
        alert("Please Enter Your City Correctly")
        return
    }
    let cityFirstLetter = city.charAt(0).toUpperCase()
    console.log(cityFirstLetter)
    let citySecondLetter = city.slice(1).toLowerCase()
    console.log(citySecondLetter)
    let cityWordInCapitalize = cityFirstLetter + citySecondLetter
    console.log(cityWordInCapitalize)
    let cityFound = false
    for (let i = 0; i < cities.length; i++) {
        if (cities[i] === cityWordInCapitalize) {
            cityFound = true
            let html = '<span style = "color:blue; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is Found in list.';
            document.getElementById("output").innerHTML = html
        }
    }
    if (cityFound == false) {
        let html = "SORRY &#128524 we could not found your city" + " " + cityWordInCapitalize + " " + "in" + " " + "list"
        document.getElementById("output").innerHTML = html
    }
}
// Find This Word 
function findWord(){
    let newtext = OriginalText.toLowerCase()
    console.log(newtext)
    let word = document.getElementById("inputText").value 
    if (!word){
      alert("Please Enter Your Word To Find")
      return
    }
  word = word.toLowerCase()
let findWord = newtext.indexOf(word)
console.log(findWord)
if (findWord !== -1){
 let html = 'Your Word <span style = "color : green; font-size: 18px;">"' + word + '"</span> found at index: ' + findWord;
 document.getElementById("output").innerHTML =html
}else{
    let html = 'Your Word <span style = "color : green; font-size: 18px;">"' + word + '"</span> does not exist in original string: ';
 document.getElementById("output").innerHTML =html
}
}
// Replace This Word
// function replaceWord(){
// let cnic = 33100-8796960-3
// let word = "-"
// let replaceWith = ""
// word = new RegExp(word,'g')
// let cnicWithoutDashes = cnic.replace(word,replaceWith)
// console.log(cnicWithoutDashes)
// }
function replaceWord(){
    let newtext = OriginalText.toLowerCase()
    let word = document.getElementById("inputText").value
    if(!word){
    alert("Please Enter Your Word To Replace")
    return
    }
    let replaceWith = prompt("Please Enter the Word That You Want To Replace With")
    if(!replaceWith){
    alert("Please Enter The Word That You Want To Replace")
    return
    }
    word = word.toLowerCase()
    console.log(word)
    word = new RegExp(word,"g")
    console.log(word)
    replaceWith = replaceWith.toLowerCase()
    let replaceWord = newtext.replace(word,replaceWith)
    document.getElementById("output").innerHTML = replaceWord
}
// Clear 
document.getElementById("clearinput").onclick = function (){
    document.getElementById("inputText").innerHTML = ""
}
function clearoutput(){
document.getElementById("output").innerHTML = ""
let toast = document.getElementById("output").innerHTML;
if (!toast.length){
    toastifyError("Its Already Empty")
}

}

