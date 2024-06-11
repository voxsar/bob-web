import { Row, Col } from 'react-bootstrap'
import FlipCard from '../../common/components/FlipCard';
import { TRIMESTER_IMAGES } from '../../assets/assets';

const TrimesterData = [
    {
        title: 'First Trimester',
        image: TRIMESTER_IMAGES.tri1,
        list: [
            "Prenatal Vitamins",
            "Comfortable Clothing",
            "Skincare Products",
            "Books on Early Pregnancy"
        ]
    },
    {
        title: 'Second Trimester',
        image: TRIMESTER_IMAGES.tri2,
        list: [
            "Maternity Wear",
            "Body Pillows",
            "Stretch Mark Prevention",
            "Nursery Furniture"
        ]
    },
    {
        title: 'Third Trimester',
        image: TRIMESTER_IMAGES.tri3,
        list: [
            "Baby Gear",
            "Hospital Bag Essentials",
            "Breast Pump",
            "Breastfeeding Supplies",
            "Formula & Supplies",
            "Relaxation Tools"
        ]
    },
    {
        title: 'Postpartum',
        image: TRIMESTER_IMAGES.tri4,
        list: [
            "Breast Pumps",
            "Postnatal Care Items",
            "Baby Care Essentials",
            "Feeding Supplies"
        ]
    },
    {
        title: 'First Year Essentials',
        image: TRIMESTER_IMAGES.tri5,
        list: [
            "Baby Clothing",
            "Baby Accessories",
            "Feeding Solutions",
            "Developmental Toys",
            "Safety Gear"
        ]
    }
]

const ShopSection = ({ isSmallScreen }) => {
    return (
        <div className='shop-trimester-container'>
            <h2>Shop By Trimester</h2>
            <p className='section-description'>Explore carefully selected items tailored for each stage of your journey - from pregnancy to baby's first year. Click to find essentials perfect for you and your little one.</p>
            <Row className='flip-card-row'>
                {TrimesterData.map((data, i) => (
                    <Col key={i} className='flip-card-col'>
                        <FlipCard key={i} title={data.title} list={data.list} cardImg={data.image} isSmallScreen={isSmallScreen} />
                    </Col>
                ))}

            </Row>
        </div>
    );
}

export default ShopSection;