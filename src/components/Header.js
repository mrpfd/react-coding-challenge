import React from 'react';

const Header = ({children}) => {
    return (
        <div className="level">
            <div>
                <h1 className="title">Dark Mode Challenge</h1>
            </div>
            {children}
        </div>
    )
}

export {Header}