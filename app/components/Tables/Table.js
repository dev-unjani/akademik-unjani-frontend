import React from 'react';
import MUIDataTable from 'mui-datatables';

const Table = (props) =>{
    return(
        <div>
             <MUIDataTable 
                title={props.title}
                data={props.data}
                columns={props.columns}
                options={props.options}
             />
        </div>
    )
}

export default Table;