(()=>{
  // let myNumber: number = undefined // no entraria en el conjunto de dato
  // let myString: string = null

  let myNull: null = null
  let myUndefined: undefined = undefined
  myNull = null

  let myNumber: number | null = null //
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'asasa'


  function hi (name: string | null){
    let hello = 'hola'
    if (name){
      console.log(`${hello} ${name.toUpperCase()}`)
    } else {
      console.log(`${hello} nadie`)
    }
  }

  function hi2 (name: string | null){
    let hello = 'hola '
    hello += name?.toLowerCase() || 'nadie'  // El signo  ? se llama Optional chaining
    console.log(hello)
  }

  hi('marvin')
  hi(null)

  hi2('manuel')
  hi2(null)
})()
