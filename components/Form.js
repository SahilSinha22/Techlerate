"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";

import PhoneInput from 'react-phone-input-2';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase'; // Import storage from your firebase.js
const Form = () => {
  
  const [errors, setErrors] = useState({});
  const [successBanner, setSuccessBanner] = useState(false);
  const [fileName, setFileName] = useState('Attach a file');
  const [file, setFile] = useState(null);
  const [Inquire, setInquire] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [bannerMessage, setBannerMessage] = useState("");
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Number: "",
    message: "",
    Budget: "",
    File: "",
  });

  const [isSelected, setIsSelected] = useState(false);

 
  const handleSelectChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!user.Name) newErrors.Name = "Name is required";
    else if (!/^[A-Za-z\s]+$/.test(user.Name))
      newErrors.Name = "Name can only contain letters and spaces";
    if (!user.Email) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(user.Email))
      newErrors.Email = "Email address is invalid";
    if (!user.Number.trim()) newErrors.Number = "Phone number is required";
    else if (!/^\d{7,12}$/.test(user.Number))
      newErrors.Number = "Phone number must be between 7 to 12 digits";
    if (!user.message) newErrors.message = "Message is required";
    if (!user.Budget) newErrors.Budget = "Budget is required";
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getdata = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const { Name, Email, Number, message, Budget,File } = user;

    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Number", Number);
    formData.append("message", message);
    formData.append("Budget", Budget);
    formData.append("File", File);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        message,
        Budget,
        File,
      }),
    };

    const res = await fetch(
      "https://nextfirebase-fab92-default-rtdb.firebaseio.com/Techlerate.json",
      options
    );
    if (res) {
      setUser({
        Name: "",
        Email: "",
        Number: "",
        message: "",
        Budget: "",
        File: "",
      });
      setSuccessBanner(true);
      setFile(null); // Clear the file
      setFileName('Attach a file'); // Clear the file name display
      setUploadProgress(0);
      setInquire(null)
      setBannerMessage("");
      setTimeout(() => {
        setSuccessBanner(false);
      }, 3000);
    } else {
      alert("Error Occurred");
    }
  };




  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // Limit file size to 5MB
        alert('File size should be less than 5MB');
        return;
      }
      setFileName(selectedFile.name);
      setFile(selectedFile);
      setUser({ ...user, File: selectedFile.name });
      setBannerMessage(''); // Clear any previous messages
    }
  };
  
  const handleFileUpload = () => {
    if (!file) {
      alert('No file selected');
      return;
    }

    
    setBannerMessage('Uploading...'); // Indicate file is uploading
    const fileRef =  ref(storage, `Techlerate/${file.name}`);

    // Start file upload
    const uploadTask = uploadBytesResumable(fileRef, file);

    // Monitor file upload process
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Update progress
        console.log(`Upload is ${progress.toFixed(2)}% done`);
      },
      (error) => {
        console.error('Error uploading file:', error);
        setBannerMessage('Error uploading file');
      },
      () => {
        // Get the download URL once upload is completed
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at:', downloadURL);
          setBannerMessage('File uploaded successfully!');
          setInquire("Inquire done");
        }).catch((error) => {
          console.error('Error getting file URL:', error);
          setBannerMessage('Error retrieving file URL');
        });
      }
    );
  };


 



  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission
    
  };

  return (
    <div className=" bg-black ">

      <div className="  w-full h-92 ">
        <div className="  flex flex-col  justify-center py-10 ">
          <h2 className="  text-left sm:text-center lg:text-left mx-5  sm:ml-12 md:mx-20  2xl:ml-48 2xl:mr-0  2xl:pr-60 lg:ml-28 lg:mr-20  xl:mr-60 xl:ml-48 text-3xl sm:text-4xl 2xl:text-5xl items-center text-white  lg:text-4xl  playfair_display">
            Collaborate with us
          </h2>

          <div className="sm:mx-10 mx-4 lg:mx-20 xl:mx-40 ">
            <div className=" flex  2xl:mt-6 flex-col lg:flex-row items-center m-auto 2xl:h-auto  md:justify-between ">
              <div className=" 2xl:w-auto md:ml-2 2xl:pr-8 xl:ml-4 xl:pr-8 py-4 rounded-xl bg-[#18191f]   pl-2  text-white my-8  ">
                <div className="m-4 md:m-8 lg:m-6 2xl:text-4xl md:text-2xl ">
                  <h2 className="md:text-2xl text-2xl 2xl:text-3xl font-semibold">
                    Hello now !
                  </h2>
                  <div className="flex flex-row my-2">
                    <Image src="/flag.svg" alt="logo" width={40} height={4} />{" "}
                    <div className="ml-4 text-lg 2xl:text-3xl md:text-xl">
                      <a href="tel:+91 88 820 76 755" > +91 88 820 76 755{" "}</a>
                    </div>{" "}
                  </div>
                  <h2 className="md:text-2xl 2xl:text-3xl text-2xl font-semibold mt-2 xl:mt-4">
                    Connect with us
                  </h2>
                  <div className="text-xl lg:text-base flex flex-col space-t-2 open_sans_display xl:text-[17px] 2xl:text-2xl ">
                    <a href="mailto: contact@techlerate.com  ">  <span> Email : contact@techlerate.com </span></a>

                    <span className="w-[300px] 2xl:w-[450px] leading-7">Office : Platina Heights, C24, C Block,
                      Phase 2, Industrial Area, Sector 62,
                      Noida, Uttar Pradesh 201309 </span>
                  </div>
                </div>
              </div>

              <div className="mr-4 w-full  lg:w-auto xl:mr-0 xl:w-[500px] mb-4  p-6 rounded-3xl md:mx-2  ">
                {successBanner  && (
                  <div className="  absolute  z-10  text-lg sm:text-xl flex w-auto xl:w-[500px] right-0 bg-green-500 text-white p-4 rounded-lg">
                    <FaCheckCircle size={24} className="mr-2" />
                    <span>Query Submitted Successfully!</span>
                  </div>
                )}
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className=" mx-auto   "
                >
                  <div className="grid w-full md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-4 group">
                      <input
                        type="text"
                        name="Name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm 2xl:text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Name}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.Name && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Name}
                        </p>
                      )}

                      <label
                        htmlFor="Name"
                        className="peer-focus:font-medium  absolute text-sm 2xl:text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="Email"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent  2xl:text-base border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={user.Email}
                        autoComplete="off"
                        required
                        onChange={data}
                      />
                      {errors.Email && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Email}
                        </p>
                      )}

                      <label
                        htmlFor="Email"
                        className="peer-focus:font-medium absolute text-sm text-white 2xl:text-base duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email*
                      </label>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2  gap-4 md:gap-6">
                    <div className=" md:mt-1 2xl:mt-3">
                      <div className="relative text-lg flex w-full ">
                        <PhoneInput
                          country={'in'}
                          value={user.Number}
                          onChange={value => setUser({ ...user, Number: value })}
                          inputProps={{
                            name: 'Number',
                            required: true,
                            autoFocus: false
                          }}
                          autoComplete="off"
                          className="border-b-2 w-full text-lg  dark:border-gray-600 2xl:text-base  border-gray-300 peer-placeholder-shown:text-blue-gray-500"
                          containerStyle={{ width: '100%', background: 'black', fontSize: '1.125rem' }}
                          inputStyle={{ width: '100%', border: 'none', color: 'white', background: 'black', fontSize: '1.125rem' }}
                          buttonStyle={{
                            border: 'none', background: 'transparent', color: 'black', fontSize: '1.125rem'
                          }}
                        />

                      </div>
                      {errors.Number && <p className="text-red-600 text-xs mt-1">{errors.Number}</p>}
                    </div>
                    <div className="relative z-0 w-full mb-5 md:mb-5 group">
                      <select
                        name="Budget"
                        id="floating_company"
                        className="block py-2.5 px-0 w-full   text-sm 2xl:text-base text-white  bg-black  border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={user.Budget}
                        autoComplete="off"
                        required
                        onChange={handleSelectChange}
                      >

                  
                        <option  className="text-sm  2xl:text-base " value="" disabled>Budget (select a range)</option>
                        <option value="2.66L">2.66L</option>
                        <option value="3.5L">3.5L</option>
                        <option value="4.5L">4.5L</option>
                      
                      </select>

                      {/* Arrows */}
                      <div className="absolute right-2 top-3">
                        {isSelected ? <FaChevronUp className="text-white" /> : <FaChevronDown className="text-white" />}
                      </div>

                      {errors.Budget && (
                        <p className="text-red-600 text-xs mt-1">
                          {errors.Budget}
                        </p>
                      )}



                    </div>

                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="message"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white 2xl:text-base bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={user.message}
                      autoComplete="off"
                      required
                      onChange={data}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}

                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm 2xl:text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      About your project
                    </label>
                  </div>
                  <div className="file-upload-container relative border border-gray-600 p-4 rounded-md">
                    <label
                      htmlFor="file-upload"
                      className="flex items-center space-x-2 text-gray-400 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span>{fileName
                        .slice(0, 20)         
                          }</span>
                    </label>

                    <input
                      type="file"
                      id="file-upload"
                     
                      className="hidden"
                      accept=".pdf, .docx, .doc, .odt, .ods, .ppt, .pptx, .xlsx, .xls, .rtf, .txt"
                      onChange={handleFileChange}
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      Please upload a file with one of the following extensions:
                      <strong> .pdf, .docx, .doc, .odt, .ods, .ppt, .pptx, .xlsx, .xls, .rtf, .txt</strong>
                    </p>
                    {file && (
        <button
          onClick={handleFileUpload}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Upload File
        </button>
      )}

      {/* Show banner when file upload is done */}
      {bannerMessage && (
        <div className="mt-4 bg-green-500 text-white p-3 rounded-md">
          {bannerMessage}
        </div>
      )}

      {/* Optionally, show upload progress */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-2">
          <p>Upload progress: {Math.round(uploadProgress)}%</p>
        </div>
      )}
    
                  </div>



                  <button
                   
                    className="rounds mt-4 text-white border-white border-2  bg-black hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                    onClick={getdata}
                    style={{
                      backgroundColor: Inquire ? "green" : "black",
                      color: "white",
                    }}
                    disabled={Inquire === null || !Inquire}
                  >
                    Inquire Now →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
