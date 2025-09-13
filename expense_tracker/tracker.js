let expense_array = [];


let expense_name = document.getElementById('expense_name');
let amount = document.getElementById('amout');
let category = document.getElementById('category');
let date = document.getElementById('date');
let add_expense = document.getElementById('add_expense');
let expense_table = document.getElementById('expense_table');

let addButton = document.getElementById('add_expense');

addButton.addEventListener('click', addExpense);

function addExpense() {
    // the proccesses are 
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

}

function updateTable() {
    
}