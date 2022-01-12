import React from "react";
import s from './Profile.module.css';
import Myposts from "./My Posts/Myposts";
import ProfileInfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {

    return (
        <main>
            <ProfileInfo />
            <Myposts postData={props.profilePage.postData} 
                     dispatchProfile={props.dispatchProfile}
                     newPostText={props.profilePage.newPostText} />
        </main>
    )
}

export default Profile;