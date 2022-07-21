import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }

    // React says we have to define render!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );

        return <div>Latitude: </div>;
    }  
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);