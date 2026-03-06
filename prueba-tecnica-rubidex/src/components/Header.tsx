import SearchRepositoriesForm from "./SearchRepositoriesForm";

export function Header() {
  return (
    <header className="backdrop-blur-sm sticky top-0 z-10 border-b border-b-text/15">
      <div className="flex items-center px-6 py-4">
        <h1>
          Buscador de Repositorios <br /> en Github
        </h1>
        <div className="flex flex-1">
          <SearchRepositoriesForm />
        </div>
      </div>
    </header>
  );
}

export default Header;
