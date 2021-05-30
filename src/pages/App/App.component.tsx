import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from './App.style';
import Routes from './Routes.component';

const App = () => (
    <>
        <GlobalStyle />
        <Helmet
            titleTemplate='CTS - %s'
            defaultTitle='CTS'
        >
            <meta name='description' content='CMS for Aasaanjobs' />
        </Helmet>
        <Routes />
    </>
);

export default App;