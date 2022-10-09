import React from 'react';
import {
  MDBFooter,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white position-fixed top-100 start-50 translate-middle vw-100 ' style={{ backgroundColor: "var(--primary)", zIndex: "1030"}}>
      <div className='text-center p-4 mb-5 cormorant-normal' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright: Mamone Maximiliano 308214
      </div>
    </MDBFooter>
  );
}