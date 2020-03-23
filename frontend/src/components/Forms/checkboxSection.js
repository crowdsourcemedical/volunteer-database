import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(true);
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'fixed',
    },
    formControl: {
      margin: theme.spacing(3),
      
    },
  }));

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    
      
      <FormControl component="fieldset" className={useStyles.formControl}>
        <FormLabel component="legend">{props.sectionHeader}</FormLabel>
        <FormGroup>
         {props.checkboxes.map((checkbox)=>{
           return(
           <FormControlLabel
           control={ <Checkbox disabled={checkbox.status} color="primary" inputProps={{ 'aria-label':  'uncontrolled-checkbox' }} />}
           label={checkbox.label} onChange={props.cb(this)}

         />)


         })} 
        
        </FormGroup>
      </FormControl>
   
   
      
      
      
      

  );
}