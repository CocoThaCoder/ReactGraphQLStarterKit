# React GraphQL Starter Kit
A React Starter Kit for GraphQL


## Instructions

### Development
1. Run `npm install` to install required node modules
2. Run `npm start` to run application on localhost:8080

### Production
1. Comment out the `webpack-hot-middleware/client` line from the webpack.config.
2. Run `npm run build` to build the bundle.js file which is placed in the `dist` folder.
3. Run `npm run deploy` to run the application forever in a production environment.

[Here][1] is a link to the pm2 documentation for managing the pm2 process that is created from step 3.

### Style Options

#### (1) Style Loaders
In order to style pages you can require a sass file in the component and it will
receive the styling of that particular sass file. An example of this can be seen in the main.jsx
react component.

##### (2) Radium
In order to style components you can declare a styles object at the bottom of the
React component and then add css styles on it as properties. These styles can then
be referenced on particular DOM elements of the react component. Radium is used in
conjuction with react-styler, which enables you to define your styles in a template
string using standard css format. An example can bee seen in the main.jsx react component.

Documentation for React-Styling can be found [here][2].
Documentation for Radium can be found [here][3].

### GraphQL Client
This kit uses *Apollo* for client side graphql applications. Apollo has a smaller learning curve
and is easier to learn than its biggest counterpart, Relay.

Instructions for the React implementation of Apollo can be found [here][4].

[1]: https://github.com/Unitech/pm2
[2]: https://github.com/halt-hammerzeit/react-styling
[3]: https://github.com/FormidableLabs/radium
[4]: http://dev.apollodata.com/react/