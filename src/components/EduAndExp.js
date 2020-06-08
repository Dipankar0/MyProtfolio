import React from 'react';
import PropTypes from 'prop-types';
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
  TableHead
} from '@material-ui/core';
const EduAndExp = props => {
  return (
    <div>
      <Grid item>
        <div>
          <p style={{ textAlign: 'center' }} className='badge-firm mid'>
            Experiene
          </p>
        </div>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <div className='' style={{ border: 'black solid 1px' }}>
            <div className='p-2'>
              <p>
                <strong>Full Stack Web Developer</strong>
                <br />
                <strong>Organisation: </strong>Maxzino Global
                <br />
                <strong>Duration: </strong>05 July, 2019 - Present
                <br />
                <strong>Location: </strong>Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <div className='' style={{ border: 'black solid 1px' }}>
            <div className='p-2'>
              <p>
                <strong>Junior Software Developer</strong>
                <br />
                <strong>Organisation: </strong>Techvus SDN BHD
                <br />
                <strong>Duration: </strong>02 May, 2018 - 31 July, 2018
                <br />
                <strong>Location: </strong>Kualalumpur, Malaysia
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid item>
        <div className='my-2'>
          <p style={{ textAlign: 'center' }} className='badge-firm mid'>
            Education
          </p>
        </div>
      </Grid>
      <Grid item>
        <div style={{ border: 'black solid 1px' }}>
          <TableContainer component={Paper}>
            <Table className='' size='small' aria-label='a dense table'>
              <TableHead>
                <TableRow>
                  <TableCell align=''>Certificate</TableCell>
                  <TableCell align=''>Concentration</TableCell>
                  <TableCell align=''>Institution</TableCell>
                  <TableCell align=''>CGPA</TableCell>
                  <TableCell align=''>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key=''>
                  <TableCell component='th' scope='row'>
                    Bachelor’s in information technology
                  </TableCell>
                  <TableCell align=''>Web and Software Development</TableCell>
                  <TableCell align=''>HELP University, Malaysia</TableCell>
                  <TableCell align=''>3.10/4.00</TableCell>
                  <TableCell align=''>2019</TableCell>
                </TableRow>
                <TableRow key=''>
                  <TableCell component='th' scope='row'>
                    Diploma in Computer Science
                  </TableCell>
                  <TableCell align=''>Programming Language</TableCell>
                  <TableCell align=''>
                    Lincoln University College, Malaysia
                  </TableCell>
                  <TableCell align=''>3.75/4.00</TableCell>
                  <TableCell align=''>2016</TableCell>
                </TableRow>
                <TableRow key=''>
                  <TableCell component='th' scope='row'>
                    Higher Secondary Certificate
                  </TableCell>
                  <TableCell align=''>Science</TableCell>
                  <TableCell align=''>
                    Bangabandhu Govt College, Bangladesh
                  </TableCell>
                  <TableCell align=''>4.60/5.00</TableCell>
                  <TableCell align=''>2012</TableCell>
                </TableRow>
                <TableRow key=''>
                  <TableCell component='th' scope='row'>
                    Secondary Certificate
                  </TableCell>
                  <TableCell align=''>Science</TableCell>
                  <TableCell align=''>S.M. Govt. Model School</TableCell>
                  <TableCell align=''>5.00/5.00</TableCell>
                  <TableCell align=''>2010</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Grid>
    </div>
  );
};

EduAndExp.propTypes = {};

export default EduAndExp;
