const dataAcct = localStorage.getItem('login') 
const acct = JSON.parse(dataAcct) 
const data = localStorage.getItem('products') 
const products = JSON.parse(data) 

const buttonBuy = (value) => {
    const getData = products.find(data => data.id === value.toString())
    swal({
        title: "Beli",
        buttons: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            localStorage.setItem('view', JSON.stringify({
                email: acct,
                idProduct: value.toString(),
                title:getData.title,
                price:getData.price,
                image:getData.image,
                desc: getData.desc,
                ongkir: 15000,
            })) 
          swal("Masuk pembelian", {
            icon: "success",
          });
          setTimeout(() => {
            window.location.href = 'view.html';
          },1000)
        } else {
          swal("Tidak jadi");
        }
      });
}

products.map(data => {
    document.querySelector('.container.content .content').innerHTML += `
    <div class="box" style="width: 280px;height: 380px;border-radius: 20px;box-shadow: var(--shadow);transform: scale(.98);cursor: pointer;transition: .4s;margin: 50px 25px 50px 0;">
        <div class="image d-flex align-content-center justify-content-center" style="border-top-left-radius: 20px;border-top-right-radius: 20px;padding: 50px;">
            <img src="${data.image}" alt="cake1" width="95">
        </div>
        <div class="content-box" style="padding: 10px;">
            <h3 style="color: #3d3d3d;font-size: 22px;font-weight: 600;">${data.title}</h3>
            <p class="text-muted">${data.desc}</p>
            <p class="price" style="color: #3d3d3d;font-size: 18px;font-weight: 600;">${data.price}</p>
            <button type="button" class="btn-buying" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="buttonBuy(${data.id})" >Beli</button>
        </div>
    </div>
    `
})


