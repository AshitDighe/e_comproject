import React, { useEffect } from 'react';
import './styles.scss';
import userIMG from './../../assets/user.png';
import { useSelector } from 'react-redux';

const UserProfile = (props:any) => {
  // let { currentUser } = useSelector(mapState);
    const { currentUser } = props;
  //  const { currentUser } = useSelector((state:any)=>state.user.currentUser);
  let { displayName} = currentUser;
  
  // useEffect(() => {
  //   const mapState = ( state:any) => ({
  //     currentUser:state.user.currentUser,
  //   });
  //  let { displayName} = currentUser;

  // }, []);
   console.log("userprofile",displayName)
  return (
    <div className="userProfile"> 
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt="src"/>
          </div>
        </li>
        <li>
           <div className="displayName"> 
            {displayName && displayName} 
           
          </div> 
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;