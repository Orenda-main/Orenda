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
import { NavLink } from 'react-router-dom';

const Assessment4 = ({ prevQuestion, handleSubmit }) => {
  const { control, setValue, watch, formState: { errors } } = useFormContext();
  const [showFooter, setShowFooter] = useState(false);

  const condition = watch('question4');

  const radioOptions = [
    'Anxiety/Depression',
    'Attention Deficit/Hyperactivity Disorders (ADHD/ADD)',
    'Sleep Disorders',
    'Eating Disorders',
  ];

  const selectOptions = [
    { label: 'Substance Use Disorder', value: 'Substance Use Disorder' },
    { label: 'Genomic Testing', value: 'Genomic Testing' },
    { label: 'Anger Management', value: 'Anger Management' },
    { label: 'Autism/Autism Spectrum Disorders (ASD)', value: 'Autism/Autism Spectrum Disorders (ASD)' },
    { label: 'Bipolar Disorder', value: 'Bipolar Disorder' },
    { label: 'Body Image', value: 'Body Image' },
    { label: 'CBT', value: 'CBT' },
    { label: 'Chronic Pain', value: 'Chronic Pain' },
    { label: 'Couples', value: 'Couples' },
    { label: 'Depression', value: 'Depression' },
    { label: 'Family Trauma', value: 'Family Trauma' },
    { label: 'Fetal Loss', value: 'Fetal Loss' },
    { label: 'Gender Affirming Care', value: 'Gender Affirming Care' },
    { label: 'Generalized Anxiety Disorder (GAD)', value: 'Generalized Anxiety Disorder (GAD)' },
    { label: 'Grief/Grief Therapy', value: 'Grief/Grief Therapy' },
    { label: 'Group therapy', value: 'Group therapy' },
    { label: 'Infertility/Fertility Challenges', value: 'Infertility/Fertility Challenges' },
    { label: 'Insomnia', value: 'Insomnia' },
    { label: 'Issues with Self Esteem', value: 'Issues with Self Esteem' },
    { label: 'LGBTQ+ Care', value: 'LGBTQ+ Care' },
    { label: 'Life Transitions in Young Adulthood', value: 'Life Transitions in Young Adulthood' },
    { label: 'Major Depressive Disorder (MDD)', value: 'Major Depressive Disorder (MDD)' },
    { label: 'Maternity / Post Partum', value: 'Maternity / Post Partum' },
    { label: 'Medication-Assisted Treatment', value: 'Medication-Assisted Treatment' },
    { label: 'Menopause', value: 'Menopause' },
    { label: 'Men\'s Health', value: 'Men\'s Health' },
    { label: 'Mood Disorders', value: 'Mood Disorders' },
    { label: 'OCD', value: 'OCD' },
    { label: 'Oppositional Defiant Disorder', value: 'Oppositional Defiant Disorder' },
    { label: 'Panic Disorders (DOS)', value: 'Panic Disorders (DOS)' },
    { label: 'Personality Disorders', value: 'Personality Disorders' },
    { label: 'Post-Partum Depression (PPD)', value: 'Post-Partum Depression (PPD)' },
    { label: 'Premenstrual Dysphoric Disorder (PMDD)', value: 'Premenstrual Dysphoric Disorder (PMDD)' },
    { label: 'Premenstrual Syndrome (PMS)', value: 'Premenstrual Syndrome (PMS)' },
    { label: 'Psychosis', value: 'Psychosis' },
    { label: 'Psychotherapy', value: 'Psychotherapy' },
    { label: 'PTSD', value: 'PTSD' },
    { label: 'Relationships', value: 'Relationships' },
    { label: 'Schizophrenia', value: 'Schizophrenia' },
    { label: 'Sexual Dysfunction', value: 'Sexual Dysfunction' },
    { label: 'Social Anxiety', value: 'Social Anxiety' },
    { label: 'Stress-related', value: 'Stress-related' },
    { label: 'Talk Therapy', value: 'Talk Therapy' },
    { label: 'Tics/Tourette Syndrome', value: 'Tics/Tourette Syndrome' },
    { label: 'Trauma', value: 'Trauma' },
    { label: 'Weight Management', value: 'Weight Management' },
    { label: 'Women\'s Health', value: 'Women\'s Health' }
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
        <div className="assessment1-left assessment4-left">
          <NavLink to="/">
            <div className="homepage">
              <ArrowBackIosIcon style={{ color: 'white' }} />
              <p style={{ color: 'white' }}>Homepage</p>
            </div>
          </NavLink>

          <div className="question">
            <p className="q-no">Question 4 of 4</p>
            <p className="main-q">Are you looking to address any of these conditions?</p>
            <span>Select one answer</span>
          </div>
        </div>

        <div className="assessment2-right assessment4-right">
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
