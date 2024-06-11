import React, { useEffect, useState } from "react";
import './ProductView.css';
import { Container, Row, Col, Accordion, Modal, Form, Button } from "react-bootstrap";
import VariantSelector from "./variantSelector";
import { useParams } from 'react-router-dom';
import { productList, recProd, recProdMob, recommendedProd } from "../../common/data";
import StarReview from "../../common/components/StarReview";
import modalImg from '../../assets/images/share-photo-bg.png'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useIsSmallScreen from "../../hooks/useIsSmallScreen";
import Carousel from "../../common/components/Carousel";

const schema = yup.object().shape({
    file: yup
        .mixed()
        .required('File is required')
        .test('fileSize', 'File size is too large', value => {
            return value[0]?.size <= 2000000 // 2MB 
        }),
    textArea: yup
        .string()
        .required('Please tell us why you like this product')
        .min(10, 'Must be at least 10 characters'),
    name: yup
        .string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
});


const ProductView = () => {
    const isSmallScreen = useIsSmallScreen();
    let { productId } = useParams();
    const [product, setProduct] = useState();
    const [showModal, setShowModal] = useState(false);
    const [variant, setVariant] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };


    const handleClose = () => {
        reset();
        setShowModal(false);
    }

    const handleShow = () => setShowModal(true);

    useEffect(() => {
        console.log("id", productId);

        const selectedProduct = productList.find(product => product.id === productId);
        console.log(selectedProduct)
        setProduct(selectedProduct);
        setVariant({
            variantId: '001',
            variantURL: 'https://babysonbroadway.com/wp-content/uploads/2023/12/1333543588.jpg'
        });
    }, [productId])

    return (
        <Container className="product-view-container">
            <Row className="product-variations-container">
                <div className="d-flex flex-row product-select-row">
                    <Col md={2} sm={4} className="d-flex justify-content-lg-end justify-content-sm-start p-0">
                        <VariantSelector orientation="vertical" variantList={product?.variants} setVariant={setVariant} />
                    </Col>
                    <Col md={10} sm={8}>
                        <div className="main-img-container">
                            <img src={variant?.variantURL} className="product_preview_image" alt={"alt"} />
                        </div>
                        <div className="text-center mt-3 share-photo-container">
                            <h2 style={{ color: '#5C5C5C' }}>@babysonbroadway</h2>
                            <p>Show us how you styled this item!</p>
                            <p onClick={handleShow} className="share-photo-link">Share your own photo +</p>
                        </div>
                    </Col>
                </div>
                <Col md={5}>
                    <h1>BABYZEN | YOYO² 6+ Colorpacks</h1>
                    <div className="star-points-container d-flex flex-row">
                        <StarReview rating={2.5} />
                        <p className="fw-light font-rubik mb-2">{"(0 reviews)"}</p>
                    </div>
                    <div className="product-labels">
                        <a href="/">Strollers</a>, <a href="/">Stokke</a>,<a href="/"> BABYZEN</a>
                    </div>
                    <div className="product-points-container">
                        <p className="product-points fw-light">Earn 70 Points</p>
                    </div>
                    <p className="product-view-price">$70</p>
                    <p className="product-avail-txt">In stock</p>
                    <VariantSelector orientation="horizontal" variantList={product?.variants} setVariant={setVariant} />
                    <button className="add-to-cart-btn">Add To Cart</button>
                    <button className="add-to-reg-btn">Add To Registry</button>
                    <div>
                        <div className="fullfillment-container mt-3 mb-3">
                            <div className="d-flex flex-row align-items-center"> <i className="fa-solid fa-box me-2"></i>
                                <p className="m-0">Fullfillment Type *</p></div>
                            <div>
                                <input type="radio" name="fullfillment" />
                                <label for="radioButton">Delivery</label>
                            </div>
                            <div>
                                <input type="radio" name="fullfillment" />
                                <label for="radioButton">St Cloud</label>
                            </div>
                            <div>
                                <input type="radio" name="fullfillment" />
                                <label for="radioButton">Little Falls</label>
                            </div>
                        </div>
                    </div>
                    <div className="product-share-icons">
                        <div className="d-flex flex-column align-items-center">
                            <a href="your-facebook-url" className="social-icon">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <small className="pt-1"><b>Share</b></small>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <a href="your-twitter-url" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <small className="pt-1"><b>Suggest</b></small>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <a href="your-pinterest-url" className="social-icon">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <small className="pt-1"><b>Pin it</b></small>
                        </div>
                    </div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Description</Accordion.Header>
                            <Accordion.Body>
                                <p>Change up the look of your BabyZen YoYo+ / Yoyo2 / Yoyo Connect Stroller by adding a pop of brand-new color! Choose from a variety of bright and neutral colors. This package contains the extendable stroller canopy and the stroller seat fabric.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Dimensions & Care</Accordion.Header>
                            <Accordion.Body>
                                <p>Change up the look of your BabyZen YoYo+ / Yoyo2 / Yoyo Connect Stroller by adding a pop of brand-new color! Choose from a variety of bright and neutral colors. This package contains the extendable stroller canopy and the stroller seat fabric.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Shipping & Returns</Accordion.Header>
                            <Accordion.Body>
                                <p>Change up the look of your BabyZen YoYo+ / Yoyo2 / Yoyo Connect Stroller by adding a pop of brand-new color! Choose from a variety of bright and neutral colors. This package contains the extendable stroller canopy and the stroller seat fabric.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Our Safety and Quality Commitment</Accordion.Header>
                            <Accordion.Body>
                                <p>Change up the look of your BabyZen YoYo+ / Yoyo2 / Yoyo Connect Stroller by adding a pop of brand-new color! Choose from a variety of bright and neutral colors. This package contains the extendable stroller canopy and the stroller seat fabric.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="divider-container">
                        <div className="divider-line"></div>
                        <span className="divider-text">Pairs well with</span>
                        <div className="divider-line"></div>
                    </div>
                    <div className="rec-prod-container">
                        {isSmallScreen ? (
                            <Carousel
                                content={recProdMob}
                                isPagination={true}
                                slidesPerView={1}
                                spaceBetween={20}
                                containerStyle={'recommended-prod-card-container'}
                                imgStyle={'recommended-prod-card'}
                                slideStyle={'most-loved-carousel-slide'}
                                textStyle={'most-loved-slide-txt'}
                                isTitled={true} />

                        ) : recProd.map((prod) => (
                            <div className="recommended-prod-card">
                                <a href="/">
                                    <img src="https://babysonbroadway.com/wp-content/uploads/2023/12/Liki_Premium_Storage_Bag_28Feb2019.webp" className="recommened-img-prod-view" />
                                </a>
                                <a href="/">
                                    <p>Doona | Premium Storage Bag</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </Col>

            </Row>
            <div className="space-div"></div>

            {/* Share pop up modal */}
            <Modal show={showModal} onHide={handleClose} centered className="share-modal">
                <Modal.Body className="p-0 pe-3">
                    <div className="pop-modal-close-btn" onClick={handleClose}>&times;</div>
                    <Row>
                        <Col md={6}>
                            <img src={modalImg} alt="Product" className="modal-image" />
                        </Col>
                        <Col md={6} className="p-2">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <small className="font-color-pink">Share with us</small>
                                <Form.Group controlId="formFile">
                                    <Form.Control
                                        type="file"
                                        {...register('file')}
                                        isInvalid={errors.file}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.file?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formTextArea">
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Tell us why you like this product"
                                        {...register('textArea')}
                                        isInvalid={errors.textArea}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.textArea?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        {...register('name')}
                                        isInvalid={errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name?.message}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" className="share-photo-btn" type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default ProductView;