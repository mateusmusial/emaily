import { FaGoogle } from "react-icons/fa";

function AuthButton(props) {
  return (
    <div className="">
      <a
        href={props.link}
        className="inline-flex items-center space-x-2 text-white bg-red-500 hover:bg-red-700 rounded-lg px-4 py-2 text-center"
      >
        <FaGoogle />
        <span>{props.text}</span>
      </a>
    </div>
  );
}

export default AuthButton;
