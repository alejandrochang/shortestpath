import { useState } from "react";

const ContactForm: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To track form submission status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  interface FetchResponse {
    ok: boolean;
  }

  const errorMessage = "There was an error. Please try again.";
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Send form data to API route
    try {
      const response: FetchResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you for your message!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          message: "",
        });
      } else {
        setStatus(errorMessage);
      }
    } catch {
      setStatus(errorMessage);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0 13px",
    border: "none",
    height: "40px",
    fontFamily: "Gilmer, sans-serif",
    color: "black",
    borderBottom: "1px solid lightgrey",
    background: "transparent",
    outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: isMobile ? '100%' : "555px" }}>
      <div style={{ marginBottom: "0.5rem", display: "flex", gap: "10px" }}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          style={{ ...inputStyle, flex: 1 }}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
          style={{ ...inputStyle, flex: 1 }}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Work Email"
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          required
          placeholder="Business Name"
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, minHeight: "2rem" }}
          placeholder="Tell Us About Your Business"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-black hover:french-gray focus:ring-4 focus:outline-none focus:#6E8787 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-black-600 dark:hover:black dark:focus:black"
      >
        {"Submit"}
      </button>

      {status && (
        <p
          style={{
            marginTop: "5px",
            opacity: "75%",
          }}
        >
          <div
            style={{
              background: status.includes("error") ? "red" : "#72b972",
              color: "white",
              padding: "5px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "12px",
            }}
          >
            {status}
          </div>
        </p>
      )}
    </form>
  );
};

export default ContactForm;
