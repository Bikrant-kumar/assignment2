import React from 'react';
import TableCard from '../Molecules/TableCard';
// import Title from '../Molecules/Title'
import Label from '../Atoms/Label';

function TableList(props) {
    return (
        <div>
            <Label text="TABLE"/>
            {/* <Title Name={"TABLE"}/> */}
            {
                props.tables && 
                props.tables.map((table) => <TableCard table={table} />)
            }
        </div>
    )
}

export default TableList

