/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 *  Node modules
 */
import { redirect } from "react-router-dom";


/*
* Custom modules
*/

import { account } from "../../lib/appwrite";

const resetLinkLoader = async () => {
      try {
            // Attempt to retrieve the user's account information
            await account.get();
      } catch (error) {
            console.log(`Error getting user session: ${error.message}`);
            return null;
      }

      // If account retrieval is successful, redirect the user to the home page('/')
      return redirect('/');
}

export default resetLinkLoader;