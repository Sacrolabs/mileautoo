import React from 'react'
import Form from 'react-jsonschema-form'


 const mySchema ={
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
		  "street_address_1",
		  "zip_code",
		  "city",
		  "state",
		  "length_of_residency",
		  "date_of_birth",
		  "mobile_phone_number",
		  "preferred_contact_number"
		],
		"properties": {
		  "first_name": {
			"type": "string",
			// "title": "First Name",
			"format": "uri",
		  },
		  "last_name": {
			"type": "string"
		  },
		  "street_address_1": {
			"type": "string"
		  },
		  "street_address_2": {
			"type": "string"
		  },
		  "zip_code": {
			// "type": "string"
			"type": "number",
		  },
		  "city": {
			"type": "string"
		  },
		  "state": {
			"type": "string"
		  },
		  "length_of_residency": {
			"type": "string",
			"enum": [
			  "0 -11 Months",
			  "12 or more months"
			]
		  },
		  "date_of_birth": {
			"type": "string",
			'title': 'Date',
            'format': 'date',
			// 'format': 'date-time',
		  },
		  "mobile_phone_number": {
			// "type": "string"
			"type": "number",
			"minLength": 10,
		  },
		  "preferred_contact_number": {
			// "type": "string",
			"type": "number",
		  },
		  "estimated_credit_score": {
			"type": "string",
			"title": "credit score",
			"enum": [
			  "Excellent",
			  "Pretty Good",
			  "Just OK",
			  "Not Very Good"
			]
		  },
		  "hear_about": {
			"type": "string"
		  }
		}
	  }
   }
}
const Tpl = (props)=> {

	const {id, label, required, children} = props;
    
	console.log("Element Id:",id)

	console.log("Childern:",children)

	console.log("Props:",props)
	// const elementClass = (id =="") ? "wanted_class_name" : ""

	// const elementClass = (id =="root__estimated_credit_score") ? "options pretty-select" : "props.className"

	const elementClass = (id =="root__estimated_credit_score") ? "options" : `${props.classNames}`

	return (
	//   <div className="form-group">
	<div className={`${elementClass}`}>
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
      'ui:field': 'customer', // associate the address section of schema with the address custom field
    //   "classNames": 'step information active ',
	"classNames": '',

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
	  "estimated_credit_score": {
		"ui:placeholder": "How's your credit?",
		"ui:options": {
			label: false
		  },
		  "classNames":"screen input-error",
        //   "ui:widget": (props) => {
		// 	return (
		// 	  <select 
		// 	    // placeholder={props.placeholder}
		// 	    className="options"
		// 	    // type="text"
		// 		// value={props.value}
		// 		// required={props.required}
		// 		// onChange={(event) => props.onChange(event.target.value)}
		// 		 >
		// 			 <option  className="pretty-select"></option>
		// 		 </select>
		// 	);
		//   }
	  },
	  "mobile_phone_number": {
        "ui:options": {
			inputType: 'tel'
		  },
		  "ui:placeholder": "Mobile (000-000-0000)",
			"ui:options": {
				label: false
			  },
		//   "ui:help": "Hint: Type is cautiously!"

	  },
   
		  "street_address_1": {
			"ui:placeholder": "Street Address 1",
			"ui:options": {
			label: false
		  },
		//   "ui:widget": "textarea",

		  },
		  "street_address_2": {
			"ui:placeholder": "Street Address 2",
			"ui:options": {
			label: false
		  },
		//   "ui:widget": "textarea",

		  },
		  "zip_code": {
			"ui:placeholder": "Zip Code",
			"ui:options": {
				label: false
			  },

		  },
		  "city": {
			"ui:placeholder": "City",
			"ui:options": {
			label: false
		  },

		  },
		  "state": {
			"ui:placeholder": "State",
			"ui:options": {
			label: false
		  },

		  },
		  "length_of_residency": {
			"ui:options": {
				label: false
			  },

			//   "ui:FieldTemplate": Tpl

		  },
		  "date_of_birth": {
			"ui:placeholder": "Date of birth",
			"ui:options": {
			label: false
		  },
		//   "ui:widget": "alt-datetime"
		  },
		  
		  "preferred_contact_number": {
			"ui:placeholder": "Preffered Contact (000-000-0000)",
			"ui:options": {
				label: false
			  }
		  },
		  
		  "hear_about": {
			"ui:placeholder": "How did you hear about Mile Auto?",
			"ui:options": {
				label: false
			  }
		  },

		  "length_of_residency": {
			"ui:placeholder": "Length of Residency?",
			"ui:options": {
				label: false
			  }
		  },
	
		},
  

}



const CustomerForm = ()=> {

	
	  

    return (
        <>
            <Form 
            schema={mySchema}
            uiSchema={uiSchema}
			FieldTemplate={Tpl} 
			className="row"
            >
			<div>
			<button type="submit">Submit</button>
			<button type="button">Cancel</button>
			</div>
      
			</Form>	
        </>
    )
}

export default CustomerForm
