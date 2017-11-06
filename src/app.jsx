import React from 'react';
import Student from './components/student';

class App extends React.Component {

    constructor(props){
        super(props);

        this.students = [
            {name:'Bob', age: 17},
            {name:'Bob2', age: 18},
            {name:'Bob3', age: 19},
            {name:'Bob4', age: 20},
            {name:'Bob5', age: 21},
            {name:'Bob6', age: 31}
        ];
    }

    showStudent(currentStudent, i){
        return (
            <Student
                key={i}
                name={currentStudent.name}
                age={currentStudent.age}
            />
        );
    }

    render() {

        return (
            <div className="app">
                MD2 React app om te oefenen
                <Student
                    name="Berend"
                    age="34"
                />
                <Student />
                <Student />
                <Student
                    name="Bob"
                />
                <Student />
                Ik wil nog wat extra's laten zien:
                {this.students.map(this.showStudent)}
            </div>
        );
    }

}
export default App;