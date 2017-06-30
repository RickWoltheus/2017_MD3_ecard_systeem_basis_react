import React from 'react';
import Student from './components/student';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title : "MD2 React app",
            students : [
                {name: "Bob", age: 18},
                {name: "Bob 2", age: 14},
                {name: "Bob 3", age: 19},
                {name: "Bob 4", age: 28}
            ]
        };


    }

    render() {
        return (
            <div className="app">
                {this.state.title}
                {this.state.students.map(student => (
                    <Student
                        name={student.name}
                        age={student.age}
                        onSelect={name => console.log(name)}
                    />
                ))}
            </div>
        );
    }

}

export default App;