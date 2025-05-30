import React, { useState , useRef } from "react";
import { Link } from 'react-router-dom';

import "./Cregistration.css";

const CloudRegistration =()=>{
      const initialFormState = {
         name: "",
         Ownername: "",
         MobileNumber: "",
         DateofOpening: "",
         address: "",
         country: "",
         City:"",
         postalCode: "",
         State: "", 
         Kitchen:"",
         fromTime:"",
         toTime:"",
         fssaiDoc:"",
         otherDo:"",
       };
     
       const [formData, setFormData] = useState(initialFormState);
       const fromTimeRef = useRef(null);
       const toTimeRef = useRef(null);
       const fssaiDocRef =useRef(null);
       const otherDoRef = useRef(null);
        
       const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData({ ...formData, [name]: value });
       };
     
       const handleFileChange = (e) => {
         const { name, files } = e.target;
         setFormData({ ...formData, [name]: files[0] });
       };
     
       const handleSubmit = (e) => {
         e.preventDefault();
         console.log("Form Submitted:", formData);
     
         setFormData(initialFormState);
     
         if (fromTimeRef.current) fromTimeRef.current.value = "";
         if (toTimeRef.current) toTimeRef.current.value = "";
         if (fssaiDocRef.current) fssaiDocRef.current.value = "";
         if (otherDoRef.current) otherDoRef.current.value = "";
       };
     
       return (
         <div className="form-container">
           
           <h2>Cloud Kitchen Registration</h2>
           <form onSubmit={handleSubmit}>
            <div className="coloum">
                <label htmlFor="Name">Cloud Kitchen Name  <span className="required">*</span> </label>
                <input type="text" name="name" placeholder="Cloud Kitchen Name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="Name">Owner Name  <span className="required">*</span> </label>
                <input type="text" name="Ownername" placeholder="Owner Name" value={formData.Ownername} onChange={handleChange} required />
            </div>
             
            <div className="row">
               <div className="coloum">
                 <label className="left" htmlFor="Mobile Number">Mobile Number <span className="required">*</span> </label>
                 <input type="tel"  name="MobileNumber" value={formData.MobileNumber} onChange={handleChange} required />
                </div>    
               <div className="coloum" >
                 <label htmlFor="Date of Opening" >Date of Opening  <span className="required">*</span> </label>
                 <input type="date" name="DateofOpening"  placeholder="Date of Opening" value={formData.DateofOpening} onChange={handleChange} required />
                </div>   
            </div>
     
            <div className="coloum">
            <label htmlFor="Address" className="start" >Address <span className="required">*</span> </label>
             <input type="text" name="address" placeholder="Address" className="top" value={formData.address} onChange={handleChange} required />
             </div>

             <div className="row">
               <div className="coloum">
               <label htmlFor="Select Country">Select Country <span className="required">*</span> </label>
                 <select name="country" className="sel" value={formData.country} onChange={handleChange} required >
                 <option value="">Select Country</option>
                 <option value="India">India</option>
                 <option value="USA">USA</option>
                 <option value="UK">UK</option>
                 </select>
                </div>    
               <div className="col" >
                 <label htmlFor="State" >State</label>
                 <input type="text" name="State"  placeholder="State" value={formData.State} onChange={handleChange} />
                </div>   
            </div>
             
            <div className="row">
             <div className="coloum">
                 <label htmlFor="City">City</label>
                 <input type="text" name="City" placeholder="City" value={formData.City} onChange={handleChange} />
             </div>
             <div className="coloum">
                 <label htmlFor="postal code">Postal Code <span className="required">*</span> </label>
                 <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
             </div> 
             </div>

             <div className="row">
             <div className="coloum">
                 <label htmlFor="City">Region</label>
                 <input type="text" name="City" placeholder="Region" value={formData.City} onChange={handleChange} />
             </div>
             <div className="coloum">
                 <label htmlFor="postal code">Cuisine Type <span className="required">*</span> </label>
                 <input type="text" name="postalCode" placeholder="Cuisine Type" value={formData.postalCode} onChange={handleChange} required />
             </div> 
             </div>

             <div className="row">
             <div className="coloum">
                 <label htmlFor="City">GST Number <span className="required">*</span></label>
                 <input type="text" name="City" placeholder="GST Number" value={formData.City} onChange={handleChange} />
             </div>
             <div className="coloum">
                 <label htmlFor="postal code">Payment Method <span className="required">*</span> </label>
                 <input type="text" name="postalCode" placeholder="Payment Method " value={formData.postalCode} onChange={handleChange} required />
             </div> 
             </div>
            
             <div>
             <label htmlFor="Kitchen" className="kit" >Kitchen Type</label>
             <div className="Kitchen-container">
               <div>
               <label><input type="radio" name="Kitchen" value="Veg" checked={formData.Kitchen === "Veg"} onChange={handleChange} /> Veg</label>
               <label><input type="radio" name="Kitchen" value="Non-Veg" checked={formData.Kitchen === "Non-Veg"} onChange={handleChange} /> Non-Veg</label>
               <label><input type="radio" name="Kitchen" value="Both" checked={formData.Kitchen === "Both"} onChange={handleChange} /> Both</label>
               </div>
             </div>
             </div>
     
             <div className="coloum">
                <label htmlFor="Opratingtime">Operating Time</label>
                    <div className="roww">
                    <div className="mobilerow">
                    <label htmlFor="from">From</label>
                    <input type="time" name="fromTime"   ref={fromTimeRef} onChange={handleChange} />
                    </div>
                    <div className="mobilerow">
                    <label htmlFor="to">To</label>
                    <input type="time" name="toTime" ref={toTimeRef}  onChange={handleChange} />
                    </div>
                    </div>
             </div>

    
             
             <div className="file-upload">
               <label>Upload FSSAI License <span className="required">*</span> </label>
               <input type="file" name="fssaiDoc"  ref={fssaiDocRef} onChange={handleFileChange} required />
             </div>
     
             <div className="file-upload">
                {/* this one will be change as per customer requirement */}
               <label>Upload Cloud Kitchen Necessary Document</label>
               <input type="file" name="otherDo" ref={otherDoRef} onChange={handleFileChange}  />
             </div>
      
            
             <button type="submit" className="submitbtn">Submit</button>
           </form>
         </div>
       );
}
export default CloudRegistration ; 