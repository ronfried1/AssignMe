// MainForm.js
"use client";
import { useState } from "react";
import Address from "./missions-selection";
import UserNameEmail from "./username-email";
import NameSelection from "./name-selection";
import Soldier from "../soldier/soldier";
import { Mission, SoldierType } from "@/shared/types";
import mockup from "@/shared/mockup";
import MissionsSelection from "./missions-selection";

const MainForm = () => {
  const [data, setData] = useState({
    dob: "",
    soldiers: mockup.availableSoldiers,
    selectedSoldiers: mockup.mockSelectedSoldiers,
    missions: mockup.mockMissions,
    selectedMissions: mockup.mockSelectedMissions,
  } as unknown as {
    dob: string;
    soldiers: SoldierType[];
    selectedSoldiers: SoldierType[];
    missions: Mission[];
    selectedMissions: Mission[];
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
    // <UserNameEmail data={data} handleChange={handleChange} />,
    <NameSelection data={data} handleChange={handleChange} />,
    <MissionsSelection data={data} handleChange={handleChange} />,
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
