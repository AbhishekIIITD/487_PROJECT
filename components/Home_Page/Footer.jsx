import Styles from "../../styles/Home.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect } from "react";


const Footer = () => {
    useEffect(()=>{
        const MediaLinks=document.querySelectorAll("#MediaLinks");
        console.log(MediaLinks);
       
        for (let i = 0; i < MediaLinks.length; i++) {
            MediaLinks[i].addEventListener("mouseover",()=>{
                MediaLinks[i].firstElementChild.classList.add("hidden");

            
            })
            MediaLinks[i].addEventListener("mouseout",()=>{
                MediaLinks[i].firstElementChild.classList.remove("hidden");
            })
          }

    },[]);
  return (
    <div className=" flex flex-col text-center justify-center align-middle h-3/5 bg-black container mt-4 pt-4">
      <div className={Styles.socialMediaLinks + " flex flex-row pl-4 justify-center align-middle"}>
        <div className=" bg-white h-12 w-12 text-center rounded-full pt-2 m-2 hover:w-32 " id="MediaLinks">
          <EmailIcon fontSize="large" color="disabled" />
          <h1>Follow</h1>
        </div>
        <div className=" bg-white h-12 w-12 text-center rounded-full pt-2 m-2 hover:w-32" id="MediaLinks">
          <InstagramIcon color="secondary" fontSize="large" />
          <h1 className=" text-center">Follow</h1>
        </div>
        <div className=" bg-white h-12 w-12 text-center rounded-full pt-2 m-2 hover:w-32" id="MediaLinks">
          <FacebookIcon color="primary" fontSize="large" />
          <h1>Follow</h1>
        </div>
        <div className=" bg-white h-12 w-12 text-center rounded-full pt-2 m-2 hover:w-32" id="MediaLinks">
          <TwitterIcon color="primary" fontSize="large" />
          <h1>Follow</h1>
        </div>
      </div>
      <div className=" align-middle text-center text-white pt-4">
        <h1 className=" text-4xl">
            All Brands
        </h1>
        
      </div>
      <div className="flex justify-center align-middle text-center text-white pt-4">
      <h4 className=" w-1/3">
           Founded and operated by xyz ,Location Madan pur khadar New Delhi:110025
           Contact us on our media handles for product related query
        </h4>
      </div>
    </div>
  );
};

export default Footer;
