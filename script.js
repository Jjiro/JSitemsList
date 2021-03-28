//Examine the Document Object//

/* 
//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = Just In!; //
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
//console.log(document.all[9]);
console.log(document.forms);
console.log(document.links);
console.log(document.images); 
*/


//Selectors
//Get elements by ID
/* 
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
headerTitle.textContent = 'JS Items'; //ignores styling(shows all contents)
headerTitle.innerText = 'Items'; //pays attention to styling(not showing contents/hidden)
headerTitle.innerHTML = '<h3>Hmmmmmmmm</h3>'; // 
header.style.borderBottom = 'solid 3px #ccc';
*/


//Get elements by ClassName
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
//items[2].textContent = 'Hey there!';
//items[2].innerText = 'Hey there!';
items[2].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'grey';

//gives error
//items.style.backgroundColor = 'yellow';

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'yellow';
} */


var addItemWidth = document.querySelector('input#item.form-control');
addItemWidth.style.width = '80%';



//Get elements by TagName
/* var li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[2]);
li[2].style.fontWeight = 'bolder';
li[1].style.backgroundColor = 'grey';


for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = 'yellow';
} */


//Query Selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

/* var input = document.querySelector('input');
input.value = 'Hallo!'; */

/* var submit = document.querySelector('button[type="submit"]');
submit.value = 'SEND';


var item = document.querySelector('.list-group-item');
item.style.color = 'green';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'orange';

var thirdItem = document.querySelector('.list-group-item:nth-child(2)');
thirdItem.style.color = 'purple'; */


//Query Selector All

/* var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hey there!';

var even = document.querySelectorAll('li:nth-child(even)');
var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < even.length; i++){
    even[i].style.backgroundColor = 'lightgreen';
    //odd[i].style.backgroundColor = 'lightgrey';
}

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'lightgrey';
} */


//Traversing the DOM
var itemList = document.querySelector('#items');

//parentNode
/* console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode); */

//parentElement
/* console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement); */

//childNode
//console.log(item.childNode); - this adds complexity to lists(adds text node or white space - before/after each break line)
/* console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor = 'pink'; */

//firstChild
/* console.log(itemList.firstChild); 
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Tere'; */

//lastChild
/* console.log(itemList.lastChild); 
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Privet'; */

//nextSibling
/* console.log(itemList.nextSibling); 
//nextElementSibling
console.log(itemList.nextElementSibling); */


//previousSibling
/* console.log(itemList.previousSibling); 
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red'; */


// Creating Elements //
/* var newDiv = document.createElement('div');
// add class
newDiv.className = 'hello';
// add id
newDiv.id = 'hello 1';
// add attribute
newDiv.setAttribute('title', "Hello Divs")
// create text node
var newDivText = document.createTextNode('Blah blah blah...');
// append this text to the new div
newDiv.appendChild(newDivText);

//insert the new div into the DOM
var container = document.querySelector('header #main-header .container');
var h1 = document.querySelector('header h1 #header-title');

console.log(newDiv);

newDiv.style.fontSize = "30px";

//container.insertBefore(newDiv, h1);
*/


// EventListeners //
/* var button1 = document.getElementById('button').addEventListener('click',function(){
    //console.log("Clicked button")
}) */
// or using named function
//var button = document.getElementById('button').addEventListener('click',buttonClick)

/* function buttonClick(e){
    //console.log('Button Click...')
    /* document.getElementById('header-title').textContent = 'Changed by click';
    document.querySelector('#main').style.backgroundColor = '#ccc'; */
    //console.log(e);

    /* console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h4>' + e.target.id + '</h4>'; //show the Id on the DOM */

    /* console.log(e.type);
    console.log(e.clientX);  //position from the left side of the window/browser
    console.log(e.clientY); //position from the top side of the window/browser */

    /* console.log(e.offsetX);  //position from the element going left to right
    console.log(e.offsetY);  //position from the element going top to down */

   /*  //check if keys are press while clicking
    console.log(e.altKey);
    console.log(e.crtlKey);
    console.log(e.shiftKey); */ 
//};

//var button = document.getElementById('button').addEventListener('click',runEvent);
var button = document.getElementById('button');
//button.addEventListener('dblclick',runEvent);
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);

var box = document.getElementById('box');
/* box.addEventListener('mouseenter',runEvent); //fires for the parent element
box.addEventListener('mouseleave',runEvent);  // ''
box.addEventListener('mouseover',runEvent);  //fires  for only innerHTML/child element 
box.addEventListener('mouseout',runEvent);   // ''
box.addEventListener('mousemove',runEvent);   //  */

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);

function runEvent(e){
    //console.log('Event Type: ' + e.type);
    //output.innerHTML = '<h3>MouseX: '+ e.offsetX + ' </h3><h3>MouseY: '+ e.offsetY + '</h3>';

    //box.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 44 )"; //change  background colour with mousemove
    //document.body.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 44 )"; //change  background colour with mousemove

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';






}

