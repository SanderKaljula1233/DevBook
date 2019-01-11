import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../../UI/TextFieldGroup/TextFieldGroup';
import TextAreaGroup from '../../UI/TextFieldGroup/TextAreaGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../../actions/profileActions';

class AddExperience extends Component {
    state = {
        company: '',
        title: '',
        location: '',
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

        const expData = {
            company: this.state.company,
            title: this.state.title,
            location: this.state.location,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        }

        this.props.addExperience(expData, this.props.history)
    };

    render() {

        const { errors } = this.state;

        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                            <h1 className="display-4 text-center">Add Experience</h1>
                            <p className="lead text-center">
                                Add any job or position that you have had in the past or current
                            </p>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.submitFormHandler}>
                                <TextFieldGroup
                                placeholder="* Company"
                                name="company"
                                value={this.state.company}
                                change={this.changeInputHandler}
                                error={errors.company}
                                />
                                <TextFieldGroup
                                placeholder="* Job Title"
                                name="title"
                                value={this.state.title}
                                change={this.changeInputHandler}
                                error={errors.title}
                                />
                                <TextFieldGroup
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                change={this.changeInputHandler}
                                error={errors.location}
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
                                    Current Job
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

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
