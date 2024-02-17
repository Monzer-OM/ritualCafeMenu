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
  {
    name: "GOLDEN DELIGHT",
    price: "43",
    image: "images/GOLDEN DELIGHT.jpg",
    description: "FRESH HOMEMADE CRISPY BRIOCHE / VANILA ICE CREAM / CHOCOLATE",
  },
  {
    name: "SIMIT MUHAMMARA",
    price: '38',
    image: 'images/SIMIT MUHAMMARA.jpg',
    description: 'EGG / MUHAMMARA / TURKISH LABNEH / CHILI BUTTER / SIMIT BREAD',
  },
  {
    name: 'LIME AND CORN SALAD',
    price:'34',
    image: 'images/LIME AND CORN SALAD.jpg',
    description : "BABY SPINACH / JARJEER ROCKET LEAF / FETA CHEESE / CHERRY TOMATO / GRILLED CORN / LIME / BLACK OLIVE ",
  },
  {
    name: 'CROQUE MADAME',
    price: "43",
    image: "images/CROQUE MADAME.jpg",
    description: "SOURDOUGH BREAD / BECHAMEL SAUCE / GRUYERE CHEESE / POUCHED EGG / SMOKED TURKEY"
  },
  {
    name: 'RITUAL CAESAR SALAD',
    price: "32",
    image: 'images/RITUAL CAESAR SALAD.jpg',
    description: "ROMAINE LETTUCE / HOME MADE RITUAL SAUCE / SMOKED BEEF BACON / POACHED EGG / PARMESAN CHEESE / GARLIC CROUTONS"
  },
  {
    name: "BURATA SALAD",
    price: "47",
    image: 'images/BURATA SALAD.jpg',
    description: 'BURATA CHEESE / DATES / BABY SPINACH SALAD',
  },
  {
    name: "AVOCADO POACHED EGG",
    price: "39",
    image: "images/AVOCADO POACHED EGG.jpg",
    description: "HOMEMADE SOUR DOUGH AVOCADO WITH CHOICE OF EGG", 
  }, 
  {
    name: "PEANUT BUTTER TART",
    price: "36",
    image: "images/PEANUT BUTTER TART.jpg",
    description: "CHOCOLATE TART BASE / TART GARNISH",
  },

  {
    name: "PORTOBELLO BENEDICT",
    price: "43",
    image: "images/PORTOBELLO BENEDICT.jpg",
    description: "PLAIN CROISSANT / TRUFFLE BECHAMEL / PORTOBELLO MUSHROOM / HOLLANDAISE SAUCE / EGG / PAPRIKA",
  },

  {
    name: "TURKISH EGG",
    price: '38',
    image: 'images/TURKISH EGG.jpg',
    description: "FRESH LABNAH / YOGURT / PARSLEY / MINT LEAF / BLACK PEPPER",
  },
  {
    name: "MUSHROOM TOAST",
    price: "34",
    image: "images/MUSHROOM TOAST.jpg",
    description: "HOMEMADE SOUR DOUGH / PHILADELPHIA CHEESE / TRIO MUSHROOM",
  },
  {
    name: "MOZZARELLA PESTO",
    price: "34",
    image: "images/MOZZARELLA PESTO.jpg",
    description: "SOUR DOUGH BREAD / PESTO / CHERRY TOMATO / BUFFALO MOZZARELLA CHEESE"
  },
  {
    name: "AVOCADO TOAST",
    price: "36",
    image: "images/AVOCADO TOAST.jpg",
    description: "HOMEMADE SOUR DOUGH / FETA CHEESE / AVOCADO / BLACK SEED / CHILI FLAKE / LEMON"
  },
  {
    name: "AVOCADO SCRAMBLE EGG",
    price: "39",
    image: "images/AVOCADO SCRAMBLE EGG.jpg",
    description:"HOMEMADE SOUR DOUGH AVOCADO WITH CHOICE OF EGG",
  },
  {
    name: "OMELETTE",
    price: "36",
    image: "images/OMELETTE.jpg",
    description: "STUFFED: CHEESE.....CHOOSE: TOMATO / MUSHROOM / SPINACH / MIXED SALAD"
  },
  {
    name: "FLUFFY CHEESE CAKE",
    price: "36",
    image: "images/FLUFFY CHEESE CAKE.jpg",
    description: 'CREAM CHEESE / LEMON EXTRACT / DIGESTIVE BISCUIT / BLUEBERRY SAUCE'
  }

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
  orderText = orderText.replaceAll('Delete', '');

  const encodedText = encodeURIComponent(orderText);
  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, '_blank');
});

