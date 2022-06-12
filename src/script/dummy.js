const dummyProducts = [
    {
        id: "234242332",
        title: "Cookies Cake #5763",
        desc: "Tekstur renyah, di campur selai strawberry dengan di taburi gula diluar nya",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6289.jpg"
    },
    {
        id: "34545774",
        title: "Birthday Cake #3132",
        desc: "Pancake lembut, di taburi strawberry dan gula di atasnya",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6117.jpg"
    },
    {
        id: "546435645",
        title: "Birthday Cake #3512",
        desc: "Birth day cake mempunyai tekstur lembut, manis yang pas, dihiasi dengan hiasan berbentuk love",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6118.jpg"
    },
    {
        id: "436346435634",
        title: "Cookies Cake #3455",
        desc: "Cookies coklat mempunyai tekstur yang renyah manis yang pas serta di beri beberapa butir choco cips",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6285.jpg"
    },
    {
        id: "5457676457",
        title: "Birthday Cake #6112",
        desc: "Birthday cake mempunyai tekstur kue yg lembut rasa manis yang pas di hiasi buah ceri dan butiran springkel",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6119.jpg"
    },
    {
        id: "346356345764",
        title: "Cookies Cake #9076",
        desc: "Mempunyai tekstur yang renyah dan rasa manis dari cokelat nya yang pass",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6287.jpg"
    },
    {
        id: "4567457546",
        title: "Birthday Cake #3712",
        desc: "Birthday cake mempunyai tekstur yang lembut rasa yang pas warna ungu cantik dan di taburi hiasan springkel cantik",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6120.jpg"
    },
    {
        id: "5474745764",
        title: "Cookies Cake #7654",
        desc: "Tekstur renyah, memiliki butiran coklat di dalamnya",
        price: 120000,
        tipe: "cookies",
        image: "../../../assets/img/cookies/IMG_6288.jpg"
    },
    {
        id: "457437457547",
        title: "Birthday Cake #3118",
        desc: "Birthday cake mini mempunyai tekstur yang lembut manis yang pas di  beri hiasan boneka serta springkel yang cantik",
        price: 120000,
        tipe: "bday",
        image: "../../../assets/img/bday/IMG_6121.jpg"
    },
]

const dummyAccount = [
    {
        email: "admin@gmail.com",
        password: "12345678",
    }
]

const dummyTransactions =   [
    {
        email: "",
        idProduct: "",
        address: "",
        file: "",
        total: ""
    }
]

const dummyCart =   [
    {
        email: "",
        idProduct: "",
        title:"",
        price:"",
        image:"",
        desc: ""
      }
]

const saveData = () => {
    localStorage.setItem('products', JSON.stringify(dummyProducts))
    // localStorage.setItem('account', JSON.stringify(dummyAccount))
    // localStorage.setItem('transactions', JSON.stringify(dummyTransactions))
    // localStorage.setItem('cart', JSON.stringify(dummyCart))
}

saveData()