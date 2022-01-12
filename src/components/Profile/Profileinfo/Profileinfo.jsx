import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <main>
            <div>
                <img className={s.cilicia} src="https://igma.am/uploads/images/img_1920x_6082c74b31991.jpg" />
            </div>
            <div>
                ava + description
            </div>
        </main>
    )
}

export default ProfileInfo;