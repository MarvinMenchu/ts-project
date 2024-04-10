(()=>{
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }

  //login('test', 123)
  login({
    email: 'marvin',
    password: 123
  })

  type Size = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    price: number
    Size?: Size
  }) => {
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

  console.log(products)
})()
