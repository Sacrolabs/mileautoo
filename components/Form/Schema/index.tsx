
       const customerSchema = {
        title: "Your Information",
      type: "object",
      "required": [
        // "first_name",
        // "last_name",
        // "street_address_1",
        // "zip_code",
        // "city",
        // "state",
        // "length_of_residency",
        // "date_of_birth",
        // "mobile_phone_number",
        // "preferred_contact_number"
      ],
  
      "properties": {
        "customer_first_name": {
        "type": "string",
        // "title": "First Name",
        // "format": "string",
        },
        "customer_last_name": {
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
        
  
        
       
  
   const driverSchema = {
    title: "Your Drivers",
      "type": "object",
      "required": [
      //  "first_name",
      // 	"last_name",
      // 	"email_address",
      // 	"gender",
      // 	"marital_status",
      // 	"home_rental_status",
      // 	"occupation_industry",
      // 	"occupation",
      // 	"level_of_education",
      // 	"has_auto_insurance",
      // 	"accidents_convictions",
      // 	"previous_company",
      // 	"recent_issuer_length",
      // 	"previous_expiration_date",
      // 	"recent_coverage_limits",
      // 	"relation",
      // 	"date_of_birth",
      //         "exclude_spouse",
      //         "another_driver_policy",
      ],
      "properties": {
              
        
        "driver_first_name": {
          "type": "string"
        },
        "driver_last_name": {
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
  
  
  
  const coverageSchema = {
        title: "Your Coverage",
      "type": "object",
      "required": [
        // "bodily_injury",
        // "uninsured_bodily_injury",
        // "underinsured_motorist",
        // "comprehensive_deductible",
        // "collision_deductible",
        // "personal_injury_protection",
        // "rental_reimbursement",
        // "property_damage",
        //     "policy_date",
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
  
  
  
   const purchaseSchema = {
      title: "Your Quote",
    
      "type": "object",
      "required": [
              
      ],
      "properties": {
        "license_state": {
                  "type": "string",
                  "enum": [
                    "Demo 1",
                    "Demo 2",
                    "Demo 3",
                  ]
        },
        "license_status": {
                  "type": "string",
                  "enum": [
                    "Demo 1",
                    "Demo 2",
                    "Demo 3",
                  ]
        },
              "license_number": {
                  "type": "number",
                  "enum": [
                    1,
                    2,
                    3,
                  ],
                  "enumnames": [
                    "1",
                    "2",
                    "3",
                  ]
        },
     }
        }
  
  
  
        // const customerUiSchema = {
        //   'ui:field': 'layout_grid',
        //   'ui:layout_grid':{ 'ui:row': [
        //     { 'ui:col': { md: 12, children:
        //    [ 
        //     {
        //     'ui:row': [
        //       { 'ui:col': { md: 6, children: ['customer_first_name'] } },
        //       { 'ui:col': { md: 6, children: ['customer_last_name'] } },
        //         ]
        //       },
             
        //      { 'ui:row': [
        //       { 'ui:col': { md: 4, children: ['street_address_1'] } },
        //       { 'ui:col': { md: 4, children: ['zip_code'] } },
        //       { 'ui:col': { md: 4, children: ['city'] } },
        
        //       ]
        //       },
        //      {
        //     'ui:row': [
        //       { 'ui:col': { md: 6, children: ['state'] } },
        //       { 'ui:col': { md: 6, children: ['date_of_birth'] } },
        //         ]
        //       },
        //      {
        //     'ui:row': [
        //       { 'ui:col': { md: 6, children: ['mobile_phone_number'] } },
        //       { 'ui:col': { md: 6, children: ['preferred_contact_number'] } },
        //         ]
        //       },
        //      {
        //     'ui:row': [
        //       { 'ui:col': { md: 6, children: ['estimated_credit_score'] } },
        //       { 'ui:col': { md: 6, children: ['hear_about'] } },
        //         ]
        //       },	
              
        //    ]
        //   } },
        //   ] },
          
        //       "customer_first_name": {
        //     "ui:placeholder": "First Name", 
        //         // "classNames": "form-group half",
        //     "classNames": "",
        //     "ui:options": {
        //       label: false
        //       },
        //       // "ui:widget": (props) => {
        //       // return (
        //       //   <input 
        //       //     placeholder={props.placeholder}
        //       //     className="input-error"
        //       //     // type="text"
        //       //   // value={props.value}
        //       //   // required={props.required}
        //       //   // onChange={(event) => props.onChange(event.target.value)}
        //       //    />
        //       // );
        //       // }
        //       },
        //     "customer_last_name": {
        //     "ui:placeholder": "Last Name", 
        //         // "classNames": "form-group half",
        //     "classNames": "",
        //     "ui:options": {
        //       label: false
        //       },
        //       // "ui:widget": (props) => {
        //       // return (
        //       //   <input 
        //       //     placeholder={props.placeholder}
        //       //     // className="predefined"
        //       //     className=""
        //       //     // type="text"
        //       //   // value={props.value}
        //       //   // required={props.required}
        //       //   // onChange={(event) => props.onChange(event.target.value)}
        //       //    />
        //       // );
        //       // }
        //       },
        //     "estimated_credit_score": {
        //     "ui:placeholder": "How's your credit?",
        //     "ui:options": {
        //       label: false
        //       },
        //     //   "classNames":"screen input-error mt-md-3 form-select",
        //      "classNames":"mt-md-5 ",
              
        //     },
        //     "mobile_phone_number": {
                
        //       "ui:placeholder": "Mobile (000-000-0000)",
        //       "ui:options": {
        //         label: false
        //       },
        
        //     },
           
        //       "street_address_1": {
        //       "ui:placeholder": "Street Address",
        //       "ui:options": {
        //       label: false
        //       },
        //     //   "ui:widget": "textarea",
        
        //       },
        //       "street_address_2": {
        //       "ui:placeholder": "Street Address 2",
        //       "ui:options": {
        //       label: false
        //       },
        //     //   "ui:widget": "textarea",
        
        //       },
        //       "zip_code": {
        //       "ui:placeholder": "Zip Code",
        //       "ui:options": {
        //         label: false
        //         },
        
        //       },
        //       "city": {
        //       "ui:placeholder": "City",
        //       "ui:options": {
        //       label: false
        //       },
        
        //       },
        //       "state": {
        //       "ui:placeholder": "State",
        //       "ui:options": {
        //       label: false
        //       },
        
        //       },
        //       "length_of_residency": {
        //       "ui:options": {
        //         label: false
        //         },
        //             // "classNames":"custom-select",
        //       //   "ui:FieldTemplate": Tpl
        
        //       },
        //       "date_of_birth": {
        //       "ui:placeholder": "Date of birth",
        //       "ui:options": {
        //       label: false
        //       },
        //     //   "ui:widget": "alt-datetime"
        //       },
              
        //       "preferred_contact_number": {
        //       "ui:placeholder": "Preffered Contact (000-000-0000)",
        //       "ui:options": {
        //         label: false
        //         }
        //       },
              
        //       "hear_about": {
        //       "ui:placeholder": "How did you hear about Mile Auto?",
        //       "ui:options": {
        //         label: false
        //         }
        //       },
        
        // }
  

        const customerUiSchema = {
          "ui:title": "Your Information",
        
          'ui:field': 'layout_grid',
          'ui:layout_grid':{ 'ui:row': [
            { 'ui:col': { md: 12, children:
           [ 
            {
            'ui:row': [
              { 'ui:col': { md: 6, children: ['customer_first_name'] } },
              { 'ui:col': { md: 6, children: ['customer_last_name'] } },
                ]
              },
             
             { 'ui:row': [
              { 'ui:col': { md: 4, children: ['street_address_1'] } },
              { 'ui:col': { md: 4, children: ['zip_code'] } },
              { 'ui:col': { md: 4, children: ['city'] } },
        
              ]
              },
             {
            'ui:row': [
              { 'ui:col': { md: 6, children: ['state'] } },
              { 'ui:col': { md: 6, children: ['date_of_birth'] } },
                ]
              },
             {
            'ui:row': [
              { 'ui:col': { md: 6, children: ['mobile_phone_number'] } },
              { 'ui:col': { md: 6, children: ['preferred_contact_number'] } },
                ]
              },
             {
            'ui:row': [
              { 'ui:col': { md: 6, children: ['estimated_credit_score'] } },
              { 'ui:col': { md: 6, children: ['hear_about'] } },
                ]
              },	
              
           ]
          } },
          ] },
          
              "customer_first_name": {
            "ui:placeholder": "First Name", 
                // "classNames": "form-group half",
            "classNames": "",
            "ui:options": {
              label: false
              },
              // "ui:widget": (props) => {
              // return (
              //   <input 
              //     placeholder={props.placeholder}
              //     className="input-error"
              //     // type="text"
              //   // value={props.value}
              //   // required={props.required}
              //   // onChange={(event) => props.onChange(event.target.value)}
              //    />
              // );
              // }
              },
            "customer_last_name": {
            "ui:placeholder": "Last Name", 
                // "classNames": "form-group half",
            "classNames": "",
            "ui:options": {
              label: false
              },
              // "ui:widget": (props) => {
              // return (
              //   <input 
              //     placeholder={props.placeholder}
              //     // className="predefined"
              //     className=""
              //     // type="text"
              //   // value={props.value}
              //   // required={props.required}
              //   // onChange={(event) => props.onChange(event.target.value)}
              //    />
              // );
              // }
              },
            "estimated_credit_score": {
            "ui:placeholder": "How's your credit?",
             class: "mileauto-custom-select",
            "ui:options": {
              label: false
              },
            //   "classNames":"screen input-error mt-md-3 form-select",
             "classNames":"mt-md-5 ",
              
            },
            "mobile_phone_number": {
                
              "ui:placeholder": "Mobile (000-000-0000)",
              "ui:options": {
                label: false
              },
        
            },
           
              "street_address_1": {
              "ui:placeholder": "Street Address",
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
                    // "classNames":"custom-select",
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
        
        }



        const vehicleSchema = {
          title: "Your Vehicle",
         
          "type": "object",

          "required": [
                 "choose_details",
              
              ],
  
              // "dependencies": {
                
              //   "choose_details": {
              //     "type": "object",
                      
              //           "anyOf": [

              //         {
              //           "choose_details": {
              //             "enum": [
              //               "Year/Make/Model"
              //             ] ,
                         
              //           },
              //           "properties":{
              //           "year": {
              //             "type": "number",
              //           },
              //           "make": {
              //             "type": "string"
              //           },
              //           "model": {
              //             "type": "string"
              //           },
              //           },

              //         },

              //         {
              //           "choose_details": {
              //             "enum": [
              //               "VIN"
              //             ] ,
                         
              //           },
              //          "properties":{
              //           "VIN": {
              //             "type": "string"
              //           },
              //          },
                       
                       
              //         }
              //         ]
                      
                      
              //         }
              
              //   },

             
          
          "properties": {
              
              "choose_details": {
              "type": "string",
              "enum": [
                "Year/Make/Model",
                "VIN",
              ],
              // "enumNames": [
              // "Year/Make/Model",
              // "VIN"
              //  ],
              // "default": "Year/Make/Model",
              },

              "dependencies":{
                "choose_details":{
                  "oneOf":[


                    {
                      "properties":{
                        "choose_details":{
                          "enum":[
                            "Year/Make/Model"
                          ]
                        },

                        "year": {
                          "type": "number",
                        },
                        "make": {
                          "type": "string"
                        },
                        "model": {
                          "type": "string"
                        },

                        "required":[
                          "year",
                          "make",
                          "model"
                        ],
                      }
                    },


                    {

                      "properties":{
                        "choose_details":{
                          "enum":[
                            "VIN"
                          ]
                        },

                       
                        "VIN": {
                          "type": "string"
                        },
                       
                        "required":[
                          "VIN",
                        ],
                      }

                    },


                  ]
                }
              },

      
  
 
        "style": {
          "type": "string"
        },
        "prior_damage": {
          "type": "string",
          "enum": [
            "Yes",
            "No"
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
              "choose_option_tag": {
          "type": "string"
        }
        },
        }
  
  
        


  const vehicleUiSchema= {
          
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
              {'ui:col':{md: 12, children: ['VIN']}}
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
              "ui:placeholder": "choose one",
                "ui:options": {
                    "label": false,
                    // "inline": true,
                },
              // "ui:widget": "radio", // could also be "select"
              "ui:widget": "select",
              // "classNames": "form-check form-check-inline ",

              // "classNames": "radio-selection vehicle-details",
              
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
              "VIN": {
                "ui:placeholder": "VIN",
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
            class: "mileauto-custom-select",
            "classNames": "mt-md-4 ",
            "ui:options": {
              label: false
              },
              },
              "lease_own_finance": {
            "ui:placeholder": "Is your vehicle owned, leased, or financed?",
            class: "mileauto-custom-select",
            "classNames": "mt-md-4 ",
            "ui:options": {
              label: false
                  },
              },
              "purpose": {
            "ui:placeholder": "What is your vehicle’s primary use?",
            class: "mileauto-custom-select",
            "classNames": "mt-md-4 ",
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
              <div>
                You can choose to enter your vehicle details as per the two options below. Feel free to choose either one!
              </div>
            );
            },
            }
        }
  
  
       const driverUiSchema = {
        'ui:field': 'layout_grid',
        //   "classNames": 'step information active ',
      "classNames": '',
      
        'ui:layout_grid':{ 'ui:row': [
        { 'ui:col': { md: 12, children:
       [ 
        {
        'ui:row': [
          { 'ui:col': { md: 6, children: ['driver_first_name'] } },
          { 'ui:col': { md: 6, children: ['driver_last_name'] } },
            ]
          },
         
         { 'ui:row': [
          { 'ui:col': { md: 4, children: ['email_address'] } },
          { 'ui:col': { md: 4, children: ['gender'] } },
          { 'ui:col': { md: 4, children: ['marital_status'] } },
    
          ]
          },
         {
        'ui:row': [
          { 'ui:col': { md: 6, children: ['home_rental_status'] } },
          { 'ui:col': { md: 6, children: ['level_of_education'] } },
            ]
          },
         {
        'ui:row': [
          { 'ui:col': { md: 6, children: ['has_auto_insurance'] } },
          { 'ui:col': { md: 6, children: ['accidents_convictions'] } },
            ]
          },
         {
        'ui:row': [
          { 'ui:col': { md: 12, children: ['another_driver_policy'] } }
            ]
          },	
          
       ]
      } },
      ] },
      
          "driver_first_name": {
        "ui:placeholder": "First Name", 
            // "classNames": "form-group half",
        "classNames": "",
        "ui:options": {
          label: false
          },
          // "ui:widget": (props) => {
          // return (
          //   <input 
          //     placeholder={props.placeholder}
          //     className="input-error"
          //     // type="text"
          //   // value={props.value}
          //   // required={props.required}
          //   // onChange={(event) => props.onChange(event.target.value)}
          //    />
          // );
          // }
          },
        "driver_last_name": {
        "ui:placeholder": "Last Name", 
            // "classNames": "form-group half",
        "classNames": "",
        "ui:options": {
          label: false
          },
          // "ui:widget": (props) => {
          // return (
          //   <input 
          //     placeholder={props.placeholder}
          //     // className="predefined"
          //     className=""
          //     // type="text"
          //   // value={props.value}
          //   // required={props.required}
          //   // onChange={(event) => props.onChange(event.target.value)}
          //    />
          // );
          // }
            },
          
        "email_address": {
          "ui:placeholder": "Email",
          "ui:options": {
            label: false
              },
             "classNames":"mt-md-4 ",
            },
          
           "gender": {
        "ui:placeholder": "Gender",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
            },
           
           "marital_status": {
        "ui:placeholder": "Marital Status",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
            },
           
           "home_rental_status": {
        "ui:placeholder": "Do your own or rent your home?",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
            },
           
           "level_of_education": {
        "ui:placeholder": "Level of Education",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
        },
      
           "has_auto_insurance": {
        "ui:placeholder": "Do your currently have auto insurance?",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
        },
           
           "accidents_convictions": {
        "ui:placeholder": "Any at-fault accidents or convictions?",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
        },
        //    another_driver_policy
            "another_driver_policy": {
        "ui:placeholder": "Would you like to add another driver to this policy?",
        class: "mileauto-custom-select",
        "ui:options": {
          label: false
          },
         "classNames":"mt-md-4 ",
            },
            
        }
  
  
    const coverageUiSchema = {
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
      
        "bodily_injury": {
      "ui:placeholder": "Bodily Injury (Per Person/Per Incident)", 
      class: "mileauto-custom-select",
      "ui:options": {
        label: false
        },
      //   "classNames":"screen input-error mt-md-3 form-select",
       "classNames":"",
          
          },
        
        "uninsured_bodily_injury": {
          "ui:placeholder": "Uninsured Motorist Coverage", 
          class: "mileauto-custom-select",
          "ui:options": {
              label: false
            },
            //   "classNames":"screen input-error mt-md-3 form-select",
            "classNames":"", 
          },
        
         "underinsured_motorist": {
              "ui:placeholder": "Under-insured Motorist Coverage", 
              class: "mileauto-custom-select",
              "ui:options": {
                  label: false
              },
              //   "classNames":"screen input-error mt-md-3 form-select",
              "classNames":"mt-md-4 ",
              
          },
        
          "comprehensive_deductible": {
              "ui:placeholder": "Comprehensive Deductible", 
              class: "mileauto-custom-select",
              "ui:options": {
                  label: false
              },
              //   "classNames":"screen input-error mt-md-3 form-select",
              "classNames":"mt-md-4 ",
              
          },
  
          "collision_deductible": {
              "ui:placeholder": "Collision Deductible", 
              class: "mileauto-custom-select",
              "ui:options": {
                  label: false
              },
              //   "classNames":"screen input-error mt-md-3 form-select",
              "classNames":"mt-md-4 ",
              
          },
  
          "personal_injury_protection": {
              "ui:placeholder": "Medical Payments (MP) Coverage", 
              class: "mileauto-custom-select",
              "ui:options": {
                  label: false
              },
              //   "classNames":"screen input-error mt-md-3 form-select",
              "classNames":"mt-md-4 ",
              
          },
  
          "rental_reimbursement": {
              "ui:placeholder": "Rental Reimbursement Limit", 
              class: "mileauto-custom-select",
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
        
    }
    
       
  const purchaseUiSchema = {
        'ui:field': 'layout_grid',
      //   "classNames": 'step information active ',
    "classNames": '',
     
      'ui:layout_grid':{ 'ui:row': [
      { 'ui:col': { md: 12, children:
     [ 
    
      { 'ui:row': [
        { 'ui:col': { md: 12, children: ['license_state'] } },
  
        ]
        },
          { 'ui:row': [
        { 'ui:col': { md: 12, children: ['license_status'] } },
  
        ]
        },
          { 'ui:row': [
        { 'ui:col': { md: 12, children: ['license_number'] } },
  
        ]
        },
     ]
    } },
    ] },
    
        "license_state": {
        "ui:placeholder": "License State",
        class: "mileauto-custom-select",
              "classNames": "mt-md-4 ",
        "ui:options": {
          label: false
              },
          },
          "license_status": {
        "ui:placeholder": "License Status",
        class: "mileauto-custom-select",
              "classNames": "mt-md-4 ",
        "ui:options": {
          label: false
              },
          },
          "license_number": {
        "ui:placeholder": "License Number",
        class: "mileauto-custom-select",
              "classNames": "mt-md-4 ",
        "ui:options": {
          label: false
              },
          },
  }
  

     

 export {
  customerSchema ,
   vehicleSchema ,
  driverSchema ,
   coverageSchema ,
   purchaseSchema  ,
   customerUiSchema,
   vehicleUiSchema ,
    driverUiSchema ,
   coverageUiSchema ,
   purchaseUiSchema  , 
 }