import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import landing from '../../src/img/Halal/landing.png';

const HalalSummary = props => {
  return (
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
            application with Hyperledger Fabric network. It is desgined for
            halal product company and hala authority for keeping track of each
            product of halal chain by providing halal certificate which will be
            decentralized among all the stakeholders.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> Blockchain, Hyperledger Fabric,
            Docker, React, Redux, Node, Express, Mongoose
          </Typography>
        </Grid>
        <Grid item>
          <div
            className='my-2 text-center'
            style={{ border: 'black solid 1px' }}
          >
            <div>
              <img
                style={{ width: '100%', height: '500px' }}
                src={landing}
                alt='landing'
              />
            </div>
          </div>
        </Grid>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link to='/halalproduct' className='btn btn-primary'>
          View All
        </Link>
      </div>
    </div>
  );
};

HalalSummary.propTypes = {};

export default HalalSummary;
