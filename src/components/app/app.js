import React from 'react';
import Title from '../title';
import BlockCards from '../block-cards';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <div className="wrapper_div">
                <Title />
                <BlockCards />
            </div>
        </div>
    );
}

export default App;