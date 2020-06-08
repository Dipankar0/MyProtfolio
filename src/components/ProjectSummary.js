import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import BloodSourceSummary from './BloodSourceSummary';
import FindContactSummary from './FindContactSummary';
import HalalSummary from './HalalSummary';
import edu from '../../src/img/edu.png';

const ProjectSummary = props => {
  return (
    <Fragment>
      <BloodSourceSummary />
      <FindContactSummary />
      <HalalSummary />
      <div className='badge-light'>
        <Grid item>
          <Typography>
            <strong>Name: </strong>Bachao Education
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href='https://edubachaoweb.herokuapp.com/'>
              educationbachao.com
            </a>
          </Typography>
          <Typography>
            <strong>Description: </strong> A platform for teacher and student to
            share education.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            Mongoose
          </Typography>
        </Grid>
        <Grid item>
          <div className='my-2 text-center'>
            <div>
              <img
                style={{ width: '100%', height: '500px' }}
                src={edu}
                alt='edu'
              />
            </div>
          </div>
        </Grid>
      </div>
    </Fragment>
  );
};

ProjectSummary.propTypes = {};

export default ProjectSummary;
