import React from 'react'
import PurchaseForm from '../Form/PurchaseForm'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

 const PurchaseFormIndex = ()=> {
    return (
        <div className="row">
            <div className="d-flex col-md-6">
              <PurchaseForm/>
            </div>

            <div className="d-flex col-md-6">
              <PurchaseForm/>
            </div>

      



            <div className="row" style={{}}>
			
            <div className="d-flex col-md-6 align-items-center justify-content-center">
            <button className="btn" style={{height:'45px', width:'350px', borderRadius:"5px", borderColor:'#2A8854', color:'#2A8854', borderStyle:"solid", borderWidth:"0.15rem"}} type="button">Cancel</button>
            </div>

			<div className="d-flex col-md-6 align-items-center justify-content-center">
            <button className="btn btn-success" style={{height:'45px', width:'350px'}} type="button">Save</button>
			</div>
           
            </div>


        </div>
    )
}
export default PurchaseFormIndex