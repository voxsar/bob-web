import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, ProgressBar, InputGroup } from 'react-bootstrap';
import './styles/StepForm.css';
import SlotCalendar from './SlotCalender';
import { PhoneInput } from 'react-international-phone';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { getTodayDate } from '../../utils/dateUtils';

const stepSchemas = [
  yup.object().shape({
    eventSpace: yup.string().required('Event space is required'),
    startDate: yup.date().required('Date is required'),
    days: yup.array().of(yup.boolean()).min(1, 'At least one day is required'),
    startTime: yup.string().required('Start time is required'),
    endTime: yup.string().required('End time is required'),
  }),
  yup.object().shape({}),
  yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    // phone: yup.string().required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    confirmEmail: yup.string().oneOf([yup.ref('email'), null], 'Emails must match').required('Confirm email is required'),
    eventDetails: yup.string().required('Event details are required'),
    terms: yup.boolean().oneOf([true], 'Terms must be accepted'),
  }),
  yup.object().shape({}),
];

const StepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const currentSchema = stepSchemas[activeStep];
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm({
    resolver: yupResolver(currentSchema),
  });

  const steps = ['Event Space', 'Day of Event', 'Details', 'Payment', 'Done'];
  const [startDate, setStartDate] = useState(getTodayDate());
  const [phone, setPhone] = useState('');
  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleNextStep = async () => {
    const result = await trigger();
    console.log('result', result, 'control', control);
    if (result) {
      handleNext();
    }
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
            <Form.Group className="mb-3" controlId="formEventSpace">
              <Form.Label>Event Space</Form.Label>
              <Form.Select aria-label="Default select example" {...register('eventSpace')} isInvalid={errors.eventSpace}>
                <option value="">Select event space</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">{errors.eventSpace?.message}</Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Form.Group as={Col} md="3" className="mb-3" controlId="formStartDate">
                <Form.Label>I'm available on or after</Form.Label>
                <Form.Control
                  type="date"
                  value={startDate}
                  onChange={handleDateChange}
                  {...register('startDate')}
                  isInvalid={errors.startDate}
                />
                <Form.Control.Feedback type="invalid">{errors.startDate?.message}</Form.Control.Feedback>
              </Form.Group>
              <div className='col-md-4 d-flex align-items-center'>
                <div className='day-check-form-container justify-content-start row'>
                  {['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <Form.Group as={Col} md="2" controlId={`formDay${day}`} key={day}>
                      <Form.Check
                        type='checkbox'
                        id={`default-checkbox-${day}`}
                        label={day}
                        {...register(`days.${index}`)}
                      />
                    </Form.Group>
                  ))}
                </div>
              </div>
              <Form.Group as={Col} md="2" controlId="formStartTime">
                <Form.Label>Start from</Form.Label>
                <Form.Select aria-label="Default select example" {...register('startTime')} isInvalid={errors.startTime}>
                  <option value="10:00 am">10:00 am</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.startTime?.message}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="formEndTime">
                <Form.Label>Finish by</Form.Label>
                <Form.Select aria-label="Default select example" {...register('endTime')} isInvalid={errors.endTime}>
                  <option value="5:00 pm">5:00 pm</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{errors.endTime?.message}</Form.Control.Feedback>
              </Form.Group>
            </Row>
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
              <Form.Group as={Col} md="4" controlId="validationFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register('firstName')}
                  isInvalid={errors.firstName}
                />
                <Form.Control.Feedback type="invalid">{errors.firstName?.message}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register('lastName')}
                  isInvalid={errors.lastName}
                />
                <Form.Control.Feedback type="invalid">{errors.lastName?.message}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationPhone">
                <Form.Label>Phone</Form.Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      defaultCountry="us"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      isInvalid={errors.phone}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">{errors.phone?.message}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register('email')}
                  isInvalid={errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationConfirmEmail">
                <Form.Label>Confirm email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  {...register('confirmEmail')}
                  isInvalid={errors.confirmEmail}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmEmail?.message}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="validationEventDetails">
                <Form.Label>Event Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register('eventDetails')}
                  isInvalid={errors.eventDetails}
                />
                <Form.Control.Feedback type="invalid">{errors.eventDetails?.message}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="validationTerms">
                <Form.Check
                  type='checkbox'
                  id='default-checkbox-terms'
                  label='I agree to the terms of service'
                  {...register('terms')}
                  isInvalid={errors.terms}
                />
                <Form.Control.Feedback type="invalid">{errors.terms?.message}</Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
        )}
        {activeStep === 3 && (
          <div>
            <p>Confirm your payment by using the payment options below</p>
            <Form.Group controlId="formPaymentMethod">
              <Form.Check
                type='radio'
                id='default-radio-cash'
                label='Pay via cash'
                defaultChecked
                {...register('paymentMethod')}
              />
            </Form.Group>
          </div>
        )}
        {activeStep === 4 && (
          <div>
            <p>Thank you! Your booking is complete. An email with details of your booking has been sent to you.</p>
            <div>
              <p>Add to calendar</p>
              <div className="calendar-buttons">
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Event%20Title&dates=20240607T080000Z/20240607T100000Z&details=Event%20Description&location=Event%20Location" className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google"></i> Google Calendar</a>
                <a href="data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0D%0AVERSION:2.0%0D%0ABEGIN:VEVENT%0D%0ASUMMARY:Event%20Title%0D%0ADTSTART:20240607T080000Z%0D%0ADTEND:20240607T100000Z%0D%0ADESCRIPTION:Event%20Description%0D%0ALOCATION:Event%20Location%0D%0AEND:VEVENT%0D%0AEND:VCALENDAR" download="event.ics" className="main-btn"><i className="fa-brands fa-apple"></i> Apple Calendar</a>
                <a href="https://calendar.yahoo.com/?v=60&view=d&type=20&title=Event%20Title&st=20240607T080000Z&et=20240607T100000Z&desc=Event%20Description&in_loc=Event%20Location" className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-yahoo"></i> Yahoo Calendar</a>
                <a href="https://outlook.live.com/owa/?rru=addevent&startdt=2024-06-07T08:00:00Z&enddt=2024-06-07T10:00:00Z&subject=Event%20Title&location=Event%20Location&body=Event%20Description" className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-windows"></i> Outlook Calendar</a>
              </div>
            </div>
          </div>
        )}
        <div className={`d-flex  ${activeStep === 0 ? 'justify-content-end' : 'justify-content-between '} `}>
          {activeStep > 0 && (
            <Button className="main-btn-outline" onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep < 4 && (
            <Button className='main-btn-outline' onClick={handleNextStep}>
              Next
            </Button>
          )}
          {activeStep === 4 && (
            <Button type="submit" className='main-btn-outline' >
              Submit
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
};

export default StepForm;
