import React from 'react';
import Student from './components/student';
import StudentDetail from './components/studentdetail';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);

        this.students = [
            {id:21866, class:'MD2A', name:'Yanick Assignon', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21188, class:'MD2B', name:'Desteney Bader', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19650, class:'MD2B', name:'Luuk	van den	Berg', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21897, class:'MD2B', name:'Tom van den	Berg', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20482, class:'MD2B', name:'Mauro Bertozzi', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20326, class:'MD2A', name:'Stijn van Beugen', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:22238, class:'MD2A', name:'Shaif Bhaggoe', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19675, class:'MD2B', name:'Jesse Bijma', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:18735, class:'MD2A', name:'Quenten Brouwer', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20803, class:'MD2A', name:'Gerwin Chan', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21890, class:'MD2B', name:'Nick Deenik', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20670, class:'MD2B', name:'Rowy Donker', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21892, class:'MD2A', name:'Floris Droppert', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21319, class:'MD2B', name:'Willem Elfring', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21398, class:'MD2A', name:'Ramy Elsayed', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21592, class:'MD2A', name:'Coen Filipsen', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19698, class:'MD2B', name:'Jay	van der	Horst', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:18233, class:'MD2B', name:'Tristan Huijsman', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20840, class:'MD2A', name:'Dzabir Husovic', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20993, class:'MD2A', name:'Karahan Kasirga', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19746, class:'MD2B', name:'Jelle Kitzen', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20502, class:'MD2A', name:'Indy Koning', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20448, class:'MD2B', name:'Miguel Korn', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19936, class:'MD2A', name:'Wesly Lodewijks', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21869, class:'MD2B', name:'Luuk Mesker', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20538, class:'MD2B', name:'Naomi Morales Vasquez', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19940, class:'MD2B', name:'Sjaak Nijland', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21296, class:'MD2B', name:'Menno	van	Noort', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20279, class:'MD2B', name:'Nanko Prinzhorn', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19830, class:'MD2B', name:'Tom Reus', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21814, class:'MD2A', name:'Amin Robleh', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19199, class:'MD2A', name:'Dave	van	Rossum', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20466, class:'MD2A', name:'Jordy Sadjari', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:18510, class:'MD2A', name:'Chris Salinas Soto', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19844, class:'MD2A', name:'Koen Schutte', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21674, class:'MD2B', name:'Martijn Smit', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21281, class:'MD2B', name:'Stefan Stekelenburg', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:20969, class:'MD2B', name:'Lucas Veerman', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21240, class:'MD2B', name:'Frank	van der	Velde', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:19941, class:'MD2A', name:'Nino	van der	Vinden', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:21248, class:'MD2B', name:'Bas Vugts', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'},
            {id:18701, class:'MD2A', name:'Rick Woltheus', study: 'Mediadeveloper (2015 leerjaar 2)', department: 'MIG'}
        ];

        this.state = {
            title : 'MD2 React',
            currentStudents : this.students
        };
    }

    filterStudents(query){
        const filterStudents = this.students.filter(student => student.name.indexOf(query) > -1 );
        this.setState({currentStudents : filterStudents});
    }

    render() {
        return (
            <div className="app">
                <div>
                    <input
                        type="text"
                        onChange={(e) => this.filterStudents(e.target.value)}
                    />
                </div>
                {this.state.title}<br />
                Er zijn nu {this.state.currentStudents.length} leerlingen
                {this.state.currentStudents.map(student => (
                    <Student
                        name={student.name}
                        age={student.age}
                        onSelect={() => console.log(student)}
                    />
                ))}
            </div>
        );
    }

}

export default App;