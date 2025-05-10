/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */
/**
 * Node modules
 */

import { redirect } from "react-router-dom";


/*
* Custom modules
*/
import { account } from "../../lib/appwrite";
import { databases } from "../../lib/appwrite";
import { Query } from "appwrite";

const appLoader = async () => {
      const data = {};

      try {
            // Attempt to retrieve the user's account information
            data.user = await account.get()
      } catch (error) {
            console.log(`Error getting user session: ${error.message}`);

            // Redirect to login page if account retrieval fails
            return redirect('/login');
      }


      try {
            data.conversations = await databases.listDocuments(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID,
                  'conversations',
                  [
                        Query.select(['$id', 'title']),
                        Query.orderDesc('$createdAt'),
                        Query.equal('user_id', data.user.$id)
                  ]
            )

            
      } catch (error) {
            console.log(`Error getting conversations: ${error.message}`);
      }

      try {
            data.conversation = await databases.listDocuments(
                  import.meta.env.VITE_APPWRITE_DATABASE_ID, 'conversations', [
                        Query.select(['$id', 'title']),
                        Query.orderDesc('$createdAt'),
                        Query.equal('user_id',data.user.$id),
            ],
            );
      } catch (err) {
            console.log(`Error getting conversations: ${err.message}`);
      }


      return data;
}

export default appLoader;


