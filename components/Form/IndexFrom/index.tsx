import React from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'
 
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
                "type": "string"
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
	
	return (
	  <div className="form-group">
		<label 
		htmlFor={id}>
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
   
      "zip_code": {
		"ui:placeholder": "Zip Code",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
        //   "ui:widget": (props) => {
		// 	return (
		// 	  <input 
		// 	    placeholder={props.placeholder}
		// 	    className="predefined"
		// 		 />
		// 	);
		//   }
      },
      "miles_year": {
		"ui:placeholder": "Miles You Drive per Year",
		"classNames": "mt-md-4 ",
		"ui:options": {
			label: false
		  }, 
          
      },
      "insurance_pay": {
		"ui:placeholder": "Your Monthly Insurance Payment",
		"classNames": "mt-md-4",
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
		
            <Form 
            schema={mySchema}
            uiSchema={uiSchema}
			
			className= 'px-md-0 py-md-0'
			fields={fields}

            >
			<div style={{backgroundColor:'' ,marginBottom:'20px'}} className="d-flex align-items-center justify-content-center my-md-4">
			<button style={{height:'45px', width:'350px', marginBottom:'20px'}}  className="btn btn-success" type="submit">SEE MY SAVINGS</button>	
			</div>
			</Form>	
			
        </>
    )
}

export default IndexForm