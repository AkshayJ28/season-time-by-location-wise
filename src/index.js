import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMsg from './ErrorMsg';
import Seasondisplay from './seasonDisplay';
import './Spineer';
import Spinner from './Spineer';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }
    rendercomponent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorMsg errorMessage={this.state.errorMessage} />;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <Seasondisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept the Location Request !! " />;
    }
    render() {
        return <div className="border red">{this.rendercomponent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
