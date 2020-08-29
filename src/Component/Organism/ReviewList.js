import React from 'react';
import ReviewCard from '../Molecules/ReviewCard';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Label from '../Atoms/Label';

function ReviewList(props) {
    
    return (
        <Box >
            <Label text="REVIEWS"/>
            <Grid container
            item xs={12}>
            {
                props.reviews && 
                props.reviews.map((review) => <ReviewCard review = {review} />)
            }
            </Grid>
        </Box>
    )
}

export default ReviewList