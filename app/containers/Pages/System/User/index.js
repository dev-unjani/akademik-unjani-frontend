import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import Table from '../../../../components/Tables/Table';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserForm from './../UserForm';
class User extends Component {
  state = {
    title:  'Pengguna',
    columns:  [
      {
        name: 'Email',
        options:  {
          filter: true
        }
      },
      {
        name: 'Nama',
        options:  {
          filter: true
        }
      }
    ],
    data: [
      ['alesna97@gmail.com','anjas lesmana'],
      ['anjas.lesmana@doterb.com','anjas']
    ],
    open: '',
    scroll: 'paper',
    name: 'test',
    email:  'test'
  }
  
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const title = brand.name + ' - Blank Page';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
          <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Pengguna" desc="Pengelolaan Data Pengguna">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          </Grid>
          <Grid item xs={12} sm={6} >  
            <Grid container justify="flex-end">
              <Button onClick={this.handleOpen} color="secondary" variant="contained"><Icon>add</Icon> Create New</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}> 
          <Grid item xs={12}>
            <Table title={this.state.title} columns={this.state.columns} data={this.state.data}/>
          </Grid>
        </Grid>
        </PapperBlock >

        <Dialog
            open={this.state.open}
            onClose={this.state.handleClose}
            aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle id="scroll-dialog-title">Add New</DialogTitle>
            <DialogContent>
                <UserForm name={this.state.name} email={this.state.email}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
        </Dialog>
        
      </div>
    );
  }
}

export default User;
