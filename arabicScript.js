const menuCards = document.querySelectorAll('.menu-card');
const orderList = document.getElementById('order-list');
const sendOrderButton = document.getElementById('send-order');
const totalPriceElement = document.getElementById('total-price');




// Replace this with actual menu data
const dishes = [
  // ---------------Breakfast--------------------

  {
    name: "كرواسون",
    price: "18 د.إ",
    image: "images/CROISSANT.jpeg",
    description: "عادي / جبنة / زعتر.",
    //brakfast
},
{
    name: "خبز بيض بيكون",
    price: "28 د.إ",
    image: "images/BACON EGG BUN.jpeg",
    description: "خبز ناعم / بيض مخفوق / لحم بيكون / صلصة سيراتشا.",
    //brakfast
},
{
    name: "توست التين",
    price: "34 د.إ",
    image: "images/FIG TOAST.jpeg",
    description: "خبز زنجبيل / زعتر / تين ناضج / أوراق روكا / عسل.",
    //brakfast
},
{
    name: "سيميت محمرة",
    price: '38 د.إ',
    image: 'images/SIMIT MUHAMMARA.jpg',
    description: 'بيض / محمرة / لبنة تركية / زبدة الفلفل الحار / خبز سيميت',
    //brakfast
},
{
    name: 'سلطة الليمون والذرة',
    price:'34 د.إ',
    image: 'images/LIME AND CORN SALAD.jpg',
    description : "سبانخ صغيرة / ورقة جرجير / جبنة فيتا / طماطم كرز / ذرة مشوية / ليمون / زيتون اسود ",
    //brakfast
},
{
    name: 'كروك مدام',
    price: "43 د.إ",
    image: "images/CROQUE MADAME.jpg",
    description: "خبز زنجبيل / صلصة بيشاميل / جبن جرويير / بيض مسلوق / ديك رومي مدخن",
    //breakfast
},
{
    name: 'سلطة سيزر ريتوال',
    price: "32 د.إ",
    image: 'images/RITUAL CAESAR SALAD.jpg',
    description: "خس رومين / صلصة ريتوال المنزلية / لحم بقر مدخن بالدخان / بيض مسلوق / جبنة بارميزان / كروتون ثوم",
    //brakfast
},
{
    name: "سلطة البوراتبيلو",
    price: "47 د.إ",
    image: 'images/BURATA SALAD.jpg',
    description: 'جبنة بوراتا / تمر / سلطة سبانخ صغيرة',
    //brakfast
},
{
    name: "بيض المحار",
    price: "39 د.إ",
    image: "images/AVOCADO POACHED EGG.jpg",
    description: "خبز حمضيات مصنوع منزليًا مع اختيار البيض", 
    //breakfast
}, 


{
    name: "بورتوبيلو بينيديكت",
    price: "43 د.إ",
    image: "images/PORTOBELLO BENEDICT.jpg",
    description: "كرواسون عادي / صلصة بيشاميل الكمأة / فطر بورتوبيلو / صلصة هولنداز / بيض / بابريكا",
    //brakfast
},

{
    name: "بيض تركي",
    price: '38 د.إ',
    image: 'images/TURKISH EGG.jpg',
    description: "لبنة طازجة / زبادي / بقدونس / ورق النعناع / فلفل أسود",
    //brakfast
},
{
    name: "توست الفطر",
    price: "34 د.إ",
    image: "images/MUSHROOM TOAST.jpg",
    description: "خبز حمضيات مصنوع منزليًا / جبنة فيلادلفيا / مزيج فطر",
    //brakfast
},
{
    name: "موزاريلا بيستو",
    price: "34 د.إ",
    image: "images/MOZZARELLA PESTO.jpg",
    description: "خبز حمضيات / صلصة بيستو / طماطم كرز / جبنة موتزاريلا بافالو",
    //brakfast
},
{
    name: "توست الأفوكادو",
    price: "36 د.إ",
    image: "images/AVOCADO TOAST.jpg",
    description: "خبز حمضيات مصنوع منزليًا / جبنة فيتا / أفوكادو / بذور سوداء / رقائق فلفل حار / ليمون",
    //brakfast
},
{
    name: "بيض المحار الأفوكادو",
    price: "39 د.إ",
    image: "images/AVOCADO SCRAMBLE EGG.jpg",
    description:"خبز حمضيات مصنوع منزليًا مع اختيار البيض",
    //brakfast
},
{
    name: "أومليت",
    price: "36 د.إ",
    image: "images/OMELETTE.jpg",
    description: "محشوة: جبنة.....اختر: طماطم / فطر / سبانخ / سلطة مشكلة",
    //brakfast
},

//----------------sweet delight------------------
{
    name: "تشيز كيك ناعم",
    price: "36 د.إ",
    image: "images/FLUFFY CHEESE CAKE.jpg",
    description: 'جبن كريمي / مستخلص ليمون / بسكويت هضمي / صلصة توت بري',
    //SWEET DELIGHT
},
{
    name: "مون بلان",
    price: "36 د.إ",
    image: "images/MONT BLANC.jpeg",
    description: "شوكولاتة فطيرة مخبوزة / آيس كريم / صلصة شوكولاتة حليب.",
    //SWEET DELIGHT
},
{
    name: "تارت الفول السوداني",
    price: "36 د.إ",
    image: "images/PEANUT BUTTER TART.jpg",
    description: "قاعدة تارت شوكولاتة / زخرفة تارت",
    //SWEET DELIGHT
},
{
    name: "السعادة الذهبية",
    price: "43 د.إ",
    image: "images/GOLDEN DELIGHT.jpg",
    description: "بريوش كريسبي جديد مصنوع منزليًا / آيس كريم فانيليا / شوكولاتة",
    //SWEET DELIGHT
}

];
// Function to calculate and display the total price
function updateTotalPrice() {
  let totalPrice = 0;
  const orderItems = orderList.querySelectorAll('li');
  orderItems.forEach(item => {
    const priceString = item.textContent.split(' - ')[1]; // Extract price from item text
    const price = parseFloat(priceString.slice(0, -3)); // Convert string price to number
    totalPrice += price;
  });

  totalPriceElement.textContent = `الاجمالي : ${totalPrice.toFixed(2)} د.إ`;
  return totalPrice;
}


// Event listener for adding items to the order list
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

  const description = document.createElement('p');
  description.textContent = dish.description;
  card.appendChild(description);

  const price = document.createElement('p');
  price.textContent = `السعر : ${dish.price}`;
  card.appendChild(price);

  const addButton = document.createElement('button');
  addButton.classList.add('add-button');
  addButton.textContent = '+';
  addButton.addEventListener('click', () => {
    // Add item to order list and update total price
    const listItem = document.createElement('li');
    listItem.textContent = `${dish.name} - ${dish.price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      listItem.remove();
      updateTotalPrice();
    });

    listItem.appendChild(deleteButton);
    orderList.appendChild(listItem);
    updateTotalPrice();
  });
  card.appendChild(addButton);

  menuCards.item(index).replaceWith(card);
});
  

sendOrderButton.addEventListener('click', () => {
  let orderText = "طلبك لدى ريتشوال \n";
  const carNumber = document.getElementById('Car number').value;
  const city = document.getElementById('city').value;
  const payment = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMessage = document.getElementById('payment-message');
  const allergy = document.getElementById('allergy').value;
  const totalPrice22 = updateTotalPrice(); // Get the total price

  
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

  //orderText += `\nTotal: ${totalPrice}`;
  orderText += `طريقه الدفع: ${paymentMethod}\n`;
  orderText += `رقم السيارة: ${city} ${carNumber}\nالرجاء توضيح أي تعديلات أو تعليمات للتسليم.\n.`;
  orderText += `الحساسية: ${allergy}\n  السعر الإجمالي: ${totalPrice22.toFixed(2)} درهم إماراتي`;


  const phoneNumber = '+97137532600'; // Replace with your phone number
  orderText = orderText.replaceAll('Delete', '');

  const encodedText = encodeURIComponent(orderText);
  const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  window.open(url, '_blank');
});

updateTotalPrice();


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

const floatingButton = document.getElementById('floating-button');
const orderContainer = document.getElementById('order-container');
const closeButton = document.getElementById('close-button');

floatingButton.addEventListener('click', () => {
    orderContainer.style.display = 'block'; // Show the order container
});

closeButton.addEventListener('click', () => {
    orderContainer.style.display = 'none'; // Hide the order container
});

function goToArabic() {
  window.location.href = "arabic.html";
}

function goToEnglish(){
  window.location.href = "index.html";
}

