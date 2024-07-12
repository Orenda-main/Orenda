import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Assessment1/Assessment1.css';
import '../Assessment2/Assessment2.css';
import '../Assessment3/Assessment3.css';
import './Assessment4.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Link, NavLink } from 'react-router-dom';

const Assessment4 = () => {
  const [condition, setCondition] = useState('');
  const [error, setError] = useState(false);

  const radioOptions = [
    'Weight Management',
    'Medication Assisted Treatment',
    'Substance Use Disorder',
    'Tics / Tourettes Syndrome',
    'Genomic Testing',
    'Eating Disorder',
  ];

  const selectOptions = [
    { label: '5 - 13 yrs', value: '5 - 13 yrs' },
    { label: '13 - 17 yrs', value: '13 - 17 yrs' },
    { label: '18 - 24 yrs', value: '18 - 24 yrs' },
    { label: '25 - 64 yrs', value: '25 - 64 yrs' },
    { label: '65+ yrs', value: '65+ yrs' },
  ];

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setCondition(value);
    setError(false); // Reset the error state on change
    console.log(value);
  };

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setCondition(value);
    setError(false); // Reset the error state on change
    console.log(value);
  };

  const handleNextClick = () => {
    if (!condition) {
      setError(true);
    }
  };

  return (
    <div className="assessment1-container">
      <div className="assessment1-wrapper">
        <div className="assessment1-left"> 
          <Link to="/">
            <div className="homepage">
              <ArrowBackIosIcon style={{ color: 'white' }} />
              <p style={{ color: 'white' }}>Homepage</p>
            </div>
          </Link>

          <div className="question">
            <p className="q-no">Question 4 of 4</p>
            <p className="main-q">Are you looking to address any of these conditions?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right">
          <FormControl className="a2r">
            <RadioGroup value={condition} onChange={handleRadioChange}>
              {radioOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  className="assessment2-right-checkbox"
                  control={<Radio />}
                  label={option}
                  value={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl className="sel3">
            <InputLabel id="demo-simple-select-helper-label">Other (select)</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={radioOptions.includes(condition) ? '' : condition}
              label="Other (select)"
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {selectOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {error && <p className="error-message">Please select a condition before proceeding.</p>}
          <div className="next-prev">
            <div className="prev">Previous</div>
            {condition ? (
              <NavLink to='/#'> {/* Replace '/NextPage' with the actual path */}
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

export default Assessment4;
