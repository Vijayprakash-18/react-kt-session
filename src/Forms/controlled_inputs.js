import React,{useState} from "react";

const ControlledInputs = () => {
    const [firstName,setFirstname] = useState("");
    const [email,setEmail]  = useState("");
    const [city,setCity] = useState("");
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email && city){
            const person = {id:new Date().getTime().toString(),firstName,email,city};
            console.log(person);

            setPeople((people) => {
                return[...people,person];
            })

            setFirstname("");
            setEmail("");
            setCity("");
        }
        else{
            alert("Need to fill all the fields");
        }
    }

    return(
        <>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                <h2>Add Person Form</h2>
                    <div className="form-control">
                        <label htmlFor="firstname">Name  </label>
                        <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={firstName} 
                        onChange={(e) =>{setFirstname(e.target.value)}} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="e-mail">E-mail  </label>
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                         />
                    </div>
                    <div className="form-control">
                        <label htmlFor="City">Residence City  </label>
                        <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        value={city}
                        onChange={(e)=>{setCity(e.target.value)}}
                         />
                    </div>
                    <button className="submit-btn" type="submit">Add Person</button>
                </form>
                {people.map((person) => {
                    const {id,firstName,email,city} = person;
                    return(
                        <div className="person-listing" key={id}>
                            <h3 className="person-name">{firstName}</h3>
                            <p  className="person-email">{email}</p>
                            <h5  className="person-city">{city}</h5>
                        </div>
                    )
                })}
            </article>
        </>
    )
}

export default ControlledInputs;