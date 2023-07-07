import React,{useState,useEffect} from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturn = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [user,setUser] = useState("Default User");

    const fetchData = () =>{
        fetch(url).then((resp) => {
            if(resp.status>=200 && resp.status<=299){ 
                //Indicating successful response
                return resp.json();
            }
            else{
                setIsError(true);
                setIsLoading(false);
                throw new Error(resp.statusText);
            }
        })
        /*if the response status is successful the parsed JSON 
        passed to this then */
        .then((user) =>{
            const { login } = user;
            setUser(login);
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchData();
    },[]);

    if(isLoading){
        return(
            <h2 className="loading">Loading....</h2>
        )
    }

    if(isError){
        return(
            <h2 className="error">Error....</h2>
        )
    }
    return(
        <div>
            <h2 className="success">{user}</h2>
        </div>
    )
}

export default MultipleReturn;