import React from "react";

function application() {
  return (
    <>
    <h1>Job Application From</h1>
    <h2>Section 1</h2>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio" />
      </div>
      <div>
        <label htmlFor="job-loction">Job location</label>
        <select id="job-location">
          <option value="">Select location</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="AU">Australia</option>
          <option value="CA">Canada</option>
          <option value="NZ">New Zealand</option>
        </select>
      </div>
      <div>
        <label>
            <input type="checkbox" id="terms" /> I agree to the terms and conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
    </>
  );
}

export default application;
