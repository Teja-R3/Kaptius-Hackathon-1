let totalAmount = 0;
const transactions = [];
// initialises the total amount and the transactin array 

function showForm(formId)
// gets the form
{
    document.getElementById('incomeForm').style.display = 'none';
    document.getElementById('expenditureForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

function addTransaction(event, type) 
// function to add a transaction either income or expenditure
{
    event.preventDefault();
    const description = event.target.description.value;
    const amount = parseFloat(event.target.amount.value);
    const time = new Date().toLocaleString();
    // gets the details from the form in its specific field

    transactions.push({ type, description, amount, time });
    // adds the transaction info to the transaction array

    if (type === 'income') {
        totalAmount += amount;
    } else if (type === 'expenditure') {
        totalAmount -= amount;
    }
    // updates the total amount based on the typ of transction

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    // updates the displayed total amount category

    event.target.reset();
    document.getElementById('incomeForm').style.display = 'none';
    document.getElementById('expenditureForm').style.display = 'none';
}
