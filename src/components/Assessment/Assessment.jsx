import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Assessment1 from './Assessment1/Assessment1';
import Assessment2 from './Assessment2/Assessment2';
import Assessment3 from './Assessment3/Assessment3';
import Assessment4 from './Assessment4/Assessment4';

const Assessment = () => {
  const [question, setQuestion] = useState(0);

  const methods = useForm({
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: ''
    }
  });

  const { handleSubmit, getValues } = methods;

  useEffect(() => {
    console.log(getValues());
  }, [getValues]);

  const nextQuestion = () => setQuestion((prev) => Math.min(prev + 1, 3));
  const prevQuestion = () => setQuestion((prev) => Math.max(prev - 1, 0));

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="assessment-container">
      <div className="assessment-wrapper">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {question === 0 && <Assessment1 nextQuestion={nextQuestion} />}
            {question === 1 && (
              <Assessment2 nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
            )}
            {question === 2 && (
              <Assessment3 nextQuestion={nextQuestion} prevQuestion={prevQuestion} />
            )}
            {question === 3 && (
              <Assessment4 prevQuestion={prevQuestion} handleSubmit={handleSubmit(onSubmit)} />
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Assessment;
