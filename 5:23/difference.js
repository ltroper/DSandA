function sym() {

    if (arguments.length <= 1) return Object.values(arguments)

    let arr = []
    for (const array of arguments){
        arr.push(array)
    }

    const first = arr.shift()
    const second = arr.shift()

    const dif = []

    dif.push(...first.filter(x => !second.includes(x)))
    dif.push(...second.filter(y => !first.includes(y)))


    return sym(dif, arr)[0]

  }

  console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
