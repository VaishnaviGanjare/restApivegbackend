const veg_form = document.getElementById('add-veg-form');
const vegTable = document.getElementById('veg-table');
const vegTotal = document.getElementById('head');
let total = 0;

async function displayVeg() {
  try {
    vegTable.innerHTML = '';
    vegTotal.innerHTML = '';

    const res = await axios.get("http://localhost:3000/vegData");
    for (let i = 0; i < res.data.length; i++) {
      const Dat = res.data[i];
      let row = document.createElement('tr');
      console.log(res.data);
      row.innerHTML = `
        <td>${Dat.text}</td>
        <td>Rs: ${Dat.price}</td>
        <td>${Dat.quantity}KG</td>
        <td>
          <label for="in-${Dat.id}"></label>
          <input type="number" id="in-${Dat.id}">
          <button onclick="buyVeg('${Dat.quantity}','${Dat.id}','${Dat.price}','${Dat.text}',document.getElementById('in-${Dat.id}'))">Buy</button>
        </td>
        <td><button onclick="deleteVeg('${Dat.id}')">Delete</button></td>
      `;
      vegTable.appendChild(row);
    }

    total = res.data.length;
    vegTotal.innerHTML = `<h1>Total: ${total}</h1>`;
  } catch (error) {
    console.log(error);
  }
}

function addVeg(event) {
  event.preventDefault();
  total++;
  var text = veg_form['text'].value;
  var price = veg_form['price'].value;
  var quantity = veg_form['quantity'].value;

  const obj = { text, price, quantity };

  axios.post("http://localhost:3000/vegData", obj)
    .then(() => {
      displayVeg();
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteVeg(id) {
  axios.delete(`http://localhost:3000/vegData/${id}`)
    .then(() => {
      total--;
      displayVeg();
    })
    .catch((err) => {
      console.log(err);
    });
}

function buyVeg(quant, id, price, text, kg) {
  quant = quant - kg.value;
  quant = quant.toString();

  axios.put(`http://localhost:3000/vegData/${id}`, {
    text,
    price,
    quantity: quant
  })
    .then(() => {
      displayVeg();
    })
    .catch((err) => {
      console.log(err);
    });
}

//veg_form.addEventListener('submit', addVeg);
displayVeg();
