import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='text-light' href='#'>
            <img
              src='https://logodix.com/logo/920185.png'
              height='80'
              width='80'
              alt=''
              loading='lazy'
              style={{borderRadius:'50%'}}
            />
           <h1 className='ms-3 text-warning'> Media-App</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header