import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

function Dashboard() {
  return (
    <div className="p-4">
      <div className="">
        <SurveyList />
      </div>
      <div className="fixed bottom-14 right-16 sm:right-20 md:right-24 lg:right-28 xl:right-32 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full">
        <Link className="" to="/surveys/new">
          <FaPlus className="text-4xl" />
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
