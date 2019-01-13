import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputGroup from '../UI/TextFieldGroup/InputGroup';
import SelectListGroup from '../UI/TextFieldGroup/SelectListGroup';
import TextAreaGroup from '../UI/TextFieldGroup/TextAreaGroup';
import TextFieldGroup from '../UI/TextFieldGroup/TextFieldGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class CreateProfile extends Component {
    state = {
        displaySocialInputs: false,
        handle: '',
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }

        if (nextProps.profile.profile) {
            const profile = nextProps.profile.profile;
      
            // Bring skills array back to CSV
            const skillsCSV = profile.skills.join(',');
      
            // If profile field doesnt exist, make empty string
            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.githubusername = !isEmpty(profile.githubusername)
              ? profile.githubusername
              : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.social = !isEmpty(profile.social) ? profile.social : {};
            profile.twitter = !isEmpty(profile.social.twitter)
              ? profile.social.twitter
              : '';
            profile.facebook = !isEmpty(profile.social.facebook)
              ? profile.social.facebook
              : '';
            profile.linkedin = !isEmpty(profile.social.linkedin)
              ? profile.social.linkedin
              : '';
            profile.youtube = !isEmpty(profile.social.youtube)
              ? profile.social.youtube
              : '';
            profile.instagram = !isEmpty(profile.social.instagram)
              ? profile.social.instagram
              : '';
      
            // Set component fields state
            this.setState({
              handle: profile.handle,
              company: profile.company,
              website: profile.website,
              location: profile.location,
              status: profile.status,
              skills: skillsCSV,
              githubusername: profile.githubusername,
              bio: profile.bio,
              twitter: profile.twitter,
              facebook: profile.facebook,
              linkedin: profile.linkedin,
              youtube: profile.youtube
            });
          }
    }

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    changeInputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    submitFormHandler = (e) => {
        e.preventDefault();

       const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
       }

       this.props.createProfile(profileData, this.props.history);
    }

    render() {

        const { errors, displaySocialInputs } = this.state

        let socialInputs;

        if(displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup
                    placeholder="Twitter Profile URL"
                    name="twitter"
                    icon="fab fa-twitter"
                    value={this.state.twitter}
                    change={this.changeInputHandler}
                    error={errors.twitter}
                    />
        
                    <InputGroup
                    placeholder="Facebook Page URL"
                    name="facebook"
                    icon="fab fa-facebook"
                    value={this.state.facebook}
                    change={this.changeInputHandler}
                    error={errors.facebook}
                    />
        
                    <InputGroup
                    placeholder="Linkedin Profile URL"
                    name="linkedin"
                    icon="fab fa-linkedin"
                    value={this.state.linkedin}
                    change={this.changeInputHandler}
                    error={errors.linkedin}
                    />
        
                    <InputGroup
                    placeholder="YouTube Channel URL"
                    name="youtube"
                    icon="fab fa-youtube"
                    value={this.state.youtube}
                    change={this.changeInputHandler}
                    error={errors.youtube}
                    />
        
                    <InputGroup
                    placeholder="Instagram Page URL"
                    name="instagram"
                    icon="fab fa-instagram"
                    value={this.state.instagram}
                    change={this.changeInputHandler}
                    error={errors.instagram}
                    />
                </div>
            )
        }

        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Junior Front-End', value: 'Junior Front-End' },
            { label: 'Senior Front-End', value: 'Senior Front-End' },
            { label: 'Junior Back-End', value: 'Junior Back-End' },
            { label: 'Senior Back-End', value: 'Senior Back-End' },
            { label: 'Full Stack', value: 'Full Stack' },
            { label: 'UI Designer', value: 'UI Designer' },
            { label: 'Product Owner', value: 'Product Owner' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Teacher', value: 'Teacher' },
            { label: 'Student', value: 'Student' },
            { label: 'Other', value: 'Other' },
            
        ];

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit profile</h1>
                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.submitFormHandler}>
                                <TextFieldGroup
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={this.state.handle}
                                    change={this.changeInputHandler}
                                    error={errors.handle}
                                    info="A unique handle for your profile URL. Your full name, company name, nickname" />
                                <SelectListGroup
                                    placeholder="Status"
                                    name="status"
                                    value={this.state.status}
                                    change={this.changeInputHandler}
                                    options={options}
                                    error={errors.status}
                                    info="What label you want to put on yourself?" />
                                <TextFieldGroup
                                    placeholder="Company"
                                    name="company"
                                    value={this.state.company}
                                    change={this.changeInputHandler}
                                    error={errors.company}
                                    info="Could be your own company or one you slave for" />
                                <TextFieldGroup
                                    placeholder="Website"
                                    name="website"
                                    value={this.state.website}
                                    change={this.changeInputHandler}
                                    error={errors.website}
                                    info="Could be your own website or a company one" />
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={this.state.location}
                                    change={this.changeInputHandler}
                                    error={errors.location}
                                    info="City or city & state suggested (eg. Tallinn, Harjumaa)" />
                                <TextFieldGroup
                                    placeholder="* Skills"
                                    name="skills"
                                    value={this.state.skills}
                                    change={this.changeInputHandler}
                                    error={errors.skills}
                                    info="Please use comma separated values (eg.HTML,CSS,JavaScript,PHP" />
                                <TextFieldGroup
                                    placeholder="Github Username"
                                    name="githubusername"
                                    value={this.state.githubusername}
                                    change={this.changeInputHandler}
                                    error={errors.githubusername}
                                    info="If you want your latest repos and a Github link, include your username" />
                                <TextAreaGroup
                                    placeholder="Short Bio"
                                    name="bio"
                                    value={this.state.bio}
                                    change={this.changeInputHandler}
                                    error={errors.bio}
                                    info="I REALLY want to know more about you..." />

                                <div className="mb-3">
                                    <button type="button" onClick={() => {
                                        this.setState(prevState => ({
                                            displaySocialInputs: !prevState.displaySocialInputs
                                        }))
                                    }} className="btn btn-light">
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>
                                {socialInputs}
                                <input type="submit" value="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(CreateProfile));