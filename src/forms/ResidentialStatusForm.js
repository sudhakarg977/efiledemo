const ResidentialStatusForm = () => {
  return (
    <form className="space-y-4">
      <select className="input-field">
        <option value="">Select Residential Status</option>
        <option value="Resident">Resident</option>
        <option value="Non-Resident">Non-Resident</option>
        <option value="Overseas Citizen">Overseas Citizen</option>
      </select>
    </form>
  );
};

export default ResidentialStatusForm;
