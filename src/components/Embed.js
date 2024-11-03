<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<div id="root"></div>

<style>
.main-container {
    background-color: white;
    width: 100%;
    padding: 10px;
}
.grey-text {
  color: rgba(98, 96, 94, 0.913);
  margin-bottom: 3%;
  text-align: center;
  margin-top: 3%;
}
.container-illustration {
max-width: 40%;
margin: auto;
text-align: center;
}
.illustration {
    max-width: 100%;
    height: auto;
}
.buttons-div {
    max-width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.button {
  cursor: pointer;
  border: none;
  padding: 10px;
  margin: 5px;
}
.button-selected {
    cursor: pointer;
    border: none;
    padding: 10px;
    background-color: orange;
    margin: 5px;
}
.no-response {
    cursor: pointer;
    border: none;
    padding: 10px;
    margin: 5px;
}
    .button:hover,
    .no-response:hover {
      background-color: orange;
      color: white
    }
.no-response-selected {
      cursor: pointer;
      padding: 10px;
      border: none;
      background-color: orange;
}
.button-submit-div {
      display: flex;
      justify-content: center;
      margin-top: 4%;
      margin-bottom: 4%;
}
.button-submit {
  cursor: pointer;
  border: none;
  background-color: orange;
  padding: 10px;
width: 10%;
border-radius: 25px;
}
.button-submit:hover {
  cursor: pointer;
  border: none;
  background-color: orange;
  padding: 10px;
  color: white;
}
.navigation-icons {
  display: inline-block;
  display: flex;
  justify-content: center;
}

.card-title {
  text-align: center;
}
.aspect {
    text-align: center;
    color: rgba(98, 96, 94, 0.913);
    margin-bottom: 3%;

}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-selected.orange {
  background-color: orange;
  color: white;
}

  .navigation-icons { display: flex; justify-content: space-between; }
  .icon { width: 24px; height: 24px; cursor: pointer; }
</style>

<script>
const questionsData = [
  {
    questionNumber: 1,
    questionStatment: "I Know Thyself… Spirit, Heart, Body, Mind, and Soul.",
    userSelfRating: "",
    illustration: "https://assets.zyrosite.com/mP47Mwo0WQhVBkl5/image1-Yyv300gMqjCN0XZb.jpg",
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

      const scales = ["Strongly Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Strongly agree"]

      const currentQuestion = questionsData[currentQuestionIndex];

      const resetFormState = () => {
        setFormState((prevState) => ({
          ...prevState,
          noResponse: "No response",
          userSelfRating: 0,
        }));
      };

  const handleRatingClick = (value) => {
console.log("clicked an answer");
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
console.log("clicked go back");
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
console.log("clicked next question");
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
console.log(forwardDisabled)
      const handleSubmit = () => {
console.log("answer submitted");
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
    console.log(userAnswers);
    setButtonDisabled(true);
    if (userAnswers.length === 0) {
      return;
    }
    // console.log("user answers", userAnswers);
    const answeredQuestion = userAnswers.find(
      (userAnswer) => userAnswer.questionNumber - 1 === currentQuestionIndex
    );
    // console.log(answeredQuestion);
    if (answeredQuestion) {
      console.log(answeredQuestion.userSelfRating);
      setStoredUserSelfRating(answeredQuestion.userSelfRating);
      setIsSelected(answeredQuestion.userSelfRating - 1);
    } else {
      setForwardDisabled(true);
    }
  }, [userAnswers, currentQuestionIndex]);


    if (end) {
      return React.createElement(Finish, { userAnswers });
    }

    return React.createElement('div', {className: "main-container"},
      React.createElement('div', { className: 'card' },
        React.createElement('div', { className: 'card-title' },
        React.createElement('h2', {className: "grey-text"}, `Question ${currentQuestion.questionNumber} of 44`)
        ),
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
        React.createElement('h2', {className: "aspect"}, currentQuestion.questionStatment),
        React.createElement('div', {className: 'container-illustration'},
            React.createElement('img', {className: "illustration", src: currentQuestion.illustration, alt: ""})
        ),
        React.createElement('div', {className: "grey-text"}, 'Please rate how much you agree with the above statement.'),
        React.createElement('div', {className: "buttons-div"},
        React.createElement('div', {className: "rating-buttons"},
         scales.map((scale, index) =>
            React.createElement('button', {
              key: index,
              className: isSelected === index ? 'button-selected' : 'button',
              type: "button",
              onClick: () => handleRatingClick(index + 1)
            }, scale)
          )),

          React.createElement('button', {
            className: isSelected === -1 || pass ? "no-response-selected" : "no-response",
            type: "button",
            onClick: () => handleRatingClick(0)
          }, 'No Response')
        ),
        
      ),
      React.createElement("div", {className: "button-submit-div"}, 
      React.createElement('button', {
        type: "button",
        className: 'button-submit',
        disabled: buttonDisabled,
        onClick: handleSubmit
      }, "submit")
    ));
  }

  ReactDOM.render(React.createElement(Questions), document.getElementById('root'));
</script>





  

