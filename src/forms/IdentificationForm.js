const IdentificationForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Aadhaar Number" className="input-field" />
      <input type="text" placeholder="PAN Number" className="input-field" />
      <input type="email" placeholder="Email Address" className="input-field" />
      <input type="tel" placeholder="Mobile Number" className="input-field" />
    </form>
  );
};

export default IdentificationForm;
