import React from 'react';

export default class RedditForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {};
        this.state.redditTitle = this.props.reddit.data.title;
    }

    handleChange = event => {
        // Vinicio - this forces a re-render
        this.setState({redditTitle: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleTitleChange(this.props.reddit.data.title, this.state.redditTitle);

    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <input
        name="redditTitle"
        value={this.state.redditTitle}
        onChange={this.handleChange}
        type="text"
        size="100"/>
            <button type="submit"> Update Title </button>
        </form>
        );
    }
}