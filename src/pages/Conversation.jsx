/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */

/**
 *  Node modules
 */
 import { motion } from "framer-motion";
import { useLoaderData, useLocation} from "react-router-dom";
/**
 * Custom hooks
 */
import { usePromptPreloader } from "../hooks/userPromptPreloader";
/**
 * Components 
 */
import PageTitle from "../components/PageTitle";
import UserPrompt from "../components/UserPrompt";
import AiResponse from "../components/AiResponse";
import PromptPreloader from "../components/PromptPreloader";
const Conversation = () => {
  /**
   * Extract the conversation data from the loader data
   * handling potential undefined values optional chaining.
   */
     const {
         conversation: { title, chats },
  } = useLoaderData() || {};
  
  const { promptPreloaderValue } = usePromptPreloader();

  //Obtain the current URL location info. using the useLocation hook.
  const location = useLocation();

    return (
      <>
        {/* Meta title */}
        <PageTitle title={` ${title} | Phoenix`} />

        <motion.div
          className='max-w-[700px] mx-auto !will-change-auto'
          initial={!location.state?._isRedirect &&{opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.5, ease: 'easeOut' }}
        >
          {chats.map((chat) => (
            <div key={chat.$id}>
              {/* UserPrompt */}
              <UserPrompt text={chat.user_prompt} />

              {/* AiResponse*/}
              <AiResponse aiResponse={chat.ai_response} />
            </div>
          ))}
        </motion.div>
        {promptPreloaderValue && (
          <PromptPreloader promptValue={promptPreloaderValue} />
        )}
      </>
    );
};

export default Conversation;