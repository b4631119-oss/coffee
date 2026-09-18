import { Language } from '../context/AppContext';

type TranslationKeys = {
  // Layout / Footer
  navHome: string;
  navMenu: string;
  navShop: string;
  navReserve: string;
  navAbout: string;
  navContact: string;
  footerDesc: string;
  footerQuickLinks: string;
  footerHours: string;
  footerVisitUs: string;
  footerMonFri: string;
  footerSaturday: string;
  footerSunday: string;
  footerPrivacy: string;
  footerReturns: string;
  footerRights: string;
  adminPanel: string;

  // Home
  homeWelcome: string;
  homeHeroTitle1: string;
  homeHeroTitle2: string;
  homeHeroDesc: string;
  homeOrderNow: string;
  homeReserveTable: string;
  homeFreshRoasted: string;
  homeLocallySourced: string;
  homeAwardWinning: string;
  homeFeaturedSubtitle: string;
  homeFeaturedTitle: string;
  homeFeaturedDesc: string;
  homeAdd: string;
  homeViewFullMenu: string;
  homeBestSellersSubtitle: string;
  homeBestSellersTitle: string;
  homeOurStorySubtitle: string;
  homeOurStoryTitle: string;
  homeOurStoryDesc1: string;
  homeOurStoryDesc2: string;
  homeLearnMore: string;
  homeYearsPassion: string;
  homeNewsletterTitle: string;
  homeNewsletterDesc: string;
  homeNewsletterPlaceholder: string;
  homeSubscribe: string;
  homeSubscribedMsg: string;

  // Menu
  menuTitle: string;
  menuDesc: string;
  menuSearch: string;
  menuFilter: string;
  menuShowing: string;
  menuItems: string;
  menuNoItems: string;
  menuAddToCart: string;
  menuAll: string;

  // Shop
  shopTitle: string;
  shopDesc: string;
  shopSearch: string;
  shopFreeShipping: string;
  shopSecure: string;
  shopFreshness: string;
  shopNoProducts: string;
  shopOnlyLeft: string;
  shopAdd: string;

  // About
  aboutTitle: string;
  aboutDesc: string;
  aboutStoryTitle: string;
  aboutStoryP1: string;
  aboutStoryP2: string;
  aboutStoryP3: string;
  aboutValuesTitle: string;
  aboutPassion: string;
  aboutPassionDesc: string;
  aboutSustainability: string;
  aboutSustainabilityDesc: string;
  aboutQuality: string;
  aboutQualityDesc: string;
  aboutCommunity: string;
  aboutCommunityDesc: string;
  aboutTeamTitle: string;
  aboutTeamDesc: string;
  aboutCTATitle: string;
  aboutCTADesc: string;
  aboutCTA1: string;
  aboutCTA2: string;

  // Contact
  contactTitle: string;
  contactDesc: string;
  contactSendMsg: string;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactSendBtn: string;
  contactSentTitle: string;
  contactSentDesc: string;
  contactSendAnother: string;
  contactInfoTitle: string;
  contactFAQTitle: string;
  contactCateringQ: string;
  contactCateringA: string;
  contactParkingQ: string;
  contactParkingA: string;
  contactWiFiQ: string;
  contactWiFiA: string;
  contactSubjects: string[];
  chatGreeting: string;
  chatReply: string;
  chatPlaceholder: string;
  chatTitle: string;

  // Reservation
  resTitle: string;
  resDesc: string;
  resBookTitle: string;
  resFullName: string;
  resEmail: string;
  resPhone: string;
  resDate: string;
  resTime: string;
  resSelectTime: string;
  resGuests: string;
  resGuest: string;
  resGuestsPlural: string;
  resCallUs: string;
  resOccasion: string;
  resOccasions: string[];
  resSpecialReqs: string;
  resConfirm: string;
  resVisitUs: string;
  resGoodToKnow: string;
  resGoodToKnowItems: string[];
  resConfirmedTitle: string;
  resConfirmedDesc: string;
  resConfirmedEmail: string;
  resSeeYouSoon: string;
  resMakeAnother: string;

  // Cart
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  cartStartShopping: string;
  cartContinueShopping: string;
  cartTitle: string;
  cartCheckout: string;
  cartOrderSummary: string;
  cartCoupon: string;
  cartApply: string;
  cartCouponApplied: string;
  cartSubtotal: string;
  cartDiscount: string;
  cartShipping: string;
  cartFree: string;
  cartTax: string;
  cartTotal: string;
  cartProceed: string;
  cartFreeShippingMsg: string;
  cartContactInfo: string;
  cartShippingAddr: string;
  cartPayment: string;
  cartPaymentDemo: string;
  cartPlaceOrder: string;
  cartYourOrder: string;
  cartOrderConfirmed: string;
  cartOrderConfirmedDesc: string;

  // Account
  accWelcomeBack: string;
  accCreateAccount: string;
  accSignInDesc: string;
  accJoinDesc: string;
  accFullName: string;
  accEmail: string;
  accPassword: string;
  accSignIn: string;
  accSignUp: string;
  accNoAccount: string;
  accHasAccount: string;
  accCoffeeLover: string;
  accMemberSince: string;
  accProfile: string;
  accOrderHistory: string;
  accWishlist: string;
  accSettings: string;
  accSignOut: string;
  accProfileTitle: string;
  accSaveChanges: string;
  accOrderHistoryTitle: string;
  accMyWishlist: string;
  accWishlistEmpty: string;
  accBrowseShop: string;
  accAddToCart: string;
  accRemove: string;
  accSettingsTitle: string;
  accEmailNotif: string;
  accSMSNotif: string;
  accNewsletter: string;
  accDelivered: string;
  accPhone: string;
  accFavoriteDrink: string;

  // Product Detail
  prodNotFound: string;
  prodBackToShop: string;
  prodHome: string;
  prodShop: string;
  prodReviews: string;
  prodRoastLevel: string;
  prodQuantity: string;
  prodInStock: string;
  prodOnlyLeft: string;
  prodAddToCart: string;
  prodBuyNow: string;
  prodFreeShipping: string;
  prod30DayReturns: string;
  prodSecurePayment: string;
  prodDescription: string;
  prodRoastProfile: string;
  prodRelatedTitle: string;

  // Static Pages
  staticPrivacyTitle: string;
  staticReturnsTitle: string;
};

const en: TranslationKeys = {
  navHome: 'Home',
  navMenu: 'Menu',
  navShop: 'Shop',
  navReserve: 'Reserve a Table',
  navAbout: 'About',
  navContact: 'Contact',
  footerDesc: 'Freshly roasted, lovingly brewed. Your neighborhood coffee sanctuary since 2018.',
  footerQuickLinks: 'Quick Links',
  footerHours: 'Opening Hours',
  footerVisitUs: 'Visit Us',
  footerMonFri: 'Mon - Fri',
  footerSaturday: 'Saturday',
  footerSunday: 'Sunday',
  footerPrivacy: 'Privacy Policy',
  footerReturns: 'Returns & Refunds',
  footerRights: '© 2026 Coffeetoria. All rights reserved.',
  adminPanel: 'Admin Panel',

  homeWelcome: 'Welcome to Coffeetoria',
  homeHeroTitle1: 'Start Your Morning with the',
  homeHeroTitle2: 'Perfect',
  homeHeroTitle3: 'Roast',
  homeHeroDesc: 'Freshly roasted. Cozy vibes. Perfect brew. Discover your new favorite cup at our neighborhood coffee sanctuary.',
  homeOrderNow: 'Order Now',
  homeReserveTable: 'Reserve a Table',
  homeFreshRoasted: 'Freshly Roasted Daily',
  homeLocallySourced: 'Locally Sourced Beans',
  homeAwardWinning: 'Award-Winning Roasts',
  homeFeaturedSubtitle: 'Our Signature Collection',
  homeFeaturedTitle: 'Featured Drinks',
  homeFeaturedDesc: 'Each cup is crafted with care, using beans roasted to perfection in our on-site roastery.',
  homeAdd: 'Add',
  homeViewFullMenu: 'View Full Menu',
  homeBestSellersSubtitle: 'Customer Favorites',
  homeBestSellersTitle: 'Best Sellers',
  homeOurStorySubtitle: 'Our Story',
  homeOurStoryTitle: 'Where Every Cup Tells a Story',
  homeOurStoryDesc1: "Born from a love of exceptional coffee and genuine connection, Coffeetoria has been the heart of our community since 2018. We source our beans from sustainable farms, roast them in-house, and serve every cup with a smile.",
  homeOurStoryDesc2: "Whether you're here for a quick espresso or a long afternoon with a good book, we've created a space that feels like home. Because great coffee isn't just about the beans — it's about the moments they create.",
  homeLearnMore: 'Learn More About Us',
  homeYearsPassion: 'Years of Passion',
  homeNewsletterTitle: 'Stay in the Loop',
  homeNewsletterDesc: 'Join our coffee-loving community. Get exclusive offers, new blend announcements, and brewing tips delivered to your inbox.',
  homeNewsletterPlaceholder: 'your@email.com',
  homeSubscribe: 'Subscribe',
  homeSubscribedMsg: '☕ Welcome to the family! Check your inbox for a special surprise.',

  menuTitle: 'Our Menu',
  menuDesc: 'From bold espressos to delicate pastries — every item is crafted with love and the finest ingredients.',
  menuSearch: 'Search menu items...',
  menuFilter: 'Filter',
  menuShowing: 'Showing',
  menuItems: 'items',
  menuNoItems: 'No items found. Try a different search or category.',
  menuAddToCart: 'Add to Cart',
  menuAll: 'All',

  shopTitle: 'Online Shop',
  shopDesc: 'Take the Coffeetoria experience home. Premium beans, artisan merchandise, and more — delivered to your door.',
  shopSearch: 'Search products...',
  shopFreeShipping: 'Free shipping over',
  shopSecure: 'Secure checkout',
  shopFreshness: 'Freshness guaranteed',
  shopNoProducts: 'No products found. Try adjusting your search.',
  shopOnlyLeft: 'Only left',
  shopAdd: 'Add',

  aboutTitle: 'Our Story',
  aboutDesc: 'Born from a passion for exceptional coffee and a desire to create a space where community thrives, Coffeetoria has been serving happiness one cup at a time since 2018.',
  aboutStoryTitle: 'From Bean to Cup, With Love',
  aboutStoryP1: "It all started with a simple dream: to create a place where the aroma of freshly roasted coffee fills the air, where conversations flow as freely as the espresso, and where every visitor feels like family.",
  aboutStoryP2: "Our founders, Sarah and Marcus, traveled to coffee-growing regions across Colombia, Ethiopia, and Guatemala. They returned with not just beans, but relationships — with farmers who share their commitment to sustainable, ethical practices.",
  aboutStoryP3: "Today, we roast in-house daily, ensuring every cup meets our exacting standards. From the first crack to the final pour, we obsess over every detail because we believe you deserve nothing less than extraordinary.",
  aboutValuesTitle: 'What We Stand For',
  aboutPassion: 'Passion',
  aboutPassionDesc: 'Every cup is crafted with genuine love for the art of coffee making.',
  aboutSustainability: 'Sustainability',
  aboutSustainabilityDesc: 'Ethically sourced beans, eco-friendly packaging, and zero-waste goals.',
  aboutQuality: 'Quality',
  aboutQualityDesc: 'From farm to cup, we never compromise on the quality of our ingredients.',
  aboutCommunity: 'Community',
  aboutCommunityDesc: 'We are more than a coffee shop — we are a gathering place for all.',
  aboutTeamTitle: 'Meet the Team',
  aboutTeamDesc: 'The passionate people behind every perfect cup',
  aboutCTATitle: 'Come Visit Us',
  aboutCTADesc: "We'd love to welcome you to our cozy corner of the world.",
  aboutCTA1: 'Reserve a Table',
  aboutCTA2: 'Get in Touch',

  contactTitle: 'Get in Touch',
  contactDesc: "Have a question, feedback, or just want to say hello? We'd love to hear from you.",
  contactSendMsg: 'Send Us a Message',
  contactName: 'Name *',
  contactEmail: 'Email *',
  contactSubject: 'Subject',
  contactMessage: 'Message *',
  contactSendBtn: 'Send Message',
  contactSentTitle: 'Message Sent!',
  contactSentDesc: "Thank you for reaching out. We'll get back to you within 24 hours.",
  contactSendAnother: 'Send Another Message',
  contactInfoTitle: 'Contact Information',
  contactFAQTitle: 'Quick FAQ',
  contactCateringQ: 'Do you offer catering?',
  contactCateringA: 'Yes! Contact us for events of 20+ guests.',
  contactParkingQ: 'Is there parking?',
  contactParkingA: 'Free street parking available. Bike racks too!',
  contactWiFiQ: 'Do you have WiFi?',
  contactWiFiA: 'Complimentary high-speed WiFi for all guests.',
  contactSubjects: ['General Inquiry', 'Order Support', 'Catering Request', 'Partnership', 'Feedback'],
  chatGreeting: "Hi there! 👋 Welcome to Coffeetoria. How can I help you today?",
  chatReply: "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to browse our menu or make a reservation!",
  chatPlaceholder: 'Type a message...',
  chatTitle: 'Live Chat',

  resTitle: 'Reserve a Table',
  resDesc: "Secure your cozy corner at Coffeetoria. Whether it's a morning coffee date or an evening catch-up, we've got a spot waiting for you.",
  resBookTitle: 'Book Your Table',
  resFullName: 'Full Name *',
  resEmail: 'Email *',
  resPhone: 'Phone',
  resDate: 'Date *',
  resTime: 'Time *',
  resSelectTime: 'Select time',
  resGuests: 'Guests *',
  resGuest: 'Guest',
  resGuestsPlural: 'Guests',
  resCallUs: '9+ (Call us)',
  resOccasion: 'Occasion (Optional)',
  resOccasions: ['Select occasion', 'Casual Visit', 'Birthday', 'Anniversary', 'Business Meeting', 'Date Night', 'Other'],
  resSpecialReqs: 'Special Requests',
  resConfirm: 'Confirm Reservation',
  resVisitUs: 'Visit Us',
  resGoodToKnow: 'Good to Know',
  resGoodToKnowItems: ['Reservations held for 15 minutes', 'Walk-ins always welcome', 'Free WiFi & power outlets', 'Pet-friendly patio seating', 'Wheelchair accessible'],
  resConfirmedTitle: 'Reservation Confirmed!',
  resConfirmedDesc: "We've reserved a table for",
  resConfirmedEmail: "We'll send a confirmation to",
  resSeeYouSoon: 'See you soon!',
  resMakeAnother: 'Make Another Reservation',

  cartEmptyTitle: 'Your Cart is Empty',
  cartEmptyDesc: "Looks like you haven't added anything yet. Explore our shop and find your perfect brew!",
  cartStartShopping: 'Start Shopping',
  cartContinueShopping: 'Continue Shopping',
  cartTitle: 'Shopping Cart',
  cartCheckout: 'Checkout',
  cartOrderSummary: 'Order Summary',
  cartCoupon: 'Coupon code',
  cartApply: 'Apply',
  cartCouponApplied: '✓ Coupon applied! You saved',
  cartSubtotal: 'Subtotal',
  cartDiscount: 'Discount',
  cartShipping: 'Shipping',
  cartFree: 'Free',
  cartTax: 'Tax',
  cartTotal: 'Total',
  cartProceed: 'Proceed to Checkout',
  cartFreeShippingMsg: 'more for free shipping!',
  cartContactInfo: 'Contact Information',
  cartShippingAddr: 'Shipping Address',
  cartPayment: 'Payment',
  cartPaymentDemo: 'Stripe / PayPal integration would go here.\nThis is a demo — no real payment is processed.',
  cartPlaceOrder: 'Place Order —',
  cartYourOrder: 'Your Order',
  cartOrderConfirmed: 'Order Confirmed!',
  cartOrderConfirmedDesc: "Thank you for your order! We're preparing your items with care. You'll receive a confirmation email shortly.",

  accWelcomeBack: 'Welcome Back',
  accCreateAccount: 'Create Account',
  accSignInDesc: 'Sign in to your Coffeetoria account',
  accJoinDesc: 'Join our coffee-loving community',
  accFullName: 'Full Name',
  accEmail: 'Email',
  accPassword: 'Password',
  accSignIn: 'Sign In',
  accSignUp: 'Sign Up',
  accNoAccount: "Don't have an account? ",
  accHasAccount: 'Already have an account? ',
  accCoffeeLover: 'Coffee Lover',
  accMemberSince: 'Member since 2026',
  accProfile: 'Profile',
  accOrderHistory: 'Order History',
  accWishlist: 'Wishlist',
  accSettings: 'Settings',
  accSignOut: 'Sign Out',
  accProfileTitle: 'My Profile',
  accSaveChanges: 'Save Changes',
  accOrderHistoryTitle: 'Order History',
  accMyWishlist: 'My Wishlist',
  accWishlistEmpty: 'Your wishlist is empty.',
  accBrowseShop: 'Browse Shop',
  accAddToCart: 'Add to Cart',
  accRemove: 'Remove',
  accSettingsTitle: 'Settings',
  accEmailNotif: 'Email Notifications',
  accSMSNotif: 'SMS Notifications',
  accNewsletter: 'Newsletter',
  accDelivered: 'Delivered',
  accPhone: 'Phone',
  accFavoriteDrink: 'Favorite Drink',

  prodNotFound: 'Product Not Found',
  prodBackToShop: 'Back to Shop',
  prodHome: 'Home',
  prodShop: 'Shop',
  prodReviews: 'reviews',
  prodRoastLevel: 'Roast Level:',
  prodQuantity: 'Quantity:',
  prodInStock: 'In Stock',
  prodOnlyLeft: 'Only left!',
  prodAddToCart: 'Add to Cart',
  prodBuyNow: 'Buy Now',
  prodFreeShipping: 'Free Shipping',
  prod30DayReturns: '30-Day Returns',
  prodSecurePayment: 'Secure Payment',
  prodDescription: 'description',
  prodRoastProfile: 'Roast Profile',
  prodRelatedTitle: 'You Might Also Like',

  staticPrivacyTitle: 'Privacy Policy',
  staticReturnsTitle: 'Returns & Refunds',
};

const ru: TranslationKeys = {
  navHome: 'Главная',
  navMenu: 'Меню',
  navShop: 'Магазин',
  navReserve: 'Забронировать',
  navAbout: 'О нас',
  navContact: 'Контакты',
  footerDesc: 'Свежеобжаренный, приготовленный с любовью. Ваш уютный кофейный уголок   .',
  footerQuickLinks: 'Быстрые ссылки',
  footerHours: 'Часы работы',
  footerVisitUs: 'Навестите нас',
  footerMonFri: 'Пн - Пт',
  footerSaturday: 'Суббота',
  footerSunday: 'Воскресенье',
  footerPrivacy: 'Политика конфиденциальности',
  footerReturns: 'Возврат и обмен',
  footerRights: '© 2026 Coffeetoria. Все права защищены.',
  adminPanel: 'Панель администратора',

  homeWelcome: 'Добро пожаловать в Coffeetoria',
  homeHeroTitle1: 'Начните утро с',
  homeHeroTitle2: 'идеальным',
  homeHeroTitle3: 'обжаром',
  homeHeroDesc: 'Свежеобжаренный. Уютная атмосфера. Идеальный напиток. Откройте для себя ваш новый любимый кофе.',
  homeOrderNow: 'Заказать',
  homeReserveTable: 'Забронировать столик',
  homeFreshRoasted: 'Свежеобжаренный ежедневно',
  homeLocallySourced: 'Зёрна местного производства',
  homeAwardWinning: 'Награждённая обжарка',
  homeFeaturedSubtitle: 'Наша фирменная коллекция',
  homeFeaturedTitle: 'Избранные напитки',
  homeFeaturedDesc: 'Каждая чашка приготовлена с заботой, из зёрен, обжаренных до совершенства в нашей кофейне.',
  homeAdd: 'Добавить',
  homeViewFullMenu: 'Посмотреть меню',
  homeBestSellersSubtitle: 'Фавориты клиентов',
  homeBestSellersTitle: 'Бестселлеры',
  homeOurStorySubtitle: 'Наша история',
  homeOurStoryTitle: 'Где каждая чашка рассказывает историю',
  homeOurStoryDesc1: 'Рождённая из любви к исключительному кофе и искреннему общению, Coffeetoria является сердцем нашего сообщества с 2018 года. Мы берём зёрна с ферм, придерживающихся устойчивого развития, обжариваем их на месте и подаём каждую чашку с улыбкой.',
  homeOurStoryDesc2: 'Будь то быстрый эспрессо или долгий вечер с книгой, мы создали пространство, которое ощущается как дома. Потому что отличный кофе — это не только о зёрнах, но и о моментах, которые они создают.',
  homeLearnMore: 'Узнайте больше о нас',
  homeYearsPassion: 'Лет страсти',
  homeNewsletterTitle: 'Будьте в курсе',
  homeNewsletterDesc: 'Присоединяйтесь к нашему сообществу любителей кофе. Получайте эксклюзивные предложения, анонсы новых смесей и советы по завариванию.',
  homeNewsletterPlaceholder: 'ваш@email.com',
  homeSubscribe: 'Подписаться',
  homeSubscribedMsg: '☕ Добро пожаловать в семью! Проверьте почту — вас ждёт сюрприз.',

  menuTitle: 'Наше меню',
  menuDesc: 'От крепких эспрессо до изысканной выпечки — каждое блюдо приготовлено с любовью и из лучших ингредиентов.',
  menuSearch: 'Поиск по меню...',
  menuFilter: 'Фильтр',
  menuShowing: 'Показано',
  menuItems: 'товаров',
  menuNoItems: 'Ничего не найдено. Попробуйте другой запрос или категорию.',
  menuAddToCart: 'В корзину',
  menuAll: 'Все',

  shopTitle: 'Интернет-магазин',
  shopDesc: 'Заберите атмосферу Coffeetoria домой. Премиальные зёрна, ремесленный мерч и многое другое — доставим к вашей двери.',
  shopSearch: 'Поиск товаров...',
  shopFreeShipping: 'Бесплатная доставка от',
  shopSecure: 'Безопасная оплата',
  shopFreshness: 'Гарантия свежести',
  shopNoProducts: 'Товары не найдены. Попробуйте изменить поиск.',
  shopOnlyLeft: 'Осталось',
  shopAdd: 'Добавить',

  aboutTitle: 'Наша история',
  aboutDesc: 'Рождённая из страсти к исключительному кофе и желания создать пространство, где процветает сообщество, Coffeetoria дарит счастье   .',
  aboutStoryTitle: 'От зерна до чашки, с любовью',
  aboutStoryP1: 'Всё началось с простой мечты: создать место, где аромат свежеобжаренного кофе наполняет воздух, где беседы текут так же свободно, как эспрессо, и где каждый гость ощущает себя членом семьи.',
  aboutStoryP2: 'Наши основатели, Сара и Маркус, путешествовали по регионам выращивания кофе в Колумбии, Эфиопии и Гватемале. Они вернулись не только с зёрнами, но и с партнёрствами — с фермерами, разделяющими их приверженность устойчивым и этичным практикам.',
  aboutStoryP3: 'Сегодня мы обжариваем зёрна ежедневно, гарантируя, что каждая чашка соответствует нашим строгим стандартам. От первого треска до последнего налива — мы obsessively заботимся о каждой детали, потому что верим: вы заслуживаете только самого необыкновенного.',
  aboutValuesTitle: 'Наши ценности',
  aboutPassion: 'Страсть',
  aboutPassionDesc: 'Каждая чашка создана с искренней любовью к искусству приготовления кофе.',
  aboutSustainability: 'Устойчивое развитие',
  aboutSustainabilityDesc: 'Этично добытые зёрна, экологичная упаковка и цель — нулевые отходы.',
  aboutQuality: 'Качество',
  aboutQualityDesc: 'От фермы до чашки — мы никогда не идём на компромиссы в качестве ингредиентов.',
  aboutCommunity: 'Сообщество',
  aboutCommunityDesc: 'Мы — больше, чем кофейня. Мы — место встречи для всех.',
  aboutTeamTitle: 'Наша команда',
  aboutTeamDesc: 'Страстные люди за каждой идеальной чашкой',
  aboutCTATitle: 'Навестите нас',
  aboutCTADesc: 'Мы будем рады приветствовать вас в нашем уютном уголке мира.',
  aboutCTA1: 'Забронировать столик',
  aboutCTA2: 'Связаться с нами',

  contactTitle: 'Свяжитесь с нами',
  contactDesc: 'Есть вопрос, отзыв или просто хотите сказать привет? Мы будем рады вас услышать.',
  contactSendMsg: 'Отправьте нам сообщение',
  contactName: 'Имя *',
  contactEmail: 'Электронная почта *',
  contactSubject: 'Тема',
  contactMessage: 'Сообщение *',
  contactSendBtn: 'Отправить',
  contactSentTitle: 'Сообщение отправлено!',
  contactSentDesc: 'Спасибо за обращение! Мы ответим вам в течение 24 часов.',
  contactSendAnother: 'Отправить ещё',
  contactInfoTitle: 'Контактная информация',
  contactFAQTitle: 'Частые вопросы',
  contactCateringQ: 'Вы предоставляете кейтеринг?',
  contactCateringA: 'Да! Свяжитесь с нами для мероприятий от 20 человек.',
  contactParkingQ: 'Есть ли парковка?',
  contactParkingA: 'Бесплатная уличная парковка. Есть велопарковки!',
  contactWiFiQ: 'Есть ли WiFi?',
  contactWiFiA: 'Бесплатный высокоскоростной WiFi для всех гостей.',
  contactSubjects: ['Общий запрос', 'Поддержка заказа', 'Кейтеринг', 'Партнёрство', 'Отзыв'],
  chatGreeting: 'Привет! 👋 Добро пожаловать в Coffeetoria. Чем могу помочь сегодня?',
  chatReply: 'Спасибо за сообщение! Наша команда скоро ответит вам. А пока — посмотрите наше меню или забронируйте столик!',
  chatPlaceholder: 'Введите сообщение...',
  chatTitle: 'Онлайн-чат',

  resTitle: 'Забронировать столик',
  resDesc: 'Зарезервируйте уютный уголок в Coffeetoria. Будь то утреннее кофе свидание или вечерняя встреча — у нас есть место для вас.',
  resBookTitle: 'Забронировать столик',
  resFullName: 'Полное имя *',
  resEmail: 'Электронная почта *',
  resPhone: 'Телефон',
  resDate: 'Дата *',
  resTime: 'Время *',
  resSelectTime: 'Выберите время',
  resGuests: 'Гости *',
  resGuest: 'Гость',
  resGuestsPlural: 'Гости',
  resCallUs: '9+ (Позвоните нам)',
  resOccasion: 'Повод (необязательно)',
  resOccasions: ['Выберите повод', 'Повседневный визит', 'День рождения', 'Годовщина', 'Деловая встреча', 'Свидание', 'Другое'],
  resSpecialReqs: 'Особые пожелания',
  resConfirm: 'Подтвердить бронирование',
  resVisitUs: 'Навестите нас',
  resGoodToKnow: 'Полезно знать',
  resGoodToKnowItems: ['Бронирование действует 15 минут', 'Гости всегда приветствуются', 'Бесплатный WiFi и розетки', 'Пет-френдли терраса', 'Доступность для колясок'],
  resConfirmedTitle: 'Бронирование подтверждено!',
  resConfirmedDesc: 'Мы зарезервировали столик для',
  resConfirmedEmail: 'Мы отправим подтверждение на',
  resSeeYouSoon: 'До встречи!',
  resMakeAnother: 'Сделать ещё одно бронирование',

  cartEmptyTitle: 'Ваша корзина пуста',
  cartEmptyDesc: 'Похоже, вы ещё ничего не добавили. Загляните в наш магазин и найдите идеальный напиток!',
  cartStartShopping: 'Начать покупки',
  cartContinueShopping: 'Продолжить покупки',
  cartTitle: 'Корзина',
  cartCheckout: 'Оформление',
  cartOrderSummary: 'Итого',
  cartCoupon: 'Купон',
  cartApply: 'Применить',
  cartCouponApplied: '✓ Купон применён! Вы сэкономили',
  cartSubtotal: 'Подытог',
  cartDiscount: 'Скидка',
  cartShipping: 'Доставка',
  cartFree: 'Бесплатно',
  cartTax: 'Налог',
  cartTotal: 'Итого',
  cartProceed: 'Перейти к оформлению',
  cartFreeShippingMsg: 'ещё для бесплатной доставки!',
  cartContactInfo: 'Контактная информация',
  cartShippingAddr: 'Адрес доставки',
  cartPayment: 'Оплата',
  cartPaymentDemo: 'Здесь будет интеграция Stripe / PayPal.\nЭто демо — реальная оплата не обрабатывается.',
  cartPlaceOrder: 'Оформить заказ —',
  cartYourOrder: 'Ваш заказ',
  cartOrderConfirmed: 'Заказ подтверждён!',
  cartOrderConfirmedDesc: 'Спасибо за заказ! Мы готовим ваши товары с заботой. Письмо с подтверждением придёт вам на почту.',

  accWelcomeBack: 'С возвращением',
  accCreateAccount: 'Создать аккаунт',
  accSignInDesc: 'Войдите в аккаунт Coffeetoria',
  accJoinDesc: 'Присоединяйтесь к нашему сообществу',
  accFullName: 'Полное имя',
  accEmail: 'Электронная почта',
  accPassword: 'Пароль',
  accSignIn: 'Войти',
  accSignUp: 'Регистрация',
  accNoAccount: 'Нет аккаунта? ',
  accHasAccount: 'Уже есть аккаунт? ',
  accCoffeeLover: 'Любитель кофе',
  accMemberSince: 'Участник с 2026 года',
  accProfile: 'Профиль',
  accOrderHistory: 'История заказов',
  accWishlist: 'Избранное',
  accSettings: 'Настройки',
  accSignOut: 'Выйти',
  accProfileTitle: 'Мой профиль',
  accSaveChanges: 'Сохранить изменения',
  accOrderHistoryTitle: 'История заказов',
  accMyWishlist: 'Моё избранное',
  accWishlistEmpty: 'Ваш список избранного пуст.',
  accBrowseShop: 'Перейти в магазин',
  accAddToCart: 'В корзину',
  accRemove: 'Удалить',
  accSettingsTitle: 'Настройки',
  accEmailNotif: 'Уведомления по почте',
  accSMSNotif: 'SMS-уведомления',
  accNewsletter: 'Рассылка',
  accDelivered: 'Доставлен',
  accPhone: 'Телефон',
  accFavoriteDrink: 'Любимый напиток',

  prodNotFound: 'Товар не найден',
  prodBackToShop: 'Вернуться в магазин',
  prodHome: 'Главная',
  prodShop: 'Магазин',
  prodReviews: 'отзывов',
  prodRoastLevel: 'Уровень обжарки:',
  prodQuantity: 'Количество:',
  prodInStock: 'В наличии',
  prodOnlyLeft: 'Осталось!',
  prodAddToCart: 'В корзину',
  prodBuyNow: 'Купить сейчас',
  prodFreeShipping: 'Бесплатная доставка',
  prod30DayReturns: 'Возврат 30 дней',
  prodSecurePayment: 'Безопасная оплата',
  prodDescription: 'описание',
  prodRoastProfile: 'Профиль обжарки',
  prodRelatedTitle: 'Вам может понравиться',

  staticPrivacyTitle: 'Политика конфиденциальности',
  staticReturnsTitle: 'Возврат и обмен',
};

export function t(lang: Language, key: keyof TranslationKeys): string {
  return (lang === 'ru' ? ru : en)[key];
}

export function getTranslations(lang: Language): TranslationKeys {
  return lang === 'ru' ? ru : en;
}

const productNamesRu: Record<string, string> = {
  '1': 'Классический эспрессо',
  '2': 'Карамельный латте',
  '3': 'Капучино',
  '4': 'Айс ванильный кофе',
  '5': 'Матча латте',
  '6': 'Колд брю',
  '7': 'Сливочный круассан',
  '8': 'Тост с авокадо',
  '9': 'Колумбийские зёрна',
  '10': 'Эфиопский Йиргачеффе',
  '11': 'Керамическая кружка',
  '12': 'Черничный маффин',
  '13': 'Бутерброд с ветчиной и сыром',
  '14': 'Тёмная обжарка',
  '15': 'Термокружка',
  '16': 'Чай латте',
};

const productDescriptionsRu: Record<string, string> = {
  '1': 'Насыщенный, богатый чистый эспрессо. Наш фирменный бленд — интенсивный вкус с бархатистой пенкой.',
  '2': 'Шелковистое молоко с нашим эспрессо, украшенное домашней карамелью. Чистый уют в чашке.',
  '3': 'Идеальный баланс эспрессо, молока и густой пенки. Посыпан какао.',
  '4': 'Плавный колд брю с мадагаскарской ванилью, подан со льдом. Освежающе крепкий.',
  '5': 'Премиальная матча класса церемоний, взбитая с овсяным молоком. Землистый, гладкий, бодрящий.',
  '6': 'Настаивался 20 часов для ультра-гладкого, натурально сладкого вкуса. Без горечи, только освежение.',
  '7': 'Хрустящий, золотистый, сливочный. Выпекается каждое утро по французским технологиям из европейского масла.',
  '8': 'Хлеб на закваске с авокадо, черри-помидорами, микрозеленью и специями.',
  '9': 'Колумбийские зёрна с нотами шоколада, карамели и цитруса. Средняя обжарка для сбалансированного вкуса.',
  '10': 'Яркий и фруктовый с цветочными нотами жасмина и бергамота. Светлая обжарка для сохранения деликатного вкуса.',
  '11': 'Ручной работы керамическая кружка в тёплых земляных тонах. 350 мл. Подходит для посудомойки и микроволновки.',
  '12': 'Наполнен свежей черникой с хрустящей стрейзелью. Классическая выпечка.',
  '13': 'Медленно запеченная ветчина, выдержанный грюйер, руккола и мёд-горчица на артизанской чиабатте. Подается тёплым.',
  '14': 'Наш фирменный тёмный бленд. Насыщенный, дымный, полнотелый с нотами тёмного шоколада и обжаренных орехов.',
  '15': 'Двустенная вакуумная термокружка. Держит горячее 6 часов, холодное — 12 часов. Объём 470 мл.',
  '16': 'Ароматная смесь чёрного чая, корицы, кардамона и имбиря с молоком. Тёплый и пряный.',
};

const categoryNamesRu: Record<string, string> = {
  'Hot Drink': 'Горячий напиток',
  'Cold Drink': 'Холодный напиток',
  'Food': 'Еда',
  'Beans': 'Зёрна',
  'Merchandise': 'Мерч',
};

const roastLevelNamesRu: Record<string, string> = {
  'Light': 'Светлая',
  'Medium': 'Средняя',
  'Medium-Dark': 'Средне-тёмная',
  'Dark': 'Тёмная',
};

export function getProductName(id: string, lang: Language, fallback: string): string {
  return lang === 'ru' ? (productNamesRu[id] || fallback) : fallback;
}

export function getProductDescription(id: string, lang: Language, fallback: string): string {
  return lang === 'ru' ? (productDescriptionsRu[id] || fallback) : fallback;
}

export function getCategoryName(category: string, lang: Language): string {
  return lang === 'ru' ? (categoryNamesRu[category] || category) : category;
}

export function getRoastLevelName(level: string, lang: Language): string {
  return lang === 'ru' ? (roastLevelNamesRu[level] || level) : level;
}
