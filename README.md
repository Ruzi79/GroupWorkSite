# BLACK MEAT

This project is a food ordering website called “BLACK MEAT.” The website allows users to browse the menu easily and place orders from various food categories. A navigation menu provides quick access to the homepage, menu, and contact sections. Each dish includes an image, a short description, a price, and an “Order Now” button. The site also supports filtering food items by categories through tab buttons.

```html
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BLACK MEAT | Yemək Sifarişi</title>
  <link rel="stylesheet" href="style.css">
  </head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">BLACK<span>MEAT</span></div>
      <nav>
        <ul>
          <li><a href="#home">Ana Səhifə</a></li>
          <li><a href="#menu">Menyu</a></li>
          <li><a href="#contact">Əlaqə</a></li>
          <li class="cart-icon">
            <a href="#order-summary">🛒</a>
            <span class="cart-count" id="cart-count">0</span>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Home Section -->
  <section id="home" class="home-section">
    <div class="hero">
      <h1>BLACK MEAT Restoranına Xoş Gəlmisiniz</h1>
      <p>Ən dadlı yeməkləri birbaşa qapınıza çatdırırıq. Təzə inqrediyentlər və xüsusi reseptlərlə hazırlanmış yeməklərimizi kəşf edin.</p>
      <a href="#menu" class="hero-button">Menyuya Baxın</a>
    </div>


  <main class="container" id="menu">
    <div class="menu-container">
      <div class="category-tabs">
        <button class="category-tab active" data-category="all">Hamısı</button>
        <button class="category-tab" data-category="azerbaijan">Azərbaycan Mətbəxi</button>
        <button class="category-tab" data-category="kebabs">Kabablar</button>
        <button class="category-tab" data-category="soups">Şorbalar</button>
        <button class="category-tab" data-category="pizza">Pizza</button>
        <button class="category-tab" data-category="salads">Salatlar</button>
        <button class="category-tab" data-category="desserts">Desertlər</button>
        <button class="category-tab" data-category="drinks">İçkilər</button>
      </div>

      <!-- Azerbaijan Cuisine Section -->
      <section class="menu-section" id="azerbaijan">
        <h2 class="section-title">Azərbaycan Mətbəxi</h2>
        <div class="menu-items">
          <!-- Azerbaijan Cuisine Item 1 -->
          <div class="food-item" data-id="az1" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.rfgSsvBSntY2h9qRSL2cogHaE4?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Plov" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Şah Plov <span class="badge">Məşhur</span></h3>
              <p class="food-description">Ənənəvi Azərbaycan plovu zəfəran, qurudulmuş meyvələr və qızardılmış ət ilə xəmir qabığında.</p>
              <div class="food-meta">
                <span class="food-price">₼18.50</span>
                <button class="add-button" data-id="az1" data-name="Şah Plov" data-price="18.50">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Azerbaijan Cuisine Item 2 -->
          <div class="food-item" data-id="az2" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.ZS4qnv7czL-AzQC1wEeRMQHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Dolma" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Yarpaq Dolması</h3>
              <p class="food-description">Üzüm yarpaqlarına bükülmüş ədviyyatlı qiymə, təzə göyərti və xama ilə verilir.</p>
              <div class="food-meta">
                <span class="food-price">₼14.90</span>
                <button class="add-button" data-id="az2" data-name="Yarpaq Dolması" data-price="14.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Azerbaijan Cuisine Item 3 -->
          <div class="food-item" data-id="az3" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.GLBzH-31I96csInQmyLYLwHaDO?w=326&h=152&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Qutab" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Qutab <span class="badge">Məşhur</span></h3>
              <p class="food-description">Nazik xəmirdə göyərti, ət və ya balqabaq içliyi ilə hazırlanmış ənənəvi Azərbaycan yeməyi.</p>
              <div class="food-meta">
                <span class="food-price">₼9.50</span>
                <button class="add-button" data-id="az3" data-name="Qutab" data-price="9.50">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Azerbaijan Cuisine Item 4 -->
          <div class="food-item" data-id="az4" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.GmiAWtHNSSvWOKfGXHP7dQHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Dushbara" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Düşbərə</h3>
              <p class="food-description">Kiçik ət düşbərələri zəngin bulyonda, təzə göyərti və sirkə ilə verilir.</p>
              <div class="food-meta">
                <span class="food-price">₼12.90</span>
                <button class="add-button" data-id="az4" data-name="Düşbərə" data-price="12.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Azerbaijan Cuisine Item 5 -->
          <div class="food-item" data-id="az5" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.tF9U7SHWImpW4kIQvuO4YAHaFf?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Saj" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Sadj İçi</h3>
              <p class="food-description">Xüsusi qabda bişirilmiş ət və tərəvəzlər, ədviyyatlar və göyərti ilə.</p>
              <div class="food-meta">
                <span class="food-price">₼24.90</span>
                <button class="add-button" data-id="az5" data-name="Sadj İçi" data-price="24.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Azerbaijan Cuisine Item 6 -->
          <div class="food-item" data-id="az6" data-category="azerbaijan">
            <img src="https://th.bing.com/th/id/OIP.lqPtMRW9cyPTZptUQD-1BAHaE5?w=292&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Badimjan Dolmasi" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Badımcan Dolması</h3>
              <p class="food-description">Qiymə ilə doldurulmuş badımcan, pomidor və bibər, xüsusi sousu ilə.</p>
              <div class="food-meta">
                <span class="food-price">₼15.90</span>
                <button class="add-button" data-id="az6" data-name="Badımcan Dolması" data-price="15.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Kebabs Section -->
      <section class="menu-section" id="kebabs">
        <h2 class="section-title">Kabablar</h2>
        <div class="menu-items">
          <!-- Kebab Item 1 -->
          <div class="food-item" data-id="k1" data-category="kebabs">
            <img src="https://th.bing.com/th/id/OIP.VsdC4b5D3tcwDAcaSa4SpAHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Lülə Kabab" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Lülə Kabab <span class="badge">Məşhur</span></h3>
              <p class="food-description">Qoyun ətindən hazırlanmış ənənəvi Azərbaycan kababı, sumaq və göyərti ilə verilir.</p>
              <div class="food-meta">
                <span class="food-price">₼16.90</span>
                <button class="add-button" data-id="k1" data-name="Lülə Kabab" data-price="16.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>
```



This CSS file controls the overall look and design of the website. It uses variables to manage colors, spacing, shadows, and border-radius for easier styling updates. All elements have their margins and paddings reset to ensure a clean layout and consistent sizing.

The header is sticky at the top with a centered logo and navigation menu. The main content is arranged in two columns: the menu and the order summary. Food items are displayed as cards with shadows and a hover effect for better interactivity. The order buttons are highlighted with a distinct color and are clickable. The order summary section is styled separately and also stays sticky while scrolling. Overall, this CSS provides a user-friendly and visually appealing design.

```css
:root {
      --primary-color: #e53e3e;
      --primary-dark: #c53030;
      --secondary-color: #38a169;
      --text-color: #2d3748;
      --light-text: #718096;
      --background: #ffffff;
      --light-bg: #f7fafc;
      --border-color: #e2e8f0;
      --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --border-radius: 0.5rem;
      --spacing-xs: 0.25rem;
      --spacing-sm: 0.5rem;
      --spacing-md: 1rem;
      --spacing-lg: 1.5rem;
      --spacing-xl: 2rem;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--light-bg);
    }

    header {
      background-color: var(--primary-color);
      color: white;
      padding: var(--spacing-lg) 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--spacing-lg);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: 700;
    }

    .logo span {
      color: #fbd38d;
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    nav li {
      margin-left: var(--spacing-lg);
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
    }

    nav a:hover {
      color: #fbd38d;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--spacing-xl);
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: var(--spacing-xl);
    }

    .menu-section {
      background-color: var(--background);
      border-radius: var(--border-radius);
      padding: var(--spacing-lg);
      box-shadow: var(--card-shadow);
      margin-bottom: var(--spacing-lg);
      scroll-margin-top: 100px;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: var(--spacing-md);
      padding-bottom: var(--spacing-sm);
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }

    .menu-items {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: var(--spacing-lg);
    }

    .food-item {
      background-color: var(--background);
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--card-shadow);
      transition: transform 0.3s ease;
      border: 1px solid var(--border-color);
    }

    .food-item:hover {
      transform: translateY(-5px);
    }

    .food-image {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .food-info {
      padding: var(--spacing-md);
    }

    .food-title {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: var(--spacing-xs);
    }

    .food-description {
      color: var(--light-text);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-sm);
      height: 60px;
      overflow: hidden;
    }

    .food-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--spacing-md);
    }

    .food-price {
      font-weight: 700;
      color: var(--text-color);
      font-size: 1.1rem;
    }

    .add-button {
      background-color: var(--secondary-color);
      color: white;
      border: none;
      padding: var(--spacing-xs) var(--spacing-md);
      border-radius: var(--border-radius);
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .add-button:hover {
      background-color: #2f855a;
    }

    .add-button:focus {
      outline: 2px solid #2f855a;
      outline-offset: 2px;
    }

    .order-summary {
      background-color: var(--background);
      border-radius: var(--border-radius);
      padding: var(--spacing-lg);
      box-shadow: var(--card-shadow);
      position: sticky;
      top: 100px;
      height: fit-content;
    }

    .order-title {
      font-size: 1.3rem;
      margin-bottom: var(--spacing-md);
      padding-bottom: var(--spacing-sm);
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }

    .order-items {
      margin-bottom: var(--spacing-lg);
      max-height: 300px;
      overflow-y: auto;
    }
```


In this section, I added cart functionality. Users can add products to the cart, remove them, and change their quantity. Cart data is also stored using localStorage. Additionally, category-based filtering and a notification when a product is added to the cart have been implemented.

```js
 // Cart functionality
    let cart = [];
    
    // DOM Elements
    const orderItems = document.getElementById('order-items');
    const emptyCart = document.getElementById('empty-cart');
    const totalPrice = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');
    const checkoutButton = document.getElementById('checkout-button');
    const notification = document.getElementById('notification');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const addButtons = document.querySelectorAll('.add-button');
    
    // Initialize
    updateCartDisplay();
    
    // Add event listeners to all "Add to Order" buttons
    addButtons.forEach(button => {
      button.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        
        addToCart(id, name, price);
        showNotification(`${name} səbətinizə əlavə edildi!`);
      });
    });
    
    // Category tabs functionality
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        categoryTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        filterItems(category);
        
        // If not "all", scroll to the section
        if (category !== 'all') {
          const section = document.getElementById(category);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
    
    // Filter items based on category
    function filterItems(category) {
      const items = document.querySelectorAll('.food-item');
      
      if (category === 'all') {
        items.forEach(item => {
          item.closest('.food-item').classList.remove('hidden');
        });
        return;
      }
      
      items.forEach(item => {
        if (item.getAttribute('data-category') === category) {
          item.closest('.food-item').classList.remove('hidden');
        } else {
          item.closest('.food-item').classList.add('hidden');
        }
      });
    }
    
    // Add item to cart
    function addToCart(id, name, price) {
      // Check if item already exists in cart
      const existingItem = cart.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: id,
          name: name,
          price: price,
          quantity: 1
        });
      }
      
      updateCartDisplay();
    }
    
    // Remove item from cart
    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      updateCartDisplay();
    }
    
    // Update item quantity
    function updateQuantity(id, change) {
      const item = cart.find(item => item.id === id);
      
      if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
          removeFromCart(id);
        } else {
          updateCartDisplay();
        }
      }
    }
    
    // Update cart display
    function updateCartDisplay() {
      // Clear current items
      orderItems.innerHTML = '';
      
      // Show empty cart message if cart is empty
      if (cart.length === 0) {
        orderItems.appendChild(emptyCart);
        checkoutButton.disabled = true;
        cartCount.textContent = '0';
      } else {
        emptyCart.remove();
        checkoutButton.disabled = false;
        
        // Add each item to the display
        cart.forEach(item => {
          const orderItem = document.createElement('div');
          orderItem.className = 'order-item';
          
          orderItem.innerHTML = `
            <div class="item-name">
              <span class="item-quantity">${item.quantity}</span>
              ${item.name}
            </div>
            <div class="item-controls">
              <button class="quantity-btn decrease" data-id="${item.id}">-</button>
              <button class="quantity-btn increase" data-id="${item.id}">+</button>
              <span class="item-price">₼${(item.price * item.quantity).toFixed(2)}</span>
              <button class="remove-item" data-id="${item.id}">×</button>
            </div>
          `;
          
          orderItems.appendChild(orderItem);
        });
        
        // Add event listeners to the new buttons
        document.querySelectorAll('.decrease').forEach(btn => {
          btn.addEventListener('click', function() {
            updateQuantity(this.getAttribute('data-id'), -1);
          });
        });
        
        document.querySelectorAll('.increase').forEach(btn => {
          btn.addEventListener('click', function() {
            updateQuantity(this.getAttribute('data-id'), 1);
          });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
          btn.addEventListener('click', function() {
            removeFromCart(this.getAttribute('data-id'));
          });
        });
        
        // Update cart count
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
      }
      
      // Update total price
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      totalPrice.textContent = `₼${total.toFixed(2)}`;
      
      // Save cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Show notification
    function showNotification(message) {
      notification.textContent = message;
      notification.classList.add('show');
      
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
    }
    
    // Load cart from localStorage on page load
    document.addEventListener('DOMContentLoaded', function() {
      const savedCart = localStorage.getItem('cart');
      
      if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
      }
      
      // Checkout button functionality
      checkoutButton.addEventListener('click', function() {
        alert('Sifarişiniz üçün təşəkkür edirik! Cəmi: ' + totalPrice.textContent);
        cart = [];
        updateCartDisplay();
      });
    });
```
 In this part we have 

Drink Items (Menu)
Each .food-item represents a drink on the menu:

data-id and data-category="drinks": Used for JavaScript filtering and cart functionality.

<img>: Displays the drink image.

.food-info: Contains the drink name, description, and price.

.add-button: A button to add the drink to the cart. Includes custom data-id, data-name, and data-price attributes for scripting.

Items included:

Buzlu Qəhvə – Iced coffee with milk and sweetener.

Təzə Limonad – Freshly squeezed lemonade.

Manqo Lassi – A traditional Indian mango yogurt drink with cardamom.

📞 Contact Section
Allows users to get in touch or find business info:

#contact: Section for contact.

.contact-form: Input form for name, email, phone, and message.

.submit-button: Sends the form (static in this code unless connected to a backend).

.contact-info: Displays address, hours, and contact details.

🛒 Order Summary (Cart Sidebar)
Displays user’s current order:

#order-summary: Sticky/side panel showing the cart.

.order-items: Where selected items will appear (via JavaScript).

.empty-cart: Message shown when no items are in the cart.

.order-total: Shows total price of items.

.checkout-button: Button to complete the order (initially disabled).

👣 Footer
Site-wide footer with navigation and contact info:

.footer-container: Grid layout with columns.

Footer columns:

BLACK MEAT: Brand and main links.

Menyumuz: Menu shortcuts.

Çatdırılma: Delivery info.

Əlaqə: Contact info again for quick access.

.copyright

Simple copyright.

🔔 Notification Message
.notification: Hidden alert that appears when an item is added to the cart.

Message: “Məhsul səbətinizə əlavə edildi!” ("Product added to your cart!")

```html
    <!-- Drink Item 2 -->
          <div class="food-item" data-id="dr2" data-category="drinks">
            <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699" alt="Buzlu Qəhvə" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Buzlu Qəhvə</h3>
              <p class="food-description">Soyuq dəmlənmiş qəhvə buz üzərində seçdiyiniz süd və şirinləşdirici ilə.</p>
              <div class="food-meta">
                <span class="food-price">₼5.90</span>
                <button class="add-button" data-id="dr2" data-name="Buzlu Qəhvə" data-price="5.90">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Drink Item 3 -->
          <div class="food-item" data-id="dr3" data-category="drinks">
            <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd" alt="Təzə Limonad" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Təzə Limonad</h3>
              <p class="food-description">Təzə sıxılmış limonlar tam uyğun şirinliklə.</p>
              <div class="food-meta">
                <span class="food-price">₼5.10</span>
                <button class="add-button" data-id="dr3" data-name="Təzə Limonad" data-price="5.10">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>

          <!-- Drink Item 4 -->
          <div class="food-item" data-id="dr4" data-category="drinks">
            <img src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d" alt="Manqo Lassi" class="food-image">
            <div class="food-info">
              <h3 class="food-title">Manqo Lassi</h3>
              <p class="food-description">Ənənəvi Hind yoğurt içkisi yetişmiş manqo və bir az hil ilə qarışdırılıb.</p>
              <div class="food-meta">
                <span class="food-price">₼7.60</span>
                <button class="add-button" data-id="dr4" data-name="Manqo Lassi" data-price="7.60">
                  Sifariş Et
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section" id="contact">
        <h2 class="section-title">Əlaqə</h2>
        <div class="contact-grid">
          <div class="contact-form">
            <div class="form-group">
              <label for="name">Adınız</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">E-poçt</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Telefon</label>
              <input type="tel" id="phone" name="phone">
            </div>
            <div class="form-group">
              <label for="message">Mesajınız</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-button">Göndər</button>
          </div>
          <div class="contact-info">
            <div class="contact-item">
              <h3>Ünvan</h3>
              <p>Nizami küçəsi 5, Bakı, Azərbaycan</p>
            </div>
            <div class="contact-item">
              <h3>İş Saatları</h3>
              <p>Bazar ertəsi - Cümə: 10:00 - 22:00</p>
              <p>Şənbə - Bazar: 11:00 - 23:00</p>
            </div>
            <div class="contact-item">
              <h3>Əlaqə</h3>
              <p>Telefon: +994 12 345 67 89</p>
              <p>E-poçt: info@blackmeat.az</p>
           
      </section>
    </div>

    <aside class="order-summary" id="order-summary">
      <h2 class="order-title">Sifarişiniz</h2>
      <div class="order-items" id="order-items">
        <div class="empty-cart" id="empty-cart">Səbətiniz boşdur</div>
        <!-- Order items will be added dynamically here -->
      </div>
      <div class="order-total">
        <span>Cəmi:</span>
        <span id="total-price">₼0.00</span>
      </div>
      <button class="checkout-button" id="checkout-button" disabled>Sifarişi Tamamla</button>
    </aside>
  </main>

  <footer>
    <div class="footer-container">
      <div class="footer-column">
        <h3>BLACK MEAT</h3>
        <ul>
          <li><a href="#home">Ana Səhifə</a></li>
          <li><a href="#menu">Menyu</a></li>
          <li><a href="#contact">Əlaqə</a></li>
          <li><a href="#">Haqqımızda</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Menyumuz</h3>
        <ul>
          <li><a href="#pizza">Pizza</a></li>
          <li><a href="#burgers">Burgerlər</a></li>
          <li><a href="#pasta">Makaron</a></li>
          <li><a href="#salads">Salatlar</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Çatdırılma</h3>
        <ul>
          <li><a href="#">Çatdırılma Bölgələri</a></li>
          <li><a href="#">Çatdırılma Şərtləri</a></li>
          <li><a href="#">Sifariş İzləmə</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Əlaqə</h3>
        <p>Nizami küçəsi 5, Bakı</p>
        <p>+994 12 345 67 89</p>
        <p>info@blackmeat.az</p>
      </div>
      <div class="copyright">
        &copy; 2025 Black Meat. Bütün hüquqlar qorunur.
      </div>
    </div>
  </footer>

  <div class="notification" id="notification">Məhsul səbətinizə əlavə edildi!</div>
```
in this part we have 
 1. Order Section Styles (.order-item, .item-name, .item-quantity, .item-controls)
.order-item: Styles each item in the order/cart; lays out the item and its controls side by side with spacing and a bottom border.

.item-name: Contains the item name; aligned with the quantity indicator; flexible width.

.item-quantity: A small circular badge showing the quantity of the item, with white text on a primary-colored background.

.item-controls: Wraps buttons used to increase/decrease quantity or remove the item.

 2. Quantity Button Styles (.quantity-btn, .remove-item)
.quantity-btn: Circular +/– buttons used to change item quantity; styled with border and hover effect.

.remove-item: A text button to remove an item from the cart; turns darker on hover.

 3. Order Summary Total and Checkout (.order-total, .checkout-button)
.order-total: Displays the total cost; spaced and bold.

.checkout-button: Full-width button to place the order; styled with primary color, hover and focus effects.

 4. Category Tabs (.category-tabs, .category-tab, .category-tab.active)
.category-tabs: A horizontal scrollable container for category filters; sticky on top while scrolling.

.category-tab: Each tab button to filter menu items; styled with padding, borders, and hover effect.

.category-tab.active: Highlights the currently selected tab.

 5. Empty Cart Message
.empty-cart: Displays a centered message when the cart is empty with light-colored text.

 6. Badge and Cart Icon Counter (.badge, .cart-count, .cart-icon)
.badge: A small label (e.g., "New", "Hot") with a colored background.

.cart-count: A circular counter shown over the cart icon, indicating number of items.

.cart-icon: The icon container that holds the cart-count badge.

 7. Hero Section (.hero, .hero h1, .hero p, .hero-button)
.hero: The top "home" section with a background image and dark overlay, centered text, and padding.

.hero h1: Large heading text.

.hero p: Descriptive paragraph below the heading, centered.

.hero-button: Call-to-action button with hover effect.

 8. Features Section
.features: A responsive grid layout to display site features, such as fast delivery, fresh ingredients, etc., in columns.

```css

.order-item {
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-sm) 0;
      border-bottom: 1px solid var(--border-color);
    }

    .item-name {
      display: flex;
      align-items: center;
      flex: 1;
      margin-right: var(--spacing-sm);
    }

    .item-quantity {
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      margin-right: var(--spacing-sm);
      flex-shrink: 0;
    }

    .item-controls {
      display: flex;
      align-items: center;
    }

    .quantity-btn {
      background: none;
      border: 1px solid var(--border-color);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-weight: bold;
      margin: 0 var(--spacing-xs);
    }

    .quantity-btn:hover {
      background-color: var(--light-bg);
    }

    .remove-item {
      color: var(--primary-color);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      margin-left: var(--spacing-sm);
    }

    .remove-item:hover {
      color: var(--primary-dark);
    }

    .order-total {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 1.1rem;
      margin-top: var(--spacing-lg);
      padding-top: var(--spacing-md);
      border-top: 2px solid var(--border-color);
    }

    .checkout-button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: var(--spacing-md);
      border-radius: var(--border-radius);
      font-weight: 600;
      font-size: 1rem;
      width: 100%;
      margin-top: var(--spacing-lg);
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .checkout-button:hover {
      background-color: var(--primary-dark);
    }

    .checkout-button:focus {
      outline: 2px solid var(--primary-dark);
      outline-offset: 2px;
    }

    .category-tabs {
      display: flex;
      overflow-x: auto;
      margin-bottom: var(--spacing-lg);
      padding-bottom: var(--spacing-xs);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 80px;
      background-color: var(--light-bg);
      z-index: 90;
      padding-top: var(--spacing-md);
    }

    .category-tab {
      padding: var(--spacing-sm) var(--spacing-md);
      margin-right: var(--spacing-sm);
      background-color: var(--light-bg);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .category-tab.active {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }

    .category-tab:hover:not(.active) {
      background-color: #edf2f7;
    }

    .empty-cart {
      text-align: center;
      color: var(--light-text);
      padding: var(--spacing-lg) 0;
    }

    .badge {
      display: inline-block;
      padding: 0.25em 0.5em;
      font-size: 0.75em;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25rem;
      background-color: #f6ad55;
      color: #744210;
      margin-left: var(--spacing-sm);
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: var(--primary-color);
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: bold;
    }

    .cart-icon {
      position: relative;
      margin-left: var(--spacing-lg);
    }

    /* Home Section Styles */
    .hero {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 120px 20px;
      margin-bottom: var(--spacing-xl);
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: var(--spacing-md);
    }

    .hero p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto var(--spacing-lg);
    }

    .hero-button {
      background-color: var(--primary-color);
      color: white;
      border: none;
      padding: var(--spacing-md) var(--spacing-lg);
      border-radius: var(--border-radius);
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }

    .hero-button:hover {
      background-color: var(--primary-dark);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-xl);
    }
```
