import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../../UI/TextFieldGroup/TextFieldGroup';
import TextAreaGroup from '../../UI/TextFieldGroup/TextAreaGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../../actions/profileActions';

class AddEducation extends Component {
    state = {
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: '',
        errors: {},
        disabled: false
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    };

    changeInputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onCheckHandler = (e) => {
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
    };

    submitFormHandler = (e) => {
        e.preventDefault();

        const educData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldofstudy: this.state.fieldofstudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        }

        this.props.addEducation(educData, this.props.history)
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Education</h1>
                            <p className="lead text-center">
                                Add your education
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.submitFormHandler}>
                                <TextFieldGroup
                                placeholder="* School"
                                name="school"
                                value={this.state.school}
                                change={this.changeInputHandler}
                                error={errors.school}
                                />
                                <TextFieldGroup
                                placeholder="* Degree"
                                name="degree"
                                value={this.state.degree}
                                change={this.changeInputHandler}
                                error={errors.degree}
                                />
                                <TextFieldGroup
                                placeholder="Field Of Study"
                                name="fieldofstudy"
                                value={this.state.fieldofstudy}
                                change={this.changeInputHandler}
                                error={errors.fieldofstudy}
                                />
                                <h6>From Date</h6>
                                <TextFieldGroup
                                name="from"
                                type="date"
                                value={this.state.from}
                                change={this.changeInputHandler}
                                error={errors.from}
                                />
                                <h6>To Date</h6>
                                <TextFieldGroup
                                name="to"
                                type="date"
                                value={this.state.to}
                                change={this.changeInputHandler}
                                error={errors.to}
                                disabled={this.state.disabled ? 'disabled' : ''}
                                />
                                <div className="form-check mb-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="current"
                                    value={this.state.current}
                                    checked={this.state.current}
                                    onChange={this.onCheckHandler}
                                    id="current"
                                />
                                <label htmlFor="current" className="form-check-label">
                                    Current School
                                </label>
                                </div>
                                <TextAreaGroup
                                placeholder="Job Description"
                                name="description"
                                value={this.state.description}
                                change={this.changeInputHandler}
                                error={errors.description}
                                info="Tell us about the the position"
                                />
                                <input
                                type="submit"
                                value="Submit"
                                className="btn btn-info btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
};

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));
