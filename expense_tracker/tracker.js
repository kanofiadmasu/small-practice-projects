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
    let expense = {
        name: expense_name.value,
        amount: parseFloat(amount.value),
        category: category.value,
        date: date.value
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

console.log(expense_array);

// here this function will update the table (attach the values to the table)
function updateTable() {
    // Clear the existing table rows before updating becuase,
    //  when it starts looping the expense_table has a row already
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
        <td><button class="delete_btn">Delete</button></td>
    `;
    expense_table.appendChild(newRow);
    
    // Delete and Edit button adding 

    let deleteBtn = newRow.querySelector('.delete_btn');
    deleteBtn.addEventListener('click', () => { 
        expense_table.removeChild(newRow);
    })

})

}; 
 

