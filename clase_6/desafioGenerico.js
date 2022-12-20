const moment = require('moment')

const dateCalculate = ( dateOfBirth ) => {

    const dateNow = moment()

    console.log(dateNow.diff(dateOfBirth, 'days'))
}

dateCalculate('1980-12-04')