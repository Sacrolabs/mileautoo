import React, {useState} from 'react';
import Form from 'react-jsonschema-form';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import LayoutField   from 'react-jsonschema-form-layout-grid';
import * as Schema from '../Schema';

const MultiForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const fields = {
    layout_grid: LayoutField
  }

  const Tpl = (props)=> {
    return (
      <div className="">
        { props.id=="root"&&<h4 className="frmhead">{props.schema.title}</h4> }
        { props.children }
      </div>
    )    
  }

  const handleBack = () => {
    setStep(step-1)
    console.log("Clicked back button & step count:", step)
  }

  const onSubmit = ({formData}) => {
    switch(step){
      case 1 :
        setStep(2)
        setFormData(formData)
        console.log("on step 1",formData)
        console.log("Number of keys in formdata of step 1:",Object.keys(formData).length)
        break;
      case 2 :
        setStep(3)
        setFormData(formData)
        console.log("on step 2",formData)
        console.log("Number of keys in formdata of step 2:",Object.keys(formData).length)
        break;
      case 3 :
        setStep(4)
        setFormData(formData)
        console.log("on step 3",formData)
        console.log("Number of keys in formdata of step 3:",Object.keys(formData).length)
        break;
      case 4 :
        setStep(5)
        setFormData(formData)
        console.log("on step 4",formData)
        console.log("Number of keys in formdata of step 4:",Object.keys(formData).length)
        break;
      case 5 :
        console.log("on step 5",formData)
        console.log("Number of keys in formdata of step 5:",Object.keys(formData).length)
        setFormData(formData)
      default:
        alert("You submitted " + JSON.stringify(formData))
        console.log("whole data object:",formData)
        console.log("Number of keys in total formData:",Object.keys(formData).length)
    }    
  }

  return (
    <div>
      <link rel="stylesheet" href="./assets/css/multiform.css"/>
      <Form
        id="json-form"
        className="section"
        FieldTemplate={Tpl}
        fields={fields}
        schema={
          step === 1 && Schema.customerSchema 
          ||
          step === 2 && Schema.vehicleSchema 
          ||
          step === 3 && Schema.driverSchema 
          ||
          step === 4 && Schema.coverageSchema 
          ||
          step === 5 && Schema.purchaseSchema       
        }
        uiSchema={
          step === 1 &&  Schema.customerUiSchema
          ||
          step === 2 &&  Schema.vehicleUiSchema 
          ||
          step === 3 && Schema.driverUiSchema 
          ||
          step === 4 && Schema.coverageUiSchema 
          ||
          step === 5 && Schema.purchaseUiSchema
        }
        onSubmit={onSubmit}
        onChange={e => e.formData}
        formData={formData}
      >
        <></>
      </Form>
      {step==1&&
        <div className="row my-sm-4" style={{marginTop:'25px'}}>
          <div className="d-flex col-md-12 align-items-center justify-content-center">
            <button className="btn btn-success" value="Start" form="json-form" style={{height:'45px', width:'350px'}} >Continue</button>
          </div>
        </div>
      }
      {step>=2&&
        <div className="row my-sm-4" style={{}}>
          <div className="my-xs-4 my-xl-4 my-sm-4 d-flex col-md-6 align-items-center justify-content-center">
            <button type="button" onClick={handleBack} className="back" style={{height:'45px', width:'350px'}} >Back</button>   
          </div>
          <div className="my-xs-4 my-xl-4  d-flex col-md-6 align-items-center justify-content-center">
            <button className="btn btn-success" value="Start" form="json-form" style={{height:'45px', width:'350px'}} >Continue</button>
          </div>
        </div>
      }              
    </div>
  )
}
export default MultiForm
