
// Fetch product data and display the products
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((completedata) => {
    let data = '';
    completedata.forEach((values) => {
      data += `
      <div class="card">
          <h1 class="title">${values.title}</h1>
          <img src="${values.image}" alt="img" class="images">
          <p class="category">${values.category}</p>
          <p>${values.description}</p>
          <p class="price-label">Price:</p>
          <p class="price">${values.price}</p>
          <p class="rate-label">Rate:</p>
          <p class="rate">${values.rating && values.rating.rate ? values.rating.rate : 'Rating not available'}</p>
          <p class="count-label">Count:</p>
          <p class="count">${values.rating && values.rating.count ? values.rating.count : 'Rating count not available'}</p>
          <button class="add-to-cart-btn" onclick="addToCart('${values.title}')">Add to Cart</button>
      </div>`;
    });
    document.getElementById('cards').innerHTML = data;

    // Fetch shopping cart data and update the cartItems array
    fetch('https://fakestoreapi.com/carts')
      .then((response) => response.json())
      .then((cartData) => {
        const cartProductIds = cartData.products.flatMap((product) => product.productId);
        cartItems = completedata.filter((item) => cartProductIds.includes(item.id));
        renderCart(); // Update the UI to display the cart items
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
