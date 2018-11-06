import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost"
import App from './App';
import Feedback from './components/feedback/feedback'
import About from './components/about/about'
import Navbar from './components/nav/navbar'
import Footer from './components/footer/footer'
import Search from './components/search/search'
import './App.css';
import SearchActivity from './components/randomize-activity/searchactivity';

const client = new ApolloClient({
    uri: "http://localhost:4000/request"
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <div>
                <Navbar />
                <Switch>

                    <Route exact path='/' component={App} />
                    <Route path='/feedback' component={Feedback} />
                    <Route path='/about' component={About} />
                    <Route path='/search' component={Search} />
                    <Route path='/searchactivity' component={SearchActivity} />

                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById('root'));


