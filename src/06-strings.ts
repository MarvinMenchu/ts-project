(() => {
  let productTitle = 'My amazing product'
  // productTitle = null
  // productTitle = undefined
  // productTitle = (()=> {})
  productTitle = 'My amazing product changed'
  console.log('productTitle', productTitle)

  const productDescription = "My amazing product 'description'"
  console.log('productDescription', productDescription)

  let productPrice = 100
  let isNew: boolean = true

  //backtick
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    new: ${isNew}`
  console.log('summary', summary)

  const myString: String = 'Hello' //tipado de String con Objeto, usar siempre en minuscula string.
  console.log('myString', myString)
})()
