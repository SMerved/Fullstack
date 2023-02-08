const calculate = (x, y, operation) =>  {
        const result = operation(x,y)
    console.log(result)
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

calculate(3, 2, add)
calculate(3, 2, subtraction)
calculate(3, 2, multiplication)
calculate(3, 2, division)