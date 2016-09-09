import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{

    constructor(){
        super();
        this.state = {
            txt: 'This is the state text',
            cat: 0
        }
    }

    update(e){
        this.setState({txt: e.target.value})
    }

    render(){
        let txt = this.state.txt;
        return (
            <div>
                <h1>Hello There</h1>
                <b>{txt}</b>
                <input type="text" onChange={this.update.bind(this)} />
            </div>
        );
    }
}

// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// };

// App.defaultProps ={
//   txt: 'This is the default text'
// };

//export default App
//const App = () => <h1>Heya</h1>
 ReactDOM.render(
     <App cat ={5} />,
     document.getElementById('app')
 );