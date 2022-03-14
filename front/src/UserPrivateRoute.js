import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import swal from "sweetalert";
import UserHome from "./pages/user/section";



function UserPrivateRoute({...rest}){

   const history = useHistory();

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(`/api/checkIfAuthenticated`).then(res => {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setLoading(false);
        });

        return () => {
            setAuthenticated(false);

        };

    },[]);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
            if(err.response.status === 401)
            {
                swal("Unauthorized",err.response.data.message,"warning");
                history.push('/getin');
            }
            return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response){
        return response; 
    }, function (error) {
        if(error.response.status === 403)// acces denied
        {
            swal('Forbidden', error.response.data.message,"warning");
            history.push('/403')
        }
        else if(error.response.status === 404)// page not found
        {
            swal('404 Error',"Url/Page Not Found","warning");
            history.push('/404')
        }
        return Promise.reject(error);
    }
);

    if(loading)
    {
        return <h1>Loading...</h1>
    }

    return (

        <Route {...rest}
            render={ ({props, location}) =>
            Authenticated ?
            (<UserHome {...props} />):
            (<Redirect to={{pathname: "/section", state: {from: location}}}/>)
            }
            
        />
        
    );
}

export default UserPrivateRoute;