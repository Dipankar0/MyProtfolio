import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import add from '../../src/img/BazarBilas/addtocart.jpg';
import pd from '../../src/img/BazarBilas/pd.png';
import cart from '../../src/img/BazarBilas/cart.png';
import order from '../../src/img/BazarBilas/order.png';
import home from '../../src/img/BazarBilas/home.jpg';
import ordertrack from '../../src/img/BazarBilas/ordertrack.png';
import dm from '../../src/img/BazarBilas/deliverym.png';
import uppro from '../../src/img/BazarBilas/uppro.png';

const BazarBilas = props => {
  return (
    <div className='container'>
      <div>
        <Grid item>
          <Typography>
            <strong>Name: </strong>Bazar Bilas
          </Typography>
          <Typography>
            <strong>Link: </strong>
            <a href='http://bazarbilas.com/'>bazarbilas.com</a>
          </Typography>
          <Typography>
            <strong>Description: </strong>An responsive e-commerce web
            application for enterprise and their consumers. It is designed to
            serve 3 types of user namely buyer, seller and admin. Seller can
            manupulate their product display according to their need. Buyer can
            keep track of their orders and manage their accounts. Buyers are
            able to manupulate their orders while buying products.
          </Typography>
          <Typography>
            <strong>Technologies Used: </strong> React, Redux, Node, Express,
            MongoDB
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
              <strong>Description: </strong>Home Page to nevigate all the pages.
              It displayes products of different categories along with most
              selling products and company's on-going promotion posters.
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
              <strong>Picture: </strong>Add To Cart
            </Typography>
            <Typography>
              <strong>Description: </strong>User can add products to their cart
              if only they are registered, otherwise it will direct them to
              register page. User can add or remove item on the go with one
              button.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={add}
              alt='addtocart'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Product Description
            </Typography>
            <Typography>
              <strong>Description: </strong>Seller can wirte details about the
              product for the consumer's preference.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={pd}
              alt='Product description'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Cart
            </Typography>
            <Typography>
              <strong>Description: </strong>Added products will be displayed on
              cart from where user can again add or remove item.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={cart}
              alt='cart'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Order Address
            </Typography>
            <Typography>
              <strong>Description: </strong>Consumer can put different address
              for different items will the system will autometicly generate last
              address used by the consumer for the next order.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={order}
              alt='order'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Track Order
            </Typography>
            <Typography>
              <strong>Description: </strong>Consumer and Sellers can track all
              the orders.
            </Typography>
          </div>
          <div className='my-1 text-center'>
            <img
              style={{ width: '300px', height: '500px' }}
              src={ordertrack}
              alt='track order'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Delivery Management
            </Typography>
            <Typography>
              <strong>Description: </strong>Seller can manage the order item's
              delivery procedures for three categories.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={dm}
              alt='delivery management'
            />
          </div>
        </Grid>
        <hr className='my-2' />
        <Grid item>
          <div className='p-2' style={{ border: 'black solid 1px' }}>
            <Typography>
              <strong>Picture: </strong>Update Product
            </Typography>
            <Typography>
              <strong>Description: </strong>Seller can add and update product
              with all fields along with pictures.
            </Typography>
          </div>
          <div className='my-1'>
            <img
              style={{ width: '100%', height: '500px' }}
              src={uppro}
              alt='update product'
            />
          </div>
        </Grid>
        <hr className='my-2' />
      </div>
    </div>
  );
};

BazarBilas.propTypes = {};

export default BazarBilas;
