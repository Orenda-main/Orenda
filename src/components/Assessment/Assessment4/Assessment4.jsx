import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
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
import Header from '../../Header';
import Footer from '../../Footer/Footer';

const Assessment4 = ({ prevQuestion, handleSubmit }) => {
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const condition = watch('question4');

  const radioOptions = [
    'Anxiety/Depression',
    'Attention Deficit/Hyperactivity Disorders (ADHD/ADD)',
    'Sleep Disorders',
    'Eating Disorders',
    'Substance Use Disorder',
    'Genomic Testing',
  ];

  const selectOptions = [
    { label: '5 - 13 yrs', value: '5 - 13 yrs' },
    { label: '13 - 17 yrs', value: '13 - 17 yrs' },
    { label: '18 - 24 yrs', value: '18 - 24 yrs' },
    { label: '25 - 64 yrs', value: '25 - 64 yrs' },
    { label: '65+ yrs', value: '65+ yrs' },
  ];

  const handlePrevClick = () => {
    prevQuestion();
  };

  const isRadioOptionSelected = radioOptions.includes(condition);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 693) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="assessment1-container">
      {showFooter && <Header />}
      <div className="assessment1-wrapper">
        <div className="assessment1-left">
          <div className="homepage" onClick={handlePrevClick}>
            <ArrowBackIosIcon style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>Homepage</p>
          </div>

          <div className="question">
            <p className="q-no">Question 4 of 4</p>
            <p className="main-q">Are you looking to address any of these conditions?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right">
          <FormControl className="a2r">
            <Controller
              name="question4"
              control={control}
              defaultValue=""
              rules={{ required: 'Please select a condition before proceeding.' }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  value={field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question4', e.target.value);
                  }}
                >
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
              )}
            />
          </FormControl>
          <FormControl className="sel3">
            <InputLabel id="demo-simple-select-helper-label">Other (select)</InputLabel>
            <Controller
              name="question4"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  {...field}
                  value={isRadioOptionSelected ? '' : field.value}
                  label="Other (select)"
                  onChange={(e) => {
                    field.onChange(e);
                    setValue('question4', e.target.value);
                  }}
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
              )}
            />
            {errors.question4 && <p className="error-message">{errors.question4.message}</p>}
          </FormControl>
          <div className="next-prev">
            <button className="prev" onClick={handlePrevClick}>Previous</button>
            <button className="next" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      {showFooter && <Footer />}
    </div>
  );
};

export default Assessment4;
