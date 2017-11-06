import React from 'react';

class Student extends React.Component {

    render() {
        return (
            <div className="student">
                <div className="student__name">
                    {this.props.name}
                </div>
                <div className="student__age">
                    {this.props.age}
                </div>
            </div>
        );
    }

}
export default Student;