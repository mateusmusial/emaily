function AuthButton(props) {
  return (
    <a
      href={props.link}
      className="text-white bg-red-500 hover:bg-red-700 rounded-lg px-4 py-2 text-center block"
    >
      {props.text}
    </a>
  );
}

export default AuthButton;
