import React, { useState } from 'react';
import AddMediaForm from './AddMediaForm';
import './Admin.css';

const Admin = () => {
  return (
    <>
      <h1 className='placeholder'>Admin page</h1>
      <div className="form">
        <AddMediaForm />
      </div>
    </>
  )
}

export default Admin;