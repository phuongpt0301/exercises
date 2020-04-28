import React from 'react';

const Item = ({ datas }) => {
	return (
		(datas && datas.length > 0) && datas.map((result, i) => {
         return (
           <ul key={`ul-${i}`}>
           {
             (result && result.length > 0) &&
               result.map((item, j) => {
                 return (
                   <li key={`li-${i}-${j}`}>[{item}]</li>
                  )
               })
           }
             </ul>
          )
       })
	)
}

export default Item;