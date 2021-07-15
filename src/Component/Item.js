import React from 'react';

const Item = ({data}) => {
    console.log(data);
    return(
        <tr>
            <td>{data.userId}</td>
            <td>{data.id}</td>
            <td>{data.body}</td>
            <td>{data.title}</td>
        </tr>
    )
}
export default Item;