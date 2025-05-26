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
