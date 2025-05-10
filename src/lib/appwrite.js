/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 * Node modules
 */

import { Client , Account,Avatars,Databases} from 'appwrite';

/**
 * Initial appwrite client
 */

const client = new Client();
// VITE_APPWRITE_PROJECT_ID=phoenix11
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID).setEndpoint('https://fra.cloud.appwrite.io/v1');

/**
 * Initial appwrite account
*/

const account = new Account(client);
/**
 * Initial appwrite avatars
 */
const avatars = new Avatars(client);
/**
 * Initial appwrite avatars
 */

/**
 * Initial appwrite databases
 */
const databases = new Databases(client);
export { account , avatars,databases};