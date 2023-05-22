import { useContext } from 'react';
import UserContext from "../contexts/UserContext";

const UserProfile = () => {
  const { isOnline, setIsOnline } = useContext(UserContext);
  console.log(isOnline);

  return (
    <div className="UserProfile">
      <div className="text">User is : </div>
      <div className="user-status">{`${isOnline}`}</div>
      <button onClick={() => { setIsOnline(!isOnline)}}>Click here to change the user Status</button>
    </div>
  )
  
}

export default UserProfile;