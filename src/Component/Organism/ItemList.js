import React from 'react';
import ItemCard from '../Molecules/ItemCard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Label from '../Atoms/Label';


function ItemList(props) {
    
    return (
        <Box >
            <Label text="MENU"/>
            <Grid container
            item xs={12}>
            {
                props.items && 
                props.items.map((item) => <ItemCard item={item} size="small" color="primary" text="Delete"  manager={props.manager}/>)
            }
            </Grid>
        </Box>
    )
}

export default ItemList