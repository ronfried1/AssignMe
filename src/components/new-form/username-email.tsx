// UserNameEmail.js
import React from "react";

interface UserNameEmailProps {
  data: {
    name: string;
    email: string;
    dob: string;
    gender: "male";
    address: string;
  };
  handleChange: (event: any) => void;
}

const UserNameEmail = (props: UserNameEmailProps) => {
  const { data, handleChange } = props;

  return (
    <div className="max-w-xs md:max-w-lg mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Username
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="name"
            type="text"
            placeholder="Username..."
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dob"
          >
            Date
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="dob"
            type="date"
            value={data.dob}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default UserNameEmail;
