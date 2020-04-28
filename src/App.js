import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import './App.css';
import Item from './Item';

const mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
  [3, 4, 5, 6]
];

function App() {

  let oldMatrix = _.cloneDeep(mat);

  const rotateMatrix = (matrix) => {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;

    for (let i = 0; i < x; i++) {
       for (let j = i; j < y - i; j++) {
          let k = matrix[i][j];
          matrix[i][j] = matrix[y - j][i];
          matrix[y - j][i] = matrix[y - i][y - j];
          matrix[y - i][y - j] = matrix[j][y - i];
          matrix[j][y - i] = k;
       }
    }
    return matrix;
  }

  const result = rotateMatrix(mat);
  
  return (
    <div className="App">
      <Item datas={oldMatrix} />
      <p><strong>Rotated into:</strong></p>
      <Item datas={result} />
    </div>
  );
}

export default App;
