import React from 'react';
import Header from './Header';
import './App.css';
import cowsay from 'cowsay-browser';
import faker from 'faker';

export default class App extends React.Component {
    constructor(props) {// props sorta like html attributes
        super(props); // super is React.component constructor
        this.state = {};
        this.state.reddit = [];
    }

    async componentDidMount(){
        // Vinicio - making this an async function since I'll await a function
        await this.loadRedditList();
    }

    loadRedditList = async  () => {
        const REDDIT_API = 'https://www.reddit.com/r/cats.json?limit=50';

        return superagent.get(REDDIT_API)
            .then(response => {
                this.setState({
                    reddit: response.body.results
                });
            })
            .catch(console.error);
    };



















}