import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import './styles/StepForm.css';

import { PhoneInput } from 'react-international-phone';
import { PhoneNumberUtil } from 'google-libphonenumber';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { formatDate, formatDateString, generateDateRange, getTomorrowDate, updateTime } from '../../utils/dateUtils';
import { fetchData, postData } from '../../api';
import { BOB_BACKEND } from '../constants';
import { eventSpacePrice, timeData } from '../data';

const stepSchemas = [
  yup.object().shape({
    eventSpace: yup.string().required('Event space is required'),
  }),
  yup.object().shape({
    startTime: yup.string().required('Start time is required'),
    endTime: yup.string().required('End time is required'),
  }),
  yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string(),
    phone: yup.string(),
    email: yup.string().email('Invalid email').required('Email is required'),
    confirmEmail: yup.string().oneOf([yup.ref('email'), null], 'Emails must match').required('Confirm email is required'),
    eventDetails: yup.string(),
    terms: yup.boolean().oneOf([true], ''),
  }),
  yup.object().shape({})
];

const StepForm = () => {
  const [bookings, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [bookedDates, setBookedDates] = useState([]);
  const [bookingObj, setBookingObj] = useState();
  const steps = ['Event Space', 'Day of Event', 'Details', 'Payment', 'Done'];
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const currentSchema = stepSchemas[activeStep];
  const { register, handleSubmit, control, trigger, formState: { errors }, watch, reset, setError, clearErrors, getValues } = useForm({
    resolver: yupResolver(currentSchema),
    mode: 'onChange'
  });

  const [price, setPrice] = useState();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const minDate = getTomorrowDate();
  const startTime = watch('startTime', '10:00:00');

  const [phone, setPhone] = useState('');
  const phoneUtil = PhoneNumberUtil.getInstance();

  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };

  const handleChangePhone = (value, countryData) => {

    let cleanedNumber = value.replace(/\s+/g, '').slice(1);
    if (cleanedNumber === countryData.country.dialCode) {
      setPhone('');
    } else {
      setPhone(value)
    }
  };


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const setSpaceData = () => {
    const spaceId = getValues("eventSpace");
    const selectedSpace = eventSpacePrice.find(item => item.id === spaceId);
    if (selectedSpace) {
      setPrice(selectedSpace.price);
    }

    // set booking slots respective to selected space
    const bookedSlots = bookings.reduce((slot, obj) => {
      const entry = slot.find(item => item.id === obj.id);

      if (entry) {
        entry.dates = [...entry.dates, ...obj.dates];
      } else {
        slot.push({ id: obj.id, dates: [...obj.dates] });
      }

      return slot;
    }, []);

    const datesForId = bookedSlots.find(item => item.id === spaceId)?.dates || [];
    setBookedDates(datesForId);

  }


  const handleNextStep = async () => {
    if (activeStep === 1 && isDateRangeEmpty(dateRange)) {
      setError('startDate', { message: 'Date is required' })
    } else if (activeStep === 2 && phone !== '' && !isPhoneValid(phone)) {
      setError('phone', { message: 'Phone number is invalid' })
    } else {

      if (activeStep === 0) {
        setSpaceData();
      }
      const result = await trigger();
      if (result) {
        handleNext();
      }
    }
  };

  const handleStartOver = () => {
    setLoading(true);
    // reset form fields
    reset();

    // reset binded form fields
    setPhone('');
    setDateRange([null, null]);
    setActiveStep(0);
    setLoading(false);

    // refresh booking details
    setRefresh((refresh) => !refresh)
  };


  const handleDateRange = (date) => {
    const [start, end] = date;
    const dateArray = [];
    let currentDate = new Date(start);
    let isOverlap = false;
    while (currentDate <= end) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (dateArray.length > 0) {
      bookedDates.forEach((d) => {
        const found = dateArray.some(date => formatDateString(date) === formatDateString(d));
        if (found) {
          isOverlap = true;
          return;
        }
      })
    }

    if (isOverlap) {
      setError('startDate', { message: 'Selected date range overlaps with existing bookings. Please choose different dates.' });
      setDateRange([null, null]);
    } else {
      clearErrors("startDate")
      setDateRange(date);
    }

  };

  const isDateRangeEmpty = (dateRange) => {
    return dateRange[0] === null && dateRange[1] === null;
  };

  const onSubmit = async (data) => {
    const startTime = updateTime(dateRange[0], data?.startTime);
    const endTime = updateTime(dateRange[1], data?.endTime);

    const body = {
      event_space: data.eventSpace,
      start_date: formatDate(dateRange[0]),
      start_time: formatDate(startTime, 'YYYY-MM-DD HH:mm:ss'),
      end_date: formatDate(dateRange[1]),
      end_time: formatDate(endTime, 'YYYY-MM-DD HH:mm:ss'),
      first_name: data.firstName,
      last_name: data?.lastName ? data?.lastName : '',
      email: data.email,
      phone: phone ? phone : '',
      details: data?.details ? data?.details : ''
    }


    try {
      setLoading(true)
      const url = BOB_BACKEND.booking;
      const res = await postData(url, body);

      if (res?.success) {
        setBookingObj(body)
        handleNext();
      }
    } catch (error) {
      setFetchError(error);
    } finally {
      setLoading(false)
    }

  };

  useEffect(() => {
    const fetchbookedDates = async () => {
      setLoading(true);
      setFetchError(null);
      try {
        const url = BOB_BACKEND.booking;
        const result = await fetchData(url);
        if (result) {
          const bookedDatesData = result.data;
          const dates = [];
          bookedDatesData.forEach((data) => {
            const generatedArray = generateDateRange(data.start_date, data.end_date);
            generatedArray.sort((a, b) => new Date(a) - new Date(b));
            const bookingData = {
              id: data.event_space,
              dates: generatedArray
            }
            dates.push(bookingData);
          })

          setBookings(dates);
        }
      } catch (error) {
        setFetchError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchbookedDates();
  }, [refresh]);



  return (
    <Container className='step-form-container'>
      {loading ? (
        <div className='w-100 d-flex align-items-center justify-content-center' style={{ height: '192px' }}>
          <Spinner className='booking-spinner' />
        </div>
      ) : fetchError ? (
        <div className='d-flex align-items-center justify-content-center'>
          <p style={{ padding: '80px 0px' }}><i className="fa-solid fa-circle-exclamation me-2"></i>{'Something went wrong. Please try again'}</p>
        </div>
      ) :
        (
          <>
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
                  <p><b>Please select an event space:</b></p>
                  <Form.Group className="mb-3" controlId="formEventSpace">
                    {/* <Form.Label>Event Space</Form.Label> */}
                    <Form.Select name='eventSpace' {...register('eventSpace', { required: true })} className='custom-select' isInvalid={errors.eventSpace}>
                      <option value="">Select event space</option>
                      <option value="St Cloud Event Space">St Cloud Event Space</option>
                      <option value="St Cloud Event Space with Cleaning Service">St Cloud Event Space with Cleaning Service</option>
                      <option value="Little Falls Event Space">Little Falls Event Space</option>
                      <option value="Little Falls Event Space with Cleaning Service">Little Falls Event Space with Cleaning Service</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.eventSpace?.message}</Form.Control.Feedback>
                  </Form.Group>
                </div>
              )}
              {activeStep === 1 && bookedDates && (
                <div>
                  <p>Below you can find a list of available slots for <b>{getValues("eventSpace")}</b> by <b>Adelle Starin</b>.</p>
                  <Row>

                    <Form.Group as={Col} md="3" className="mb-3" controlId="formStartDate">
                      <Form.Label>Select event date</Form.Label>
                      <Controller
                        name="startDate"
                        control={control}
                        rules={{
                          required: 'Start date is required',
                        }}
                        render={({ field }) => (
                          <DatePicker
                            {...field}
                            selected={field.value}
                            onChange={handleDateRange}
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            withPortal
                            className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                            minDate={minDate}
                            dateFormat="yyyy-MM-dd"
                            excludeDates={bookedDates}
                          />

                        )}
                      />
                      {errors.startDate && <div className="invalid-feedback">{errors.startDate.message}</div>}
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formStartTime">
                      <Form.Label>Start from</Form.Label>
                      <Form.Select name='starTime' {...register('startTime')} isInvalid={errors.startTime} defaultValue={timeData[0].value}>
                        {timeData.map((time, i) => (
                          <option value={time.value}>{time.title}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.startTime?.message}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="formEndTime">
                      <Form.Label>Finish by</Form.Label>
                      <Form.Select className='custom-select' name='endTime'  {...register('endTime')} isInvalid={errors.endTime} defaultValue={timeData[7].value}>
                        {timeData.map((time, i) => (
                          <option value={time.value} disabled={time.value <= startTime} >{time.title}</option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.endTime?.message}</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                </div>
              )}
              {activeStep === 2 && (
                <div>
                  <p>You have selected a booking for the <b>{getValues("eventSpace")}</b> by <b>Adelle Starin </b>
                    {dateRange[1] !== null ? (
                      <>
                        from <b>{formatDateString(dateRange[0])}</b> to <b>{formatDateString(dateRange[1])}</b>
                      </>
                    ) : (
                      <> on <b>{formatDateString(dateRange[0])}</b></>
                    )}.
                    The price per day for the <b>{getValues("eventSpace")}</b> is <b>${price.toFixed(2)}</b>. Please provide your details in the form below to proceed with the booking.</p>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationFirstName">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=""
                        name='firstName'
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
                        name='lastName'
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
                            onChange={handleChangePhone}
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
                        name='email'
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
                        name='confirmEmail'
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
                        name='eventDetails'
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
                        name='terms'
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
                    />
                  </Form.Group>
                </div>
              )}
              {activeStep === 4 && (
                <div>
                  <p>Thank you! Your booking is complete. An email with details of your booking has been sent to you.</p>
                  <div>
                    <p className='text-center mt-5 mb-0'><b>Add to calendar</b></p>
                    <div className="calendar-buttons">
                      <a href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(bookingObj.event_space)}&dates=${formatDate(dateRange[0], 'YYYYMMDD')}T${getValues("startTime").replaceAll(":", "")}Z/${formatDate(dateRange[1], 'YYYYMMDD')}T${getValues("endTime").replaceAll(":", "")}Z&details=${encodeURIComponent(bookingObj.details)}&location=${encodeURIComponent(bookingObj.event_space)}&ctz=${encodeURIComponent('America/New_York')}`} className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google"></i> Google Calendar</a>
                      <a href={`data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:${encodeURIComponent(bookingObj.event_space)}%0ADTSTART:${formatDate(dateRange[0], 'YYYYMMDD') + 'T' + getValues("startTime").replaceAll(":", "") + "Z"}%0ADTEND:${formatDate(dateRange[1], 'YYYYMMDD') + 'T' + getValues("endTime").replaceAll(":", "") + "Z"}%0ADESCRIPTION:${encodeURIComponent(bookingObj.details)}%0ALOCATION:${encodeURIComponent(bookingObj.event_space)}%0ATZID:${encodeURIComponent('America/New_York')}%0AEND:VEVENT%0AEND:VCALENDAR`} download="event.ics" className="main-btn"><i className="fa-brands fa-apple"></i> Apple Calendar</a>
                      <a href={`https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(bookingObj.event_space)}&st=${formatDate(dateRange[0], 'YYYYMMDD')}T${getValues("startTime").replaceAll(":", "")}Z&et=${formatDate(dateRange[1], 'YYYYMMDD')}T${getValues("endTime").replaceAll(":", "")}Z&desc=${encodeURIComponent(bookingObj.details)}&in_loc=${encodeURIComponent(bookingObj.event_space)}`} className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-yahoo"></i> Yahoo Calendar</a>
                      <a href={`https://outlook.live.com/owa/?rru=addevent&startdt=${formatDate(dateRange[0], 'YYYYMMDD')}T${getValues("startTime").replaceAll(":", "")}Z&enddt=${formatDate(dateRange[1], 'YYYYMMDD')}T${getValues("endTime").replaceAll(":", "")}Z&subject=${encodeURIComponent(bookingObj.event_space)}&location=${encodeURIComponent(bookingObj.event_space)}&body=${encodeURIComponent(bookingObj.details)}`} className="main-btn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-windows"></i> Outlook Calendar</a>
                    </div>
                  </div>
                </div>
              )}
              <div className={`d-flex  ${(activeStep === 0 || activeStep === 4) ? 'justify-content-end' : 'justify-content-between '} `}>
                {activeStep > 0 && activeStep !== 4 && (
                  <Button className="main-btn-outline" onClick={handleBack}>
                    Back
                  </Button>
                )}
                {activeStep < 3 && (
                  <Button className='main-btn-outline' onClick={handleNextStep}>
                    <span>Next</span>
                  </Button>
                )}
                {activeStep === 3 && (
                  <Button type="submit" className='main-btn-outline' >
                    Submit
                  </Button>
                )}
                {
                  activeStep === 4 && (
                    <Button className='main-btn-outline' onClick={handleStartOver} >
                      Start Over
                    </Button>
                  )
                }
              </div>
            </Form>
          </>
        )}
    </Container>
  );
};

export default StepForm;
