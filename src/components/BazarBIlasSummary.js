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
import home from '../../src/img/BazarBilas/home.jpg';
import newpost from '../../src/img/BloodSource/newpost.png';
import validation from '../../src/img/BloodSource/validation.png';

const BazarBilasSummary = props => {
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
            <strong>Name: </strong>Bazar Bilas
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href='http://bazarbilas.com/'>bazarbilas.com</a>
          </Typography>
          <Typography>
            <strong>Description: </strong>An e-commerce web application designed
            for both mobile and desktop devices. It is designed to serve 3 types
            of user namely buyer, seller and admin. Seller can manupulate their
            product display according to their need. Buyer can keep track of
            their orders and manage their accounts.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            MongoDB
          </Typography>
        </Grid>
        <Grid item>
          <div className='my-2' style={{ border: 'black solid 1px' }}>
            <div>
              <img
                style={{ width: '100%', height: '600px' }}
                src={home}
                alt='Promo'
              />
            </div>
          </div>
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Link to='/bazarbilas' className='btn btn-primary'>
            View All
          </Link>
        </div>
      </div>
      <hr className='my-1' />
    </div>
  );
};

BazarBilasSummary.propTypes = {};

export default BazarBilasSummary;
