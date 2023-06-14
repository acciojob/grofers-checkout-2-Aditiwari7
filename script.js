//your code here
let table = document.getElementById('myTable');
let priceArr = Array.from(document.querySelectorAll("td[data-ns-test]"))

let total = 0;
for (let price of priceArr) {
	total += Number(price.textContent);
}

let row = document.createElement('tr');
let cell = row.insertCell(0);
cell.textContent = total
row.setAttributes('data-ns-test', 'grandtotal')

table.insertAdjacentElement('beforeend', row);