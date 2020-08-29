import React  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
   
  function handleInputChange(event, value) {
    props.getMenu(value);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.Details}
      data-testid="checkAutocomplete"
      getOptionLabel={option => option.Name}
      style={{ width:'90%' }}
      onChange={handleInputChange}
      renderInput={params => (
        <TextField {...params} label={props.name} variant="outlined" fullWidth />
      )}
    />
  );
}