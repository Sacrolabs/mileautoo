import React, {useState} from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'

import * as Schema from '../Schema'



 const MultiForm = () => {

    const [step, setStep] = useState(1)

    const [formData, setFormData] = useState(null)

    const [customerFormData, setCustomerFormData] = useState({})

    const [vehicleFormData, setVehicleFormData] = useState({})

    const [driverFormData, setDriverFormData] = useState({})

    const [coverageFormData, setCoverageFormData] = useState({})

    const [purchaseFormData, setPurchaseFormData] = useState({})

    const fields = {
      layout_grid: LayoutField ,
    //   TitleField: TitleField
    }

   
const Tpl = (props)=> {

	const {id, label, required, children} = props;
    
	// console.log("Element Id:",id)
	// console.log("Props:",props)

	// console.log("Childern:",children)

	const selectItem = props.children[0].props.schema.enum

	const placehold = props.children[0].props.uiSchema["ui:placeholder"]
	return (
  
	  <div className="form-group">
      {
        id=="rjsf_prefix"&&<h4  className="frmhead">{props.schema.title}</h4>
      }

		  {
			props.uiSchema.class=="mileauto-custom-select" && 
        <select className="dropdwn">
          <option className="customselect" value="">{placehold}</option>  
          {
          selectItem.map((item, i)=>
          
            <option key={i} value={item}>
                      {item}
            </option>
          )
          }
        </select> 
		  }
      
		{	props.uiSchema.class!=="mileauto-custom-select"&& children}
	  </div>
    
	)
  }

   const handleBack = () => {
    setStep(step-1)

    console.log("Clicked back button & step count:", step)
   }

  //  const onChangeForm = (e)=> {

  //    step == 5 && setFormData(e.formData)
  //  }

  //  let yourForm

    const onSubmit = ({formData}, e) => {
      
      e.preventDefault()

      switch(step){
        case 1 :

          setStep(2)
          // setCustomerFormData( {
          //   ...customerFormData, 
          //   ...formData
          // })
          
          // console.log("on step 1",formData)
          // console.log("Number of keys in formdata of step 1:",Object.keys(formData).length)

          break;

        case 2 :
          setStep(3)
          // setVehicleFormData( {
          //   ...vehicleFormData,
          //   ...customerFormData, 
          //   ...formData
          // })
          // console.log("on step 2",formData)
          // console.log("Number of keys in formdata of step 2:",Object.keys(formData).length)
          break;

          case 3 :
            setStep(4)
            // setDriverFormData( {
            //   ...driverFormData,
            //   ...vehicleFormData,
            //   ...customerFormData, 
            //   ...formData
            // })
            // console.log("on step 3",formData)
            // console.log("Number of keys in formdata of step 3:",Object.keys(formData).length)
            break;

            case 4 :
              setStep(5)
              // setCoverageFormData( {
              //   ...coverageFormData,
              //   ...driverFormData,
              //   ...vehicleFormData,
              //   ...customerFormData, 
              //   ...formData
              // })
              // console.log("on step 4",formData)
              // console.log("Number of keys in formdata of step 4:",Object.keys(formData).length)
              break;

              case 5 :
              
              // setPurchaseFormData( {
              //   ...purchaseFormData,
              //   ...coverageFormData,
              //   ...driverFormData,
              //   ...vehicleFormData,
              //   ...customerFormData, 
              //   ...formData
              // })
              console.log("on step 5",formData)
              // console.log("Number of keys in formdata of step 5:",Object.keys(formData).length)
              // break;

              // setFormData(formData)
              // yourForm.submit()
              // case 2 :
              //   setStep(3)
              //   setFormDat2( {
              //     ...formDat2,
              //     ...formDat, 
              //     ...formData
              //   })
              //   console.log("on step 5",formData)
              //   break;

              

        default:
          alert("You submitted " + JSON.stringify(formData))
          console.log("whole data object:",formData)
          // console.log("whole data object:",JSON.stringify(formData, null, 2))
          // console.log("Number of keys in total formData:",Object.keys(formData).length)
      }

        
       
    }

    

    // var i = 0

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
                // ref={ (form) => {
                //           yourForm = form
                //         }
                //       }
                // formData={purchaseFormData}
                // onChange={onChangeForm}
                idPrefix={"rjsf_prefix"}

                // onChange={({formData}) => {
                //   setFormData(formData)
                //   }
                // }
                formData={formData}
                // formData={''}

                // onChange={console.log("Form Data:", formData), formData}

                
                
                >
                
                <></>

                </Form>



     {/* {
       step===5&& yourForm.submit()
     }   */}

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