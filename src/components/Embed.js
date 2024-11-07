<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_left,arrow_right" />



<div id="root"></div>




<style>
    span.material-symbols-outlined.icon-style {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 60;
        font-size: 60px;  /* Physical size */
        padding: 20px;
    }
    // css for Finish
    .finish-main-container {
  width: 100%;
  margin: auto;
}
.finish-titles {
    // color: #615f5c;
    letter-spacing: 1px;
    color: black;
  text-align: center;
  font-size: 38px;
//   margin: 5% 0 10% 0; /* top, right, bottom, left */
  font-family: Anton, sans-serif;
}
.score-today {
    text-align: center;
    margin: 4% 0;
    color: black;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    // color: #615f5c;
}
.results-table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 9px solid black;
  width:66%;
}
.class-top {
    background-color: #c7cec9;
}
.class-bottom {
    background-color: #fefefe
}
.class-th {
  border-bottom: 1px solid grey;
  border-color: grey;
  font-family: Anton, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 26px;
  color: black;
  text-align: center;
  padding: 1% 7% 1% 7%;
  width: 22%;
  
}
.class-td {
  border-right: 2px solid #c3c2c2;
  border-bottom: 1px solid #c3c2c2;
  text-align: center;
  width: 22%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 28px;
  height: 50px;
//   color: #615f5c;
  color: black;
}
.class-td-perspective {
  border-bottom: 1px solid #c3c2c2;
  height: 100px;
  text-align: center;
  width: 22%;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 28px;
  height: 50px;
//   color: #615f5c;
color: black;
}
.thank-you {
    text-align: center;
    margin: 3% 3%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
    // css for Questions
.main-container {
  background-color: #dbe2dd;
  width: 100%;
  padding-top: 5%;
}
.card-title {
  text-align: center;
  color: black;
}
.grey-text {
//   color: #615f5c;
color: black;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.navigation-icons {
  display: inline-block;
  display: flex;
  justify-content: center;
}
{/* .icon { width: 24px; height: 24px; cursor: pointer; margin-bottom: 3%;}  */}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container-illustration {
  max-width: 60%;
  margin: auto;
//   text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.illustration {
  max-width: 100%;
  height: auto;
}
.please-rate {
//   color: #615f5c;
color: black;
  text-align: center;
  letter-spacing: 1px;
  font-size: 18px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.assest {
//   color: #615f5c;
color: black;
  text-align: center;
  font-size: 30px;
  font-family: Anton, sans-serif;
  letter-spacing: 1px;

}
.button-line-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 120px;
}
.button-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.button-selected {
  background-color: #e37d37;
  position: relative;
  cursor: pointer;
  border: none;
  padding: 20px;
  border-radius: 50%;
  z-index: 1;
}
.button {
  position: relative;
  cursor: pointer;
  border: none;
  padding: 20px;
  border-radius: 50%;
  z-index: 1;
}
.button-line {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  z-index: 0;
  background-color: #dbd3d3;
  height: 2px;
}
/* Line for the first button: starts at the button center and extends to the right */
.button-line-start {
  left: 50%; /* Start from the center of the button */
  right: 0; /* Extend to the right edge of the container */
}

/* Line for buttons in the middle (index 1, 2, and 3): extends across the entire container */
.button-line-full {
  left: 0; /* Start from the left edge */
  right: 0; /* Extend to the right edge */
}
/* Line for the last button: starts from the left and stops at the button center */
.button-line-end {
  left: 0; /* Start from the left edge */
  right: 50%; /* Stop at the button center */
}
.scale-text {
  width: 90px;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
//   color: rgb(97, 95, 92);
color: black;
}
.button:hover,
.no-response:hover {
  background-color: rgb(144, 142, 137);
}
.no-response-selected {
  position: relative;
  cursor: pointer;
  border: none;
  padding: 20px;
  border-radius: 50%;
  z-index: 1;
  background-color: #e37d37;
}
.no-response {
  position: relative;
  cursor: pointer;
  border: none;
  padding: 20px;
  border-radius: 50%;
  z-index: 1;
}
.button-submit-wrapper:hover .button-submit {
  background-color: #267b7d;
  cursor: not-allowed;
}
.button-submit {
  cursor: pointer;
  border: none;
  background-color: #e37d37;
  width: 13%;
  border-radius: 25px;
  padding: 10px;
  color: white;
  letter-spacing: 2px;
}


</style>

<script>
const resultsData = [
  {
    tile: "",
    minPercentage: 96,
    maxPercentage: 100,
    percentage: "96-100%",
    awakeness: "Awake",
    perspective: "Awakened",
  },
  {
    tile: "",
    minPercentage: 81,
    maxPercentage: 95,
    percentage: "81-95%",
    awakeness: "Almost Awake",
    perspective: "Seeker",
  },
  {
    tile: "",
    minPercentage: 61,
    maxPercentage: 80,
    percentage: "61-80%",
    awakeness: "Awaking",
    perspective: "Seeker",
  },
  {
    tile: "",
    minPercentage: 41,
    maxPercentage: 60,
    percentage: "41-60%",
    awakeness: "Seeking",
    perspective: "Seeker",
  },
  {
    tile: "",
    minPercentage: 21,
    maxPercentage: 40,
    percentage: "21-40%",
    awakeness: "Waking Up",
    perspective: "Sleeping Soul",
  },
  {
    tile: "",
    minPercentage: 0,
    maxPercentage: 20,
    percentage: "0-20%",
    awakeness: "Asleep",
    perspective: "Sleeping Soul",
  },
];
const questionsData = [
  {
    questionNumber: 1,
    questionStatment: "I Know Thyself… Spirit, Heart, Body, Mind, and Soul.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/esa44-self-awareness-mjEvb154DbcreEeD.jpg",
  },
  {
    questionNumber: 2,
    questionStatment:
      "I accept myself. I accept the infinite. I accept that I am infinite.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/esa44-infinite-being-AR0yWjV1qkf4bL51.jpg"
  },
  {
    questionNumber: 3,
    questionStatment: "I am connected as One with all aspects of the Universe.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/esa44-balance-A3Qw9LrlWlHE6a4a.jpg",
  },
  
];

  function Finish({ userAnswers }) {
    const totalRating = userAnswers.reduce((total, answer) => total + (answer.userSelfRating || 0), 0);
    return React.createElement('div', null,
      React.createElement('div', null, "Thank you for completing the survey!"),
      React.createElement('span', null, `Your total for the assessment is: ${(totalRating / (questionsData.length * 5)) * 100}%`)
    );
  }

  function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [pass, setPass] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [forwardDisabled, setForwardDisabled] = React.useState(true);
    const [userAnswers, setUserAnswers] = React.useState([]);
    const [end, setEnd] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState("");
    const [storedUserSelfRating, setStoredUserSelfRating] = React.useState("");
    const [formState, setFormState] = React.useState({
        questionNumber: questionsData[0].questionNumber,
        questionStatment: questionsData[0].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });

      const scales = ["Strongly Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Strongly agree"];  
      const buttons = [1, 2, 3, 4, 5];

      const currentQuestion = questionsData[currentQuestionIndex];

      let totalRating = 0;
      // let totalRating = 34;
      const totalAssessment = (totalRating / 220) * 100;
      console.log(totalAssessment);
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const formattedDate = `${month + 1}/${day}/${year}`;
    
      for (let userAnswer of userAnswers) {
        totalRating += Number(userAnswer.userSelfRating); // Convert to number to avoid string concatenation
      }

      const resetFormState = () => {
        setFormState((prevState) => ({
          ...prevState,
          noResponse: "No response",
          userSelfRating: 0,
        }));
      };

  const handleRatingClick = (value) => {
    setPass(false);
    setIsSelected(value - 1);

    // Update formState only, not userAnswers
    setFormState((prevState) => ({
      ...prevState,
      userSelfRating: value,
      noResponse: "",
    }));
    setButtonDisabled(false); // Enable the submit button when a rating is selected
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      const previousQuestionIndex = currentQuestionIndex - 1;
      const previousAnswer = userAnswers.find(
        (userAnswer) => userAnswer.questionNumber === previousQuestionIndex + 1
      );

      if (previousAnswer) {
        setForwardDisabled(false);
        setFormState({
          questionNumber: previousAnswer.questionNumber,
          questionStatment: previousAnswer.questionStatment,
          userSelfRating: previousAnswer.userSelfRating,
          noResponse: previousAnswer.noResponse,
        });
        setIsSelected(previousAnswer.userSelfRating - 1);
      }

      setCurrentQuestionIndex(previousQuestionIndex);
      setButtonDisabled(true);
      setPass(false);
    }
  };

  const handleNextQuestion = () => {
    if (forwardDisabled) return; // Prevent navigation if forwardDisabled is true
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: storedUserSelfRating,
        noResponse: "",
      });
      setButtonDisabled(true);
      setPass(false);
      setIsSelected("");
    }
  };

      const handleSubmit = () => {
    // Store formState in userAnswers only on submission
    setUserAnswers((prev) => {
      const existingAnswerIndex = prev.findIndex(
        (answer) => answer.questionNumber === formState.questionNumber
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prev];
        updatedAnswers[existingAnswerIndex] = { ...formState };
        return updatedAnswers;
      } else {
        return [...prev, { ...formState }];
      }
    });

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFormState({
        questionNumber: questionsData[currentQuestionIndex + 1].questionNumber,
        questionStatment:
          questionsData[currentQuestionIndex + 1].questionStatment,
        userSelfRating: "",
        noResponse: "",
      });
      
      setPass(false);
      setIsSelected("");
    } else {
      setEnd(true);
    }
  };

  React.useEffect(() => {
    setButtonDisabled(true);
    if (userAnswers.length === 0) {
      return;
    }
    const answeredQuestion = userAnswers.find(
      (userAnswer) => userAnswer.questionNumber - 1 === currentQuestionIndex
    );
    if (answeredQuestion) {
      setStoredUserSelfRating(answeredQuestion.userSelfRating);
      setIsSelected(answeredQuestion.userSelfRating - 1);
    } else {
      setForwardDisabled(true);
    }
  }, [userAnswers, currentQuestionIndex]);

// Load the Poppins font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Anton&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);
// Including the Material Symbols link
const linkElement = React.createElement('link', {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_right',
  });
console.log(buttonDisabled)
    if (end) {
        return React.createElement("div", { className: "finish-main-container" },
            React.createElement("h1", { className: "finish-titles" }, "ESSSENCE Self-Awarness Assessment"),
            React.createElement("h1", { className: "finish-titles" }, "Results"),
            
            React.createElement("h2", { className: "score-today" },
              "Your Score for Today is: " + 
              (Math.round((44 / totalRating) * 100 * 100) / 100) + "%"
            ),
            
            React.createElement("table", { className: "results-table" },
              React.createElement("thead", null,
                React.createElement("tr", { className: "class-top" },
                //   React.createElement("th", { className: "class-th" }, "Date of Round"),
                  React.createElement("th", { className: "class-th" }, "ESA44 Awakening %"),
                  React.createElement("th", { className: "class-th" }, "State of Awareness"),
                  React.createElement("th", { className: "class-th" }, "Current Perspective")
                )
              ),
              
              React.createElement("tbody", null,
                resultsData && resultsData.map((result, index) =>
                  totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage &&
                    React.createElement("tr", { key: index, className: "class-bottom" },
                    //   React.createElement("td", { className: "class-td" }, formattedDate),
                      React.createElement("td", { className: "class-td", style: { height: "70px"} }, result.percentage),
                      React.createElement("td", { className: "class-td" }, result.awakeness),
                      React.createElement("td", { className: "class-td-perspective" }, result.perspective)
                    )
                )
              )
            ),
            React.createElement("h2", { className: "thank-you" }, "Thank you for completing our assessment."),
            React.createElement("table", { className: "results-table" },
                React.createElement("thead", null,
                  React.createElement("tr", { className: "class-top" },
                  //   React.createElement("th", { className: "class-th" }, "Date of Round"),
                    React.createElement("th", { className: "class-th" }, "ESA44 Awakening %"),
                    React.createElement("th", { className: "class-th" }, "State of Awareness"),
                    React.createElement("th", { className: "class-th" }, "Current Perspective")
                  )
                ),
                
                React.createElement("tbody", null,
                  resultsData && resultsData.map((result, index) =>
                      React.createElement("tr", { key: index, className: "class-bottom" },
                        React.createElement("td", { className: "class-td" }, result.percentage),
                        React.createElement("td", { className: "class-td" }, result.awakeness),
                        React.createElement("td", { className: "class-td-perspective" }, result.perspective)
                      )
                  )
                )
              ),          
          );
          
    }

    return React.createElement(
      'div',
      { className: "main-container" },
      React.createElement("h1", { className: "finish-titles" }, "ESSENCE Self-Awareness Assessment"),
      React.createElement(
        "div",
        {
          className: "card",
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          },
        },
        React.createElement(
          "div",
          { className: "card-title grey-text" },
          React.createElement("br"),
          React.createElement(
            "h2",
            { style: { textAlign: "center" } },
            `${currentQuestion.questionNumber} of 44`
          )
        ),


        // React.createElement('div', { className: 'navigation-icons' },
        //   // Inline SVG for back arrow icon
        //   React.createElement('span', 
        //     { onClick: handleGoBack,
        //     className: 'material-symbols-outlined icon-style',
        //   }, 'arrow_left'),
        //   // Inline SVG for forward arrow icon
        //   React.createElement('span', {
        //     onClick: handleNextQuestion,
        //     className: 'material-symbols-outlined icon-style', style: { cursor: forwardDisabled ? 'not-allowed' : 'pointer' },
        //   }, 'arrow_right'),
        // ),




        React.createElement("br"),
        React.createElement(
          "div",
          { className: "card-body", style: { textAlign: "center" } },
         
          React.createElement(
            "div",
            {
              className: "container-illustration",
            },

             // Inline SVG for back arrow icon
          React.createElement('span', 
            { onClick: handleGoBack,
            className: 'material-symbols-outlined icon-style',
          }, 'arrow_left'),

            React.createElement("img", {
              alt: "illustration",
              src: currentQuestion.illustration,
              className: "illustration"
            }),

             // Inline SVG for forward arrow icon
          React.createElement('span', {
            onClick: handleNextQuestion,
            className: 'material-symbols-outlined icon-style', style: { cursor: forwardDisabled ? 'not-allowed' : 'pointer' },
          }, 'arrow_right'),
          ),




          React.createElement("br"),
          React.createElement(
            "div",
            null,
            React.createElement("br"),
            React.createElement("span", {className: "please-rate"}, "Please rate how much you agree with the following statement:"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("h2", {className: "assest" }, currentQuestion.questionStatment),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement(
              "div",
              { className: "button-line-container" },
              buttons.map((button, index) =>
                React.createElement(
                  "div",
                  { className: "button-rating", key: index },
                  React.createElement(
                    "div",
                    { className: "button-wrapper" },
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        className: isSelected === index ? "button-selected" : "button",
                        onClick: () => handleRatingClick(index + 1),
                      }
                    ),
                    index === 0 && React.createElement("div", { className: "button-line button-line-start" }),
                    index > 0 && index < 4 && React.createElement("div", { className: "button-line button-line-full" }),
                    index === 4 && React.createElement("div", { className: "button-line button-line-end" })
                  ),
                  React.createElement("br"),
                  React.createElement("p", { className: "scale-text" }, index < scales.length ? scales[index] : null),
                  React.createElement("p", { style: { visibility: "hidden" } }, scales[index] === "Neutral" ? "Neutral" : "")
                )
              ),
              React.createElement(
                "div",
                { className: "button-rating" },
                React.createElement(
                  "button",
                  {
                    className: isSelected === -1 || pass ? "no-response-selected" : "no-response",
                    type: "button",
                    onClick: () => handleRatingClick(0),
                  }
                ),
                React.createElement("br"),
                React.createElement("p", { className: "scale-text" }, "No", React.createElement("div"), "Response"),
                React.createElement("p", { style: { visibility: "hidden" } })
              )
            ),
            // React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("div", { className: "button-submit-wrapper" },

              React.createElement(
                "button",
                {
                  className: "button-submit",
                  type: "button",
                  style: { cursor: buttonDisabled ? 'not-allowed' : 'pointer' },
                  disabled: buttonDisabled,
                  onClick: handleSubmit,
                },
                "SUBMIT"
              )
            )
          ),
        )
      )
    );
  }

  ReactDOM.render(React.createElement(Questions), document.getElementById('root'));
</script>





  


