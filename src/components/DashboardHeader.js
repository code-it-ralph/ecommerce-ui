import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DashboardHeader(props) {
  return (
    <Container className='mt-4 mb-4 pb-4'>
      <div>
        <span className='header-title'>Product List</span>
        <Link className='createProduct-btn btn btn-light m-3' to={`/createproduct`}>Create Product</Link>
        <Link className='createProduct-btn btn btn-light m-3' to={`/allorders`}>All Orders</Link>
      </div>
    </Container>
  );
}