import React from 'react';

class FormOne extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <div>
                <div>
                    <p>Page One</p>
                    <div><input type="text" placeholder="Name"/></div>
                    <div><input type="text" placeholder="Email" /></div>
                    <div><input type="text" placeholder="Password"/> </div>
                    <button type='submit'></button>
                </div>
            </div>
        )
    }
};

export default FormOne;