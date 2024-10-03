// your JavaScript file
/* This JavaScript code is selecting an element with the id "container" from the HTML document. It then
creates a new div element, adds a class "content" to it, sets its text content to "This is the
glorious text-content!", and finally appends this new div element as a child of the selected
container element. */
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Hey, I'm red";

const header = document.createElement("h3");
header.classList.add("header");
header.textContent = "I'm a blue h3!";

const div_pink = document.createElement("div");
div_pink.classList.add("div2");
div_pink.style.border = "1px solid black";
div_pink.style.backgroundColor = "pink";

const divHeading = document.createElement("h1");
divHeading.classList.add("header");
divHeading.textContent = "I'm in a div";

const divParagraph = document.createElement("p");
divParagraph.classList.add("para");
divParagraph.textContent = "ME TOO!!";

div_pink.appendChild(divHeading);
div_pink.appendChild(divParagraph);

container.appendChild(content);
container.appendChild(para);
container.appendChild(header);
container.appendChild(div_pink);

//2. Events
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
/*This is a little better. We’ve moved the JS out of the HTML and into a JS file, 
but we still have the problem that a DOM element can only have one “onclick” property.*/
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

/*Now, we maintain separation of concerns, 
and we also allow multiple event listeners 
if the need arises. Method 3 is much more flexible and powerful,
though it is a bit more complex to set up.*/
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World, This is Btn2");
});
//access more information about the event by passing a parameter
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) {
  console.log((e.target.style.backgroundColor = "blue"));
});

/*When we pass in alertFunction or function (e) {...} 
as an argument to addEventListener, we call this a callback. 
A callback is simply a function that is passed into another 
function as an argument.*/

//3. LISTENERS: Attaching listeners to groups of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert("BUTTON id: " + button.id);
  });
});

/* Some useful events include:

click
dblclick
keydown
keyup 

https://www.w3schools.com/jsref/dom_obj_event.asp
*/
