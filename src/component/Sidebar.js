import Categorization from "./sideBarCategory/Categorization";
import Importance from "./sideBarCategory/Importance";

const Sidebar = () => {
  return (
    <div className="sticky top-5 flex h-fit w-1/5 flex-col items-center justify-center rounded-xl bg-sideBarColor px-5 py-10 text-white drop-shadow-md">
      <Categorization />
      <Importance />
    </div>
  );
};

export default Sidebar;
