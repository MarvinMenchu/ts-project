(()=>{
  // como escribir un alias para un tipo de dato
  type UserID = string | number | boolean //Alias type
  let userId: UserID

  function greeting (userId: UserID){
    if (typeof myText === 'string'){
      console.log(`string ${myText.toUpperCase()}`)
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'  // crear nuestro propios tipos de datos
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
  shirtSize = 'S'
  //shirtSize = 'XS' // Error

  function greeting (userId: UserID, size: Sizes){
    if (typeof myText === 'string'){
      console.log(`string ${myText.toUpperCase()}`)
    }
  }

  greeting(1111, 'M')
  greeting('asasa', 'sasas')
})()
