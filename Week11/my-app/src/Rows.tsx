import React from 'react';
type Props = {
    rows : String[]
}
function Rows({rows}:Props){
    return(
        <>
        <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      </>
    )
}
export default Rows;