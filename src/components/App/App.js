import React from 'react';
import '../../App.css';
import superagent from 'superagent';
import RedditItem from '../RedditItem/RedditItem';


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
        const REDDIT_API = 'https://www.reddit.com/r/cats.json?limit=10';

        return superagent.get(REDDIT_API)
            .then(response => {
                console.log(response.body.data.children)
                this.setState({
                    reddit: response.body.data.children
                });
            })
            .catch(console.error);
    };

    render() {
        return(
            <main>
            <ul>
            {
                this.state.reddit.map((current, index) =>
                    <RedditItem
                        reddit = {current}
                    />
                )
            }
            </ul>
            </main>
        )
    }


}