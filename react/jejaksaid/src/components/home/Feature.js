import React from 'react';

import image1 from '../../assets/images/modern-design.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';
import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
    return (
        <div className='block featureBlock'>
            <div className="container-fluid">
            <Row gutter={[16, 16]}>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Modern Design" src={image1} />}
                    >
                    <Meta title="Modern Design" />
                    </Card> 
                </Col>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Cleam Design" src={image2} />}
                    >
                    <Meta title="Clean Design" />
                    </Card> 
                </Col>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Great Support" src={image3} />}
                    >
                    <Meta title="Great Support" />
                    </Card> 
                </Col>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Easy Customize " src={image4} />}
                    >
                    <Meta title="Easy Customize " />
                    </Card> 
                </Col>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Unlimited Features" src={image5} />}
                    >
                    <Meta title="Unlimited Features" />
                    </Card> 
                </Col>
                <Col span={8}> 
                    <Card
                        hoverable
                        cover={<img alt="Advanced Options" src={image6} />}
                    >
                    <Meta title="Advanced Options" />
                    </Card> 
                </Col>
            </Row>
            </div>

        </div>
    )
}

export default AppFeature
