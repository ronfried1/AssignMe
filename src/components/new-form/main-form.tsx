// MainForm.js
"use client";
import { useState } from "react";
import Address from "./address";
import UserNameEmail from "./username-email";
import NameSelection from "./name-selection";
import Soldier from "../soldier/soldier";
import { SoldierType } from "@/shared/types";
import mockup from "@/shared/mockup";

const MainForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "male",
    address: "",
    soldiers: mockup.availableSoldiers,
    selectedSoldiers: mockup.mockSelectedSoldiers,
  } as {
    name: string;
    email: string;
    dob: string;
    gender: "male";
    address: string;
    soldiers: SoldierType[];
    selectedSoldiers: SoldierType[];
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const [activeTab, setActiveTab] = useState(0 as number);

  const formElements = [
    <UserNameEmail data={data} handleChange={handleChange} />,
    <NameSelection data={data} handleChange={handleChange} />,
    <Address data={data} setData={setData} />,
  ];

  return (
    <div className="flex flex-col justify-center">
      <div>{formElements[activeTab]}</div>
      <div className="flex flex-wrap gap-x-6 mx-auto">
        <button
          disabled={activeTab === 0 ? true : false}
          onClick={() => setActiveTab((prev) => prev - 1)}
          className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${
            activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"
          }`}
        >
          Back
        </button>
        <button
          disabled={activeTab === formElements.length - 1 ? true : false}
          onClick={() => setActiveTab((prev) => prev + 1)}
          className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${
            activeTab === formElements.length - 1
              ? "opacity-50 bg-slate-600"
              : "opacity-100"
          }`}
        >
          Next
        </button>
        {activeTab === formElements.length - 1 ? (
          <button
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
            onClick={() => console.log(data)}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default MainForm;
