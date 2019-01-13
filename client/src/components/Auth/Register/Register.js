import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../UI/TextFieldGroup/TextFieldGroup';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    changeInputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormHandler = (e) => {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);

        /*axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log({errors: err.response.data}));*/
    }

    render() {

        const { errors } = this.state;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Sign Up</h1>
                                <p className="lead text-center">Create your DevBook account</p>
                                <form noValidate onSubmit={this.submitFormHandler}>
                                    <div className="form-group">
                                        <TextFieldGroup
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            change={this.changeInputHandler}
                                            error={errors.name}/>
                                        <TextFieldGroup
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            change={this.changeInputHandler}
                                            error={errors.email}/>
                                        <TextFieldGroup
                                            placeholder="Password"
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            change={this.changeInputHandler}
                                            error={errors.password}/>
                                        <TextFieldGroup
                                            placeholder="Confirm Password"
                                            type="password"
                                            name="password2"
                                            value={this.state.password2}
                                            change={this.changeInputHandler}
                                            error={errors.password2}/>
                                    <input type="submit" className="btn btn-info btn-block mt-4" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
