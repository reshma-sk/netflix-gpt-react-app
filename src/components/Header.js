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
    //Unsubscribe when my component unmounts
    return ()=>unsubscribe();
  }, []);

  const handleGptSearchClick = ()=>{
    //toggle
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NETFLIX_LOGO}
        alt="Logo"
      />
      {user && (
        <div className="my-3 flex justify-between">
          {
            showGptSearch &&(
              <select className="bg-gray-800 text-white m-4 px-2 py-1" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>
            )
          }
          <button className="bg-purple-800 text-white mx-2 m-4 px-3 rounded-md py-1"
          onClick={handleGptSearchClick}>
            {showGptSearch ? 'Home Page' : 'GPT SEARCH'}
          </button>
          
          <button
            className="bg-red-700 text-white font-bold px-3 -py-1 rounded-md m-4"
            onClick={handleSignOut}
          >
            sign out
          </button>
          {/*<h3 className="text-white rounded-full px-4 text-2xl m-4 font-bold bg-purple-500 text-center">{user.displayName.slice(0,1)}</h3>*/}
        </div>
      )}
    </div>
  );
};

export default Header;
