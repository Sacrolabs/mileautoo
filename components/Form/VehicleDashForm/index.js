import React from 'react'
import Form from 'react-jsonschema-form'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from '/node_modules/react-jsonschema-form-layout-grid'

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
            
            "miles_year"
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
			  "type": "boolean",
              "enumNames": [
                  "Yes",
                  "No"
              ,],
              "enum":[
                  "1",
                  "2",
              ],
			
                // "title": "radio buttons",
            "description": "Does this vehicle have existing damage?"
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
              "enumNames": ["Personal",
              "Business",],
			},
			"miles_year":{
                "type": "string",
                    "enum": [
                      "50,000 K.M",
                      "100,000 K.M",
                      "200,000 K.M",
                    ]
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
			"ui:options": {
				label: false
            },
        },
       "miles_year": {
			"ui:placeholder": "How many miles do you drive annualy?",
            "classNames": "mt-md-4 form-select form-select-sm mb-3",
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
			  <input 
			    placeholder={props.placeholder}
			    className="predefined"
			    // type="text"
				// value={props.value}
				// required={props.required}
				// onChange={(event) => props.onChange(event.target.value)}
				 />
			);
		  },
			}
    
		},
}



const VehicleDashForm = ()=> { 

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
			<div className="row" style={{}}>
			
            <div className="d-flex col-md-6 align-items-center justify-content-center">
            <button className="btn" style={{height:'45px', width:'350px', borderRadius:"5px", borderColor:'#2A8854', color:'#2A8854', borderStyle:"solid", borderWidth:"0.15rem"}} type="button">Cancel</button>
            </div>

			<div className="d-flex col-md-6 align-items-center justify-content-center">
            <button className="btn btn-success" style={{height:'45px', width:'350px'}} type="button">Add</button>
			</div>
           
            </div>

			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default VehicleDashForm
