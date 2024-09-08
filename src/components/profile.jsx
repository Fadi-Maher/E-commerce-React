import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
 

function Profile() {
  const encodedToken = localStorage.getItem("userToken");
  const decodedToken = jwtDecode(encodedToken);

  const [profileImage, setProfileImage] = useState(null);

  
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // Save the image URL to localStorage
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white bg-gray-900 p-10 mt-14 text-center">
          Your Profile
        </h1>
      </div>

      <div className="bg-green-600 p-10 text-white text-2xl font-bold">
        Hello {decodedToken.name}
      </div>

      <div className="bg-green-600 p-10 text-white text-2xl font-bold">
        Your ID is {decodedToken.id}
      </div>

      <div className="bg-green-600 p-10 text-white text-2xl font-bold">
        You are {decodedToken.role}
      </div>

      {/* Profile Image Upload Section */}
      <div className="p-10 text-center">
        <label
          htmlFor="profileImage"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Upload Profile Photo
        </label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Display the Uploaded Profile Image */}
      {profileImage && (
        <div className="p-10 text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover mx-auto"
          />
        </div>
      )}
    </>
  );
}

export default Profile;
