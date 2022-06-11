const data = localStorage.getItem('products')
const dataAcct = localStorage.getItem('account')
const products = JSON.parse(data)
const acct = JSON.parse(dataAcct)

const login = () => {
    const inputEmail = document.getElementById('inputEmail').value
    const inputPass = document.getElementById('inputPass').value

    const getEmail = acct.find(data => data.email === inputEmail)
    const getPass = acct.find(data => data.password === inputPass)

    console.log(acct);
    console.log(getPass);

    if(getEmail) {
        if(getPass) {
            localStorage.setItem('login', JSON.stringify(getEmail))
            swal("Login berhasil", "success");
            setTimeout(() => {
                window.location.href = './pages/customer/index.html';
            },1500)
        } else swal("Email atau password salah!");
    } else swal("Email atau password salah!");
}

const register = () => {
    const emailRegister = document.getElementById('emailRegister').value
    const passRegister = document.getElementById('passRegister').value
    const passRegisterConfirm = document.getElementById('passRegisterConfirm').value

    if(emailRegister === "" || passRegister === ""|| passRegisterConfirm === "") swal("Masukkan email/password anda!");
    else if (passRegister !== passRegisterConfirm) swal("Password tidak sesuai!");
    else {
        localStorage.setItem('account', JSON.stringify([{
            email: emailRegister,
            password:passRegister,
        }]))

        swal("Register berhasil", "sillahkan Login", "success");
        setTimeout(() => {
            window.location.href = './pages/customer/index.html';
        },1500)
    }
}

products.map(data => {
    document.querySelector('.container.content .content').innerHTML += `
    <div class="box" style="width: 280px;height: 420px;border-radius: 20px;box-shadow: var(--shadow);transform: scale(.98);cursor: pointer;transition: .4s;margin: 50px 25px 50px 0;">
        <div class="image d-flex align-content-center justify-content-center" style="border-top-left-radius: 20px;border-top-right-radius: 20px;padding: 50px;">
            <img src="${data.image}" alt="cake1" width="95">
        </div>
        <div class="content-box" style="padding: 10px;">
            <h3 style="color: #3d3d3d;font-size: 22px;font-weight: 600;">${data.title}</h3>
            <p class="text-muted">${data.desc}</p>
            <p class="price" style="color: #3d3d3d;font-size: 18px;font-weight: 600;">Rp. ${data.price}</p>
            <button type="button" class="btn-buying" data-bs-toggle="modal" data-bs-target="#exampleModal">Beli</button>
            <button type="button" class="btn-cart mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="buttonBuy(${data.id})" >Keranjang</button>
        </div>
    </div>
    `
})

