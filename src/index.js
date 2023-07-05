fetch('https://fakestoreapi.com/products').then((data)=>{
// console.log(data);
            return data.json();
})
.then((completedata) =>{
   // console.log(completedata[2].title);
  
   let data="";
   completedata.forEach((values)=> {
    data += `
    <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src="${values.image}" alt="img" class="images">
        <p class="category">${values.category}</p>
        <p>${values.description}</p>
          <p class="rate-label">Rate:</p>
          <p class="rate">${values.rate}</p>
          <p class="count-label">count:</p>
          <p class="count">${values.Rate}</p>
          <p class="price-label">Price:</p>
          <p class="price">${values.price}</p>
      </div>`;
});
document.getElementById("cards").innerHTML=data;
})
.catch((err) => {
    console.log(err);
})