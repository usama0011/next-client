import { PaperClipIcon, PencilAltIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import React from 'react';
import ReactDOM from 'react-dom';
import Headerfixed from '../components/Headerfixed'




export default function Home() {
   
 
  // var mytext=document.getElementById("text");
  // var result=document.getElementById("resutl")
  // var limit=2500;
  // result.textContent= 0 + "/" + limit;
  // mytext.addEventListener("input" , function(){
  //   var textlength=mytext.value.length;
  //   result.textContent=textlength + "/" + limit;

  //   if(textlength > limit){
  //     mytext.style.borderColor="#ff2851";
  //     result.style.color="#ff2851"
  //   }
  //   else {
  //     mytext.style.borderColor ="#b2b2b2";
  //     result.style.color="#737373"
  //   }
  // })

  
  
   

  return (

    
    <div className=" overflow-hidden overflow-x-hiddenbg-[#f7f7f7]">
      <Head>
        <title>entorOcean.com</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;1,400&display=swap" rel="stylesheet"></link>
      </Head>
        
       <Header/>
       <HeaderBottom/>
       <div className="max-w-3xl mx-auto w-full ">
        <Headerfixed/>
       </div>
       <main className="bg-[#f7f7f7]  ">
        <div className="max-w-3xl w-full mt-8 flex-grow shadow-2xl  mx-auto border px-8 sm:px-16 rounded-xl bg-white mb-12">

        
        <section className=" group relative pt-14">
          <h2  className=" relative font-bold pb-5 pt-6 text-3xl">What Service are You looking For</h2>
          <div className="bg-white px-7 py-5 rounded-lg ">
          <h1 className="text-gray-900">
              Describe the service you are looking to purchase <br />please be as
              detailed as possible:
            </h1>
            <div className="relative">
            <textarea
              className=" outline-none px-2 py-3 mt-3 flex-grow w-full  border text-gray-500 mb-2 "
              name="text"
              id="text"
              placeholder="I'm looking for..."
              cols="50"
              rows="7"
              minLength="1"
              maxLength="2500"
            ></textarea>
            <p className="absolute bottom-6 right-4" id="resutl">0/2500</p>
            </div>
           
            <button className="flex shadow-md rounded-lg  items-center bg-gray-200   to-gray-700 px-2 py-2">
              <PaperClipIcon className="h-6 mr-3" />
              Attach Files
            </button>
          </div>
          <div  className="  rounded w-full max-w-[200px] hidden group-hover:block transition ease-in-out .2s  absolute shadow-md  top-10 -right-72  bg-blue-100 px-2 p-2">
          <div className="flex items-center pb-2 border-b border-blue-200">
            <div className="px-2 py-2 bg-blue-200 mr-1  block rounded-full">
            <img src="https://image.flaticon.com/icons/png/512/4151/4151213.png" alt="" className="w-5 h-5" />
              
            </div>
            <h3 className="text-sm font-bold text-blue-500">Define in Detail</h3>
          </div>
          <p className="text-xs text-gray-600 to-gray-300 pt-2">Include all the necessary details needed to complete your request and many more</p>
          <p className="text-sm font-bold text-blue-500 pt-2">For example:</p>
          <p className="text-xs text-gray-600 pb-5">if you are looking for a logo, you can specify your company name,business type,preferred color,etc.</p>
        </div>
        </section>
        <section className=" group relative  rounded-lg mb-8 bg-white mt-8 p-2">
          <h2 className="font-bold pb-5 p-2 text-3xl">
           Choose Category 
          </h2>
          <div className="grid space-x-1 grid-cols-1 md:grid-cols-2">
       
          <div className=" pb-5 w-full flex-grow max-w-[400px]">
            <form className=" w-full flex-grow" action="">
              <select className=" w-full  flex-grow border-2 p-2 rounded-lg outline-none" id="dropdown">
                <option className="font-bold">Select....</option>
                <option className="p-5  bg-gray-100" value="1">Graphic Desing</option>
                <option className="p-5  bg-gray-100" value="2">Digital Marketing</option>
                <option className="p-5  bg-gray-100" value="3">Writing & Translation</option>
                <option className="p-5  bg-gray-100" value="4">Vedio & Animation</option>
                <option className="p-5  bg-gray-100" value="5">Music & Vedio</option>
                <option className="p-5  bg-gray-100" value="6">Programming & Tech</option>
                <option className="p-5  bg-gray-100" value="7">Lifesyle</option>
                <option className="p-5  bg-gray-100" value="8">Data</option>
                <option className="p-5  bg-gray-100" value="9">Advaced</option>
               
              </select>
            </form>
          </div>
          <div className=" pb-5 w-full flex-grow max-w-[400px]">
            <form className=" w-full flex-grow" action="">
              <select className=" w-full  flex-grow border-2 p-2 rounded-lg outline-none" id="dropdown">
                <option className="font-bold">Select subcategory</option>
                <option className="p-5  bg-gray-100" value="1">Graphic Desing</option>
                <option className="p-5  bg-gray-100" value="2">Digital Marketing</option>
                <option className="p-5  bg-gray-100" value="3">Writing & Translation</option>
                <option className="p-5  bg-gray-100" value="4">Vedio & Animation</option>
                <option className="p-5  bg-gray-100" value="5">Music & Vedio</option>
                <option className="p-5  bg-gray-100" value="6">Programming & Tech</option>
                <option className="p-5  bg-gray-100" value="7">Lifesyle</option>
                <option className="p-5  bg-gray-100" value="8">Data</option>
                <option className="p-5  bg-gray-100" value="9">Advaced</option>
               
              </select>
            </form>
          </div>
        </div>
        <div className=" rounded w-full max-w-[200px] md:hidden sm:hidden   absolute shadow-md  top-0 -right-72 hidden group-hover:block transition ease-in-out .2s  bg-blue-100 px-2 p-2">
          <div className="flex items-center pb-2 border-b border-blue-200">
            <div className="px-2 py-2 bg-blue-200 mr-1  block rounded-full">
            <img src="https://image.flaticon.com/icons/png/512/4151/4151213.png" alt="" className="w-5 h-5" />
              
            </div>
            <h3 className="text-sm font-bold text-blue-500">Refine your Request</h3>
          </div>
          <p className="text-xs text-gray-600 to-gray-300 pt-2">Choose the category and subcategory that best fits your request.</p>
          <p className="text-sm font-bold text-blue-500 pt-2">For example:</p>
          <p className="text-xs text-gray-600">if you are looking for a logo, you can specify your company  "Logo Design " type,"Graphic Design" color,etc.</p>
        </div>
        </section>
         <section className=" group relative  bg-white mx-auto px-8 border-t pb-14  mb-2">
         <h1 className="text-lg font-bold pt-5 mb-3 text-gray-700">Once You place you order,when woruld you like your service delivered?</h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        24 Hours
              </div>
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform  shadow-md transition .5s ease-out">
                       3 Day
              </div>
              <div className="px-3  max-w-sm py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform shadow-md transition .5s ease-out">
                        7 Days
              </div>
              <div className="px-3 max-w-sm  py-2 mb-2 text-center font-bold  flex-grow w-full border text-gray-500 hover:bg-green-500 cursor-pointer hover:text-white transform transition shadow-md .5s ease-out ">
                <span className="flex items-center">
                  <span>
                      <PencilAltIcon className="h-4 w-6 block"/>

                  </span>
                  <span>

                      <input className=" bg-transparent outline-none border-none w-full  flex-grow h-7 text-white" type="number" placeholder="Rs" min={1} />
                  </span>

                </span>
              </div>
              
          </div>
         
          <div className=" rounded w-full max-w-[200px] md:hidden sm:hidden  absolute shadow-md top-0 -right-72 hidden group-hover:block transition ease-in-out .2s  bg-blue-100 px-2 p-2">
          <div className="flex items-center pb-2 border-b border-blue-200">
            <div className="px-2 py-2 bg-blue-200 mr-1  block rounded-full">
            <img src="https://image.flaticon.com/icons/png/512/4151/4151213.png" alt="" className="w-5 h-5" />
              
            </div>
            <h3 className="text-sm font-bold text-blue-500">Set a Dellivery Time</h3>
          </div>
          <p className="text-xs text-gray-600 to-gray-300 pb-5 pt-2">This is the amount of time to seller has to work on your order .please note that a request for faster delivery may impact the price</p>
         
        </div>
         </section>
         <section className=" group px-4 relative border-t  pt-3">
           <h1 className="font-bold text-lg ">
             What is Your Budget for this service?
           </h1>
           <input type="text" placeholder="Rs" className="outline-none  border-2 px-2 py-2 mt-3 mb-1 rounded" />
           <p className="text-xs text-green-600 cursor-pointer mb-8">Conver to USD</p>
           <div className="px-2 justify-self-end py-2 w-[200px] md:hidden lg:hidden rounded-lg text-center bg-green-400  mb-10  text-white font-bold shadow-md cursor-pointer ">
              Submit Request
          </div>
          <div className=" rounded w-full max-w-[200px] md:hidden sm:hidden  absolute shadow-md hidden group-hover:block transition ease-in-out .2s  top-0 -right-72  bg-blue-100 px-2 p-2">
          <div className="flex items-center pb-2 border-b border-blue-200">
            <div className="px-2 py-2 bg-blue-200 mr-1  block rounded-full">
            <img src="https://image.flaticon.com/icons/png/512/4151/4151213.png" alt="" className="w-5 h-5" />
              
            </div>
            <h3 className="text-sm font-bold text-blue-500">Set Your budget</h3>
          </div>
          <p className="text-xs text-gray-600 to-gray-300 pb-5 pt-2">Enter an amount you are willing to spend for this service.</p>
       
        </div>
         </section>
       
         </div>
        
      </main>
    
      <Footer/>
      
    </div>
  )
}
