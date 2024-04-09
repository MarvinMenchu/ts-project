(() => {
  let productPrice = 100 // trabajarlo de forma inferida
  productPrice = 12
  console.log('productPrice', productPrice)

  let customerAge: number = 35 // trabajarlo de forma explicita
  //customerAge = customerAge + '1'
  customerAge = customerAge + 1
  console.log('customerAge', customerAge)

  let productInStock: number;
  console.log('productInStock', productInStock)
  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('100')
  console.log('discount', discount)

  if (discount <= 200){
    console.log('apply')
  } else {
    console.log('not apply')
  }

  let hex = 0xfff
  console.log('hex', hex)

  let binary = 0b1010
  console.log('bin', binary)

  const myNumber: Number = 10 //tipado de Number con Objeto, usar siempre en minuscula number.
  console.log('myNumber', myNumber)
})()
