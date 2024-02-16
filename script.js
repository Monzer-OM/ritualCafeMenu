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
  price.textContent = `Price: $${dish.price}`;
  card.appendChild(price);

  const description = document.createElement('p');
  description.textContent = dish.description;
  card.appendChild(description);

  const button = document.createElement('button');
  button.classList.add('add-button');
  button.textContent = '+';
  button.addEventListener('click', () => {
    // Add item to order list
    const listItem = document.createElement('li');
    listItem.textContent = `${dish.name} - $${dish.price}`;
    orderList.appendChild(listItem);
  });
  card.appendChild(button);

  menuCards.item(index).replaceWith(card); // Replace placeholder dishes with real data
});

sendOrderButton.addEventListener('click', () => {
  let orderText = "Your order at [RETUL]:\n";
  const orderItems = orderList.querySelectorAll('li');
  orderItems.forEach(item => {
    orderText += `- ${item.textContent}\n`;
  });
  orderText += "Please specify any modifications or delivery instructions.";

  const phoneNumber = '+5349675591'; // Replace with your phone number

  const encodedText = encodeURIComponent(orderText);
  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, '_blank');
});


// Add logic for order list and further functionality in this script
