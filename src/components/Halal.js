import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography } from '@material-ui/core';
import landing from '../../src/img/Halal/landing.png';
import apprequest from '../../src/img/Halal/apprequest.png';
import application from '../../src/img/Halal/application.png';
import bccert from '../../src/img/Halal/bccert.png';
import composer from '../../src/img/Halal/composer.png';

const Halal = props => {
  return (
    <div className='container'>
      <div className='my-2'>
        <div className='badge-light'>
          <Grid item>
            <Typography>
              <strong>Name: </strong>BlockChain Halal Product
            </Typography>
            <Typography>
              <strong>Link: </strong>
              <a href='https://halalproduct.herokuapp.com/'>halalproduct.com</a>
            </Typography>
            <Typography>
              <strong>Description: </strong> A Blockchain implemented web
              application with Hyperledger Fabric network. It is designed for
              halal product company and hala authority for keeping track of each
              product of halal chain by providing halal certificate which will
              be decentralized among all the stakeholders.
            </Typography>
            <Typography>
              <strong>Technologies Used: </strong> Blockchain, Hyperledger
              Fabric, Docker, React, Redux, Node, Express, Mongoose
            </Typography>
          </Grid>
          <Grid item>
            <div className='my-2 text-center'>
              <div className='my-2' style={{ border: 'black solid 1px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src={landing}
                  alt='landing'
                />
              </div>
              <div className='my-2' style={{ border: 'black solid 1px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src={apprequest}
                  alt='apprequest'
                />
              </div>
              <div className='my-2' style={{ border: 'black solid 1px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src={application}
                  alt='application'
                />
              </div>
              <div className='my-2' style={{ border: 'black solid 1px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src={bccert}
                  alt='bccert'
                />
              </div>
              <div className='my-2' style={{ border: 'black solid 1px' }}>
                <img
                  style={{ width: '100%', height: '500px' }}
                  src={composer}
                  alt='composer'
                />
              </div>
            </div>
          </Grid>
        </div>
        <hr className='my-1' />
      </div>
    </div>
  );
};

Halal.propTypes = {};

export default Halal;
