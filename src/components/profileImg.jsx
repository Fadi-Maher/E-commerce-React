import { useState, useEffect } from "react";

function ProfileImage() {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <>
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full w-10 h-10 object-cover"
        />
      ) : (
        <div className="rounded-full w-10 h-10 bg-gray-300 flex items-center justify-center">
          <span className="text-white">P</span> 
        </div>
      )}
    </>
  );
}

export default ProfileImage;
