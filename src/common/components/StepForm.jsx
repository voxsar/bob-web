import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Row, Col, ProgressBar, InputGroup } from 'react-bootstrap';
import './styles/StepForm.css';
import SlotCalendar from './SlotCalender';
import { PhoneInput } from 'react-international-phone';

const StepForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Event Space', 'Day of Event', 'Details', 'Payment', 'Done'];
  const [startDate, setStartDate] = useState('');
  const [phone, setPhone] = useState('');
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleClearDate = () => {
    setStartDate('');
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [country, setCountry] = useState(''); // State to store selected country

  // Handler for selecting a country
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const onSubmit = data => console.log(data);

  return (
    <Container className='step-form-container'>
      <div className="progress-container">
        {steps.map((step, index) => (
          <div key={index} className={`step ${activeStep >= index ? 'active' : ''}`}>
            <span>{index + 1}. {step}</span>
            {<div className="divider"></div>}
          </div>
        ))}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className='step-form pt-4'>
        {activeStep === 0 && (
          <div>
            <p><b>Please select event space:</b></p>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label >Event Space</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select event space</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {errors.firstName && <span className="text-danger">This field is required</span>}
            </Form.Group>
            <div>
              <Row>
                <Form.Group as={Col} md="3" className="mb-3" controlId="formFirstName">
                  <Form.Label >I'm available on or after</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={handleDateChange}
                  />
                  {errors.firstName && <span className="text-danger">This field is required</span>}
                </Form.Group>

                <div className='col-md-4 d-flex align-items-center'>
                  <div className='day-check-form-container justify-content-start row'>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Mon'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Tue'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Wed'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Thur'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Fri'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Sat'
                      />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formFirstName">
                      <Form.Check
                        type='checkbox'
                        id='default-checkbox'
                        label='Sun'
                      />
                    </Form.Group>
                  </div>
                </div>
                <Form.Group as={Col} md="2" controlId="formFirstName">
                  <Form.Label >Start from</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>10.00 am</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  {errors.firstName && <span className="text-danger">This field is required</span>}
                </Form.Group>
                <Form.Group as={Col} md="2" className="mb-3" controlId="formFirstName">
                  <Form.Label >Finish by</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>5.00 pm</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  {errors.firstName && <span className="text-danger">This field is required</span>}
                </Form.Group>

              </Row>

            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <SlotCalendar />
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <p>You selected a booking for the St Cloud Event Space by Adelle Starin for July 11, 2024. The price per day for the St Cloud Event Space is $200.00.
              Please provide your details in the form below to proceed with the booking.</p>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">

              <Form.Group as={Col} md="4" controlId="validationCustomPhone">
                <Form.Label>Phone</Form.Label>
                <PhoneInput
                  defaultCountry="ua"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Confirm email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>

            <Row>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Details</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formFirstName">
                <Form.Check
                  type='checkbox'
                  id='default-checkbox'
                  label='I agree to the terms of service'
                />
              </Form.Group>
            </Row>
          </div>
        )}
        {activeStep === 3 && (
          <div>
            <p>Confirm your payment by using the payment options below</p>
            <Form.Group controlId="formFirstName">
              <Form.Check
                type='radio'
                id='default-checkbox'
                label='Pay via cash'
                defaultChecked
              />
            </Form.Group>
          </div>
        )}
        {activeStep === 4 && (
          <div>
            <p>Thank you! Your booking is complete. An email with details of your booking has been sent to you.</p>
            <div>
              <p>Add to calendar </p>
              <div class="calendar-buttons">
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Event%20Title&dates=20240607T080000Z/20240607T100000Z&details=Event%20Description&location=Event%20Location" class="calendar-button" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i> Google Calendar</a>
                <a href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ASUMMARY:Event%20Title%0D%0ADTSTART:20240607T080000Z%0D%0ADTEND:20240607T100000Z%0D%0ADESCRIPTION:Event%20Description%0D%0ALOCATION:Event%20Location%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR" download="event.ics" class="calendar-button"><i class="fa-brands fa-apple"></i> Apple Calendar</a>
                <a href="https://calendar.yahoo.com/?v=60&view=d&type=20&title=Event%20Title&st=20240607T080000Z&et=20240607T100000Z&desc=Event%20Description&in_loc=Event%20Location" class="calendar-button" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-yahoo"></i> Yahoo Calendar</a>
                <a href="https://outlook.live.com/owa/?rru=addevent&startdt=2024-06-07T08:00:00Z&enddt=2024-06-07T10:00:00Z&subject=Event%20Title&location=Event%20Location&body=Event%20Description" class="calendar-button" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-windows"></i> Outlook Calendar</a>
              </div>

            </div>
          </div>
        )}
        <div className={`d-flex  ${activeStep === 0 ? 'justify-content-end' : 'justify-content-between '} `}>
          {activeStep > 0 && (
            <Button className="shop-all-btn" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 && (
            <Button className='shop-all-btn' variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button type="submit" className='shop-all-btn' variant="primary">
              Submit
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
};

export default StepForm;
