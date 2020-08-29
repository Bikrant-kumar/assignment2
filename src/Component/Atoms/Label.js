import React from 'react'
import Box from '@material-ui/core/Box';

function Label(props) {
    const {
        text
       } = props;
    return (
        <Box>
            {text}
        </Box>
    )
}

export default Label