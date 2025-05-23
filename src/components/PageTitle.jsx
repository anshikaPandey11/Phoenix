/**
 *  @copyright 2025 anshika
 *  @license Apache-2.0
*/

/**
 * NOde modules
 */
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};
 
PageTitle.PropTypes = {
    title: PropTypes.string,
};
export default PageTitle;