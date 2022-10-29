import React from "react";

export default function Alert(props) {
        let capital =(str)=>{                           //function for making string first letter capital & return 
            let low =str.toLowerCase()
            return low.charAt(0).toUpperCase() + low.slice(1) 
        }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capital(props.alert.type)}: </strong>{props.alert.msg}                 {/*message popup */}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
 );
}
