import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css"
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();



    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "invalid input",
                message: "please enter a valid name and age"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "invalid age",
                message: "please enter a valid age"
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("")
        setEnteredAge("")
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)


    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)

    }
    const errorHandler = () => {
        setError(null);
    }
    return (

        <div>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input >
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>


                </form>
            </Card>
        </div>

    )

}

export default AddUser;