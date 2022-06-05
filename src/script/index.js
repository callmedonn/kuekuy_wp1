const products = [
    {
        id: "1",
        title: "Birthday Cake",
        desc: "sdvbsmdnbv vsdmbvsdbmv sdvkshkjvfhddfb",
        price: 120000,
        image: "../../../assets/img/cake1.png"
    },
    {
        id: "1",
        title: "KKJKEG",
        desc: "sdvbsmdnbv vsdmbvsdbmv sdvkshkjvfhddfb",
        price: 120000,
        image: "../../../assets/img/cake1.png"
    },
    {
        id: "1",
        title: "Birthday Cake",
        desc: "sdvbsmdnbv vsdmbvsdbmv sdvkshkjvfhddfb",
        price: 120000,
        image: "../../../assets/img/cake1.png"
    },
    {
        id: "1",
        title: "Birthday Cake",
        desc: "sdvbsmdnbv vsdmbvsdbmv sdvkshkjvfhddfb",
        price: 120000,
        image: "../../../assets/img/cake1.png"
    }
]

products.map(data => {
    document.querySelector('.container.content .content').innerHTML += `
    <div class="box" style="width: 280px;height: 380px;border-radius: 20px;box-shadow: var(--shadow);transform: scale(.98);cursor: pointer;transition: .4s;margin: 50px 25px 50px 0;">
        <div class="image d-flex align-content-center justify-content-center" style=" background-color: var(--primary);border-top-left-radius: 20px;border-top-right-radius: 20px;padding: 50px;">
            <img src="${data.image}" alt="cake1" width="100">
        </div>
        <div class="content-box" style="padding: 10px;">
            <h3 style="color: #3d3d3d;font-size: 22px;font-weight: 600;">${data.title}</h3>
            <p class="text-muted">${data.desc}</p>
            <p class="price" style="color: #3d3d3d;font-size: 18px;font-weight: 600;">${data.price}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Beli</button>
        </div>
    </div>
    `
})

