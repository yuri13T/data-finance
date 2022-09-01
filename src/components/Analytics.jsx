import React from 'react';
import Laptop from '../assets/laptop.jpeg';

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold py-2 text-2xl sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid
            delectus dolor doloribus dolorum esse labore quaerat reiciendis repudiandae
            veniam. Assumenda corporis eligendi iure nemo odit officiis quasi? Aliquid,
            odit?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
