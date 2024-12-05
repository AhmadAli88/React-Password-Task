import { useState } from 'react';

//components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
//icons
import { FaRegEye } from 'react-icons/fa';
import { BiSolidHide } from 'react-icons/bi';

const MyPassword = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleUpdateState = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
      <Row className='border h-50 w-50 rounded p-3'>
        <Col lg={12} md={6} sm={4}>
          <Form.Group className='h-100 d-flex justify-content-center align-items-center gap-4'>
            <div className='position-relative'>
              <Form.Label>Password</Form.Label>

              {showPassword ? (
                <>
                  <Form.Control type='password' id='password' name='password' />
                  <BiSolidHide
                    size={20}
                    className='position-absolute end-0 top-50'
                    onClick={handleUpdateState}
                  />
                </>
              ) : (
                <>
                  <Form.Control type='text' id='text' name='text' />
                  <FaRegEye
                    size={20}
                    className='position-absolute end-0 top-50'
                    onClick={handleUpdateState}
                  />
                </>
              )}
              {/* <FaRegEye size={20} className='position-absolute end-0 top-50' />
              <BiSolidHide size={20} className='position-absolute end-0 top-50'/> */}
            </div>

            <div className='d-flex justify-content-end align-items-end mt-3 h-100'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default MyPassword;
