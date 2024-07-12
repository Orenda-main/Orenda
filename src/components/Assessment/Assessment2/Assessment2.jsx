import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Assessment1/Assessment1.css';
import './Assessment2.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link, NavLink } from 'react-router-dom';

const Assessment2 = () => {

  const [session, setSession] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setSession(value);
    setError(false); // Reset the error state on change
  };

  const handleNextClick = () => {
    if (!session) {
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
            <p className='q-no'>Question 2 of 4</p>
            <p className='main-q'>What would you like your sessions to focus on?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right">
          <FormControl className='a2r'>
            <RadioGroup value={session} onChange={handleChange}>
              <FormControlLabel
                className='assessment2-right-checkbox'
                control={<Radio />}
                label="Medication Management (this includes talk therapy)"
                value="Medication Management (this includes talk therapy)"
              />
              <FormControlLabel
                className='assessment2-right-checkbox'
                control={<Radio />}
                label="Weekly/Bi-weekly Talk Therapy"
                value="Weekly/Bi-weekly Talk Therapy"
              />
              <FormControlLabel
                className='assessment2-right-checkbox'
                control={<Radio />}
                label="Combined (A mix of both)"
                value="Combined (A mix of both)"
              />
            </RadioGroup>
          </FormControl>
          {error && <p className="error-message">Please select a session focus before proceeding.</p>}
          <div className="next-prev">
          <NavLink to='/Assessment1'>
            <div className="prev">Previous</div>
          </NavLink>
            {session ? (
              <NavLink to='/Assessment3'>
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
}

export default Assessment2;
