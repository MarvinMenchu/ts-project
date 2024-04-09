(()=>{
  const calcTotal = (prices: number[]): string => {
    let total = 0
    prices.forEach(price => {
      total += price
    })
    return total.toString()
  }

  const printTotal = (prices: number[]): void => { //uso explicito de retorno de las funciones
    const total = calcTotal(prices)
    console.log(`The total is ${total}`)
  }

  printTotal([100, 200, 300, 400, 500])

})()

//motor de inferencia
