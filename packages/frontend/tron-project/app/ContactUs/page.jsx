import React from "react";

const ContactUs = () => {
  return (
    <div className=" ">
      <div>Contact Us</div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), {
  ssr: false,
});
