import React from "react";

import Slider from "../../components/Dashbords/Slider";
import { products } from "../../data/Products";
import Collection from "../../components/Dashbords/Collection";
import BestSeller from "../../components/Dashbords/BestSeller";
import Footer from "../../components/Dashbords/Footer";

const Dashboard: React.FC = () => {
  return (
    <div>
        <Slider />
        <BestSeller products={products} />
        <Collection />
        <Footer />
    </div>
  )
}

export default Dashboard