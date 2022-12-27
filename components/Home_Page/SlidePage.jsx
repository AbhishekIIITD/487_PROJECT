import { Grid } from "@mui/material";
import Styles from "../../styles/Home.module.css";

const SlidePage = () => {
  return (
    <div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="/Slide11.jpg" className=" w-100" alt="not loading" />
          </div>
          <div className="carousel-item">
            <img src="/Slide12.jpg" className=" w-100" alt="not loading" />
          </div>
          <div className="carousel-item">
            <img src="/Slide13.jpg" className=" w-100" alt="not loading"/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
};


export default SlidePage;