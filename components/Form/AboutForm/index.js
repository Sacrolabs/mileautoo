import React from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from '/node_modules/react-jsonschema-form-layout-grid'
 
const mySchema = {
//   "title": "QuoteRequest",
	"type": "object",
	// "examples": [],
	"properties": {
	//   "customer": {
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
//   TitleField: TitleField
}


const Tpl = (props)=> {

	const {id, label, required, children} = props;
    
	console.log("Element Id:",id)

	console.log("Childern:",children)

	console.log("Props:",props)
	// const elementClass = (id =="") ? "wanted_class_name" : ""

	// const elementClass = (id =="root__estimated_credit_score") ? "options pretty-select" : "props.className"
    // custom-select
	// const elementClass = (id =="root__estimated_credit_score") ? "options" : `${props.classNames}`

	// const elementClass = (id == "root__estimated_credit_score") ? "custom-select" : `${props.classNames}`
	
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
    // name: { 'ui:title': 'Full Name' },
    "": {
    //   'ui:field': 'customer', // associate the address section of schema with the address custom field
      'ui:field': 'layout_grid',
	  //   "classNames": 'step information active ',
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
		"classNames": "mt-md-4 form-select form-select-sm mb-3",
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
		{/* <div className="col-md-offset-3 col-md-6">	 */}
		{/* <div> */}
            <Form 
            schema={mySchema}
            uiSchema={uiSchema}
			// FieldTemplate={Tpl} 
			// className="row"
			className= 'px-md-0 py-md-0'
			fields={fields}
			// onSubmit={onSubmit}
            >
			<div className="d-flex align-items-center justify-content-center">
			<button style={{height:'45px', width:'350px'}} className="btn btn-success" type="submit">SEE MY SAVINGS</button>
			{/* <button type="button">Cancel</button> */}
			</div>
      
			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default AboutForm
