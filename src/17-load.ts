import _ from 'lodash'

const data = [
  { username: 'nico', role: 'seller'},
  { username: 'lynn', role: 'buyer'},
  { username: 'dal', role: 'admin'},
  { username: 'marvin', role: 'admin'}
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
