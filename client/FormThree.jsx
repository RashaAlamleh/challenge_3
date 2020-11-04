import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <div>
                <p>Page Three</p>
                <div><input type="text" placeholder="Credit Card" /></div>
                <div><input type="text" placeholder="Expiry Date" /></div>
                <div><input type="text" placeholder="CVV" /></div>
                <div><input type="text" placeholder="Billing Zip Code" /> </div>
                <button type='submit'></button>
            </div>
        </div>
    )
}

};

export default FormThree;