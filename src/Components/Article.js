/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

function Article(props) {
  let base_url = 'https://reddit.com';

  return (
    <article>
      <a href={ base_url + props.article.permalink } target="_blank">
        <h3>{ props.article.title }</h3>
      </a>
    </article>
  )
}

export default Article;
