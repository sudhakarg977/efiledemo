const PermanentInformationForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <input type="text" placeholder="First Name" className="input-field" />
        <input type="text" placeholder="Middle Name" className="input-field" />
        <input type="text" placeholder="Last Name" className="input-field" />
      </div>
      <input type="date" placeholder="Date of Birth" className="input-field" />
      <input type="text" placeholder="Father's Name" className="input-field" />

      <div className="flex space-x-4">
        <label>
          <input type="radio" name="gender" /> Male
        </label>
        <label>
          <input type="radio" name="gender" /> Female
        </label>
      </div>

      <div className="flex space-x-4">
        <label>
          <input type="radio" name="marital" /> Married
        </label>
        <label>
          <input type="radio" name="marital" /> Unmarried
        </label>
        <label>
          <input type="radio" name="marital" /> Prefer not to disclose
        </label>
      </div>
    </form>
  );
};

export default PermanentInformationForm;
