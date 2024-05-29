import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShopAll = () => {
    return (
            <Container className='shop-category-container'>
            <a href='/' className='shop-all-btn'>
                Shop All
            </a>
                <Row>
                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="/">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/Masimo-Stork-baby-monitor.png.webp' alt='' />
                            <h4>Baby Health $ Safety</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/Boon-Naked-Collapsible-Bathtub-Grey.png.webp' alt='' />
                            <h4>Bath & Potty</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/elvie-stride-breast-pump-1.png.webp' alt='' />
                            <h4>Breastfeeding</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/gunamuna-clothing.png' alt='' />
                            <h4>Clothing & Accessories</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/CYBEX-footmuff.png.webp' alt='' />
                            <h4>Gear</h4>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/tiny-human-nipple-crack.png.webp' alt='' />
                            <h4>HSA/FSA Approved Items</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/hatch-botanical-belly-oil.png.webp' alt='' />
                            <h4>Maternity & Postpartum</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/bugaboo-giraffe-chair.png.webp' alt='' />
                            <h4>Meal Time</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/silva-serena-nursery-furniture.png' alt='' />
                            <h4>Nursery Furniture & Sleep</h4>
                        </a>
                    </Col>

                    <Col style={{ maxWidth: 'fit-content'}}>
                        <a className='shop-category' href="#">
                            <img width="260" height="390" className='shop-category-img' src='https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/04/Tiny-Love-Boho-Chic-Luxe-Gymini.png' alt='' />
                            <h4>Toys & Play</h4>
                        </a>
                    </Col>
                </Row>
            </Container>
    );
}

export default ShopAll;