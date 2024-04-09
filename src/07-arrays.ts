(()=>{
  let price = [1,2,2,1,1,212, 'hola', true] // forma inferida
  // price.push('asd')
  // price.push(true)
  // price.push(()=>{})
  price.push(121212)
  //price = [1,2,2]

  let product  = ['hola', true]
  product.push(false)

  let mixed: (number | string | boolean | Object)[] = ['Hola', true]
  mixed.push(1)
  mixed.push('as')
  mixed.push(false)
  mixed.push(()=>{1+1})
  mixed.push({})
  mixed.push([])
  console.log('mixed', mixed)

  let number = [1,2,3,4,5,6,7,8,9,10]
  number.map(item => console.log(item * 2))

})()
