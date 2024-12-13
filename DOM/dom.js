// A window object is automatically  created by the browser and it represents the browser window.
// A window object is the top level object in the DOM hierarchy.
// The window object represents an open window in a browser.
// When a webpage is loaded, the browser creates a Document Object Model of the page.
// html elements can be accessed by javascript, these elements will be converted to objects. This object is called the Document Object.
//This documnet object is available in window object
// document object is the model or representation of html elements in the browser
console.dir(window.document) //this will show the document object's properties and methods
console.dir(window.document.body)
console.log(window.document.head)
console.dir(document.body.childNodes[1])
/* DOM can be used to manipulate the html elements, update changes dynamically
 when a script is accessed before body element, when script element is present in head,
  it will not be able to access the body element
*/
//The issue is that the script is trying to access the element before the DOM is fully loaded. To fix this, you should wrap your code in a DOMContentLoaded event listener.
// to access the elements by id
    let headingElement = document.getElementById("heading1");
    console.log(headingElement);
    // if id doesnt exist it return null
// to access element by class
    let paras = document.getElementsByClassName("para");
    console.log(paras);
    // if class doesnt exist it return empty html collection, similar to array
// to access elements by their tags
    let head = document.getElementsByTagName("h2");
    console.log(head);
    // if tag doesnt exist it return empty html collection, similar to array 
// to access elements by query selector
    let headingq = document.querySelector("#heading1");
    console.log(headingq);
    // it returns the first element matching the query
    // if no element is present it returns null
    let paras1 = document.querySelectorAll(".para");
    console.log(paras1);
    // it returns all the elements matching the query
//use # for id, . for class and tag name for tag
console.log(document.body.children[0]);
console.log(document.querySelector("div").children[0])
/* childNodes: NodeList(5) [text, p, text, h1, text]
children: HTMLCollection(2) [p, h1]*/


let divtag = document.querySelector("div");
console.dir(divtag)
console.log(divtag.innerText);//it displays content with /n
console.log(divtag.innerHTML);// displays content with tags
console.log(divtag.textContent);// displays content without tags, even for hidden elements


let heading = document.querySelector("h1")
console.dir(heading)
let heading2 = document.querySelector("h2")
console.dir(heading2)
heading2.innerText+= " from sindhu" // or use (heading2.append(" from Sindhu"))


let divelement = document.getElementsByClassName("box")
console.dir(divelement)

let idx = 0;
for (div of divelement){
    div.innerText += ` Sindhu ${idx}`
    idx++
}

// for(let i=0; i<divelement.length; i++){
//     divelement[i].innerText += ` Sindhu ${idx}`
//     idx++
// }
// divelement[0].innerText += " Sindhu"
// let firstdivelement = divelement[0]
// console.dir(firstdivelement.append(" Sindhu"))
