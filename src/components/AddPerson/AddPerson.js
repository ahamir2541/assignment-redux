import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.personAdded}>Add Persons</button>
    </div>
);

export default addPerson;