/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
 */
/**
 * Node modules
 */
import PropTypes from "prop-types";
 
const Menu = ({ classes = '', children }) => {
    return <div className={`menu ${classes}`}>{children}</div>;
};

Menu.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.any,
};

export default Menu;