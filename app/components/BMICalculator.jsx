import React from 'react';

class BMICalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	bmi:0,
        	height: 0,
        	weight: 0
        }
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    renderBmiMessage() {
    	const MAX_HEIGHT = 2.72;
    	const MAX_WEIGHT = 635;

        if (this.state.height > MAX_HEIGHT) {
        	return (
        		<div>
        		<p>Check Height Input</p>
        		</div>
        		)
        }
        if (this.state.weight > MAX_WEIGHT ) {
			return (
        		<div>
        		<p>Check Weight Input</p>
        		</div>
        		)        
		}
		else if (this.state.bmi > 0 && this.state.bmi <= 18) {
			return(
                <div>
                <span>BMI:</span> {this.state.bmi}
                <br />
                <p>Patient is: Underweight</p>
                </div>
                )
		} 
		else if (this.state.bmi > 18 && this.state.bmi <= 25) {
			return(                
                <div>
                <span>BMI:</span> {this.state.bmi}
                <br />
                <p>Patient is: Healthy</p>
                </div>
                )
		} 
		else if (this.state.bmi > 25 && this.state.bmi <= 30) {
		    return(                
                <div>
                <span>BMI:</span> {this.state.bmi}
                <br />
                <p>Patient is: Overweight</p>
                </div>
                )
		} 
		else if (this.state.bmi > 30) {
			return(
                <div>
                <span>BMI:</span> {this.state.bmi}
                <br />
                <p>Patient is: Obese</p>
                </div>
                )
		}
        else if( isNaN(this.state.bmi) || this.state.bmi == 0) {
            if (isNaN(this.state.weight)) {

            }
            return (<p>Please check input</p>)
        }

	}
    handleClick() {
    var weight = this.state.weight;
	var height = this.state.height;
	this.setState({bmi: Math.round(weight / height / height)});
    }
    onChange(e) {
    	this.setState({[e.target.name]: e.target.value});

    }

    render() {
        return (
        <div id="container">
            <div id="title-container">
                <span>BMI Calculator</span>
            </div>
        	<form onSubmit={this.onFormSubmit}>
                <p className="text">Enter weight in kg:</p>
				<input type="text" name="weight" onChange={this.onChange} />
				<br />
                <p className="text">Enter height in meters:</p>
				<input type="text" name="height" onChange={this.onChange} />
				<br />
				<button type="button" onClick={this.handleClick}>BMI</button> <br/>
                <div id="output">
                {this.renderBmiMessage()}
                </div>
			</form>
        </div>
        )
    }
}

export default BMICalculator