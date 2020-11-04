import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <div>
                <p>Page Two</p>
                <div><input type="text" placeholder="Address One"/></div>
                <div><input type="text" placeholder="Address Two"/></div>
                <div><input type="text" placeholder="City" /></div>
                <div><input type="text" placeholder="State"/></div>
                <div><input type="text" placeholder="Zip Code"/></div>
                <button type='submit'></button>
            </div>
        </div>
    )
}
};

export default FormTwo;