/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 *  Node modules
 */
import { createBrowserRouter } from "react-router-dom";

/**
 * Component
 */
import App from "../App.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ResetLink from "../pages/ResetLink.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Conversation from "../pages/Conversation.jsx";
import appLoader from "./loaders/appLoader.js";
import ConversationError from "../pages/ConversationError.jsx";
import RootError from "../pages/RootError.jsx";
/**
 * Loaders
 */
import registerLoader from "./loaders/registerLoader.js";
import loginLoader from "./loaders/loginLoader.js";
import resetLinkLoader from "./loaders/resetLinkLoader.js";
import resetPasswordLoader from "./loaders/resetPasswordLoader.js";
/**
 * Actions
 */
import registerAction from "./actions/registerAction.js";
import loginAction from "./actions/loginAction.js";
import resetLinkAction from "./actions/resetLinkAction.js";
import resetpasswordAction from "./actions/resetPasswordAction.js";
import conversationLoader from "./loaders/conversationLoader.js";
import appAction from "./actions/appAction.js"; 
import conversationAction from "./actions/conversationAction.js";
/**
 * Router
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: appLoader,
        action: appAction,
        errorElement: <RootError/>,
        children: [
            {
                path: '/:conversationId',
                element: <Conversation />,
                loader: conversationLoader,
                action: conversationAction,
                errorElement: <ConversationError/>,
            },
        ],
    },
    {
        path: '/register',
        element: <Register />,
        loader:registerLoader,
        action: registerAction,
    },
    {
        path: '/Login',
        element: <Login />,
        loader:loginLoader,
        action:loginAction,
    },
    {
        path: '/reset-link',
        element: <ResetLink />,
        loader:resetLinkLoader,
        action: resetLinkAction,
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
        loader: resetPasswordLoader,
        action: resetpasswordAction,
    },
]);

export default router;
