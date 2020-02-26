import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import './Styles/fonts.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var WebFont = require('webfontloader');
WebFont.load({
	custom: {
		families: ['Söhne Mono Buch', 'Söhne Mono Halbfett', 'Söhne Buch', 'Söhne Buch Kursiv', 'Söhne Halbfett', 'Pilat', 'Pilat Compressed']
	}
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
