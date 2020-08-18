import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 2,
            y: 3,
            result: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.solution = this.solution.bind(this)

    }

    handleChange(event) {
        this.setState({[event.target.name]: parseInt(event.target.value)});
    }

    handleSubmitButton = () => {
        let resultOnClick = this.solution(this.state.x, this.state.y);

        this.setState({
            result: resultOnClick
        });

        // tests
        console.log(this.solution(2, 3), 'first case');  // 9

        console.log(this.solution(10, 5), 'second case');   // 96
    };

    solution = (x, y) => {
        let first = y * (y + 2 * x - 1) / 2;
        let second = (x - 2) * (x - 1) / 2;

        return first + second
    };

    render() {
        let { x, y, result } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <input type="number"
                           name='x'
                           placeholder={"Your x coordinate here.."}
                           value={x}
                           onChange={this.handleChange}
                    />
                    <input type="number"
                           name='y'
                           placeholder={"Your y coordinate here.."}
                           value={y}
                           onChange={this.handleChange}
                    />
                    <button
                        onClick={this.handleSubmitButton}
                    >Add
                    </button>
                    <p>Gold treasure IDs to cell locations : {result}</p>
                </header>
            </div>
        );
    }
}

export default App;
