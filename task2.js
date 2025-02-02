let totalAmount = 0;
const transactions = [];
// here it intialisez the total amount and the transaction

function showForm(formId)
 // gets the form 
{
    document.getElementById('incomeForm').style.display = 'none';
    document.getElementById('expenditureForm').style.display = 'none';
     // shows the form which is loaded 
    document.getElementById(formId).style.display = 'block';
}

function addTransaction(event, type) 
// function to add the field to the list
{
    event.preventDefault();
    // prevents the default values not to get into the table
    const description = event.target.description.value;
    const amount = parseFloat(event.target.amount.value);
    const time = new Date().toLocaleString();
    // gets the data from the imput

    transactions.push({ type, description, amount, time });
    // pushes the data into the respective array

    const newRow = `<tr><td>${time}</td><td>${description}</td><td>${amount.toFixed(2)}</td></tr>`;
    // creates a new data field for the transaction

    if (type === 'income') {
        document.querySelector('#incomeTable tbody').insertAdjacentHTML('beforeend', newRow);
        totalAmount += amount;
    } else if (type === 'expenditure') {
        document.querySelector('#expenditureTable tbody').insertAdjacentHTML('beforeend', newRow);
        totalAmount -= amount;
    }
     // update the respective category and total amount based on transaction type

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

    event.target.reset();
    document.getElementById('incomeForm').style.display = 'none';
    document.getElementById('expenditureForm').style.display = 'none';
    // resets and will not show form in the display
}

function showTotalPage() {
    const totalPageWindow = window.open('', 'Total Amount', 'width=600,height=400');
    // this basically open the new window to show the data
    totalPageWindow.document.write(`
        <html>
        <head>
            <title>Total Amount</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
                th { background-color: #f4f4f4; }
            </style>
        </head>
        <body>
            <h1>Total Amount: $${totalAmount.toFixed(2)}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    ${transactions.map(t => `
                        <tr>
                            <td>${t.time}</td>
                            <td>${t.description}</td>
                            <td>${t.amount.toFixed(2)}</td>
                            <td>${t.type}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `);
     // this part is responsible for generating and displaying the whole records as one in table
}
