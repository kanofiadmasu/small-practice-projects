let expense_array = [];

//  getting the elements from the DOM
let expense_name = document.getElementById('expense_name');
let amount = document.getElementById('amount');
let category = document.getElementById('category');
let date = document.getElementById('date');
let add_expense = document.getElementById('add_expense');
let expense_table = document.getElementById('expense_table');


 
// expense adding eventlistener 
let addButton = document.getElementById('add_expense');
addButton.addEventListener('click', addExpense);

function addExpense(event) {
    event.preventDefault();
    // 1. get the values from the input fields
    // if the input fields are empty, do not add the expense
    if (expense_name.value === '' || amount.value === '' || category.value === '' || date.value === '') {
        alert('Please fill all the fields, empty feilds are not allowed!');
        return;
    } else {
            let expense = {
        name: expense_name.value,
        amount: parseFloat(amount.value),
        category: category.value,
        date: date.value
    }
    // using regular expression to validate the date 
    let dateValue = date.value;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dateValue)) {
        alert('Please enter a valid date in the format YYYY-MM-DD');
        return;
    }

    // 2. add the expense to the array
    expense_array.push(expense);
 
    // 3. update the table
    updateTable();

    // 4. clear the input fields
    expense_name.value = '';
    amount.value = '';
    category.value = '';
    date.value = '';
    }
}

console.log(expense_array);

// here this function will update the table (attach the values to the table)
function updateTable() {
    // Clear the existing table rows before updating becuase,
    //  when it starts looping, the expense_table has a row already
    // so we need to clear the table first
    expense_table.innerHTML = '';

    // looping through the expense_array and adding the values to the table
    expense_array.forEach( exp => {
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${exp.name}</td>
        <td>${exp.amount}</td>
        <td>${exp.category}</td>
        <td>${exp.date}</td>
        <td> <button class="delete_btn">Delete</button>
             <button class="edit_btn">Edit</button>
        </td>
    `;
    expense_table.appendChild(newRow);
    
    // Delete and Edit button adding 

    let deleteBtn = newRow.querySelector('.delete_btn');
    deleteBtn.addEventListener('click', () => { 
       if(confirm('Are you sure you want to delete this expense?')) {
        expense_table.removeChild(newRow);
        // also removing from the array
        expense_array = expense_array.filter( item => item !== exp);
        console.log(expense_array); 
       }
       else {
        return;
       }
    })

    // Edit button
    let editBtn = newRow.querySelector('.edit_btn'); 
    editBtn.addEventListener('click', () => { 
         expense_name.value = exp.name;
         amount.value = exp.amount;
         category.value = exp.category;
         date.value = exp.date;

        // need to create a new button to update the chosen expense 

        let form = document.getElementById('input_form');
        let updateBtn = document.createElement('button');
        form.appendChild(updateBtn);
        updateBtn.textContent= 'Apply Changes';

        // Now since we have the 'Apply Changes' button, when clicked it should update the chose expense
        updateBtn.addEventListener('click', () => {
            exp.name = expense_name.value;
            exp.amount = parseFloat(amount.value);
            exp.category = category.value;
            exp.date = date.value;

            // after updating the expense, we need to update the table
            updateTable();

            // clear the input fields
            expense_name.value = '';
            amount.value = '';
            category.value = '';
            date.value = '';

            // remove the update button after applying changes
            form.removeChild(updateBtn);
        })
    });

});

}; 
 

