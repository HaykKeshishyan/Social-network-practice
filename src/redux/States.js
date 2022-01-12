let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'Hi there', likesCount: 15 },
                { id: 2, post: 'It is my first post', likesCount: 20 },
                { id: 3, post: 'Yo', likesCount: 10 },
                { id: 4, post: 'Barev', likesCount: 7 }
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogData: [
                { id: 1, name: 'Zara' },
                { id: 2, name: 'Hayk' },
                { id: 3, name: 'Aram' },
                { id: 4, name: 'Lilit' },
                { id: 5, name: 'Vahan' },
                { id: 6, name: 'Zare' }
            ],
            messagesData: [
                { id: 1, message: 'Hello' },
                { id: 2, message: 'What is your Name?' },
                { id: 3, message: 'My name is John Smith' },
            ],
            newMsgText: '',
        },
    },
    getState() {
        return this._state;
    },
    _reRenderEntire() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._reRenderEntire = observer;
    },

    dispatchProfile(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._reRenderEntire(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._reRenderEntire(this._state);
        } else if (action.type === 'CLEAR-POST-TEXT'){
            this._state.profilePage.newPostText = '';
            this._reRenderEntire(this._state);
        }
    },
    dispatchDialogs(action) {
        if(action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMsgText,
            };
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMsgText = '';
            this._reRenderEntire(this._state);
        } else if(action.type === 'UPTADE-MESSAGE-TEXT') {
            this._state.messagesPage.newMsgText = action.newMsg;
            this._reRenderEntire(this._state);
        } else if(action.type === 'CLEAR-MESSAGE-TEXT'){
            this._state.messagesPage.newMsgText = '';
            this._reRenderEntire(this._state);
        }
    },
};

export default store;