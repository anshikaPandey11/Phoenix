/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 * Node modules
 */
import { redirect } from "react-router-dom";
/**
 * Custom modules
 */
import { account } from "../../lib/appwrite";
import generateID from "../../utils/generateID";

/**
 * Handles user registration
 */
const registerAction = async ({ request }) => {
    //Retrieve the form data from the incoming request
    const formData = await request.formData();
    console.log(formData);
    
    try {
        //Create a new user account using the provided email,password, and name
        await account.create(
            generateID(),
            formData.get('email'), //Retrieves password from data
            formData.get('password'), //Retrieves password from form data
            formData.get('name'), // Retrieves name from form data

        );
    } catch (err) {
        //Return an error object if account creation fails 
        return {
            message: err.message,
        };
    }

    // After successfully account created,login the user and redirect to homepage

    try {
        // Creates a session for the new user with the provided email and password
        await account.createEmailPasswordSession(
            formData.get('email'),
            formData.get('password'),
        );
    } catch (err) {
        // logs any error encountered during session creation and redirect to login page
        console.log(`error creating email session : ${err.message}`);
        return redirect('/login');
    }
    // Redirects the user to the home page successful registration and login
    return redirect('/');
};

export default registerAction;