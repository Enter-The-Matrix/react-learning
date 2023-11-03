import { useRouteError } from "react-router-dom"

const Error =()=>{
    const err = useRouteError();
    console.log("Error:",err);
    return(
        <div>
            <h1>Opps... Something Went Wrong</h1>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error