const socket = io()

let title = document.querySelector('#title')
let description = document.querySelector('#description')
let price = document.querySelector('#price')
let thumbnails = document.querySelector('#thumbnails')
let code = document.querySelector('#code')
let stock = document.querySelector('#stock')
let state = document.querySelector('#status')
let category = document.querySelector('#category')

const send = document.querySelector('#send')

send.addEventListener('click', (e) => {
  e.preventDefault()
  let product = {
    title: title.value,
    description: description.value,
    price: price.value,
    thumbnails: thumbnails.value,
    code: code.value,
    stock: stock.value,
    state: state.value,
    category: category.value
  }

  socket.emit('realTimeProducts', product)
  title.value = ''
  description.value = ''
  price.value = ''
  thumbnails.value = ''
  code.value = ''
  stock.value = ''
  state.value = ''
  category.value = ''
})

socket.on('realTimeProducts', (data) => {
  const mensajes = data.map(msg => {
    return `<p>id: ${msg.id} title: ${msg.title} descripción: ${msg.description}
    price: ${msg.price}
    thumbnails: ${msg.thumbnails}
    code: ${msg.code}
    stock: ${msg.stock}
    state: ${msg.state}
    category: ${msg.category}
    <button class="delete" value=${msg.id}>X</button></p>`
  }).join('<br>')
  document.querySelector('p').innerHTML = mensajes;

  const deleteButton = document.querySelectorAll('button.delete')
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", (e) => {
      console.log(e.target.value);
      socket.emit('deleteProduct',e.target.value)
    });
  }
})