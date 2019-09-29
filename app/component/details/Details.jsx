import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class Index extends React.Component {
    render() {
        return (
            <div className="cont">
                <Header/>
                <div className="detai">
                    这是详情页
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Index;