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
            "zip_code",
            "miles_year",
            "insurance_pay",
		],
		"properties": {
			"zip_code": {
                "type": "number"
              },
              "miles_year":{
                "type": "string",
                    "enum": [
                      "50,000 K.M",
                      "100,000 K.M",
                      "200,000 K.M",
                    ]
            },
              "insurance_pay":{
                "type": "string",
                    "enum": [
                      "$25,000/$50,000",
                      "$50,000/$100,0000",
                      
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
	
		{ 'ui:row': [
			{ 'ui:col': { md: 12, children: ['zip_code'] } },

			]
			},
        { 'ui:row': [
			{ 'ui:col': { md: 12, children: ['miles_year'] } },

			]
			},
         { 'ui:row': [
			{ 'ui:col': { md: 12, children: ['insurance_pay'] } },

			]
			},
       
	 ]
  } },
  ] },
   // "zip_code",
    // "miles_year",
    // "insurance_pay",
   
      "zip_code": {
		"ui:placeholder": "Zip Code",
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
      "miles_year": {
		"ui:placeholder": "Miles You Drive per Year",
		"classNames": "mt-md-4 form-select form-select-sm mb-3",
		"ui:options": {
			label: false
		  }, 
          
      },
      "insurance_pay": {
		"ui:placeholder": "Your Monthly Insurance Payment",
		"classNames": "mt-md-4 form-select form-select-sm mb-3",
		"ui:options": {
			label: false
		  }, 
          
      },
      
		},
  

}



const IndexForm = ()=> {

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
			fields={fields}
			// onSubmit={onSubmit}
            >
          

			<div style={{backgroundColor:'' ,marginBottom:'20px'}} className="d-flex align-items-center justify-content-center my-md-4">
			<button style={{height:'45px', width:'350px', marginBottom:'20px'}}  className="btn btn-success" type="submit">SEE MY SAVINGS</button>
			{/* <button type="button">Cancel</button> */}
			</div>
         

			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default IndexForm
