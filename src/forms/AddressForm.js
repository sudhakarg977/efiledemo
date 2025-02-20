const AddressForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Street Address" className="input-field" />
      <input type="text" placeholder="City" className="input-field" />
      <input type="text" placeholder="State" className="input-field" />
      <input type="text" placeholder="Pincode" className="input-field" />
    </form>
  );
};

export default AddressForm;
