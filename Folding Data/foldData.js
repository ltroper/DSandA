function foldData(matrix) {
    // we need to reduce over VERTICAL indices, in order to do this conveniently,
    // we have to take a matrix transpose.
    const result = new Array(matrix[0]?.length).fill(0);
    console.log("MATRIX", matrix)
    const matrixTranspose = matrix[0]?.map((_,i) => {
      let res = matrix.map(m_y => {
        console.log("BEFORE", m_y)
        m_y = m_y[i]
        console.log("AFTER", m_y)
        console.log("")
        return m_y
      })
      console.log("RESULT", res)
      return res
    });
    console.log("MATRIXTRANSPOSED", matrixTranspose)
    // we then map elements of results array into sum over columns of matrix.
    return result.map((a,u) => matrixTranspose[u].reduce((a, v) => a + v));
  } //


  let example = [[1, 2], [3, 4]]

  // console.log(foldData(example))



  let numbers = [1, 2, 3, 4]
  console.log(numbers.map(n => {
    return n+1
  }))


  function Person (first, last) {
    this.first = first
    this.last = last
  }

  let person = new Person ("jack", "dorsey")
  console.log(person)
