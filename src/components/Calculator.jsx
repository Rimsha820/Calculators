import React, { Component } from 'react';
import './style.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '',
        };
    }

    Display = (value) => {
        this.setState((prevState) => ({
            displayValue: prevState.displayValue + value,
        }));
    };
    
    clearDisplay = () => {
        const { displayValue } = this.state;
        if (displayValue.length > 0) {
            const newValue = displayValue.slice(0, -1); 
            this.setState({
                displayValue: newValue,
            });
        }
    };
    
    resetDisplay = () => {
        this.setState({
            displayValue: '',
        });
    };

    calculate = () => {
        try {
            const result = eval(this.state.displayValue);
            this.setState({
                displayValue: result.toString(),
            });
        } catch (error) {
            this.setState({
                displayValue: 'Error',
            });
        }
    };
    toggleSign = () => {
        const { displayValue } = this.state;
        if (displayValue !== '') { 
            if (displayValue.charAt(0) === '-') {
                this.setState({
                    displayValue: displayValue.slice(1),
                });
            } else {
                this.setState({
                    displayValue: '-(' + displayValue + ')',
                });
            }
        }
    };

    calculatePercentage = () => {
        const { displayValue } = this.state;
        const result = parseFloat(displayValue) / 100;
        this.setState({
            displayValue: result.toString(),
        });
    };

    render() {
        const { displayValue } = this.state;
        return (
            <div id="calculator">
                <input type="text"  id="display" value={displayValue} readOnly className="dis" />
                <input type="button" value="AC" onClick={this.resetDisplay} className="cla" />
                <input type="button" value="DEL" onClick={this.clearDisplay} className="cla" />
                <input type="button" value="+/-" onClick={this.toggleSign} className="cla" />
                <input type="button" value="/" onClick={() => this.Display('/')} className="cla" />
                <input type="button" value="7" onClick={() => this.Display('7')} />
                <input type="button" value="8" onClick={() => this.Display('8')} />
                <input type="button" value="9" onClick={() => this.Display('9')} />
                <input type="button" value="*" onClick={() => this.Display('*')} className="cla" />
                <input type="button" value="4" onClick={() => this.Display('4')} />
                <input type="button" value="5" onClick={() => this.Display('5')} />
                <input type="button" value="6" onClick={() => this.Display('6')} />
                <input type="button" value="-" onClick={() => this.Display('-')} className="cla" />
                <input type="button" value="1" onClick={() => this.Display('1')} />
                <input type="button" value="2" onClick={() => this.Display('2')} />
                <input type="button" value="3" onClick={() => this.Display('3')} />
                <input type="button" value="+" onClick={() => this.Display('+')} className="cla" />
                <input type="button" value="%" onClick={this.calculatePercentage} />
                <input type="button" value="0" onClick={() => this.Display('0')} />
                <input type="button" value="." onClick={() => this.Display('.')} />
                <input type="button" value="=" onClick={this.calculate} className="cla1" />
            </div>
        );
    }
}

export default Calculator;