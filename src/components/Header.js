import React ,{useEffect}from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import {addUser, removeUser} from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=>unsubscribe();
  }, []);

  const handleGptSearchClick = ()=>{
    //Toggle Gpt search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={NETFLIX_LOGO}
        alt="Logo"
      />
      {user && (
        <div className="my-3 flex">
          {showGptSearch &&
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang=>{
              return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            })}
          </select>
          }
          
          <h4>{user.displayName}</h4>
          <button 
          className="px-4 py-1 mx-2  
          rounded-md my-2 bg-purple-600 
          text-white" onClick={handleGptSearchClick}> {showGptSearch  ? "Home Page" : "GPT search"}
          </button>
          <button
            className="bg-red-700 text-white font-semibold px-1"
            onClick={handleSignOut}
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
