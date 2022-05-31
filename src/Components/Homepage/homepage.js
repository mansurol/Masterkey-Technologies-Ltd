import React from 'react';
import Header from '../Header/header'
import Navs from '../Navs/navs'
import Artwork from '../Artwork/Artwork'
import Contacts from '../Contacts/Contacts';
import OnlineMarket from '../OnlineMarket/OnlineMarket';
import AdFullSection from '../AdFullSection/AdFullSection'
import Footer from '../Footer/Footer'
import SliderSection from '../SliderSection/SliderSection';
const homepage = () => {
    return (
        <div>
            <Header/>
            <Navs/>
            <Artwork/>
            <Contacts/>
            <AdFullSection/>
            <OnlineMarket/>
            <SliderSection/>
            <Footer/>
        </div>
    );
};

export default homepage;