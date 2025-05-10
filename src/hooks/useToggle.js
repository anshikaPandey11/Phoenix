/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */
/**
 * Node modules
 */

import { useState, useCallback } from "react";

/*
* A custom React hook for managing a toggle state.

* @rdturns { [bootean, Function J} An array containing the current toggle state(bootean) and a function to toggle the state.
*/

const useToggle = () => {
      const [isOpen, setToggle] = useState(false);

      const toggle = useCallback(() => {
            setToggle((prev) => !prev)
      }, [])

      return [isOpen, toggle]
}

export { useToggle };