import React from 'react'
import { } from "react-icons/bs";
import DropdownMenu from './Components/DropdownMenu';
import FullScreenToggle from './Components/FullScreenToggle';
import MainPage from './Components/MainPage'
import Content from './Components/Content';
import Prince from './Components/Prince';
import TodoList from './TodoList';
import '../src/assets/css/style.css'
import './amit.css'
import '../src/assets/css/icon-list.css'
import Img2 from './assets/img/users/img-1.png'
import TopHeader from './Components/TopHeader';


const imgStyle = {
  width: '40px',
  height: '30px',
};
const divStyle = {

};
const Employee = () => {
  return (
    <>
      <div>
          

          <TopHeader />
          <Prince />
        {/* End Main Header*/}
        {/* Sidemenu */}


        {/* End Sidemenu */}
        {/* Main Content*/}
        <Content />
        {/* End Main Content*/}
        {/* Main Footer*/}
        
        </div>
        {/*End Footer*/}


    </>
  )
}

export default Employee