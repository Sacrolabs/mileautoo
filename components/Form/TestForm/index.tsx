import React from 'react'
import Form from 'react-jsonschema-form'
import { demoSchema, demoUiSchema } from '../DemoSchema'


export default function TestForm() {
    return (
        <div>
               <Form 
	  
      schema={
        demoSchema
        
      }
      uiSchema={
        demoUiSchema
      }
    //   onSubmit={}
      idPrefix={"rjsf_prefix"}

    //    onChange={}
    //    formData={}
      />
        </div>
    )
}
