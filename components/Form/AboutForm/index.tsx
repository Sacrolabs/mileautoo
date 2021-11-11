import React from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'
 
const mySchema = {
	"type": "object",
	"properties": {
		"": {
		"type": "object",
		"required": [
		 "full_name",
		"phone_number",
		"email_address",
        "open_position",
			
		],
		"properties": {
            
		  
			"full_name": {
			  "type": "string"
			},
			"email_address": {
			  "type": "string"
            },
            "phone_number": {
			  "type": "number"
            },
			"open_position": {
			  "type": "string",
			  "enum": [
				"Graphic Designer",
				"CEO",
                "Creative Director",
                "Marketing Manager",
                "Project Manager",
			  ]
			},
			
        }
	  }
   }
}


  const fields = {
  layout_grid: LayoutField ,
}


const Tpl = (props)=> {

	const {id, label, required, children} = props;
    
	console.log("Element Id:",id)

	console.log("Childern:",children)

	console.log("Props:",props)

	return (
	  <div className="form-group">
	 {/* <div className={`${elementClass}`}> */}
		<label 
		htmlFor={id}>
			{/* {label} */}
			{/* {required ? "*" : null} */}
		</label>
		{children}
	  </div>
	)
  }




const uiSchema = {
	"ui:FieldTemplate": Tpl,
    "": {
      'ui:field': 'layout_grid',
	"classNames": '',
	
    'ui:layout_grid':{ 'ui:row': [
    { 'ui:col': { md: 12, children:
	 [ 
	
		 {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['full_name'] } }
				]
			},	
			 {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['email_address'] } }
				]
            },
         {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['phone_number'] } }
				]
            },
         {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['open_position'] } }
				]
            },
         
	 ]
  } },
  ] },
  
      "full_name": {
		"ui:placeholder": "Full Name",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
      },
	    "email_address": {
		"ui:placeholder": "Email",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
        },
          "phone_number": {
		"ui:placeholder": "Phone",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
        },
            "open_position": {
		"ui:placeholder": "Select Open Positions",
		"classNames": "mt-md-4 ",
		"ui:options": {
			label: false
		  }, 
      },
        
		},
  

}



const AboutForm = ()=> {

   const onSubmit = ({formData},e) =>{ e.preventDefault(); console.log("Data submitted: ",  formData)}	
	  
    return (
		<>
		
            <Form 
            schema={mySchema}
            uiSchema={uiSchema}
			
			className= 'px-md-0 py-md-0'
			fields={fields}
		
            >
			<div className="mt-md-4 d-flex align-items-center justify-content-center">
			<button style={{height:'45px', width:'350px'}} className="btn btn-success" type="submit">SEE MY SAVINGS</button>
			</div>
			</Form>	
        </>
    )
}

export default AboutForm
