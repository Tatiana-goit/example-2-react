import React from 'react'

export default function PostItem(props) {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
          <button> DELETE</button>
        </div>
      </div>
    </div>
  )
}
