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
		 "first_name",
			"last_name",
			"email_address",
			"gender",
			"marital_status",
			"home_rental_status",
			"occupation_industry",
			"occupation",
			"level_of_education",
			"has_auto_insurance",
			"accidents_convictions",
			"previous_company",
			"recent_issuer_length",
			"previous_expiration_date",
			"recent_coverage_limits",
			"relation",
			"date_of_birth",
            "exclude_spouse",
            "another_driver_policy",
		],
		"properties": {
            
		  
			"first_name": {
			  "type": "string"
			},
			"last_name": {
			  "type": "string"
			},
			"email_address": {
			  "type": "string"
			},
			"gender": {
			  "type": "string",
			  "enum": [
				"Female",
				"Male"
			  ]
			},
			"marital_status": {
			  "type": "string",
			  "enum": [
				"Single",
				"Married"
			  ]
			},
			"miles_year":{
                "type": "string",
                    "enum": [
                      "50,000 K.M",
                      "100,000 K.M",
                      "200,000 K.M",
                    ]
            },
			"home_rental_status": {
			  "type": "string",
			  "enum": [
				"Own",
				"Rent"
			  ]
			},
			"occupation_industry": {
			  "type": "string"
			},
			"occupation": {
			  "type": "string"
			},
			"level_of_education": {
			  "type": "string",
			  "enum": [
				"Graduate work or graduate degree",
				"College degree",
				"Currently in college",
				"Some college",
				"Vocational or trade-school degree",
				"High school diploma or GED",
				"No high-school diploma or GED"
			  ]
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
			"accidents_convictions": {
			  "type": "string",
			  "enum": [
				"No",
				"1",
				"2",
				"3",
				"4"
			  ]
			},
			"previous_company": {
			  "type": "string"
			},
			"recent_issuer_length": {
			  "type": "string"
			},
			"previous_expiration_date": {
			  "type": "string"
			},
			"recent_coverage_limits": {
			  "type": "string"
			},
			"relation": {
			  "type": "string"
			},
			"date_of_birth": {
			  "type": "string"
			},
			"exclude_spouse": {
			  "type": "boolean"
            },
            "another_driver_policy": {
			  "type": "string",
			  "enum": [
				"Yes",
				"No",
				
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
			{ 'ui:col': { md: 4, children: ['first_name'] } },
			{ 'ui:col': { md: 4, children: ['last_name'] } },
			{ 'ui:col': { md: 4, children: ['email_address'] } },
				]
			},
		 
		 { 'ui:row': [
			
			{ 'ui:col': { md: 4, children: ['gender'] } },
			{ 'ui:col': { md: 4, children: ['marital_status'] } },
            { 'ui:col': { md: 4, children: ['home_rental_status'] } },
			]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
				]
			},
		  {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['miles_year'] } },
				]
			},	
	 ]
  } },
  ] },
  
      "first_name": {
		"ui:placeholder": "First Name", 
        // "classNames": "form-group half",
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
	  "last_name": {
		"ui:placeholder": "Last Name", 
        // "classNames": "form-group half",
		"classNames": "",
		"ui:options": {
			label: false
		  },
		  "ui:widget": (props) => {
			return (
			  <input 
			    placeholder={props.placeholder}
			    className="predefined"
			    // type="text"
				// value={props.value}
				// required={props.required}
				// onChange={(event) => props.onChange(event.target.value)}
				 />
			);
		  }
        },
      
	  "email_address": {
			"ui:placeholder": "Email",
			"ui:options": {
				label: false
          },
         "classNames":" ",
        },
      
       "gender": {
		"ui:placeholder": "Gender",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
        },
       
       "marital_status": {
		"ui:placeholder": "Marital Status",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
        },
       
       "home_rental_status": {
		"ui:placeholder": "Do your own or rent your home?",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
        },
		"miles_year": {
			"ui:placeholder": "How many miles do you drive annualy?",
            "classNames": "mt-md-4 ",
			"ui:options": {
				label: false
            },
        },
       "level_of_education": {
		"ui:placeholder": "Level of Education",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
	  },
	
       "has_auto_insurance": {
		"ui:placeholder": "Do your currently have auto insurance?",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
	  },
       
       "accidents_convictions": {
		"ui:placeholder": "Any at-fault accidents or convictions?",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
	  },
    //    another_driver_policy
        "another_driver_policy": {
		"ui:placeholder": "Would you like to add another driver to this policy?",
		"ui:options": {
			label: false
		  },
		 "classNames":"mt-md-4 ",
        },
        
		},
  

}



const DriversDashForm = ()=> {

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

export default DriversDashForm
