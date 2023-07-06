import React from "react";
import Avatar from "../component/Avatar";


const Profile = () => {
    return (
        <>
            <Avatar imgSrc="https://i.imgur.com/iEBQ4KA.jpeg" imgWidth="450px" imgMeta={{ imgName: 'sample', imgID: 4 }}
            />
            <Avatar imgSrc="https://i.imgur.com/iEBQ4KA.jpeg" imgWidth="450px" imgMeta={{ imgName: 'sample', imgID: 4 }}
            />
            <Avatar imgSrc="https://i.imgur.com/pXraIqz.jpeg" imgWidth="450px" imgMeta={{ imgName: 'sample', imgID: 4 }}
            />

        </>
    );
}
export default Profile;