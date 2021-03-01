import React from 'react';

const InputForm = () => {
    return (
        <>
            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Name" />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <input className="input" type="text" placeholder="Email" />
                </div>
            </div>
        </>
    )
}

export {InputForm}