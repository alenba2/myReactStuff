import React, { useState, useEffect } from 'react';

export default function Username() {
	//Creates a useState in array form
    const [profile, setProfile] = useState({});

    //function gets an input
    const handleChange = ({target})=> {
        //grabs prop and splits them
        const {name, value} = target;
        //updates to Profile
        setProfile((prev) => ({
            //...prev is needed to compile
            ...prev,
            //sets what the value should be
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        //UPDATE TO SERVER
        alert("Name: " + profile.Name 
            + "\nPassword: " + profile.password
        );

        //alert(JSON.stringify(profile,'',2));
    };

	return(
        //goes to function when submitted
        <form onSubmit={handleSubmit}>
            <input 
                //updates the input
                value={profile.Name || ''} 
                //calls whenever the user input something
                onChange={handleChange}
                type="text"
                placeholder="FirstName"
                //the prop name is Name
                name="Name"
            />

            <br/>  
            <br/>

            <input 
                //updates the input
                value={profile.password || ''} 
                //calls whenever the user input something
                onChange={handleChange}
                type="password"
                placeholder="Password"
                //the prop name is Name
                name="password"
            />

            
            <br/>
            <br/>

            <button type='submit'> Submit </button>
        </form>

	);
	
};
