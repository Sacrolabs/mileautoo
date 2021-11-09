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
            "phone_number",
		],
		"properties": {
			"phone_number": {
			  "type": "number"
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
    // "zip_code",
    // "date_of_birth",
    // "gender",
    // "marital_status",
    // "estimated_credit_score",
    // "lease_own_finance",
    // "owned_year",
    // "make",
    // "has_auto_insurance",
    // "agent_code",
    
    'ui:layout_grid':{ 'ui:row': [
    { 'ui:col': { md: 12, children:
	 [ 
	
		{ 'ui:row': [
			{ 'ui:col': { md: 12, children: ['phone_number'] } },

			]
			},
        
	 ]
  } },
  ] },
  
      "phone_number": {
		"ui:placeholder": "Phone number",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
          "ui:widget": (props) => {
			return (
			  <input 
			    placeholder={props.placeholder}
			    className=""
				 />
			);
		  }
      },
	    
        
		},
  

}



const MagicForm = ()=> {

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
			<div className="d-flex align-items-center justify-content-center mt-md-4">
			<button style={{height:'45px', width:'350px'}}  className="btn btn-success" type="submit">GET QUICK QUOTE</button>
			{/* <button type="button">Cancel</button> */}
			</div>
      
			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default MagicForm
