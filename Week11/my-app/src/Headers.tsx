import React from 'react';
type Props = {
    headers: String[]
}
function Headers({headers}:Props){
    return(
    <tr>
        {headers.map((h)=>
            <th>{h}</th>
        )}
    </tr>
    )
}
export default Headers;