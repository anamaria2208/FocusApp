// import from react
import { useState } from "react";

//import from libraries
import {
  CheckCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const OneThing = ({ thing }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const motivationalMessages = [
    "Awesome! Keep going",
    "You rock!",
    "One step closer to success!",
    "We are proud of You",
    "You are Task Ninja",
  ];

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = () => {
    setIsCompleted(true);
    jsConfetti.addConfetti({
      emojis: ["🌈", "✨", "💫", "🌸", "🦄"],
      confettiRadius: 10,
      confettiNumber: 200,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      {!isCompleted && <h1 className="text-6xl font-bold mb-2">{thing}</h1>}
      {isCompleted && (
        <h1 className="text-6xl font-bold mb-2">
          {
            motivationalMessages[
              randomIntFromInterval(0, motivationalMessages.length - 1)
            ]
          }
        </h1>
      )}
      {!isCompleted && (
        <>
          <div
            className="tooltip tooltip-warning tooltip-bottom"
            data-tip="Mark as Done"
          >
            <button>
              <CheckCircleIcon
                className="h-14 w-14 text-center cursor-pointer hover:text-green-700 dark:hover:text-green-600"
                onClick={handleClick}
              />
            </button>
          </div>
        </>
      )}
      {isCompleted && (
        <>
          <div className="tooltip tooltip-bottom tooltip-warning" data-tip="Back to Homepage">
            <a href="/">
              <ArrowLeftCircleIcon
                className="h-14 w-14 text-center cursor-pointer hover:text-green-700 dark:hover:text-green-600"
                title="Go to home page"
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default OneThing;
