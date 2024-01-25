import { useSetRecoilState } from "recoil";
import { pickItemState } from "../../atom/atom";
import { classifiedDictation } from "../../dict";

const Categorization = () => {
  const setPickItem = useSetRecoilState(pickItemState);

  const handleDragStart = (e, el) => {
    // console.log("start : ", e.target.innerText);
    // console.log(el);
    setPickItem({
      group: el.group,
      title: el.title,
    });
  };

  const handleDragEnd = (e) => {
    console.log("end : ", e.target.innerText);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drop : ", e.target);
  };

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center">
      <div className="text-md mb-5 flex h-fit w-full flex-col items-center justify-center font-NMSNeo3 text-base text-white">
        문항 분류
      </div>
      {classifiedDictation.map((el, idx) => {
        return (
          <div
            key={idx}
            draggable
            onDragStart={(e) => handleDragStart(e, el)}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            className="mb-3 flex h-fit w-[60%] cursor-pointer flex-col items-center justify-center rounded-md bg-itemColor p-2 font-NMSNeo4 text-sm text-sideBarColor hover:bg-itemColor/80"
          >
            {el.title}
          </div>
        );
      })}
    </div>
  );
};

export default Categorization;
