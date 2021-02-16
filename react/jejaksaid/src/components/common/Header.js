import React from 'react';
import { Menu } from 'antd';

function AppHeader() {
    return (
        <div className='container-fluid'>
            <div className='header'>
                <div className="logo" > 
                    <i className="fas fa-bolt"></i>
                    <a href="https://jejaksaid.github.io/">JejakSaid</a>
                </div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">Home</Menu.Item>
                        <Menu.Item key="portfolio">Portfolio</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="testimonials">Testimonials</Menu.Item>
                        <Menu.Item key="articles">Articles</Menu.Item>
                    </Menu>
                </div>
        </div>
    );
}

export default AppHeader;
