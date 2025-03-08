import InputComponent from "@/components/input";
import { useState } from "react";
const Profile = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg max-w-md">
        <h1 className="">Profile</h1>
        {/* Avatar */}
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile"
          className="w-24 h-24 rounded-full"
        />
        {/* Name */}
        <div className="flex flex-row">
          <label>Name: </label>
          {/* <InputComponent
            placeholder="Enter your name"
            value={setName.name}
            onChange={(text) => setName.({...setName, name: text.target.value})}
          />  */}
        </div>
        {/* Email */}
        {/* Phone */}
        {/* Address */}
        {/* Button */}
      </div>
    </div>
  );
};

export default Profile;
