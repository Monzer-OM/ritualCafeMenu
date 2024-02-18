const menuCards = document.querySelectorAll('.menu-card');
const orderList = document.getElementById('order-list');
const sendOrderButton = document.getElementById('send-order');



// Replace this with actual menu data
const dishes = [
  // ---------------Breakfast--------------------
  {
    name: "CROISSANT",
    price: "18",
    image: "images/CROISSANT.jpeg",
    description: "PLAIN / CHEESE / ZAATAR.",
    //brakfast
  },
  
  {
    name: "BACON EGG BUN",
    price: "28",
    image: "images/BACON EGG BUN.jpeg",
    description: "Tender chicken simmered in a creamy red curry with vegetables and fragrant spices.",
    //brakfast
  },
  {
    name: "FIG TOAST",
    price: "34",
    image: "images/FIG TOAST.jpeg",
    description: "Tender chicken simmered in a creamy red curry with vegetables and fragrant spices.",
    //brakfast

  },

  {
    name: "SIMIT MUHAMMARA",
    price: '38',
    image: 'images/SIMIT MUHAMMARA.jpg',
    description: 'EGG / MUHAMMARA / TURKISH LABNEH / CHILI BUTTER / SIMIT BREAD',
    //brakfast
  },
  {
    name: 'LIME AND CORN SALAD',
    price:'34',
    image: 'images/LIME AND CORN SALAD.jpg',
    description : "BABY SPINACH / JARJEER ROCKET LEAF / FETA CHEESE / CHERRY TOMATO / GRILLED CORN / LIME / BLACK OLIVE ",
    //brakfast
  },
  {
    name: 'CROQUE MADAME',
    price: "43",
    image: "images/CROQUE MADAME.jpg",
    description: "SOURDOUGH BREAD / BECHAMEL SAUCE / GRUYERE CHEESE / POUCHED EGG / SMOKED TURKEY",
    //breakfast
  },
  {
    name: 'RITUAL CAESAR SALAD',
    price: "32",
    image: 'images/RITUAL CAESAR SALAD.jpg',
    description: "ROMAINE LETTUCE / HOME MADE RITUAL SAUCE / SMOKED BEEF BACON / POACHED EGG / PARMESAN CHEESE / GARLIC CROUTONS",
    //breakfast
  },
  {
    name: "BURATA SALAD",
    price: "47",
    image: 'images/BURATA SALAD.jpg',
    description: 'BURATA CHEESE / DATES / BABY SPINACH SALAD',
    //breakfast
  },
  {
    name: "AVOCADO POACHED EGG",
    price: "39",
    image: "images/AVOCADO POACHED EGG.jpg",
    description: "HOMEMADE SOUR DOUGH AVOCADO WITH CHOICE OF EGG", 
    //breakfast
  }, 
  

  {
    name: "PORTOBELLO BENEDICT",
    price: "43",
    image: "images/PORTOBELLO BENEDICT.jpg",
    description: "PLAIN CROISSANT / TRUFFLE BECHAMEL / PORTOBELLO MUSHROOM / HOLLANDAISE SAUCE / EGG / PAPRIKA",
    //breakfast
  },

  {
    name: "TURKISH EGG",
    price: '38',
    image: 'images/TURKISH EGG.jpg',
    description: "FRESH LABNAH / YOGURT / PARSLEY / MINT LEAF / BLACK PEPPER",
    //breakfast
  },
  {
    name: "MUSHROOM TOAST",
    price: "34",
    image: "images/MUSHROOM TOAST.jpg",
    description: "HOMEMADE SOUR DOUGH / PHILADELPHIA CHEESE / TRIO MUSHROOM",
    //breakfast
  },
  {
    name: "MOZZARELLA PESTO",
    price: "34",
    image: "images/MOZZARELLA PESTO.jpg",
    description: "SOUR DOUGH BREAD / PESTO / CHERRY TOMATO / BUFFALO MOZZARELLA CHEESE",
    //breakfast
  },
  {
    name: "AVOCADO TOAST",
    price: "36",
    image: "images/AVOCADO TOAST.jpg",
    description: "HOMEMADE SOUR DOUGH / FETA CHEESE / AVOCADO / BLACK SEED / CHILI FLAKE / LEMON",
    //breakfast
  },
  {
    name: "AVOCADO SCRAMBLE EGG",
    price: "39",
    image: "images/AVOCADO SCRAMBLE EGG.jpg",
    description:"HOMEMADE SOUR DOUGH AVOCADO WITH CHOICE OF EGG",
    //breakfast
  },
  {
    name: "OMELETTE",
    price: "36",
    image: "images/OMELETTE.jpg",
    description: "STUFFED: CHEESE.....CHOOSE: TOMATO / MUSHROOM / SPINACH / MIXED SALAD",
    //breakfast
  },
  //----------------sweet delight------------------
  {
    name: "FLUFFY CHEESE CAKE",
    price: "36",
    image: "images/FLUFFY CHEESE CAKE.jpg",
    description: 'CREAM CHEESE / LEMON EXTRACT / DIGESTIVE BISCUIT / BLUEBERRY SAUCE',
    //SWEET DELIGHT
  },
  {
    name: "MONT BLANC",
    price: "36",
    image: "images/MONT BLANC.jpeg",
    description: "BAKED CHOCOLATE FUDGE / ICE CREAM / MILK CHOCOLATE SAUCE.",
    //SWEET DELIGHT
  },
  {
    name: "PEANUT BUTTER TART",
    price: "36",
    image: "images/PEANUT BUTTER TART.jpg",
    description: "CHOCOLATE TART BASE / TART GARNISH",
    //SWEET DELIGHT
  },
  {
    name: "GOLDEN DELIGHT",
    price: "43",
    image: "images/GOLDEN DELIGHT.jpg",
    description: "FRESH HOMEMADE CRISPY BRIOCHE / VANILA ICE CREAM / CHOCOLATE",
    //SWEET DELIGHT
  },
  //-----------------sweet delight-----------------


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

// Scroll to the breakfast section
document.getElementById('breakfast-button').addEventListener('click', () => {
  const breakfastSection = document.querySelector('.category-title:nth-of-type(odd)');
  breakfastSection.scrollIntoView({ behavior: 'smooth' });
});

// Scroll to the sweets section
document.getElementById('sweets-button').addEventListener('click', () => {
  const sweetsSection = document.querySelector('.category-title:nth-of-type(even)');
  sweetsSection.scrollIntoView({ behavior: 'smooth' });
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2.5, // Number of buttons visible at a time
  spaceBetween: 10, // Space between buttons
  loop: true, // Enable loop mode
});

document.addEventListener("DOMContentLoaded", function() {
  const menuCards = document.querySelectorAll('.menu-card');

  const lazyLoad = target => {
      const io = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target.querySelector('img');
                  const dishName = entry.target.getAttribute('data-dish');
                  const dish = dishes.find(dish => dish.name === dishName);
                  if (dish) {
                      img.setAttribute('src', dish.image);
                      observer.unobserve(entry.target);
                  }
              }
          });
      });

      io.observe(target);
  };

  menuCards.forEach(menuCard => {
      lazyLoad(menuCard);
  });
});


