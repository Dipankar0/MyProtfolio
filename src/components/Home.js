import React from 'react';
import PropTypes from 'prop-types';
import profilePic from './pp.jpg';
import ProjectSummary from './ProjectSummary';
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Card,
  CardContent,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  TableHead,
} from '@material-ui/core';
import EduAndExp from './EduAndExp';

const Home = (props) => {
  return (
    <div>
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3} className="">
            <Grid
              item
              xs={12}
              className=""
              style={{ backgroundColor: 'white' }}
            >
              <Avatar
                variant="rounded"
                src={profilePic}
                style={{
                  backgroundColor: 'red',
                  marginLeft: '15%',
                  width: '70%',
                  height: '30%',
                }}
              />
              <Typography style={{ textAlign: 'center' }}>
                Dipankar Bhadra
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Full Stack Developer
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Entrepreneur
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Email: dipankarind15@gmail.com
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Mobile: +918918163259
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Address: Sarat Kanon
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                Madhyamgram, Kolkata
              </Typography>
              <Typography style={{ textAlign: 'center' }}>
                West Bengal, India.
              </Typography>
            </Grid>
            <Grid container spacing={1} item xs={12} className="">
              <Grid item xs={4} className="">
                <h1 style={{ textAlign: 'end' }}>
                  <a href="https://www.linkedin.com/in/dipankar-bhadra-06396a202/">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </h1>
              </Grid>
              <Grid item xs={4} className="">
                <h1 style={{ textAlign: 'center' }}>
                  <a href="https://github.com/Dipankar0?tab=repositories">
                    <i class="fab fa-github"></i>
                  </a>
                </h1>
              </Grid>
              <Grid item xs={4} className="">
                <h1>
                  <a href="https://www.facebook.com/dipkar.bhadra.47234">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </h1>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Grid item xs={12} spacing={1}>
              <Card className="">
                <CardContent>
                  <div>
                    <p
                      style={{ textAlign: 'center' }}
                      className="badge-firm mid"
                    >
                      About Myself (A Believer)
                    </p>
                  </div>
                  <p>
                    Being an experienced and highly passionate full-stack web
                    developer for 3 years now, I have developed and deployed
                    multiple top-level websites from scratch for both
                    enterprises and professional individuals. I provide
                    companies my expertise to develop production-ready web
                    applications from start to deployment. I aim high and work
                    hard accordingly.
                  </p>
                </CardContent>
              </Card>
              <div>
                <p style={{ textAlign: 'center' }} className="badge-firm mid">
                  Skills
                </p>
              </div>
              <TableContainer component={Paper}>
                <Table className="" size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="">Description</TableCell>
                      <TableCell align="">Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Blockchain
                      </TableCell>
                      <TableCell align="">Using Hyperledger Fabric</TableCell>
                      <TableCell align="">Moderate</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        React.js
                      </TableCell>
                      <TableCell align="">Java Script Library</TableCell>
                      <TableCell align="">Higher</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Node.js
                      </TableCell>
                      <TableCell align="">
                        JavaScript runtime environment
                      </TableCell>
                      <TableCell align="">Higher</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Redux
                      </TableCell>
                      <TableCell align="">JavaScript Library</TableCell>
                      <TableCell align="">Higher</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Express.js
                      </TableCell>
                      <TableCell align="">A javascript framework</TableCell>
                      <TableCell align="">Moderate</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Mongoose
                      </TableCell>
                      <TableCell align="">MongoDB Database Library</TableCell>
                      <TableCell align="">Moderate</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Bootstrap
                      </TableCell>
                      <TableCell align="">Front-end Styling Language</TableCell>
                      <TableCell align="">Moderate</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Spring
                      </TableCell>
                      <TableCell align="">Java Framework</TableCell>
                      <TableCell align="">Below Moderate</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        Symphone
                      </TableCell>
                      <TableCell align="">PHP Framework</TableCell>
                      <TableCell align="">Beginner</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        XHTML
                      </TableCell>
                      <TableCell align="">Mark-up Language</TableCell>
                      <TableCell align="">Higher</TableCell>
                    </TableRow>
                    <TableRow key="">
                      <TableCell component="th" scope="row">
                        CSS3
                      </TableCell>
                      <TableCell align="">Style Sheets Language</TableCell>
                      <TableCell align="">Higher</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
        <ProjectSummary />
        <EduAndExp />
        <Grid item>
          <div className="my-2">
            <p style={{ textAlign: 'center' }} className="badge-firm mid">
              Thank You
            </p>
          </div>
        </Grid>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
