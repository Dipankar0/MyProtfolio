import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import approve from '../../src/img/BloodSource/approve.png';
import comment from '../../src/img/BloodSource/comment.png';
import dashboard from '../../src/img/BloodSource/dashboard.png';
import donorlist from '../../src/img/BloodSource/donorlist.png';
import edit from '../../src/img/BloodSource/edit.png';
import home from '../../src/img/BloodSource/home.png';
import newpost from '../../src/img/BloodSource/newpost.png';
import validation from '../../src/img/BloodSource/validation.png';

const BloodSource = props => {
  return (
    <div className='container'>
      <div>
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
            designed for both mobile and desktop devices. It is designed to
            create a platform for 4 different types of users namely, Donor,
            Receiver, Public and Admin. UI is defferent for each type of user
            throughout the application for maximum convention.
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
              <strong>Description: </strong>Home Page to nevigate to all the
              pages. It contains header and footer which includes contact
              information and terms and conditions.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={home}
              alt='home'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Request for blood
            </Typography>
            <Typography>
              <strong>Description: </strong>When someone fills up form of blood,
              the system automatically creates a permanent account for him. Next
              time that person can use mobile number to login and get all
              services form the system. Auto generated password is created for
              him everytime with token.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={newpost}
              alt='newpost'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Dashboard
            </Typography>
            <Typography>
              <strong>Description: </strong>The dashboard of needer shows all
              the requests he/she had made. Each request contains donor list of
              respective bloodgroups.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={dashboard}
              alt='dashboard'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Donor List
            </Typography>
            <Typography>
              <strong>Description: </strong>Donor list is divided into two
              categories for maximum convenience. The donors who are located at
              the same place as the needer does and all the other donors having
              the same bloodgroup
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={donorlist}
              alt='donorlist'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Comments
            </Typography>
            <Typography>
              <strong>Description: </strong>The request form of blood is shown
              to everyone including needers, donors, admin and public as well
              and all of them can comment on the post. However if the commenter
              is a potential donor then only the posted needer can view his
              profile.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={comment}
              alt='comment'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Admin approval
            </Typography>
            <Typography>
              <strong>Description: </strong>When a donor requests for
              registration, it requires admin approval.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={approve}
              alt='approve'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Edit profile
            </Typography>
            <Typography>
              <strong>Description: </strong>One donor can eidt his profile
              whenever he/she wants to and can put his avaiability checked or
              unchecked.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={edit}
              alt='edit'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Form validation
            </Typography>
            <Typography>
              <strong>Description: </strong>All the forms of this system are
              developed with form validation function activated.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={validation}
              alt='validation'
            />
          </div>
        </Grid>
        <hr className='my-2' />
      </div>
    </div>
  );
};

BloodSource.propTypes = {};

export default BloodSource;
