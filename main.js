//DOM MANIPULATION...

/* var serachWidth = document.querySelector('input#filter');
searchWidth.style.width = '60%'; */
var addItemWidth = document.querySelector('input#item.form-control');
addItemWidth.style.width = '80%';


var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');


//form submit event
form.addEventListener('submit', addItem);

//delete events
itemList.addEventListener('click', removeItem);
//edit events
itemList.addEventListener('click', editItem);
//filter events
filter.addEventListener('keyup', filterItems);

//add items
function addItem(e){
    e.preventDefault();

    //get inout value
    var newItem = document.getElementById('item').value;

    //create new new li element and add a class name to it
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    //add text node to input value
    li.appendChild(document.createTextNode(newItem));
    
    //create delete button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    //add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-primary btn-sm float-right edit btn-primary-spacing';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));

    //append button to li
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)

    //append li to list
    itemList.appendChild(li);
    form.reset();  //reset
    return false; //prevent page from refreshing
}

//Delete item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Deleting this item?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//Edit item
function editItem(e){
    if(e.target.classList.contains('edit')){
        if(confirm('Do you want to edit this item?')){
            var eli = e.target.parentElement;
            var text = eli.getElementsByTagName('span')[0].textContent;
            ids = eli.id;
            document.getElementById('item').value = text;
            var btnNew = document.getElementById('btnAdd');
            btnNew.innerHTML = 'Edit';
        }
    }
}
var btnNew = document.getElementById('btnAdd');
btnNew.onclick = function() {
    if (this.innerHTML == 'Submit') {
        var inItemText = document.getElementById('item');

        var itemText = inItemText.value;
        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }
      form.addEventListener('submit', addItem);
    } else if (this.innerHTML == 'Edit') {
      this.innerHTML = 'Submit';
       var ItemTexts = document.getElementById('item').value;
             liid = document.getElementById(ids); 
             liid.getElementsByTagName('span')[0].textContent = ItemTexts;
            
            console.log(liid);
            itemList.appendChild(liid);
            document.getElementById('item').value = "";

        if (!itemText || itemText === "" || itemText === " ") {
            return false;
        }
        document.getElementById('items').value="";
    }
}

//Filter items
function filterItems(e){
    //converto to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })       
} 


//Box colour changing functions
var box = document.getElementById('box');
box.addEventListener('mouseover',runEvent);
box.addEventListener('mousemove',runEvent);
function runEvent(e){
    e.preventDefault();
    console.log('Event Type: ' + e.type);
    box.style.backgroundColor = "rgb("+ e.offsetX +", "+ e.offsetY +", 44 )";  
}