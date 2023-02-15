import React from 'react';
import Button from './Button';


const list = ["All", "Live", "Gaming", "Songs", "Soccer", "Cricket", "Cooking", "Valenties", "Nees", "Tennis", "Sports"];
const ButtonList = () => {
  return (

  <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="Valentines" />
      <Button name="News" />
      <Button name="Tennis" />
      <Button name="Sports" />
    
  </div>
  );
  
};

export default ButtonList;
