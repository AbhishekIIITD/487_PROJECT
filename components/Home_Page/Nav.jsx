import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton,Badge } from "@mui/material";
import styles from "../../styles/Home.module.css";
const Nav = () => {
  function collapseDirNav(){
    const dirNavCollapseBtn=document.getElementById("collapseDirNav");
    const dirNav=document.querySelector("#dirNav");
    console.log(dirNav);
    dirNav.classList.toggle(styles.inactive);
    dirNavCollapseBtn.classList.toggle("rotate-180");
    
  }
  return (
    <>
      <ExpandCircleDownIcon onClick={collapseDirNav} className={styles.sidebarIcon} color="primary" id="collapseDirNav"/>
      <div className={" flex flex-row justify-evenly bg-white text-black h-16 pt-4"}>
        <ul className=" flex flex-row w-full justify-around">
          <li className="flex flex-row pr-10">
            <HomeSharpIcon />
            <h3 className=" flex">Home</h3>
          </li>
          <li className="flex flex-row pr-10">
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <h3 className=" flex ">Cart</h3>
          </li>
          <li className="flex flex-row pr-10">
            <AccountBoxIcon color="primary" />
            <h3 className=" flex">SignIn</h3>
          </li>
        </ul>
      </div>
      <div className={styles.main+" flex flex-row justify-evenly bg-white text-black h-16 pt-4 "} id="dirNav">
        <ul className=" flex flex-row w-full justify-around">
          <li className="flex flex-row pr-10">
           
            <h3 className=" flex">Women's</h3>
            <ArrowDropDownIcon />
          </li>
          <li className="flex flex-row pr-10">
           
            <h3 className=" flex">Men's</h3>
            <ArrowDropDownIcon />
          </li>
          <li className="flex flex-row pr-10">
           
            <h3 className=" flex">Kid's</h3>
            <ArrowDropDownIcon />
          </li>
          <li className="flex flex-row pr-10">
           
            <h3 className=" flex">Utensils</h3>
            <ArrowDropDownIcon />
          </li>
          <li className="flex flex-row pr-10">
           
            <h3 className=" flex">Electronics</h3>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
