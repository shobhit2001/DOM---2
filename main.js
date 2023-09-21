var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

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


// Filter Event
filter.addEventListener('keyup', filterItems);

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // Get List
  var items = itemList.getElementsByTagName('li');
  // Convert to array 
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    // console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1) {
      item.syle.display = 'block';
    }
    else
    {
      item.style.display = 'none';
    }
  });
}




// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value for item name
  var newItemName = document.getElementById('item').value;

  // Get input value for item description (new input element)
  var newItemDescription = document.getElementById('item-description').value;

  // Create new li element
  var li = document.createElement('li');
  li.className = 'list-group-item';

  // Create a container for item content
  var itemContent = document.createElement('div');
  itemContent.className = 'item-content';

  // Create elements for item name and description
  var itemName = document.createElement('div');
  itemName.className = 'item-name';
  itemName.appendChild(document.createTextNode(newItemName));

  var itemDescription = document.createElement('div');
  itemDescription.className = 'item-description';
  itemDescription.appendChild(document.createTextNode(newItemDescription));

  // Append item name and description to the item content container
  itemContent.appendChild(itemName);
  itemContent.appendChild(itemDescription);

  // Create a container for item buttons (delete and edit)
  var itemButtons = document.createElement('div');
  itemButtons.className = 'item-buttons';

  // Create delete button element
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  // Create edit button element
  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append delete and edit buttons to the item buttons container
  itemButtons.appendChild(deleteBtn);
  itemButtons.appendChild(editBtn);

  // Append item content and buttons to the list item
  li.appendChild(itemContent);
  li.appendChild(itemButtons);

  // Append the new list item to the item list
  itemList.appendChild(li);

  // Clear input fields after adding an item
  document.getElementById('item').value = '';
  document.getElementById('item-description').value = '';
}

// Filter Items
function filterItems(e) {
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();

  // Get List
  var items = itemList.getElementsByClassName('list-group-item');

  // Convert to array
  Array.from(items).forEach(function (item) {
      var itemName = item.querySelector('.item-name').textContent.toLowerCase();
      var itemDescription = item.querySelector('.item-description').textContent.toLowerCase();

      if (itemName.indexOf(text) !== -1 || itemDescription.indexOf(text) !== -1) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}
