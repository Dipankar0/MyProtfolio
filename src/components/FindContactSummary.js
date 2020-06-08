import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import approval from '../../src/img/FindContact/approval.jpeg';
import contactview from '../../src/img/FindContact/contactview.jpeg';
import home from '../../src/img/FindContact/home.jpeg';
import signup from '../../src/img/FindContact/signup.jpeg';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

const FindContactSummary = props => {
  return (
    <div className='my-2'>
      <div className='badge-light'>
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
            agency can share the contact information of employees of many
            designations. Thus by selecting the angency and designation any
            employee among all the agencies can see the contact information of
            his/her wish.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            Mongoose
          </Typography>
        </Grid>
        <Grid item>
          <div
            className='my-2 text-center'
            style={{ border: 'black solid 1px' }}
          >
            <div>
              <img
                style={{ width: '300px', height: '500px' }}
                src={home}
                alt='Promo'
              />
            </div>
          </div>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Link to='/findcontact' className='btn btn-primary'>
            View All
          </Link>
        </div>
      </div>
      <hr className='my-1' />
    </div>
  );
};

FindContactSummary.propTypes = {};

export default FindContactSummary;
