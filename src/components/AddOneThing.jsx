import { BeakerIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const AddOneThing = ({ handleSubmit, setThing, thing }) => {
  return (
    <>
      <h1 className="text-6xl font-bold	m-10">What is your "One Thing"?</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center flex-row items-center min-w-[15%] w-full max-w-sm"
      >
        <input
          type="text"
          autoFocus
          placeholder='Enter Your "One thing..."'
          className=" min-w-full h-14 mr-2 rounded-lg border-none focus:ring-4 focus:ring-green-700 dark:text-black dark:focus:ring-green-600"
          value={thing}
          onChange={(e) => setThing(e.target.value)}
        />
        <div className="tooltip tooltip-warning" data-tip="Submit Your One Thing">
          <button type="submit" data-tooltip-target="tooltip-default">
            <ArrowRightCircleIcon
              className="h-14 w-14 text-center cursor-pointer hover:text-green-700 dark:hover:text-green-600"
              type="submit"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddOneThing;
