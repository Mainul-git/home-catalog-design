import React from 'react';
import CardHome from '../CardHome/CardHome';
import Footer from '../Footer/Footer';
import FooterLast from '../FooterLast/FooterLast';
import Header from '../Header/Header';
import Grid from './Grid/Grid';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Grid></Grid>
            <CardHome></CardHome>
            <Footer></Footer>
            <FooterLast></FooterLast>
        </div>
    );
};

export default Home;