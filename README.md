#BLACK MEAT

This project is a food ordering website called “BLACK MEAT.” The website allows users to browse the menu easily and place orders from various food categories. A navigation menu provides quick access to the homepage, menu, and contact sections. Each dish includes an image, a short description, a price, and an “Order Now” button. The site also supports filtering food items by categories through tab buttons.

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
