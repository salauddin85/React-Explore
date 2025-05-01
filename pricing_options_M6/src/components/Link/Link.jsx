import React from 'react';
import PropTypes from 'prop-types'; // ES6
const Link = ({route}) => {
    // console.log(route);
    return (
        
        <>
            
                <li className='mr-10'><a href={route.path}>{route.name}</a></li>
            
        </>
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;