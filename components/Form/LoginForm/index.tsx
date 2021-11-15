import React from 'react'
import Form from 'react-jsonschema-form'
// import Form from '@rjsf/bootstrap-4'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import LayoutField   from 'react-jsonschema-form-layout-grid'


const mySchema = {
//   "title": "Login Request",
	"type": "object",
	
		
		"required": [
            "email",
            "password"
		],
		"properties": {
			"email": {
			  "type": "string",
			  "title": "Email",
			//   "format": "email",
			//   "pattern":"",
			format: 'email_addr',
			  
			},
			"password": {
                "type": "string",
				"title": "Password",
				// "format": "password",
				format: "password_format",
				"minLength": 8,

              },
        }
	  }
 



const customFormats = {
	'email_addr': /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
	'password_format': /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  }



  const transformErrors = (errors) => {
	return errors.map(error => {
	//   if (error.name === "format") {
	// 	error.message = "Email format must be valid"
	//   }
	if (error.property === ".email") {
		error.message = "Please enter a valid Email"
	  }
	if(error.property === ".password" && error.name == "format")
	error.message = "Please enter a valid Password"

	if(error.property === ".password" && error.name == "minLength")
	error.message = "Password must be 8 characters long"
	  
	console.log("Error:", error)
	  return error;
	});
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
    
      'ui:field': 'layout_grid',
	 
	"classNames": '',

	"ui:options": {
		"semantic" : {
		  "errorOptions": {
			"size": "small",
			"pointing": "above",
		  }
		}
	  },
    
    
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
       
      },
      "password": {
		"ui:placeholder": "Password",
		"ui:widget": "password",
		"classNames": "",
		"ui:options": {
			label: false
		  }, 
		// "ui:help":"Hint: Minimum eight characters, at least one letter, one number and one special character",
        "ui:help":"Hint: Password must be eight characters, at least one letter, one number and one special character",
       
		// "ui:help": "Hint: Make it strong!"
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
			customFormats={customFormats}
			transformErrors={transformErrors}
			showErrorList= {false}
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
