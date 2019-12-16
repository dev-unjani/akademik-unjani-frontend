import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';
import {connect} from 'react-redux';
import {userAuth} from 'dan-actions/userAction';
import API from '../../../../../services/auth/login';

class Login extends React.Component {
  state = {
    valueForm: []
  }

  componentDidMount = () => {
    this.getData();
  }

  getData = () => {
    API.getData().then(result => {
      console.log(result);
  });
  }

  submitForm(values) {
    const { valueForm } = this.state;
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${valueForm}`);
      window.location.href = '/app';
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Login';
    const description = "brand.desc";
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.container}>
          <div className={classes.userFormWrap}>
            <LoginForm onSubmit={(values) => this.submitForm(values)} onClick={this.props.onClickLogin}/>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const reducer = 'login';
const mapStateToProps = state => ({
  login: state.getIn([reducer, 'login'])
});

const mapDispatchToProps = dispatch => ({
  onClickLogin: () => dispatch(userAuth)
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default (withStyles(styles)(LoginMapped));
