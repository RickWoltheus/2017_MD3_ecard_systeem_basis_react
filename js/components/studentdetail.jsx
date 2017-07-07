import React from 'react';
import classNames from 'classnames';

class StudentDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {


        const className = classNames({
                                         "studentDetail" : true,
                                         "studentDetail--visible" : this.props.selectedStudent
                                     });

        const currentStudent = this.props.selectedStudent || {};

        return (
            <div
                className={className}
            >
                <div className="studentDetail__field">
                    {currentStudent.name}
                </div>
                <div className="studentDetail__field">
                    {currentStudent.id}
                </div>
                <div className="studentDetail__field">
                    {currentStudent.class}
                </div>
                <div className="studentDetail__field">
                    {currentStudent.study}
                </div>
                <div className="studentDetail__field">
                    {currentStudent.deparment}
                </div>
            </div>
        );
    }

}

export default StudentDetail;