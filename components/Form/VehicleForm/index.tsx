import React from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'

const vehicleSchema = {
    "type": "object",
    "properties": {
    "": {
        "type": "object",
        
        "required": [
            "year",
            "make",
            "model",
            "prior_damage",
            "lease_own_finance",
            // "length_of_ownership",
            "purpose",
            "annual_mileage"
            ],
        
        "properties": {
            
            "choose_details": {
       
    //   "titleMap": [
    //     { "value": "c", "name": "C" },
    //     { "value": "b", "name": "B" },
    //     { "value": "a", "name": "A" }
    //   ],    
            "type": "boolean",
            "enum": [
            //   "Year/Make/Model",
            //   "VIN",
                true,
                false
            ],
            "enumNames": [
            "Year/Make/Model",
            "VIN"
             ],
            "default": true,
            "title": "radio buttons",
            "description": "This is the radio-description"
            },

			"year": {
                "type": "number",
                // "type": "string",
                //  'format': 'date',
			},
			"make": {
			  "type": "string"
			},
			"model": {
			  "type": "string"
			},
			"style": {
			  "type": "string"
			},
			"prior_damage": {
			  "type": "boolean"
			},
			"lease_own_finance": {
			  "type": "string",
			  "enum": [
				"Leased",
				"Financed",
				"Owned"
			  ]
			},
			// "length_of_ownership": {
			//   "type": "string",
			//   "enum": [
			// 	"Less than 1 Year",
			// 	"1 - 2 Years",
			// 	"3 - 4 Years",
			// 	"5 or More Years"
			//   ]
			// },
			"purpose": {
			  "type": "string",
			  "enum": [
                "one", "two", "three",
				
			  ],
              "enumNames": [
				  "Personal",
                  "Business",
			],
			},
			"annual_mileage": {
			  "type": "number"
			},
			// "vin": {
			//   "type": "string"
			// },
            "choose_option_tag": {
			  "type": "string"
			}
		  },
		  
		}
	  },
	  
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
    "": {
      'ui:field': 'layout_grid',
      
      'ui:layout_grid':{ 'ui:row': [
    { 'ui:col': { md: 12, children:
	 [ 
         
         {
		'ui:row': [
            { 'ui:col': { md: 8, children: ['choose_option_tag'] } },
		
			{ 'ui:col': { md: 4, children: ['choose_details'] } },
				]
			},
         
		 { 'ui:row': [
			{ 'ui:col': { md: 4, children: ['year'] } },
			{ 'ui:col': { md: 4, children: ['make'] } },
			{ 'ui:col': { md: 4, children: ['model'] } },

			]
            },
         {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['style'] } },
			{ 'ui:col': { md: 6, children: ['prior_damage'] } },
				]
			},
         {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['lease_own_finance'] } },
			{ 'ui:col': { md: 6, children: ['purpose'] } },
				]
			},
		  {
		'ui:row': [
			{ 'ui:col': { md: 12, children: ['annual_mileage'] } },
				]
			},
	 ]
  } },
  ] },
    
        
        
      "choose_details": {
          "ui:options": {
              "label": false,
              "inline": true,
		  },
        "ui:widget": "radio", // could also be "select"
        // "classNames": "form-check form-check-inline ",
        "classNames": "radio-selection vehicle-details",
        //  "classNames": "",
        },
       "year": {
			"ui:placeholder": "Year",
			"ui:options": {
				label: false
			  },

        },
       "make": {
			"ui:placeholder": "Make",
			"ui:options": {
				label: false
			  },

        },
       "model": {
			"ui:placeholder": "Model",
			"ui:options": {
				label: false
			  },
        },
        "style": {
			"ui:placeholder": "Style(Body style/Trim level)",
			"ui:options": {
				label: false
            },
        },
         "prior_damage": {
			"ui:placeholder": "Does this vehicle have existing damage?",
			"ui:options": {
				label: false
			  },
        },
        "lease_own_finance": {
			"ui:placeholder": "Is your vehicle owned, leased, or financed?",
			"ui:options": {
				label: false
            },
        },
        "purpose": {
			"ui:placeholder": "What is your vehicle’s primary use?",
			"classNames": "mt-md-4 form-select form-select-sm mb-3",
			"ui:options": {
				label: false
            },
        },
       "annual_mileage": {
			"ui:placeholder": "How many miles do you drive annualy?",
			"ui:options": {
				label: false
            },
        },
       "choose_option_tag": {
			"ui:placeholder": "You can choose to enter your vehicle details as per the two options below. Feel free to choose either one!", 
			"ui:options": {
				label: false
           },
           "classNames": "",
              "ui:widget": (props) => {
			return (
			//   <input 
			//     placeholder={props.placeholder}
			//     className="predefined"
			    // type="text"
				// value={props.value}
				// required={props.required}
				// onChange={(event) => props.onChange(event.target.value)}
				//  />
				<div>
					You can choose to enter your vehicle details as per the two options below. Feel free to choose either one!
				</div>
			);
		  },
			}
    
		},
}



const VehicleForm = ()=> { 

    return (
		<>
            <Form 
            schema={vehicleSchema}
            uiSchema={uiSchema}
			FieldTemplate={Tpl} 
			// className="row"
			className= 'px-md-0 py-md-0'
			fields={fields}
			// onSubmit={onSubmit}
            onChange={console.log("changed")}
			onSubmit={console.log("submitted")}
		    onError={console.log("errors")}
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

export default VehicleForm
