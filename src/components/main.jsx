import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import { flat as styler } from 'react-styling';
import { graphql } from 'react-apollo';

// Styles
require('../../public/styles/index.scss');

@Radium
class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div className="app-container">
				<h1 className="app-container-title">REACT STARTER KIT!!</h1>
				<img className="app-container-image" src="/public/images/minime.png" alt="minime" />
				<div style={styles.counter}>{ this.state.count }</div>
				{ this.props.children }
				<button
					className="btn btn-default"
					style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
					onClick={() => { this.setState({ count: this.state.count + 1 }); }}
				>
					Increment Me!
				</button>
			</div>
			);
	}

}

export default Main;

const styles = styler`
	counter
		width: 100px
		margin-left: auto
		margin-right: auto
		text-align: center
`;
