import { Row, Col } from 'react-bootstrap'
import FlipCard from '../../common/components/FlipCard';

const TrimesterData = [
    {
        title: 'First Trimester',
        image: "https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2023/12/Untitled-design.png",
        list: [
            "Prenatal Vitamins",
            "Comfortable Clothing",
            "Skincare Products",
            "Books on Early Pregnancy"
        ]
    },
    {
        title: 'Second Trimester',
        image: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2024/03/Untitled-design-1.png.webp' ,
        list: [
            "Maternity Wear",
            "Body Pillows",
            "Stretch Mark Prevention",
            "Nursery Furniture"
        ]
    },
    {
        title: 'Third Trimester',
        image: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2023/12/Untitled-design-2.png',
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
        image: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2023/12/Untitled-design-4.png',
        list: [
            "Breast Pumps",
            "Postnatal Care Items",
            "Baby Care Essentials",
            "Feeding Supplies"
        ]
    },
    {
        title: 'First Year Essentials',
        image: 'https://bobshop-eeebddebdpcubfbv.z03.azurefd.net/wp-content/uploads/2023/12/Untitled-design-3.png',
        list: [
            "Baby Clothing",
            "Baby Accessories",
            "Feeding Solutions",
            "Developmental Toys",
            "Safety Gear"
        ]
    }
]

const ShopSection = () => {
    return (
        <div className='shop-trimester-container'>
            <h2>Shop By Trimester</h2>
            <p className='section-description'>Explore carefully selected items tailored for each stage of your journey - from pregnancy to baby's first year. Click to find essentials perfect for you and your little one.</p>
            <Row>
                {TrimesterData.map((data) => (
                   <Col>
                    <FlipCard title={data.title} list={data.list} cardImg={data.image} />
                   </Col>
                ))}

            </Row>
        </div>
    );
}

export default ShopSection;