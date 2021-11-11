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
            "effective_date",
            // "length_of_ownership",
            
            "miles_year"
            ],
        
        "properties": {
            
            "miles_year":{
                "type": "string",
                    "enum": [
                      "50,000 K.M",
                      "100,000 K.M",
                      "200,000 K.M",
                    ]
            },
            "effective_date":{
                "type": "string",
                'title': 'Date',
                'format': 'date',
            },
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
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
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
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
				]
			},
		 {
		'ui:row': [
			{ 'ui:col': { md: 6, children: ['miles_year'] } },
			{ 'ui:col': { md: 6, children: ['effective_date'] } },
				]
			},
		
	 ]
  } },
  ] },
    
  "miles_year": {
    "ui:placeholder": "How many miles do you drive annualy?",
    "classNames": "mt-md-4 ",
    "ui:options": {
        label: false
    },
},
        
  "date_of_birth": {
    "ui:placeholder": "Date of Birth",
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
		},
}



const EditCoverageForm = ()=> { 

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
            <button className="btn btn-success" style={{height:'45px', width:'350px'}} type="button">Save</button>
			</div>
           
            </div>

			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default EditCoverageForm
