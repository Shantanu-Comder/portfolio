import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const email = "shantanubala003@gmail.com";
  const number = "+918595626637";
  const address = "Delhi, India";
  const googleMapsLink = `https://www.google.com/maps/dir//delhi`;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    formData.append("access_key", "147932fa-27cb-4d18-be81-04283570df13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="ccontact common">
      <div className="ctitle">
        <h1 className='headings'>Get In Touch</h1>
      </div>

      <div className="csections">

        <div className="cleft">
          <h1>Let's Talk</h1>
          <p>
            I am currently seeking a full-time position in full stack web
            development. I am open to opportunities in any remote location and
            eager to contribute my skills and expertise to a dynamic team.
          </p>
          <p>
            Please feel free to send me a message or contact me at any time.
          </p>

          <div className="details">
            <div className="detail">
              <img src={mail_icon} alt="" />{" "}
              <a
                className="detail-link"
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </div>

            <div className="detail">
              <img src={call_icon} alt="" />
              <a href={`tel:${number}`} className="detail-link">
                {number}
              </a>
            </div>

            <div className="detail">
              <img src={location_icon} alt="" />{" "}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                {address}
              </a>
            </div>
          </div>

        </div>
        <form onSubmit={onSubmit} className="cright">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Name"
            name="email"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="csubmit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
