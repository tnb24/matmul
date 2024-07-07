// the worst module to implement matmul

// init empty matrices
const newMatrix = (n) => {
    const matrix = new Uint16Array(n);
    for (let i = 0; i < n; i++) {
      matrix[i] = new Uint16Array(n);
    }
    return matrix;
  };
  
// populate matrices
const fillMatrix = (n) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const randval = Math.random()*100
          n[i][j]=randval
        }
    } 
    return n;
}

// perform mat mul
const matMatrix = (n,m) => {
    const C = newMatrix(3)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let sum = 0;
          for (let k = 0; k < 3; k++) {
            sum += n[i][k] * m[k][j];
          }
          C[i][j] = sum;
        }
    }
    return C
}

const a = newMatrix(3)
const b = newMatrix(3)

console.log(fillMatrix(a),fillMatrix(b),matMatrix(a,b))


