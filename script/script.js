console.log("Hey This Fetch Implementation Project")

fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata)
    let data1 = "";
    completedata.map((values) => {
        data1+= `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} class="images" alt="img">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>
    `
    });
    document.getElementById("cards").innerHTML = data1;


}).catch((error) => {
    console.log("Something is going wrong");
});