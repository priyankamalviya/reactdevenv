import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [
                {id: 1, name: "Priyanka Malviya"},
                {id: 2, name: "Sharanya Nair"},
                {id: 3, name: "Elon Musk"},
                {id: 4, name: "Steve Jobs"},
                {id: 5, name: "Robin Sharma"},
                {id: 6, name: "Nelson Mandela"},
                {id: 7, name: "Travis Neilson"},
                {id: 8, name: "Taylor Swift"},
                {id: 9, name: "Jeff Weiner"},
                {id: 10, name: "Michelangelo"},
                {id: 11, name: "Allen Turing"},
                {id: 12, name: "Nicholas Zakas"},
                {id: 13, name: "Douglas Crockford"},
                {id: 14, name: "Auster Chen"},
                {id: 15, name: "Gabriel Bull"},
                {id: 16, name: "Howard Chang"},
                {id: 17, name: "Josh David Miller"},
                {id: 18, name: "Yuriy Linnyk"}
            ]}
    }

    render(){
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person} />
        })
        return <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    }
}

const PersonRow = (props) =>{
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);