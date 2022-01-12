import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, useThemeProps } from '@mui/material';


const Dialogs = (props) => {
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />);
    let dialogsElement = props.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);

    let newMessageElement = React.useRef(null);

    let newMessage = () => {
        let action = {type: 'ADD-MESSAGE'}
        props.dispatchDialogs(action);
    }

    let clearMessage = () => {
        let action = {type: 'CLEAR-MESSAGE-TEXT'}
        props.dispatchDialogs(action);
    }

    let onMessageChange = () => {
        let msg = newMessageElement.current.value;
        let action = {type: 'UPTADE-MESSAGE-TEXT', newMsg: msg}
        props.dispatchDialogs(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <br />
            </div>
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
                        inputRef={newMessageElement}
                        onChange={onMessageChange}
                        value={props.newMsgText}
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                    /> <br />
                    <Button variant="contained" color="success" onClick={newMessage}>Send Message</Button>
                    <Button variant="contained" color="error" onClick={clearMessage}>Clear</Button>
                </div>
            </Box>
        </div>
    )
}

export default Dialogs;