import React from 'react';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div>
              <input type='text' id='name'> </input>
              <button type='submision' ></button>
          </div>
      )
  }
};
