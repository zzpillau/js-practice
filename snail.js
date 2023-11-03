import _ from 'lodash';

const buildSnailPath = (matrix) =>{
    let resultMatrix = [];
    while(matrix.length){
        resultMatrix.push(...matrix.shift());
        for (let i = 0; i < matrix.length; i++){
            resultMatrix.push(matrix[i].pop());
        }
        resultMatrix.push(...(matrix.pop() || []).reverse());
        for (let i = matrix.length -1; i >= 0; i--){
            resultMatrix.push(matrix[i].shift());
        }
    }
    return resultMatrix;
};

  console.log(JSON.stringify(snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])));
