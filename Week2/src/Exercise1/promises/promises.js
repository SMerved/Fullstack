const calculate = (x, y, operation) =>  {
    return new Promise((resolve, reject) => {
        try{
            const result = operation(x,y)
            console.log(result)
            resolve(result)
        }
        catch (e){
            console.log(e.message)
        }
    })
}
const add = (x, y) => {
    return x+y;
}
const subtraction = (x, y) => {
    return x-y;
}

const multiplication = (x, y) => {
    return x*y;
}

const division = (x, y) => {
    return x/y;
}

calculate(3,2, add)
    .then(res => calculate(res, 2, subtraction))
        .then(res => calculate(res, 2, multiplication))
        .then(res => calculate(res, 2, division))
