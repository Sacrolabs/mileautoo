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
            "date_of_birth",
            "gender",
            "marital_status",
            "estimated_credit_score",
            "lease_own_finance",
            "annual_mileage",
            "owned_year",
            "make",
            "annual_mileage",
            "has_auto_insurance",
		],
		"properties": {
            
		  
			"zip_code": {
			  "type": "number"
			},
			"date_of_birth": {
                "type": "string",
                'title': 'Date',
                'format': 'date',
                // 'format': 'date-time',
              },
              "gender": {
                "type": "string",
                "enum": [
                    "Male",
                    "Female"
                  ]
              },
              
              "marital_status": {
                "type": "string",
                "enum": [
                  "Single",
                  "Married"
                ]
              },
              
			"estimated_credit_score": {
                "type": "string",
                "title": "credit score",
                
                "enum": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "enumNames":[
                  "Excellent",
                  "Pretty Good",
                  "Just OK",
                  "Not Very Good"
                ],
              },

              "lease_own_finance": {
                "type": "string",
                "enum": [
                  "Leased",
                  "Financed",
                  "Owned"
                ]
              },

              "annual_mileage": {
                "type": "number"
              },
              "owned_year": {
                "type": "string",
                'title': 'Date',
                'format': 'date',
              },
              
              "car_make": {
                "type": "string"
              },
              "car_model": {
                "type": "string"
              },
              
              "has_auto_insurance": {
                "type": "string",
                "enum": [
                  "Yes",
                  "No, never Had",
                  "No, it has been less than a month since it lapsed",
                  "No, it has been more than a month since it lapsed"
                ]
              },
              "agent_code": {
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
			{ 'ui:col': { md: 4, children: ['zip_code'] } },
			{ 'ui:col': { md: 4, children: ['date_of_birth'] } },
			{ 'ui:col': { md: 4, children: ['gender'] } },

			]
			},
        {
		'ui:row': [
			{ 'ui:col': { md: 4, children: ['marital_status'] } },
			{ 'ui:col': { md: 8, children: ['estimated_credit_score'] } },
				]
			},
          {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['lease_own_finance'] } }
				]
			},	
		  {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['annual_mileage'] } },
			{ 'ui:col': { md: 6, children: ['owned_year'] } },
				]
			}, 
               {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['car_make'] } },
			{ 'ui:col': { md: 6, children: ['car_model'] } },
				]
			}, 
		
		   {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['has_auto_insurance'] } },
			{ 'ui:col': { md: 6, children: ['agent_code'] } },
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
          "ui:widget": (props) => {
			return (
			  <input 
			    placeholder={props.placeholder}
			    className="predefined"
				 />
			);
		  }
      },
	    "date_of_birth": {
		"ui:placeholder": "Date of Birth",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
         
        },
          "gender": {
		"ui:placeholder": "Gender",
		"classNames": "mt-md-4 form-select form-select-sm mb-3 predefined",
		"ui:options": {
			label: false
		  }, 
        //   "ui:widget": (props) => {
		// 	return (
		// 	  <select 
		// 	    placeholder={props.placeholder}
		// 	    className="predefined"
        //         id="root__gender"
		// 		 >
        //              <option className="predefined">{props.children}</option>
        //          </select>
		// 	);
		//   }
        },
            "marital_status": {
		"ui:placeholder": "Marital Status",
		"classNames": "mt-md-4 form-select form-select-sm mb-3",
		"ui:options": {
			label: false
		  }, 
      },
      "estimated_credit_score": {
        "ui:placeholder": "How is your credit?",
        "classNames": "mt-md-4 form-select form-select-sm mb-3",
        "ui:options": {
            label: false
          },
        },

        "lease_own_finance": {
            "ui:placeholder": "Is your car owned, leased, financial?",
            "classNames": "mt-md-4 form-select form-select-sm mb-3",
            "ui:options": {
                label: false
              },
            },

            "annual_mileage":{
                "ui:placeholder": "Annual Mileage",
                "classNames": "",
                "ui:options": {
                    label: false
                  },
                  "ui:widget": (props) => {
                    return (
                      <input 
                        placeholder={props.placeholder}
                        className="input-error"
                        // type="text"
                        // value={props.value}
                        // required={props.required}
                        // onChange={(event) => props.onChange(event.target.value)}
                         />
                    );
                  } 
            },
            "owned_year": {
                "ui:placeholder": "What year is your car?",
                "classNames": "",
                "ui:options": {
                    label: false
                  }, 
                },
            
            "car_make": {
                "ui:placeholder": "What is your car’s make?",
                "classNames": "mt-md-4",
                "ui:options": {
                    label: false
                  }, 
                },
            "car_model": {
                "ui:placeholder": "What model is your car?",
                "classNames": "mt-md-4",
                "ui:options": {
                    label: false
                  }, 
                },
             "has_auto_insurance":{
                "ui:placeholder": "Do you currently have insurance?",
                "classNames": "mt-md-4 form-select form-select-sm mb-3",
                "ui:options": {
                    label: false
                  },
               
             },
             "agent_code":{
                "ui:placeholder": "Agent code (Optional)",
                "classNames": "mt-md-4",
                "ui:options": {
                    label: false
                  },
             },

        
		},
  

}



const AgentForm = ()=> {

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
			<button style={{height:'50px', width:'380px',}} className="btn btn-success mt-md-5" type="submit">GET QUICK QUOTE</button>
			{/* <button type="button">Cancel</button> */}
			</div>
      


			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default AgentForm
