const dataView = localStorage.getItem('view') 
const vwData = JSON.parse(dataView) 
const dataAcct = localStorage.getItem('login') 
const acct = JSON.parse(dataAcct) 
const dataTransactions = localStorage.getItem('transactions') 
const transactions = JSON.parse(dataTransactions) 

const onSubmit = () => {
    const fileUpload = document.getElementById('formFileDisabled').value
    const address = document.getElementById('floatingTextarea').value
    var path = fileUpload;
    var filename = path.replace(/^.*\\/, "");
    
    if(filename) {
        swal("Pembayaran berhasil!", "", "success");
        localStorage.setItem('view', JSON.stringify({...vwData, status:true
      })) 
        localStorage.setItem('trById', JSON.stringify({
          email: acct,
          idProduct: vwData.idProduct,
          address: address,
          file: filename,
          title:vwData.title,
          image:vwData.image,
          total: (vwData.price + vwData.ongkir + vwData.admin)
      })) 
        localStorage.setItem('transactions', JSON.stringify([...transactions,{
          email: acct,
          idProduct: vwData.idProduct,
          address: address,
          file: filename,
          total: (vwData.price + vwData.ongkir + vwData.admin)
      }])) 
        setTimeout(() => {
            window.location.href = 'view.html';
        },1500)
    }else swal("Upload bukti transfer!!!");
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

document.querySelector('.container.view').innerHTML = `
        <div class="content d-flex">
            <div class="s1 d-flex justify-content-center align-items-center">
                <img src=${vwData.image} alt="cake" width="200">
            </div>
            <div class="s2">
                <h2>${vwData.title}</h2>
                <p class="text-muted">${vwData.desc}</p>
                <p class="ongkir text-muted">Ongkos Kirim ( + Rp. ${vwData.ongkir},- )</p>
                <p class="price">Harga Rp. ${vwData.price}</p>
                
            </div>
            <div class="s3">
                <div>
                    <h2 style="color: #fff;">Total Pembelian</h2>
                    <p class="price" style="color: #fff;" >Rp. ${(vwData.price + vwData.ongkir)},-</p>
                    ${vwData.status ? `<button type="button" class="btn btn-success">Success</button>` :
                    `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Beli Sekarang</button>`}
                </div>
            </div>
        </div>
`
document.querySelector('.detail-pay').innerHTML = `
    <p>Pesanan : ${vwData.title}</p>
    <p>Harga : Rp. ${vwData.price},-</p>
    <p>Ongkir : Rp. ${vwData.ongkir},-</p>
    <p>Admin : Rp. ${vwData.admin},-</p>
    <h6>Total pembayaran : Rp. ${(vwData.price + vwData.ongkir + vwData.admin)}</h6>
`