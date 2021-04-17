import React from 'react';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
    };
  }
  render() {
    const { user } = this.props.auth;
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
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="filed-value">{user.name}</div>
        </div>
        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(UserProfile);
