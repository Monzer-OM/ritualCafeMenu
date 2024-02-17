const menuCards = document.querySelectorAll('.menu-card');
const orderList = document.getElementById('order-list');
const sendOrderButton = document.getElementById('send-order');
// Replace this with actual menu data
const dishes = [
  {
    name: "CROISSANT",
    price: "18",
    image: "images/CROISSANT.jpeg",
    description: "PLAIN / CHEESE / ZAATAR.",
  },
  {
    name: "MONT BLANC",
    price: "36",
    image: "images/MONT BLANC.jpeg",
    description: "BAKED CHOCOLATE FUDGE / ICE CREAM / MILK CHOCOLATE SAUCE.",
  },
  {
    name: "BACON EGG BUN",
    price: "28",
    image: "images/BACON EGG BUN.jpeg",
    description: "Tender chicken simmered in a creamy red curry with vegetables and fragrant spices.",
  },
  {
    name: "FIG TOAST",
    price: "34",
    image: "images/FIG TOAST.jpeg",
    description: "Tender chicken simmered in a creamy red curry with vegetables and fragrant spices.",
  },
  // Add remaining dishes here with their details
];

dishes.forEach((dish, index) => {
  const card = document.createElement('div');
  card.classList.add('menu-card');

  const img = document.createElement('img');
  img.src = dish.image;
  img.alt = dish.name;
  card.appendChild(img);

  const h2 = document.createElement('h2');
  h2.textContent = dish.name;
  card.appendChild(h2);

  const price = document.createElement('p');
  price.textContent = `Price: ${dish.price}`;
  card.appendChild(price);

  const description = document.createElement('p');
  description.textContent = dish.description;
  card.appendChild(description);

  const addButton = document.createElement('button');
  addButton.classList.add('add-button');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => {
    // Add item to order list
    const listItem = document.createElement('li');
    listItem.textContent = `${dish.name} - ${dish.price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button'); // Add this line

    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    orderList.appendChild(listItem);
  });
  card.appendChild(addButton);

  menuCards.item(index).replaceWith(card); // Replace placeholder dishes with real data
});


sendOrderButton.addEventListener('click', () => {
  let orderText = "Your order at [RETUL]:\n";
  const carNumber = document.getElementById('Car number').value;
  const city = document.getElementById('city').value;
  const payment = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMessage = document.getElementById('payment-message');

  
  if (!payment) {
    paymentMessage.style.display = 'block'; // Show the message
    return; // Stop the function execution
  } else {
    paymentMessage.style.display = 'none'; // Hide the message
  }

  const paymentMethod = payment.value;
  const orderItems = orderList.querySelectorAll('li');
  
  orderItems.forEach(item => {
    orderText += `- ${item.textContent}\n`;
  });

  orderText += `Payment Method: ${paymentMethod}\n`;
  orderText += `Car Number: ${city}  ${carNumber}\nPlease specify any modifications or delivery instructions.`;

  const phoneNumber = '+5349675591'; // Replace with your phone number

  const encodedText = encodeURIComponent(orderText);
  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, '_blank');
});





// Add logic for order list and further functionality in this script
