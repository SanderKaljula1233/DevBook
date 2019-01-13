import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteEducation } from '../../../../actions/profileActions';


class Education extends Component {



    deleteEducationHandler = (e) => {
        this.props.deleteEducation(e);
    }

    render() {

        const education = this.props.education.map(educ => (
            <tr key={educ._id}>
                <td>{educ.school}</td>
                <td>{educ.degree}</td>
                <td>{educ.fieldofstudy}</td>
                <td>
                    <Moment format="DD/MM/YYYY">{educ.from}</Moment> 
                    {' '} - {' '}
                    {educ.to === null ? (' Now') : (<Moment format="DD/MM/YYYY">{educ.to}</Moment>)}
                </td>
                <td><button onClick={this.deleteEducationHandler} className="btn btn-danger">Delete</button></td>
            </tr>
        ));

        return (
        <div>
            <h4 className="mb-4">Education Credentials</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Field</th>
                        <th>Years</th>
                        <th></th>
                    </tr>
                        {education}
                </thead>
            </table>
        </div>
        )
    }
}

Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
}

export default connect(null, { deleteEducation })(Education);