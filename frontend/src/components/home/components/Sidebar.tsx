import { Link } from "react-router-dom";
import "./sidebar.css";
import imagem from "../../../imgs/cliente.jpg";
import { useState } from "react";
function Sidebar() {
  let [hidden, setHidden] = useState(true);

  return (
    <>
      <nav className="sidebar">
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={function () {
              setHidden(!hidden);
            }}
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>

            {hidden && (
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
            {!hidden && (
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-col">
          <Link className="btn m-2 sm:w-28" to="">
            Clientes{" "}
          </Link>

          <Link className="btn m-2 sm:w-28" to="">
            Barbeiros
          </Link>

          <Link className="btn m-2 sm:w-28" to="">
            ADM
          </Link>
          <Link className="btn m-2 sm:w-28 sm:mt-16" to="">
            Pendentes
          </Link>
        </div>

        <div className="flex sm:flex-col items-center">
          <Link to={""} className="m-2">
            <img
              src={imagem}
              width="80px"
              height="80px"
              alt="Imagem de usuário"
            />
          </Link>
        </div>
      </nav>
      {!hidden && (
        <nav className="menu sm:hidden transition-opacity rounded-b-2xl">
          <div className="flex flex-col">
            <Link className="btn m-2 sm:w-28" to="">
              Clientes{" "}
            </Link>

            <Link className="btn m-2 sm:w-28" to="">
              Barbeiros
            </Link>

            <Link className="btn m-2 sm:w-28" to="">
              ADM
            </Link>
            <Link className="btn m-2 sm:w-28 sm:mt-16" to="">
              Pendentes
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}

export default Sidebar;
