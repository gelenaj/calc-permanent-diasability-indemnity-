import React, {Component} from 'react';
import { FormErrors } from './FormErrors';
import CalculateWpi from '../components/Totals/CalculateWpi/CalculateWpi';
import classes from './Form.css'

class Form extends Component{
constructor(props){
  super(props);
  this.handleClick =this.handleClick.bind(this);
  this.state = {
    wpi:'',
    formErrors:{wpi:''},
    wpiResult: '',
    wpiValid: false,
    formValid:false,
  }

}

handleClick = () =>{

const newR= <CalculateWpi value={this.state.wpi}/>;
this.setState({wpiResult: newR})
}


handleWpiInput =(e)=>{
    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]:value},
       () => { this.validateField(name, value)});
}


validateField(fieldName, value){
  let fieldValidationErrors = this.state.formErrors;
  let wpiValid = this.state.wpiValid;


  switch(fieldName){
    case 'wpi':
      wpiValid=value<101;
      fieldValidationErrors.wpi= wpiValid ? '' : ' WPI must a digit less than 100';
      break;
    default:
     break;
  }
  this.setState({formErrors: fieldValidationErrors,
      wpiValid:wpiValid
  },this.validateForm);

}

validateForm() {
  this.setState({formValid: this.state.wpiValid});
}

errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


  render(){
    return(
      <div className={classes.FormBody, classes.gridContainer}>
      <div className={classes.gridItem}>
        <h1 className={classes.FormHeading}>Calculate Permanent Disability Indemnity</h1>
        <h4>Fill out the form to calculate P.M.I.</h4>
      </div>
      <form>
        <div className={classes.gridItem}>
          <label>Please enter the Whole Person Impairment Standard:</label>
          <br/>
          <input
          name="wpi"
          type="text"
          value={this.state.wpi}
          onChange={this.handleWpiInput}
          className={classes.gridItem}
          />
          <FormErrors formErrors={this.state.formErrors} />
        <br/>
          <button type="submit" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.handleClick} >Enter</button>
    </div>
          </form>

          <p>{this.state.wpiResult} </p>

      </div>


  );
 }
}

export default Form;
