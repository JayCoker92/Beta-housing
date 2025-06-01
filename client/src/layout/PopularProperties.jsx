import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const PopularProperties = () => {
  return (
    <>
      <main>
        <div className="realive text-center font-outfit h-10  mb-2  text-3xl leading-tight  my-30">
          <h6>Discover Our Popular Properties</h6>
        </div>

        <div className="carousel gap-4 my-40 ml-28 mt-5 rounded-box">
          {/* <div className="carousel-item ">
    <img
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage10_gy4koe.png"
      alt="Burger" />
  </div> */}

          <div className="relative w-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage10_gy4koe.png"
              alt="Burger"
            />

            <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white p-4 space-y-1">
              <h3 className="text-lg font-semibold">Semi Detached Duplex</h3>
              <p className="text-xl font-bold">₦1, 430,000,000</p>
              <p className="text-sm">6 Bed | 3 Bath | 720 sq ft</p>
              <p className="text-sm flex items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>{" "}
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          <div className="relative w-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage11_bnuu5s.png"
              alt="Burger"
            />

            <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white p-4 space-y-1">
              <h3 className="text-lg font-semibold">Special Duplex</h3>
              <p className="text-xl font-bold">₦670,000,000</p>
              <p className="text-sm">6 Bed | 3 Bath | 720 sq ft</p>
              <p className="text-sm flex items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>{" "}
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          <div className="relative w-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimage12_pvtnmy.png"
              alt="Burger"
            />
            <div className="absolute bottom-0 left-0 w-full  shadow-lg bg-opacity-50 text-white p-4 space-y-1">
              <h3 className="text-lg font-semibold">Split-Level House</h3>
              <p className="text-xl font-bold">₦340,000,000</p>
              <p className="text-sm">6 Bed | 3 Bath | 720 sq ft</p>
              <p className="text-sm flex items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>{" "}
                Victoria Island, Lagos
              </p>
            </div>
          </div>

          <div className="relative w-72 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimge13_npzur6.png"
              alt="Burger"
            />

            <div className="absolute bottom-0 left-0 w-full  bg-opacity-50 text-white p-4 space-y-1">
              <h3 className="text-lg font-semibold">Twin Duplex</h3>
              <p className="text-xl font-bold">₦290,000,000</p>
              <p className="text-sm">6 Bed | 3 Bath | 720 sq ft</p>
              <p className="text-sm flex items-center gap-1">
                <span>
                  <FaLocationDot />
                </span>{" "}
                Victoria Island, Lagos
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PopularProperties;
