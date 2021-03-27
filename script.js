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







