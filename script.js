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

/* 
var addItemWidth = document.getElementsByClassName('form-control');
addItemWidth.style.width = '80%'; */



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

var input = document.querySelector('input');
input.value = 'Hallo!';
