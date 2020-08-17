import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupConfig} from '@ionic/react';

setupConfig({
    mode: 'ios'
});
ReactDOM.render(<App />, document.getElementById('root'));
