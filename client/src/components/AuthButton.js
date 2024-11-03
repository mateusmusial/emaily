import { FaGoogle } from "react-icons/fa";

function AuthButton(props) {
  return (
    <div className="text-white bg-red-500 hover:bg-red-700 rounded-lg px-4 py-2 text-center flex flex-row space-x-2">
      <FaGoogle className="text-xl pt-1" />
      <a href={props.link}>{props.text}</a>
    </div>
  );
}

export default AuthButton;
