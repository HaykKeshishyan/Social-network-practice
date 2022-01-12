import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt="" />
            {props.message} <br />
            <span> Likes </span> {props.likes}
        </div>

    )
}

export default Post;