import React, { useState } from "react";
import Carousel from "./Carousel";
import styles from "../styles/MainSegment.module.css";

const MainSegment = () => {
  const [active, setActive] = useState(0);
  const [content, setContent] = useState("d");
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (index) => {
    setActive(index);
  };

  const handleContentChange = (content) => {
    setContent(content);
  };

  return (
    <div className=" bg-[rgb(246,230,217)]">
      <div className=" justify-center text-center border-b-2 border-black bg-[rgb(246,230,217)]">
        {" "}
        HI! WE &lt;3 FOR VISITING OUR SITE
      </div>
      <div className=" flex flex-col md:flex-row md:h-screen">
        <div className=" md:w-1/2 h-full sticky ">
          <Carousel
            className="w-full"
            items={[
              "/graza.jpg",
              "/graza1.jpg",
              "/graza2.jpg",
              "/graza3.jpg",
              "/graza4.jpg",
              "/graza6.jpg",
            ]}
          />
        </div>

        <div className=" flex flex-col h-full md:w-1/2 items-center pt-16 text-center overflow-y-auto ">
          <div className="text-center">
            <h2 className="relative flex flex-col justify-center items-center w-fit mx-auto">
              <p className="h3 text-5xl leading-relaxed">
                “Drizzle” &amp; “Sizzle”
              </p>
              <p className="h3 text-5xl border-b border-solid border-black w-fit mt-custom">
                {" "}
                Extra Virgin Olive Oil{" "}
              </p>
            </h2>
          </div>
          <div>
            <div className="flex flex-row align-middle justify-center">
              {[1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  className={`text-2xl focus:outline-none ${
                    index <= 5 ? "text-black-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            1573 reviews
          </div>

          <div className=" flex flex-col justify-evenly w-3/4 pl-4 pr-4 border-2 border-black  rounded-2xl bg-[rgb(255,244,236)]">
            <h1 className=" mb-2 mt-2">Quantity</h1>
            <div className=" flex flex-row w-full mt-2 mb-2 justify-evenly ">
              <div
                className={`flex flex-col p-4  border-2 border-black rounded-2xl ${
                  active == 0 ? "bg-green-500" : "bg-white"
                } `}
                onClick={() => handleChange(0)}
              >
                <h1 className=" text-lg font-bold">1</h1>
                <h1 className=" pb-2 font-bold">SET</h1>
                <h6>10% off</h6>
              </div>

              <div
                className={`flex flex-col p-3  border-2 border-black rounded-2xl ${
                  active == 1 ? "bg-green-500" : "bg-white"
                } `}
                onClick={() => {
                  handleChange(1);
                }}
              >
                <h1 className=" text-lg font-bold">2</h1>
                <h1 className=" pb-2 font-bold">SET</h1>
                <h6 className=" text-xs">Free shipping !</h6>
                <h6 className=" text-xs">+14% off</h6>
              </div>

              <div
                className={`flex flex-col p-3  border-2 border-black rounded-2xl ${
                  active == 2 ? "bg-green-500" : "bg-white"
                } `}
                onClick={() => {
                  handleChange(2);
                }}
              >
                <h1 className=" text-lg font-bold">3</h1>
                <h1 className=" pb-2 font-bold">SET</h1>
                <h6 className=" text-xs">Free shipping !</h6>
                <h6 className=" text-xs">+10% off</h6>
              </div>

              <div
                className={`flex flex-col p-3  border-2 border-black rounded-2xl ${
                  active == 3 ? "bg-green-500" : "bg-white"
                } `}
                onClick={() => handleChange(3)}
              >
                <h1 className=" text-lg font-bold">4</h1>
                <h1 className=" pb-2 font-bold">SET</h1>
                <h6 className=" text-xs">Free shipping !</h6>
                <h6 className=" text-xs">+10% off</h6>
              </div>
            </div>
            <div className="flex flex-row p-1 border-t border-b mt-1 mb-1 border-dotted border-black leading-relaxed pt-2 pb-2">
              <input
                type="radio"
                name={"OneTime"}
                value={0}
                className={styles.radio + " mr-3"}
              />
              <div className=" text-xl">ONE TIME PURCHASE</div>
            </div>

            <div className="flex flex-col text-left text-xl  pl-9 border-b mt-1 mb-1 border-dotted border-black leading-relaxed pt-2 pb-2">
              <div className=" w-full">SUBSCIRBE AND SAVE</div>
              <div className=" bg-transparent w-full">
                <select className=" w-full bg-transparent rounded-md border-2 border-black" value={selectedOption} onChange={handleChange}>
                  <option className=" bg-white" value="">Frequency : Every month</option>
                  <option className=" bg-white" value="option1">Frequency : Every day</option>
                  <option className=" bg-white" value="option2">Frequency : Every week</option>
                </select>
              </div>
            </div>

            <div>
              <button className=" w-full p-1 rounded-2xl mt-2 mb-2 text-center bg-green-500">
                SUBSCIRBE 30$
              </button>
            </div>
            <div className=" mb-2"> Skip or Cancel Anytime</div>
          </div>
          <div className=" rounded-2xl mt-4 w-3/4 p-3 border-2 border-black">
            Buying multiple gifts? Send to multiple addresses here.
          </div>
          <div className=" flex flex-row mt-2 w-3/5">
            <button
              className=" rounded-t-md w-1/3 p-1 border-2 border-black"
              onClick={() => {
                handleContentChange("d");
              }}
            >
              DESCRIPTION
            </button>
            <button
              className=" rounded-t-md w-1/3 p-1 border-2 border-black"
              onClick={() => {
                handleContentChange("h");
              }}
            >
              HARVEST
            </button>
            <button
              className=" rounded-t-md w-1/3 p-1 border-2 border-black"
              onClick={() => {
                handleContentChange("u");
              }}
            >
              USE CASES
            </button>
          </div>
          <div className=" w-3/5 text-justify border-black border-1 rounded-b-lg p-2">
            {content == "d" && (
              <div>
                <h1>DRIZZLE</h1>
                <p>
                  A little Drizzle goes a long way! Use it on and around things
                  like ice cream, pesto, popcorn, salads, sandwiches or even
                  directly on your tongue (we won’t tell).
                </p>
                <h1>SIZZLE</h1>
                <p>
                  If you would put it in or on top of an oven, use sizzle.
                  Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even
                  Chocolate Chip Cookies! You name it, Sizzle sizzles it.
                </p>
              </div>
            )}
            {content == "h" && (
              <div>
                <h1>DRIZZLE</h1>
                <p>
                  Harvested in October, before the olives have ripened fully.
                  Picked by hand because young olives need a firm yank to loosen
                  up.
                </p>
                <h1>SIZZLE</h1>
                <p>
                  Harvested in November and December, when the olives are more
                  mature. They’re pretty laid back by this point, so it only
                  takes a few shakes to get them off the branch.
                </p>
              </div>
            )}
            {content == "u" && (
              <div>
                <h1>DRIZZLE</h1>
                <p>
                  A little Drizzle goes a long way! Use it on and around things
                  like ice cream, pesto, popcorn, salads, sandwiches or even
                  directly on your tongue (we won’t tell).
                </p>
                <h1>SIZZLE</h1>
                <p>
                  If you would put it in or on top of an oven, use sizzle.
                  Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even
                  Chocolate Chip Cookies! You name it, Sizzle sizzles it.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSegment;
