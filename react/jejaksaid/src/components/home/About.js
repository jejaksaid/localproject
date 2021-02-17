import React from 'react'

import { Row, Col } from 'antd';

const items = [
    {
      key: '1',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Front-end Developer',
      content: 'I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.',
    },
    {
      key: '2',
      icon: <i className="fas fa-desktop"></i>,
      title: 'Design & Prototyping',
      content: 'I believe it is important to understand both design and development to achieve a successful user-facing product. By involving a front-end developer at the design & prototyping phase, technical challenges can be solved early, producing a more cohesive product in the most time efficient manner.',
    },
    {
      key: '3',
      icon: <i className="fas fa-desktop"></i>,
      title: 'WordPress Developer',
      content: 'In many projects, my clients require the ability to manage the content of their website. WordPress is the world’s most popular content management system which I have many years of experience with. My focus when using WordPress is on ease of use and maintainability; making sure you can manage your content as simply and quickly as possible.',
    },
  ]

function AppAbout() {
    return (
        <div className='block aboutBlock'>
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About Me</h2>
                    <p>interested in frontend and i can build a simple website in a day</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem excepturi. Minus at commodi accusamus alias vel illum quisquam ipsam natus fugiat omnis amet expedita debitis, modi doloribus, harum excepturi!</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                        <Col span={8} key={item.key}>
                            <div className="content">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                        );
                    })};
                </Row>
            </div>
        </div>
    )
}

export default AppAbout
