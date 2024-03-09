function createCouter() {
    let couter = 0
    function increase() {
        return ++couter
        console.log(couter)
    }
    return increase
}


const couter1 = createCouter()

// console.log(couter1())