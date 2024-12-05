import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyPassword = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
      <Row className='border h-50 w-50 rounded p-3'>
        <Col lg={12} md={6} sm={4}>
          <Form.Group className='h-100 d-flex justify-content-center align-items-center gap-4'>
            <Form.Label>Password</Form.Label>

            <Form.Control type='password' id='password' name='password' />
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
