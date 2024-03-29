import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);