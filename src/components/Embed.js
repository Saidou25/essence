<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<div id="root"></div>

<style>
    // css for Finish
    .finish-main-container {
  width: 100%;
  margin: auto;
}
.finish-titles {
    color: #615f5c;
  text-align: center;
  margin: 5% 0 10% 0; /* top, right, bottom, left */
  font-family: sans-serif;
}
.score-today {
    text-align: center;
    margin-bottom: 4%;
    color: #615f5c;
}
.results-table {
  margin: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 9px solid black;
  width:69%;
}
.class-tr-top {
    background-color: #aeb5b0
}
.class-tr-bottom {
    background-color: #fefefe;
}
.class-th {
  border-bottom: 1px solid grey;
  border-color: grey;
  font-family: Anton, sans-serif;
  font-size: 24px;
  color: black;
  height: 50px;
  text-align: center;
  padding: 2%;
  width: 33%;
}
.class-td {
  border-right: 2px solid #c3c2c2;
  text-align: center;
  width: 33%;
  font-family: sans-serif;
  font-size: 28px;
//   color: #615f5c;
color: black;
}
.class-td-perspective {
  height: 100px;
  text-align: center;
  width: 33%;
  font-family: sans-serif;
//   color: #615f5c;
color: black;
}
.thank-you {
    text-align: center;
    margin: 10%;
}
    // css for Questions
.main-container {
  background-color: #dbe2dd;
  width: 100%;
  padding-top: 5%;
}
.card-title {
  text-align: center;
}
.grey-text {
  color: #615f5c;
  text-align: center;
  font-family: Poppins, sans-serif;
}
.navigation-icons {
  display: inline-block;
  display: flex;
  justify-content: center;
}
.icon { width: 24px; height: 24px; cursor: pointer; margin-bottom: 3%;} 
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.container-illustration {
  max-width: 60%;
  margin: auto;
  text-align: center;
}
.illustration {
  max-width: 100%;
  height: auto;
}
.please-rate {
  color: #615f5c;
  text-align: center;
  letter-spacing: 1px;
  font-size: 18px;
}
.assest {
  color: #615f5c;
  text-align: center;
  font-size: 30px;

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
  color: rgb(97, 95, 92);
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
  margin-bottom: 7%;
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
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/aspect-1-mP4nMR2wVqUBM9jJ.jpg",
  },
  {
    questionNumber: 2,
    questionStatment:
      "I accept myself. I accept the infinite. I accept that I am infinite.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/image2-dJo6bbQn3jIekBe1.jpg"
  },
  {
    questionNumber: 3,
    questionStatment: "I am connected as One with all aspects of the Universe.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/image3-A85wVVXgRJfLBlXR.jpg",
  },
  {
    questionNumber: 4,
    questionStatment:
      "I live harmoniously in balance with myself and all of Nature.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/4-ALpnPeqrVXs9BXny.png",
  },
  {
    questionNumber: 5,
    questionStatment:
      "I am living fully in the present moment, open to all possibilities.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 6,
    questionStatment:
      "I am deeply connected with my Spirit energy, which protects and guides me.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 7,
    questionStatment:
      "I generate heart energy to experience greater love, joy, compassion, forgiveness, freedom and peace.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 8,
    questionStatment:
      "The stronger I make my body the more energy I can hold and emit.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 9,
    questionStatment: "My mind is filled with positive thoughts.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 10,
    questionStatment: "I respect myself, everyone, and everything.",
    userSelfRating: "",
    illustration: "./src/assets/images/10.jpg",
  },
  {
    questionNumber: 11,
    questionStatment: "I continue to learn throughout my lifetime.",
    userSelfRating: "",
    illustration: "./src/assets/images/11.jpg",
  },
  {
    questionNumber: 12,
    questionStatment:
      "I rely on my wisdom to make conscious choices for my life.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 13,
    questionStatment: "I am fulfilled by serving my life purpose.",
    userSelfRating: "",
    illustration: "./src/assets/images/13.jpg",
  },
  {
    questionNumber: 14,
    questionStatment:
      "I am open to, and accept, all changes that support my life purpose.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 15,
    questionStatment: "I accept what is, as it is, when it is.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 16,
    questionStatment:
      "I live a heart-centered life, making heart-centered decisions.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 17,
    questionStatment:
      "I forgive myself and others, as we are all teachers for one another. Forgiveness is my path to freedom.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 18,
    questionStatment:
      "I AM whole, fully embracing all Aspects of my Self, including my shadows.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 19,
    questionStatment: "I unconditionally love myself.",
    userSelfRating: "",
    illustration: "./src/assets/images/19.jpg",
  },
  {
    questionNumber: 20,
    questionStatment: "I live my life with a pure and honest heart.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 21,
    questionStatment: "I inspire others by being my authentic self.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 22,
    questionStatment: "I live my truth, as it protects me.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 23,
    questionStatment: "I trust myself and others.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 24,
    questionStatment: "I am clear and confident, humble and bold.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 25,
    questionStatment:
      "I experience inner peace as a result of doing my inner work.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 26,
    questionStatment: "I surrender my personal will to Divine will.",
    userSelfRating: "",
    illustration: "./src/assets/images/26.jpg",
  },
  {
    questionNumber: 27,
    questionStatment:
      "I listen to the rhythm of my Soul. And I trust the Creator’s pace.",
    userSelfRating: "",
    illustration: "./src/assets/images/27.jpg",
  },
  {
    questionNumber: 28,
    questionStatment: "I live my life with bravery.",
    userSelfRating: "",
    illustration: "./src/assets/images/28.jpg",
  },
  {
    questionNumber: 29,
    questionStatment:
      "I will continue to persevere on my journey until I manifest my true heart’s desires and fulfill my life purpose.",
    userSelfRating: "",
    illustration: "./src/assets/images/29.jpg",
  },
  {
    questionNumber: 30,
    questionStatment:
      "I am at peace with myself, and grateful in every area of my life.",
    userSelfRating: "",
    illustration: "./src/assets/images/30.jpg",
  },
  {
    questionNumber: 31,
    questionStatment: "I am humble and kind.",
    userSelfRating: "",
    illustration: "./src/assets/images/31.jpg",
  },
  {
    questionNumber: 32,
    questionStatment: "I live a simple life with very little drama.",
    userSelfRating: "",
    illustration: "./src/assets/images/32.jpg",
  },
  {
    questionNumber: 33,
    questionStatment:
      "I work in collaboration with others to help fuel our collective success.",
    userSelfRating: "",
    illustration: "./src/assets/images/33.jpg",
  },
  {
    questionNumber: 34,
    questionStatment:
      "With vision, every human challenge is possible to overcome.",
    userSelfRating: "",
    illustration: "./src/assets/images/34.jpg",
  },
  {
    questionNumber: 35,
    questionStatment:
      "My focus inspires me to manifest my vision into reality.",
    userSelfRating: "",
    illustration: "./src/assets/images/35.jpg",
  },
  {
    questionNumber: 36,
    questionStatment:
      "I contemplate my thoughts before I act, choosing to make decisions that support my life.",
    userSelfRating: "",
    illustration: "./src/assets/images/36.jpg",
  },
  {
    questionNumber: 37,
    questionStatment: "I view everyone and everything as equals.",
    userSelfRating: "",
    illustration: "./src/assets/images/37.jpg",
  },
  {
    questionNumber: 38,
    questionStatment:
      "I live my life with compassion for myself and others. I give to give, not give to get.",
    userSelfRating: "",
    illustration: "./src/assets/images/38.jpg",
  },
  {
    questionNumber: 39,
    questionStatment:
      "I am an aspect of the togetherness that bonds our unified community.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 40,
    questionStatment: "I am free!",
    userSelfRating: "",
    illustration: "./src/assets/images/40.jpg",
  },
  {
    questionNumber: 41,
    questionStatment:
      "I am fulfilled by giving to others. I am fulfilled by receiving from others.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 42,
    questionStatment: "I live a prosperous life.",
    userSelfRating: "",
    noResponse: "",
  },
  {
    questionNumber: 43,
    questionStatment:
      "I send thoughts of love, and love returns in overflowing measure.",
    userSelfRating: "",
    illustration: "./src/assets/images/43.jpg",
  },
  {
    questionNumber: 44,
    questionStatment:
      "I live in harmony with Nature, for I am Nature. Conscious and regenerative living aligns with who I am.",
    userSelfRating: "",
    noResponse: "",
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
    const [end, setEnd] = React.useState(true);
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

console.log(buttonDisabled)
    if (end) {
        return React.createElement("div", { className: "finish-main-container" },
            React.createElement("h1", { className: "finish-titles" }, "ESSA44 Test Results"),
            
            React.createElement("h2", { className: "score-today" },
              "Your Score for Today is: " + 
              (Math.round((44 / totalRating) * 100 * 100) / 100) + "%"
            ),
            
            React.createElement("table", { className: "results-table" },
              React.createElement("thead", null,
                React.createElement("tr", { className: "class-tr-top" },
                //   React.createElement("th", { className: "class-th" }, "Date of Round"),
                  React.createElement("th", { className: "class-th" }, "ESSA44 Awakening %"),
                  React.createElement("th", { className: "class-th" }, "State of Awareness"),
                  React.createElement("th", { className: "class-th" }, "Current Perspective")
                )
              ),
              
              React.createElement("tbody", null,
                resultsData && resultsData.map((result, index) =>
                  totalAssessment >= result.minPercentage &&
                  totalAssessment <= result.maxPercentage &&
                    React.createElement("tr", { key: index, className: "class-tr-bottom" },
                    //   React.createElement("td", { className: "class-td" }, formattedDate),
                      React.createElement("td", { className: "class-td" }, result.percentage),
                      React.createElement("td", { className: "class-td" }, result.awakeness),
                      React.createElement("td", { className: "class-td-perspective" }, result.perspective)
                    )
                )
              )
            ),
            React.createElement("h2", { className: "thank-you" }, "Thank you for completing our assessment.")
            
          );
          
    }

    return React.createElement(
      'div',
      { className: "main-container" },
      React.createElement("br"),
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
          React.createElement(
            "h2",
            { style: { textAlign: "center" } },
            `${currentQuestion.questionNumber} of 44`
          )
        ),
        React.createElement("br"),
        React.createElement('div', { className: 'navigation-icons' },
          // Inline SVG for back arrow icon
          React.createElement('img', {
            src: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/arrow_back_ios_35dp_434343_fill0_wght400_grad0_opsz40-AzGeNX0P7rH8nWL6.svg",
            onClick: handleGoBack,
            className: 'icon',
          }),
          // Inline SVG for forward arrow icon
          React.createElement('img', {
            onClick: handleNextQuestion,
            className: 'icon',
            src: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/arrow_forward_ios_35dp_434343_fill0_wght400_grad0_opsz40-YBgrb78BqGSxOyLJ.svg",
            style: { cursor: forwardDisabled ? 'not-allowed' : 'pointer' },
          })
        ),
        React.createElement("br"),
        React.createElement(
          "div",
          { className: "card-body", style: { textAlign: "center" } },
         
          React.createElement(
            "div",
            {
              className: "container-illustration",
            },
            React.createElement("img", {
              alt: "illustration",
              src: currentQuestion.illustration,
              className: "illustration"
            })
          ),
          React.createElement("br"),
          React.createElement(
            "div",
            null,
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("span", {className: "please-rate", style: { fontFamily: "Poppins, sans-serif" }}, "Please rate how much you agree with the following statement:"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("h2", {className: "assest", style: { fontFamily: "Poppins, sans-serif" } }, currentQuestion.questionStatment),
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
                  React.createElement("p", { className: "scale-text", style: { fontFamily: "Poppins, sans-serif"} }, index < scales.length ? scales[index] : null),
                  React.createElement("p", { style: { visibility: "hidden", fontFamily: "Poppins, sans-serif" } }, scales[index] === "Neutral" ? "Neutral" : "")
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
                React.createElement("p", { className: "scale-text", style: { fontFamily: "Poppins, sans-serif"} }, "No", React.createElement("div"), "Response"),
                React.createElement("p", { style: { visibility: "hidden", style: { fontFamily: "Poppins, sans-serif" } } })
              )
            ),
            React.createElement("br"),
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





  

