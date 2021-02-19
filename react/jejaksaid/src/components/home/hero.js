import React from 'react';
// import { Button } from 'antd';

// import { Carousel } from 'antd';

// const items = [
//   {
//     key: '1',
//     title: 'Front-end Developer',
//     content: 'Responsive websites built for an optimal user experience that achieves your business goals.',
//   },
//   {
//     key: '2',
//     title: 'Performence & accessibility ',
//     content: 'Make your website fast, easy to find, and reach the widest audience possible.',
//   },
//   {
//     key: '3',
//     title: 'WordPress websites',
//     content: 'Manage your website using the web\'s most popular content management system.',
//   },
// ]
import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';


import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppHero() {
  return (
    <div id ='hero'className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Successfull Front-end Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos ut cupiditate, corporis veniam praesentium cum temporibus dolores quaerat, atque deserunt consequuntur cumque rerum dolore tempora. Accusamus est architecto hic.</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>

    // <div id="hero" className="heroBlock">
    //   <Carousel>
    //     {items.map(item => {
    //       return (
    //         <div key={item.key} className="container-fluid">
    //           <div className="content">
    //             <h3>{item.title}</h3>
    //             <p>{item.content}</p>
    //             <div className="btnHolder">
    //               <Button type="primary" size="large">Learn More</Button>
    //               <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
    //             </div>
    //           </div>
    //         </div>  
    //       );
    //     })}
    //   </Carousel>
    // </div>
  );
}

export default AppHero;