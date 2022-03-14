import React from "react";
import error from "../../media/404.png";


function Page404() {
    return( 
    <div className="container">
        <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card card-body">
                        <h1>Page 404 | Forbidden</h1>
                        <img src={error} alt="" />
                    </div>
                </div>
        </div>
    </div>
    )
  
}

export default Page404;