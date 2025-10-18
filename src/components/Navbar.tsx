import { navbar_links } from "../helpers/data";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navbar_links?.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center ga-3">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
