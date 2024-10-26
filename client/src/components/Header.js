import logoEmaily from "../img/emaily-logo.png";

function Header() {
  return (
    <nav className="">
      <div className="flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logoEmaily} className="h-8" alt="Emaily Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Emaily
          </span>
        </a>
        <ul>
          <li>
            <a
              href="/auth/google"
              className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Login With Google
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
