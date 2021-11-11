import React, {useState} from 'react'
import Form from 'react-jsonschema-form'

 const MultiForm = () => {

    const [step, setStep] = useState(1)

    const [formDat, setFormDat] = useState({})


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

    const onSubmit = ({formData}) => {
  
        if (step === 1) {
          setStep(2)

          setFormDat( {
            ...formDat, 
            ...formData
          })
        
      } else {
        alert("You submitted " + JSON.stringify(formData, null, 2))
      }
    }

    return (
        <div>
            <Form 
	  
                schema={step === 1 ? step1schema : step2schema}
                
                onSubmit={onSubmit}
                
                formData={formDat}
                />
        </div>
    )
}
export default MultiForm