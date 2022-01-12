import React from "react";
import s from './Myposts.module.css';
import Post from "./New posts/Post";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

const Myposts = (props) => {
    const postsElement =
        props.postData.map(p => <Post message={p.post} likes={p.likesCount} />);


    let newPostElement = React.useRef(null);

    let addPost = () => {
        let action = {type: 'ADD-POST'};
        props.dispatchProfile(action);
    }

    let clearPost = () => {
        let action = {type: 'CLEAR-POST-TEXT'};
        props.dispatchProfile(action);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        props.dispatchProfile(action);
    }

    return (
        <div>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            inputRef={newPostElement}
                            onChange={onPostChange}
                            value={props.newPostText}
                            id="outlined-multiline-static"
                            label="New Post"
                            multiline
                            rows={4}
                        />
                    </div>
                </Box><br />
                <Button variant="contained" color="success" onClick={addPost}>Add Post</Button>
                <Button variant="contained" color="error" onClick={clearPost}>Clear</Button>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default Myposts;