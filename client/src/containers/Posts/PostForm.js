import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextAreaGroup from '../UI/TextFieldGroup/TextAreaGroup';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {
    state = {
        text: '',
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    changeInputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitFormHandler = (e) => {
        e.preventDefault();

        const { user } = this.props.auth;

        const postData = {
            name: user.name,
            text: this.state.text
        };

        this.props.addPost(postData);
        this.setState({ text: '' })
    }

    render() {

        const { errors } = this.state;

        return (
            <div className="post-form mb-3">
                <div className="card card-info">
                    <div className="card-header bg-info text-white">
                        Say Somthing...
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.submitFormHandler}>
                            <div className="form-group">
                                <TextAreaGroup 
                                placeholder="Create a post"
                                name="text"
                                value={this.state.text}
                                change={this.changeInputHandler}
                                error={errors.text} />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
