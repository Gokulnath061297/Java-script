//selecting input field using queryselector
let input = document.querySelector("input")
//selecting button in html page
let button = document.querySelector("button")
//selecting the order list
let orderlist= document.querySelector("ol")

// adding event listener to the click button
button.addEventListener("click",()=>{
// getting the input value
    let inputvalue = input.value 
// creating the listed element using create element
    let li=document.createElement("li")
// setting the inner text as input value
    li.innerText=inputvalue
// styling the list font size using style function
    li.style.fontSize = "25px"
// setting the class attribute active
    li.setAttribute("class","active")
// adding the next input to the list using append()
    orderlist.append(li)
// adding event listener to the list
    li.addEventListener("click",()=>{
// on clicking the list it must be removed from the list
        li.remove()
    })
// helps to make the input box clear when list is added
    input.value =""
})