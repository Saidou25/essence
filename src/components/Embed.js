<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<div id="root"></div>

<style>
.main-container {
  background-color: white;
  width: 100%;
  padding: 10px;
}
.card-title {
  text-align: center;
}
.grey-text {
  color: rgb(97, 95, 92);
  text-align: center;
  font-family: Poppins, sans-serif;
}
.navigation-icons {
  display: inline-block;
  display: flex;
  justify-content: center;
}
.icon { width: 24px; height: 24px; cursor: pointer; } 
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
  background-color: orange;
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
  background-color: orange;
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
  width: 15%;
  border-radius: 25px;
padding: 10px;
color: white;
}


</style>

<script>
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

console.log(buttonDisabled)
    if (end) {
      return React.createElement(Finish, { userAnswers });
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
            React.createElement("span", {className: "grey-text"}, "Please rate how much you agree with the following statement:"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("br"),
            React.createElement("h2", {className: "grey-text"}, currentQuestion.questionStatment),
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
                  disabled:  style: { cursor: buttonDisabled ? 'not-allowed' : 'pointer' },
                  onClick: handleSubmit,
                },
                "SUBMIT"
              )
            )
          ),
          React.createElement("br")
        )
      )
    );
  }

  ReactDOM.render(React.createElement(Questions), document.getElementById('root'));
</script>





  

