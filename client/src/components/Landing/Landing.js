import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
      return (
        <div>
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">DevBook
                                </h1>
                                <p className="lead"> It is like Facebook but its for Developers </p>
                                <hr />
                                <Link className="nbtn btn-lg btn-info mr-2" to="/register">
                                    Sign Up
                                </Link>
                                <Link className="nbtn btn-lg btn-light" to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

  Landing.propTypes = {
      auth: PropTypes.object.isRequired
  }

  const mapStateToProps = state => ({
      auth: state.auth
  })
  
export default connect(mapStateToProps)(Landing);