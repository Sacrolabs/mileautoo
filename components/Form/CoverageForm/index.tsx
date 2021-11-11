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
		  "bodily_injury",
		  "uninsured_bodily_injury",
		  "underinsured_motorist",
		  "comprehensive_deductible",
		  "collision_deductible",
		  "personal_injury_protection",
		  "rental_reimbursement",
		  "property_damage",
          "policy_date",
		],
		"properties": {
            
		  
			"bodily_injury": {
			"type": "string",
			"enum": [
			  "1",
			  "2",
			  "3"
			]
		  },
		  "uninsured_bodily_injury": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			]
		  },
		  "underinsured_motorist": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			]
		  },
		  "comprehensive_deductible": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			],
		  },
		  "collision_deductible": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			],
		  },
		  "personal_injury_protection": {
			"type": "string",
			"enum": [
			  "$500",
			  "$1,000",
			  "$2,000",
			  "$2,500",
			  "$5,000",
			  "$10,000",
			  "$25,000",
			  "I decline this coverage"
			]
		  },
		  "rental_reimbursement": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			],
		  },
		  "property_damage": {
			"type": "string",
			"enum": [
			  "$25,000/$50,000",
			  "$50,000/$100,0000",
			  "I decline this coverage"
			],
		  },
		 "policy_date": {
			"type": "string",
			'title': 'Date',
            'format': 'date',
			// 'format': 'date-time',
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
			{ 'ui:col': { md: 6, children: ['bodily_injury'] } },
			{ 'ui:col': { md: 6, children: ['uninsured_bodily_injury'] } },
				]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['underinsured_motorist'] } },
			{ 'ui:col': { md: 6, children: ['comprehensive_deductible'] } },
				]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['collision_deductible'] } },
			{ 'ui:col': { md: 6, children: ['personal_injury_protection'] } },
				]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['rental_reimbursement'] } },
			{ 'ui:col': { md: 6, children: ['policy_date'] } },
				]
			},
		 
		 
	 ]
  } },
  ] },
  
  //  "bodily_injury",
	// 	  "uninsured_bodily_injury",
	// 	  "underinsured_motorist",
	// 	  "comprehensive_deductible",

	// 	  "collision_deductible",
	// 	  "personal_injury_protection",
	// 	  "rental_reimbursement",
	// 	  
    
      "bodily_injury": {
		"ui:placeholder": "Bodily Injury (Per Person/Per Incident)", 
		"ui:options": {
			label: false
		  },
		//   "classNames":"screen input-error mt-md-3 form-select",
		 "classNames":"",
        
        },
      
      "uninsured_bodily_injury": {
        "ui:placeholder": "Uninsured Motorist Coverage", 
        "ui:options": {
            label: false
          },
          //   "classNames":"screen input-error mt-md-3 form-select",
          "classNames":"", 
        },
      
       "underinsured_motorist": {
            "ui:placeholder": "Under-insured Motorist Coverage", 
            "ui:options": {
                label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"mt-md-4 ",
            
        },
      
        "comprehensive_deductible": {
            "ui:placeholder": "Comprehensive Deductible", 
            "ui:options": {
                label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"mt-md-4 ",
            
        },

        "collision_deductible": {
            "ui:placeholder": "Collision Deductible", 
            "ui:options": {
                label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"mt-md-4 ",
            
        },

        "personal_injury_protection": {
            "ui:placeholder": "Medical Payments (MP) Coverage", 
            "ui:options": {
                label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"mt-md-4 ",
            
        },

        "rental_reimbursement": {
            "ui:placeholder": "Rental Reimbursement Limit", 
            "ui:options": {
                label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"mt-md-4 ",
            
        },

        "policy_date": {
            "ui:placeholder": "Policy Effective Date",
            "ui:options": {
                label: false
            },
        },
      
      
	 
		},
  

}



const CoverageForm = ()=> {

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
			<div>
			{/* <button type="submit">Submit</button>
			<button type="button">Cancel</button> */}
			</div>
      
			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default CoverageForm
