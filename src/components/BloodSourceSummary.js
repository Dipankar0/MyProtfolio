import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography } from '@material-ui/core';
import approve from '../../src/img/BloodSource/approve.png';
import comment from '../../src/img/BloodSource/comment.png';
import dashboard from '../../src/img/BloodSource/dashboard.png';
import donorlist from '../../src/img/BloodSource/donorlist.png';
import edit from '../../src/img/BloodSource/edit.png';
import home from '../../src/img/BloodSource/home.png';
import newpost from '../../src/img/BloodSource/newpost.png';
import validation from '../../src/img/BloodSource/validation.png';

const BloodSourceSummary = props => {
  return (
    <div className='my-2'>
      <Grid item>
        <div>
          <p style={{ textAlign: 'center' }} className='badge-firm mid'>
            Projects
          </p>
        </div>
      </Grid>
      <div className='badge-light'>
        <Grid item>
          <Typography>
            <strong>Name: </strong>Blood Source
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href='https://bloodsource.herokuapp.com/'>bdbloodsource.com</a>
          </Typography>
          <Typography>
            <strong>Description: </strong>An user interactive web application
            designed for both mobile and desktop devices for creating a platform
            used by 4 different types of users namely, Donor, Receiver, Public
            and Admin. UI is defferent for each type of user for maximum
            convention.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            Mongoose
          </Typography>
        </Grid>
        <Grid item>
          <div className='my-2' style={{ border: 'black solid 1px' }}>
            <div>
              <img
                style={{ width: '100%', height: '500px' }}
                src={home}
                alt='Promo'
              />
            </div>
          </div>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Link to='/bloodsource' className='btn btn-primary'>
            View All
          </Link>
        </div>
      </div>
      <hr className='my-1' />
    </div>
  );
};

BloodSourceSummary.propTypes = {};

export default BloodSourceSummary;
