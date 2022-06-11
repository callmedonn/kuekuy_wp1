const dummyProducts = [
    {
        id: "234242332",
        title: "Cookies Cake #5763",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6289.jpg"
    },
    {
        id: "34545774",
        title: "Birthday Cake #3132",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6117.jpg"
    },
    {
        id: "546435645",
        title: "Birthday Cake #3512",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6118.jpg"
    },
    {
        id: "436346435634",
        title: "Cookies Cake #3455",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6285.jpg"
    },
    {
        id: "5457676457",
        title: "Birthday Cake #6112",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6119.jpg"
    },
    {
        id: "346356345764",
        title: "Cookies Cake #9076",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6287.jpg"
    },
    {
        id: "4567457546",
        title: "Birthday Cake #3712",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6120.jpg"
    },
    {
        id: "5474745764",
        title: "Cookies Cake #7654",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6288.jpg"
    },
    {
        id: "457437457547",
        title: "Birthday Cake #3118",
        desc: "cake pilihan terbaik...",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6121.jpg"
    },
]

// const dummyAccount = [
//     {
//         email: "anonym@gmail.com",
//         password: "12345678",
//     }
// ]

// const dummyCart =   [
//     {
//         email: "",
//         idProduct: "",
//         title:"",
//         price:"",
//         image:"",
//         desc: ""
//       }
// ]

const saveData = () => {
    localStorage.setItem('products', JSON.stringify(dummyProducts))
    // localStorage.setItem('account', JSON.stringify(dummyAccount))
    // localStorage.setItem('cart', JSON.stringify(dummyCart))
}

saveData()