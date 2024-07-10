import React, { useState } from 'react';
import './Assessment1.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { NavLink } from 'react-router-dom';

const Assessment1 = () => {
  const [age, setAge] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    setError(false); // Reset the error state on change
  };

  const handleNextClick = () => {
    if (!age) {
      setError(true);
    }
  };

  return (
    <div className="assessment1-container">
      <div className="assessment1-wrapper">
        <div className="assessment1-left">
          <div className="homepage">
            <ArrowBackIosIcon style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>Homepage</p>
          </div>

          <div className="question">
            <p className="q-no">Question 1 of 4</p>
            <h1>What is your age?</h1>
            <p className="main-q">(This is intended for the person receiving care, please do not use your own age if you’re doing this on behalf of someone else)</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment1-right">
          <FormControl className='tts'>
            <InputLabel id="demo-simple-select-helper-label">Select age range</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Select age range"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="5 - 13 yrs">5 - 13 yrs</MenuItem>
              <MenuItem value="13 - 17 yrs">13 - 17 yrs</MenuItem>
              <MenuItem value="18 - 24 yrs">18 - 24 yrs</MenuItem>
              <MenuItem value="25 - 64 yrs">25 - 64 yrs</MenuItem>
              <MenuItem value="65+ yrs">65+ yrs</MenuItem>
            </Select>
          </FormControl>
          {error && <p className="error-message">Please select an age range before proceeding.</p>}
          <div className="next-prev">
            {age ? (
              <NavLink to='/Assessment2'>
                <div className="next">Next</div>
              </NavLink>
            ) : (
              <button className="next" onClick={handleNextClick}>Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment1;
