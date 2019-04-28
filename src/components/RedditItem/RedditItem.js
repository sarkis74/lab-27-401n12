import React from 'react';
import RedditForm from '../RedditForm/RedditForm';

export default class RedditItem extends React.Component {
    render() {
        const { reddit } = this.props;
        return(
            <li>
            <p>
            <a href={ reddit.data.url }> { reddit.data.title } </a>
            <p></p>
        {
            reddit.data.thumbnail ? <img src={ reddit.data.thumbnail }/> : undefined
        }
            </p>
        <RedditForm
        reddit = {reddit}
        handleTitleChange = {this.props.handleTitleChange}
            />
            </li>
        )
    }

}