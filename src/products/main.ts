import { createProduct, calcStock, products } from './product.service'

createProduct({
  name: 'shirt',
  createAt: new Date(),
  stock: 10,
  size: 'M'
})

createProduct({
  name: 'pants',
  createAt: new Date(),
  stock: 20,
  size: 'L'
})

createProduct({
  name: 'shoes',
  createAt: new Date(),
  stock: 30,
  size: 'XL'
})
console.log(products)
const total = calcStock()
console.log(total)

