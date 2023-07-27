import { useState } from "react";

function Form(props) {
  const [saving, setSaving] = useState("");
  const [contribute, setContribute] = useState("");
  const [returnAmt, setReturnAmt] = useState("");
  const [duration, setDuration] = useState("");

  // onChage Handlers
  function handleSaving(event) {
    setSaving(event.target.value);
  }

  function handleContribute(event) {
    setContribute(event.target.value);
  }

  function handleReturn(event) {
    setReturnAmt(event.target.value);
  }

  function handleDuration(event) {
    setDuration(event.target.value);
  }

  function handleReset(event) {
    setSaving("");
    setContribute("");
    setReturnAmt("");
    setDuration("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const input = {
      "current-savings": saving,
      "yearly-contribution": contribute,
      "expected-return": returnAmt,
      duration: duration,
    };

    props.onCalculate(input);
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={handleSaving}
            value={saving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={handleContribute}
            value={contribute}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={handleReturn}
            value={returnAmt}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={handleDuration}
            value={duration}
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={handleReset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button onClick={handleSubmit} type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
