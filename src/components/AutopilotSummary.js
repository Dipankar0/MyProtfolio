import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import main from '../../src/img/Autopilot/main.png';

const AutopilotSummary = (props) => {
  return (
    <div className="my-2">
      <Grid item>
        <div>
          <p style={{ textAlign: 'center' }} className="badge-firm mid">
            Projects
          </p>
        </div>
      </Grid>
      <div className="badge-light">
        <Grid item>
          <Typography>
            <strong>Name: </strong>Autopilot
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href="https://autopilot.io/">autopilot.com</a>
          </Typography>
          <Typography>
            <strong>Description: </strong>A SaaS web application for managing
            business process automatically.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> Typescript, React, Redux, Node,
            Express, MongoDB
          </Typography>
        </Grid>
        <Grid item>
          <div className="my-2" style={{ border: 'black solid 1px' }}>
            <div>
              <img
                style={{ width: '100%', height: '600px' }}
                src={main}
                alt="Promo"
              />
            </div>
          </div>
        </Grid>
      </div>
      <hr className="my-1" />
    </div>
  );
};

AutopilotSummary.propTypes = {};

export default AutopilotSummary;
