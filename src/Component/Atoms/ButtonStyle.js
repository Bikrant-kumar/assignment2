import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonStyle(props) {
    const {
       clickData,
       size,
       color,
       variant,
       text,
      } = props;

    return (
        <Button size={size} color={color} variant={variant}
         onClick={clickData}
         >
          {text}
        </Button>
    )
}

export default ButtonStyle