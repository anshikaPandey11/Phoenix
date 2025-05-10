/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */
/*
    * Node modules 
*/
import { redirect } from "react-router-dom";


/*
    * Custom modules 
*/
import { account } from "../../lib/appwrite";

const resetpasswordAction = async ({ request }) => {
      const formData = await request.formData();
      const url = new URL(request.url);

      try {
            await account.updateRecovery(
                  url.searchParams.get('userId'),
                  url.searchParams.get('secret'),
                  formData.get('password')
            )

            return redirect('/login');
      } catch (error) {
            console.log(`Error updating password: ${error.message}`);

            return {
                  message: error.message
            }
      }
}

export default resetpasswordAction;