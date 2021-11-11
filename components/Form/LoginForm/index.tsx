import React from 'react'
import Form from 'react-jsonschema-form'
// import Form from '@rjsf/bootstrap-4'
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
            "email",
            "password"
		],
		"properties": {
			"email": {
			  "type": "string",
			  "title": "Email",
			  "format": "email",
			},
			"password": {
                "type": "string",
				"title": "Password",
				"format": "password",
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
			{ 'ui:col': { md: 12, children: ['email'] } },

			]
			},
        { 'ui:row': [
			{ 'ui:col': { md: 12, children: ['password'] } },

			]
			},
        
	 ]
  } },
  ] },
  
      "email": {
		"ui:placeholder": "Email",
		"ui:widget": "email",
		"ui:autofocus": true,
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
        //   "ui:widget": (props) => {
		// 	return (
		// 	  <input 
		// 	    placeholder={props.placeholder}
		// 	    className=""
		// 		 />
		// 	);
		//   }
      },
      "password": {
		"ui:placeholder": "Password",
		"ui:widget": "password",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
        //   "ui:widget": (props) => {
		// 	return (
		// 	  <input 
		// 	    placeholder={props.placeholder}
		// 	    className=""
		// 		 />
		// 	);
		//   }
      },
        
		},
  

}



const LoginForm = ()=> {

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

                <div className="extra-controls">
                    <div className="checkbox-with-label">
                        <div className="checkbox-wrap">
                            <input type="checkbox" id="remain-logged-in" name="remain-logged-in"/>
                        </div>
                        <label for="remain-logged-in">Remain logged in</label>
                    </div>
                    <a href="#">Change or Reset Password</a>
                </div>
                
                

			<div className="d-flex align-items-center justify-content-center mt-md-4">
			<button style={{height:'45px', width:'350px'}}  className="btn btn-success" type="submit">Login</button>
			{/* <button type="button">Cancel</button> */}
			</div>
      
            <p className="other-variant">or <br/> <a className="i-icon" href="#">Log In Without Password</a> </p>
         

			</Form>	
			
		{/* </div>		 */}
        </>
    )
}

export default LoginForm
