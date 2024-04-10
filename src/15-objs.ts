(()=>{
  type Size = 'S' | 'M' | 'L' | 'XL'

  type Product = {
    title: string,
    createdAt: Date,
    price: number
    Size?: Size
  }


  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  //login('test', 123)
  login({
    email: 'marvin',
    password: 123
  })



  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Shirt',
    createdAt: new Date(),
    price: 100,
    Size: 'M'
  })

  addProduct({
    title: 'Socks',
    createdAt: new Date(),
    price: 50
  })


  products.push({
    title: 'Shoes',
    createdAt: new Date(),
    price: 200,
    Size: 'L'
  })
  console.log(products)
})()
