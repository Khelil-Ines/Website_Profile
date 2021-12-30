import React from 'react'
import '../style.css'
const Profile = (props) => {
    const {fullName, 
        bio, 
        children, 
        handleName, 
        profession} =props;
     return (
        <div>
            <p className='p'> {bio} {profession}
            </p>
                {children}
                <br />
                <button onClick={()=>handleName(fullName)}>
                    Click Me
                </button>
                
        </div>
    )
}
 export default Profile;