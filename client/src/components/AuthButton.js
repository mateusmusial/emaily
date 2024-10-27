function AuthButton(props) {
  return (
    <a
      href={props.link}
      className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
    >
      {props.text}
    </a>
  );
}

export default AuthButton;
