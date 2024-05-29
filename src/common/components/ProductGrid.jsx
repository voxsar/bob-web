import React from 'react';
import { Container, Row, Col, Card, div } from 'react-bootstrap';
import './styles/ProductGrid.css'

const ProductGrid = ({ products }) => {
  return (
    <div className='mt-5'>
      <div className='d-flex flex-row align-items-center justify-content-between mb-2' style={{ padding: '0px 70px' }}>
        <div></div>
        <h2 className='ps-5 pb-5'>You May Also Like</h2>
        <a href='/' className='shop-all-btn'>
          Shop All
        </a>
      </div>

      <div className='product-grid-container'>
        <Row>
          <Col lg={3}>
            <Card className='mb-5'>
              <Card.Img variant="top" src={products[0]?.image} />
              <Card.Body>
                <Row className='align-items-center'>
                  <Col lg={7}>
                    <Card.Title><a href='/'>{products[0]?.name}</a></Card.Title>
                  </Col>
                  <Col lg={5}>
                    <div className='product-price'><a href='/'>${products[0]?.price.toFixed(2)}</a></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={products[1]?.image} />
              <Card.Body>
                <Row className='align-items-center'>
                  <Col lg={7}>
                    <Card.Title><a href='/'>{products[1]?.name}</a></Card.Title>
                  </Col>
                  <Col lg={5}>
                    <div className='product-price'><a href='/'>${products[1]?.price.toFixed(2)}</a></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card className='product-middle-card'>
              <Card.Img variant="top" src={products[2]?.image} />
              <Card.Body>
                <Row className='align-items-center justify-content-center'>
                  <Col lg={6}>
                    <Card.Title><a href='/'>{products[2]?.name}</a></Card.Title>
                  </Col>
                  <Col lg={6}>
                    <div className='product-price'><a href='/'>${products[2]?.price.toFixed(2)}</a></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3}>
            <Card className='mb-5'>
              <Card.Img variant="top" src={products[3]?.image} />
              <Card.Body>
                <Row className='align-items-center'>
                  <Col lg={7}>
                    <Card.Title><a href='/'>{products[3]?.name}</a></Card.Title>
                  </Col>
                  <Col lg={5}>
                    <div className='product-price'><a href='/'>${products[3]?.price.toFixed(2)}</a></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={products[4]?.image} />
              <Card.Body>
                <Row className='align-items-center'>
                  <Col lg={7}>
                    <Card.Title><a href='/'>{products[4]?.name}</a></Card.Title>
                  </Col>
                  <Col lg={5}>
                    <div className='product-price'><a href='/'>${products[4]?.price.toFixed(2)}</a></div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductGrid;