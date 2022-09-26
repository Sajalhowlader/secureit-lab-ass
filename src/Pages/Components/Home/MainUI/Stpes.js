import React from "react";
import StepProgressBar from "react-step-progress";

import "react-step-progress/dist/index.css";
const Stpes = () => {
  const step1Content = (
    <div>
      <p className="progressTitleOne">
        01. IS THERE SMOKE ALARM SYSTEM INSTALLED AT YOUR WORKPLESS
      </p>
      <div className="stepOneInfo">
        <div>
          <li>yes</li>
          <li>yes</li>
          <li>yes</li>
          <li>yes</li>
        </div>
        <div>
          <li>yes</li>
          <li>yes</li>
          <li>yes</li>
          <li>yes</li>
        </div>
      </div>
    </div>
  );
  const step2Content = <h1>Step 2 Content</h1>;
  const step3Content = <h1>Step 3 Content</h1>;
  const step4Content = <h1>Step 3 Content</h1>;

  function step2Validator() {
    // return a boolean
    return true;
  }

  function step3Validator() {
    // return a boolean
    return true;
  }
  function step4Validator() {
    // return a boolean
    return true;
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  return (
    <div className="stpesProgress">
      <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={[
          {
            label: "Step 1",
            subtitle: "25%",
            name: "step 1",
            content: step1Content,
          },
          {
            label: "Step 2",
            subtitle: "50%",
            name: "step 2",
            content: step2Content,
            validator: step2Validator,
          },
          {
            label: "Step 3",
            subtitle: "75%",
            name: "step 3",
            content: step3Content,
            validator: step3Validator,
          },
          {
            label: "Step 4",
            subtitle: "100%",
            name: "step 4",
            content: step4Content,
            validator: step4Validator,
          },
        ]}
      />
    </div>
  );
};

export default Stpes;
