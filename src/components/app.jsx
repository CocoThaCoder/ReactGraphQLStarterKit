import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';
import Root from './root';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

ReactDOM.render(
	<AppContainer>
		<Root history={ browserHistory }/>
	</AppContainer>
	, document.querySelector('#content')
);

if (module.hot) {
	module.hot.accept('./root', () => {
		const NewRoot = require('./root').default;
		ReactDOM.render(
			<AppContainer>
				<NewRoot history={ browserHistory }/>
			</AppContainer>
			, document.querySelector('#content')
		);
	});
}
