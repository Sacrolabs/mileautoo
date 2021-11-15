import React ,{ useState } from 'react'
import Form, {withTheme} from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'
// import Form from '@rjsf/bootstrap-4'

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
		  "email",
		  "agency_name",
		  "mobile_phone_number",
		  "state",
		  "hear_about",
		  "comparative_rate",
	    
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

		  "email":{
        "type": "string"
      },
      "agency_name":{
        "type": "string"
      },
		  "mobile_phone_number": {
			// "type": "string"
			"type": "number",
			"minLength": 10,
		  },
		  "state":{
        "type": "string"
      },

		  "hear_about": {
			"type": "string",
           "enum": [
			  "Facebook",
			  "Google",
              "Other",
            ],

		  },
      "comparative_rate":{
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


const theme = { widgets: {test: () => (<div style={{backgroundColor:"red",}}>test</div>) } }

// const ThemedForm = withTheme(theme) 

// const Demo = () => (
//   <ThemedForm schema={schema} uiSchema={uiSchema} />
// );

   


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
	// "ui:FieldTemplate": Tpl,
    // name: { 'ui:title': 'Full Name' },
    "": {
    //   'ui:field': 'customer', // associate the address section of schema with the address custom field
      'ui:field': 'layout_grid',
	  //   "classNames": 'step information active ',
	// "classNames": 'px-md-0 py-md-0',
	
    'ui:layout_grid':{ 'ui:row': [
    { 'ui:col': { md: 12, children:
	 [ 
		{
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['first_name'] } },
			{ 'ui:col': { md: 6, children: ['last_name'] } },
				]
			},
		 
		 { 'ui:row': [
			{ 'ui:col': { md: 6, children: ['email'] } },
			{ 'ui:col': { md: 6, children: ['agency_name'] } },

			]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['mobile_phone_number'] } },
		
				]
			},
		 {
		'ui:row': [{ 'ui:col': { md: 12, children: ['state'] } },]
			},
      {
        'ui:row': [
          { 'ui:col': { md: 12, children: ['hear_about'] } },
        
            ]
          },
          
      {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['comparative_rate'] } },
		
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
			    
				 />
			);
		  }
      },

      "email": {
        "ui:placeholder": "Email",
        "ui:options": {
          label: false
          }
        },
        "agency_name": {
          "ui:placeholder": "Agency Name",
          "ui:options": {
            label: false
            }
          },
      
	  
	  "mobile_phone_number": {
		  "ui:placeholder": "Mobile (000-000-0000)",
			"ui:options": {
				label: false,
				inputType: 'tel'
		  },
	
	  },
   
    "state": {
			"ui:placeholder": "State",
			"ui:options": {
				label: false
			  }
		  },

		  
		  "hear_about": {
			"ui:placeholder": "How did you hear about us?",
			"classNames": "custom-select mt-md-4 ",
			class: "custom-select",
			"ui:options": {
				label: false,
				class: "custom-select",
			  },
			  "ui:widget": "select", 
		  },

		  "comparative_rate": {
			"ui:placeholder": "Which comparative rater do you use?",
      "classNames": "mt-md-4 ",
			"ui:options": {
				label: false
			  }
		  },
	
		},
  

}



const BecomeAgentForm = ()=> {
 
	const [formData, setFormData] = useState({ email: '' })
//    const onSubmit = ({formData},e) =>{ e.preventDefault(); console.log("Data submitted: ",  formData)}	
	const handleChange = (newData) => {
		// newData is a copy of the object formData with properties (and nested properties)
		// updated using immutability pattern for each change occured in the form.
		setFormData(newData);
	}

	const handleSubmit = () => {
		// const { doWhateverYouWant } = props;
		// doWhateverYouWant(formData); // Do whatever you want with the form data
	}

    return (
		<>
		{/* <div className="col-md-offset-3 col-md-6">	 */}
		{/* <div> */}
            <Form 
			// <ThemedForm
			data={formData}
            schema={mySchema}
            uiSchema={uiSchema}
			// FieldTemplate={Tpl}
			className= 'px-md-0 py-md-0'
			style={{backgroundColor:"red",}}
			fields={fields}
			onSubmit={handleSubmit}
			onChange={handleChange}
			liveValidate
            >
				
			

			<div className="d-flex align-items-center justify-content-center mt-md-4">
			<button  style={{height:'45px', width:'350px'}}  className="btn btn-success" type="submit">Submit</button>
			{/* <button type="button">Cancel</button> */}
			</div>
      
	        {/* </ThemedForm> */}
			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default BecomeAgentForm
