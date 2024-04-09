(()=>{
  let myDynamicVar: any // se aconseja que any no sea utilizado
  myDynamicVar = 100
  myDynamicVar = null
  myDynamicVar = {}
  myDynamicVar = ''

  myDynamicVar = 'Hello'
  const rta = (myDynamicVar as string).toLowerCase()
  console.log('rta', rta)

  myDynamicVar = 1212
  const rta2 = (<number>myDynamicVar).toFixed()
  console.log('rta2', rta2)
})()
