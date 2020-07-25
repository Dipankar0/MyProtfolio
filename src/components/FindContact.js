import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import approval from '../../src/img/FindContact/approval.jpeg';
import contactview from '../../src/img/FindContact/contactview.jpeg';
import home from '../../src/img/FindContact/home.jpeg';
import signup from '../../src/img/FindContact/signup.jpeg';

const FindContact = props => {
  return (
    <div className='container'>
      <div>
        <Grid item>
          <Typography>
            <strong>Name: </strong>Share Contact
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href='https://mracontacts.herokuapp.com/'>mracontacts.com</a>
          </Typography>
          <Typography>
            <strong>Description: </strong>A simple but powerful web application
            designed for thousands of agencies under one mega company. Every
            agency can share contact information of employees of different
            designations. Thus by selecting the angency and designation one
            employee among all the agencies can see the contact information.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            Mongoose
          </Typography>
        </Grid>
        <Grid item>
          <p style={{ textAlign: 'center' }} className='text-deep mid'>
            Description
          </p>
        </Grid>
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Home Page
            </Typography>
            <Typography>
              <strong>Description: </strong>Home Page to nevigate all the pages.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={home}
              alt='home'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Sign Up
            </Typography>
            <Typography>
              <strong>Description: </strong>Json Web Token is used for all user
              registration and login. The password is hashed and a random token
              is generated each time for maximum security of the users. All the
              forms of this system include form validation functions.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={signup}
              alt='signup'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Contacts
            </Typography>
            <Typography>
              <strong>Description: </strong>If any agency is registered, it will
              be added autometically to "agency selection" option. If the agency
              is selected, the system will detect houndreds of brances of it and
              show it to the user. After selecting both agency and branch, the
              system will provide the options of designations and by selecting
              that he/she will see the desired contact information.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={contactview}
              alt='contactview'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Admin Approval
            </Typography>
            <Typography>
              <strong>Description: </strong>For each agency it needs to get
              approval form the system admin to join the system.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={approval}
              alt='approval'
            />
          </div>
        </Grid>
        <hr className='my-2' />
      </div>
    </div>
  );
};

FindContact.propTypes = {};

export default FindContact;
