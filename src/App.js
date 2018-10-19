import React from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation'
import Buttons from './Buttons'
import Score from './Score'


class App extends React.Component {

	constructor(props) {
		super(props);
		this.handlePlayerAnswer = this.handlePlayerAnswer.bind(this);
	}

	componentDidMount() {
		this.generateEquation();
	}

	state = {
		value1: null,
		value2: null,
		value3: null,
		proposedAnswer: null,
		correctAnswer: null,
		numQuestions: 0,
		numCorrect: 0
	};

	getRandomValue = () => Math.floor(Math.random() * 100);

	proposeSum = correctSum => Math.floor(Math.random() * 3) + correctSum;

	generateEquation() {
		const values = new Array(3).fill().map(this.getRandomValue);
		const correctSum = values.reduce((x,y) => x + y, 0);

		this.setState({
			value1: values[0],
			value2: values[1],
			value3: values[2],
			proposedSum: this.proposeSum(correctSum),
			correctSum: correctSum
		});
	};

	handlePlayerAnswer(playerAnswer) {
		const correctAnswer = this.state.proposedSum === this.state.correctSum;

		this.setState(currentState => {
			return {
				numQuestions: currentState.numQuestions + 1,
				numCorrect: (playerAnswer === correctAnswer) ? currentState.numCorrect + 1 : currentState.numCorrect
			}
		});

		this.generateEquation();
	}

	render() {
		return (
		<div className="App">
			<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<div className="game">
				<h2>Mental Math</h2>
				<Equation
					value1={this.state.value1}
					value2={this.state.value2}
					value3={this.state.value3}
					proposedSum={this.state.proposedSum}
				/>
				<Buttons
					clicked={this.handlePlayerAnswer}
				/>
				<Score
					numCorrect={this.state.numCorrect}
					numQuestions={this.state.numQuestions}
				/>
			</div>
		</div>
		);
	}
}

export default App;
