(()=>{
  let userId: string | number
  userId = 1212
  userId = 'asasa'

  function greeting (myText: string | number){
    if (typeof myText === 'string'){
      console.log(`string ${myText.toUpperCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
  greeting(12121.222222)
  greeting('asasa')
})()
