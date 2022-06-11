const transactions = localStorage.getItem('transactions')
const trData = JSON.parse(transactions)

const transactionsData = trData.filter(data => data.idProduct !== "")
const totalTransaction = trData.forEach(data => {
    let result = 0
    
    result += data.total
    return result
})

const logout = () => {
    swal({
        title: "Keluar halaman admin?",
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
          swal("Anda tetap dihalaman admin");
        }
      });
}


document.querySelector('.total-order').innerHTML = `${(transactionsData.length)}`
document.querySelector('.tr-done').innerHTML = `Rp. ${totalTransaction?totalTransaction: 0}`