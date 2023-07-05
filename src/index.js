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
        <p>${values.description}</p>
        <p class="category">${values.Category}</p>
        <p class="price">${values.Price}</p>
    </div>`;

});
document.getElementById("cards").innerHTML=data;
})
.catch((err) => {
    console.log(err);
})