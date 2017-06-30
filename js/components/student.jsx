import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Student extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick(){
        this.props.onSelect(this.props.name);
    }

    render() {
        return (
            <div
                className="student"
                onClick={() => this.onClick()}
            >
                <div className="student__name">
                    {this.props.name}
                </div>
                <div className="student__age">
                    {this.props.age}
                </div>
                <div
                    className="student__delete"
                    onClick={() => this.props.onDelete(this.props.name)}
                >
                    x
                </div>
            </div>
        );
    }

}

export default Student;