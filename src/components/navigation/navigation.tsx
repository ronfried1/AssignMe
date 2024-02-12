import Menu from "../menu/menu";
import Options from "../options/options";

const Navigation = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <Menu />
      </div>
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          R&R Shavtzak
        </a>
      </div>
      <div className="flex-none">
        <Options />
      </div>
    </div>
  );
};

export default Navigation;
