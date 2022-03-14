import React from "react";
import error from "../../media/403.png";

function Page403() {
    return( 
    <div className="container">
        <div className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        <img src={error} className="e403" alt="" />
                    </div>
                </div>
        </div>
    </div>
    )
  
}

export default Page403;