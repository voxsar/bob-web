import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import './styles/StepForm.css';

const StepForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Event Space', 'Day of Event', 'Details', 'Payment', 'Done'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <div className="progress-container">
        {steps.map((step, index) => (
          <div key={index} className={`step ${activeStep >= index ? 'active' : ''}`}>
            <span>{index + 1}. {step}</span>
            {<div className="divider"></div>}
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <div>
            <Form.Group as={Row} className="mb-3" controlId="formFirstName">
              <Form.Label column sm={2}>Event Space</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Select event space" {...register('firstName', { required: true })} />
                {errors.firstName && <span className="text-danger">This field is required</span>}
              </Col>
            </Form.Group>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <Form.Group as={Row} className="mb-3" controlId="formLastName">
              <Form.Label column sm={2}>Last Name</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Enter last name" {...register('lastName', { required: true })} />
                {errors.lastName && <span className="text-danger">This field is required</span>}
              </Col>
            </Form.Group>
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <Form.Group as={Row} className="mb-3" controlId="formDetails">
              <Form.Label column sm={2}>Details</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Enter details" {...register('details', { required: true })} />
                {errors.details && <span className="text-danger">This field is required</span>}
              </Col>
            </Form.Group>
          </div>
        )}
        {activeStep === 3 && (
          <div>
            <Form.Group as={Row} className="mb-3" controlId="formPayment">
              <Form.Label column sm={2}>Payment</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Enter payment info" {...register('payment', { required: true })} />
                {errors.payment && <span className="text-danger">This field is required</span>}
              </Col>
            </Form.Group>
          </div>
        )}
        {activeStep === 4 && (
          <div>
            <h2>Done</h2>
            <p>Thank you for completing the form!</p>
          </div>
        )}
        <div className="d-flex justify-content-between">
          {activeStep > 0 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 && (
            <Button className='shop-all-btn' variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button type="submit" variant="primary">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
};

export default StepForm;
