(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'  // crear nuestro propios tipos de datos

  function createProductToJSON(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSON('Shirt', new Date(), 100, 'XL')
  console.log(product1)
  console.log(product1.title)
  console.log(product1.createAt)
  console.log(product1.stock)
  console.log(product1.size)

  const createProductToJSONV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }

  const product2 = createProductToJSONV2('pants', new Date(), 50) // NO ENVIAMOS SIZE
  console.log(product2)
  console.log(product2.title)
  console.log(product2.createAt)
  console.log(product2.stock)
  console.log(product2.size)
})()
