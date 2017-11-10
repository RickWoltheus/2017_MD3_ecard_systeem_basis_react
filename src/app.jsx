import React from 'react';
import Student from './components/student';

class App extends React.Component {

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
                <Student />
                <Student />
            </div>
        );
    }

}
export default App;