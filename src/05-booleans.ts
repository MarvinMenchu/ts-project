(() => {
  let isEnable = true; // forma inferida o implicita
  isEnable = false;

  let isNew: boolean = false // tipado explicito
  console.log('isNew', isNew);
  isNew = true
  console.log('isNew', isNew);

  const random = Math.random()
  console.log('random', random)

  isNew = random > 0.5 ? true : false
  console.log('isNew', isNew)

  const myBoolean: Boolean = true //tipado de Boolean con Objeto, usar siempre en minuscula boolean.
  console.log('myBoolean', myBoolean)
})()