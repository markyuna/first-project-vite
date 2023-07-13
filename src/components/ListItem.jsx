
import React, { useState } from 'react';

const ListItem = (props) => {
    const [isChecked, setIsChecked] = useState(false) 

    return (
        <div>
            <p>{props.name}</p>
            <input type="checkbox" value={isChecked} />  
        </div>
    );
}  

export default ListItem;