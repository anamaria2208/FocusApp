import { useState } from "react";

import OneThing from "./OneThing";
import AddOneThing from "./components/AddOneThing";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [thing, setThing] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    if (thing.length === 0) {
      toast.error("Eror! Must enter a thing", {
        theme: "light",
        autoClose: 5000,
      });
      return;
    }
    setIsSubmitted(true);
  };

  const toggleTheme = () => {
    setTheme("dark");
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col dark:bg-slate-800 dark:text-white">
      <ToastContainer />
      {!isSubmitted && (
        <AddOneThing
          handleSubmit={handleSubmit}
          thing={thing}
          setThing={setThing}
        />
      )}
      {isSubmitted && <OneThing thing={thing} />}
    </div>
  );
}

export default App;
