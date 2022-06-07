const dataAcct = localStorage.getItem('login') 
const acct = JSON.parse(dataAcct) 
const data = localStorage.getItem('products') 
const products = JSON.parse(data) 
const dataCart = localStorage.getItem('cart') 
const productsCart = JSON.parse(dataCart) 

const lengthCart = () => {
  console.log(prooductsCart, "dataCart");
  if(productsCart.length !== null) document.querySelector('.p-cart').innerHTML = (productsCart.length - 1);
  else document.querySelector('.p-cart').innerHTML = 0
}

lengthCart()

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
                admin: 2000,
                status: false,
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

const logout = () => {
  swal({
      title: "Keluar halaman customer?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        window.location.href="../../index.html";
        swal("Berhasil keluar!", {
          icon: "success",
        });
      } else {
        swal("Anda tetap dihalaman customer");
      }
    });
}

const addCart = (value) => {
  const getData = products.find(data => data.id === value.toString())
    localStorage.setItem('cart', JSON.stringify([...productsCart,
      {
        email: acct,
        idProduct: value.toString(),
        title:getData.title,
        price:getData.price,
        image:getData.image,
        desc: getData.desc,
      }
    ]))
  swal("Keranjang Bertambah", "", "success");
  setTimeout(() => {
    window.location.reload()
  },1600)
}

const fltr = products.filter(data => data.tipe === "bday")

fltr.map(data => {
    document.querySelector('.container.content .content').innerHTML += `
    <div class="box" style="width: 280px;height: 420px;border-radius: 20px;box-shadow: var(--shadow);transform: scale(.98);cursor: pointer;transition: .4s;margin: 50px 25px 50px 0;">
        <div class="image d-flex align-content-center justify-content-center" style="border-top-left-radius: 20px;border-top-right-radius: 20px;padding: 50px;">
            <img src="${data.image}" alt="cake1" width="95">
        </div>
        <div class="content-box" style="padding: 10px;">
            <h3 style="color: #3d3d3d;font-size: 22px;font-weight: 600;">${data.title}</h3>
            <p class="text-muted">${data.desc}</p>
            <p class="price" style="color: #3d3d3d;font-size: 18px;font-weight: 600;">Rp. ${data.price}</p>
            <button type="button" class="btn-buying" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="buttonBuy(${data.id})" >Beli</button>
            <button type="button" class="btn-cart mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addCart(${data.id})" >Keranjang</button>
        </div>
    </div>
    `
})




