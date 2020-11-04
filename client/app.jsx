import React from 'react';
//import css from '../styles/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentStep: 1,
        name: '',
        email: '',
        password: '',
        addressOne: '',
        addressTwo: '',
        city:'',
        state: '',
        zipCode: '',
        creditCard: '',
        expiryDate: '',
        cvv: '',
        billingZipCode: '',
    }
}


render() {
    return (
        <div>
            <div>
                <p>Page One</p>
                <div><input type="text" placeholder="Name" /></div>
                <div><input type="text" placeholder="Email" /></div>
                <div><input type="text" placeholder="Password" /> </div>
                <p>Step {this.state.currentStep} </p>
                <form onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        name={this.state.name}
                        email={this.state.email}
                        password={this.state.password}
                    />
                    {this.nextButton()}
                </form>
            </div>
            <div>
                <p>Page Two</p>
                <div><input type="text" placeholder="Address One"/></div>
                <div><input type="text" placeholder="Address Two"/></div>
                <div><input type="text" placeholder="City" /></div>
                <div><input type="text" placeholder="State"/></div>
                <div><input type="text" placeholder="Zip Code"/></div>
                <p>Step {this.state.currentStep} </p>
                <form onSubmit={this.handleSubmit}>
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        addressOne={this.state.addressOne}
                        addressTwo={this.state.addressTwo}
                        city={this.state.city}
                        state={this.state.state}
                        zipCode={this.state.zipCode}
                    />
                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </div>
            <div>
                <p>Page Three</p>
                <div><input type="text" placeholder="Credit Card" /></div>
                <div><input type="text" placeholder="Expiry Date" /></div>
                <div><input type="text" placeholder="CVV" /></div>
                <div><input type="text" placeholder="Billing Zip Code" /></div>
                <p>Step {this.state.currentStep} </p>
                <form onSubmit={this.handleSubmit}>
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        creditCard={this.state.creditCard}
                        expiryDate={this.state.expiryDate}
                        cvv={this.state.cvv}
                        billingZipCode={this.state.billingZipCode}
                    />
                    {this.previousButton()}
                    {this.nextButton()}
                </form>
            </div>
        </div>
    )
}


}

export default App;


