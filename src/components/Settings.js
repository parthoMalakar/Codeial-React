import React from 'react';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/591d04f256aa901b6f95d035a778faaa/2d2c8973-71ac-4033-b06b-4ceb92aed1ef_rw_600.gif?h=2c3e6e39b34c7335b10b5bcc190c114e"
            alt="user-dp"
            id="user-dp"
          />
        </div>

        <div className="field">
          <div className="filed-label">Email</div>
          <div className="filed-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="filed-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="filed-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="filed-label">New Password</div>

            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="filed-label">Confirm Password</div>

            <input
              type="password"
              onChange={(e) =>
                this.handleChange('ConfirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit Profile
            </button>
          )}
        </div>

        {editMode && (
          <div
            className="go-back"
            onClick={() => this.handleChange('editMode', false)}
          >
            Go back{' '}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Settings);
