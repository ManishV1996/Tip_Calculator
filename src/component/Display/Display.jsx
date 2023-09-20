import React from "react";
import { useState } from 'react';
import './Display.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Output from "../Output/Output";
import Input from "../Input/Input";


const Display=()=>{
    const [customers, setCustomers] = useState([]);

    const handleAddCustomer = (customer) => {
        setCustomers([...customers, customer]);
      };

    return(
    <div className="dis">
    <Header/>
    <Input onAddCustomer={handleAddCustomer}/>
    <Output customers={customers}/>
    <Footer/>
</div>
    )
};
export default Display;