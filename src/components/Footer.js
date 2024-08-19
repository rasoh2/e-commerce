import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className='bg-light text-center text-lg-start'>
      <Container className='p-4'>
        <p className='text-center mb-0'>
          &copy; {new Date().getFullYear()} @Sebastian ortega A.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
