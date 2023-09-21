var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event 
form.addEventListener('submit', addItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';
  
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button elelment
  var deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

// Delete event
itemList.addEventListener('click', removeItem);

// Remove item
function removeItem(e) {

  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Placeholder event listener for the "Edit" button
itemList.addEventListener('click', function (e) {
  if (e.target.classList.contains('edit')) {
    // Handle the edit functionality here when you implement it
    // For now, you can log a message as a placeholder
    console.log('Edit button clicked');
  }
});



