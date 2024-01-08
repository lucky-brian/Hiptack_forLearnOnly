import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'

import Slider from "../../components/Dashbords/Slider";
import { products } from "../../data/Products";
import Collection from "../../components/Dashbords/Collection";
import BestSeller from "../../components/Dashbords/BestSeller";
import Footer from "../../components/Dashbords/Footer";

const Dashboard: React.FC = () => {

  const [acceptCookie, setAcceptCookie] = useState<boolean>(
    Cookies.get("acceptCookie") === "true"
  );

  const handleAcceptCookie = () => {
    const encodedData = encodeURIComponent('true');
    console.log(encodedData);
    Cookies.set('acceptCookie', encodedData, { expires: 365, secure: true, SameSite: 'Strict', });
    Cookies.set("acceptCookieHTTPOnly", encodedData, { expires: 365, secure: true, httpOnly: true, SameSite: 'Strict' });


    setAcceptCookie(true);
  };


  useEffect(() => {
    const hasAcceptedCookie = Cookies.get("acceptCookie") === "true";
    setAcceptCookie(hasAcceptedCookie);
  }, []);

  return (
    <>
      <div>
        <Slider />
        <BestSeller products={products} />
        <Collection />
        <Footer />
      </div>
      {
        acceptCookie != true && (
          <div className="min-h-screen h-32 bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div
              className="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-40 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
              <div className="w-full">This website uses cookies to ensure you get the best experience on our website.
                <a href="#" className="text-indigo-600 whitespace-nowrap  hover:underline">Learn more</a></div>
              <div className="flex gap-4 items-center flex-shrink-0">

                <button className="text-indigo-600 focus:outline-none hover:underline">Decline</button>
                <button
                  onClick={() => handleAcceptCookie()}
                  className="bg-indigo-500 px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none">Allow Coockies</button>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

export default Dashboard