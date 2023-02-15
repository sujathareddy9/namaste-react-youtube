import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
  <div className="p-5 shadow-lg w-48">
    <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>Home</li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">WatchLater</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
  </div>
  );
};

export default Sidebar;
