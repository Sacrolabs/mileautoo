
import React, {useState} from 'react'
import Form from 'react-jsonschema-form'

 const MultiFormDemo = () => {


    const [formData, setFormData] = useState(null)

    const [step, setStep] = useState(1)

    const [formDat1, setFormDat1] = useState({})

    const [formDat2, setFormDat2] = useState({})

    const [formDat3, setFormDat3] = useState({})
     
    const step1schema = {
        title: "Step 1",
        type: "object",
        required: ["name"],
        properties: {
            name: {type: "string", minLength: 3},
        }
      }
      
      const step2schema = {
        title: "Step 2",
        type: "object",
        required: ["age"],
        properties: {
          age: {type: "integer"}
        }
      }

      const step3schema = {
        title: "Step 3",
        type: "object",
        required: ["city"],
        properties: {
          city: {type: "string"}
        }
      }


    const onSubmit = ({formData}) => {
      
      switch(step){
        case 1 :

          setStep(2)
          // setFormDat1( {
          //   // ...formDat1, 
          //   ...formData
          // })
          
          // console.log("on step 1",formData)

          break;

        case 2 :
          setStep(3)
          // setFormDat2( {
          //   // ...formDat2,
          //   ...formDat1, 
          //   ...formData
          // })
          // console.log("on step 2",formData)
          break;

          case 3:
            // setStep(3)
            // setFormDat3( {
            //   ...formDat1, 
            //   ...formDat2,
            //   formData
            // })
            
            console.log("on step 3",formData)
            // console.log("on step 3 formData3",formDat3)
            // break;

        default:
          alert("You submitted " + JSON.stringify(formData))
      }

        
       
    }

    return (
        <div>
            <Form 
	  
                schema={
               
                  step === 1 && step1schema 
                  ||
                  step === 2 && step2schema 
                  ||
                  step === 3 && step3schema 
                 
                }
                
                onSubmit={onSubmit}
                
                // formData={formDat3}
                idPrefix={"rjsf_prefix"}

                 onChange={e => setFormData(e.formData)}
                 formData={formData}
                />
        </div>
    )
}
export default MultiFormDemo