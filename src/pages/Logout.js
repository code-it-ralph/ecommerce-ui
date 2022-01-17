import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../UserContext";


export default function Logout() {
    // localStorage.clear();

    const {unsetUser, setUser} = useContext(UserContext);

    // Clear the localStorage for the user's information
    unsetUser();

    useEffect(() => {
        // Set the user State back to it's original value
        setUser({ id: null });
        localStorage.clear();
    });

    // Redirect back to login
    return (
        <Redirect to='/login' />
    )
}