import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { idState, itemList } from "../atom/atom";
import ListContent from "./listContent/ListContent";

const ListContainer = () => {
  const [list, setList] = useRecoilState(itemList);
  const [id, setId] = useRecoilState(idState);
  // 문항추가 버튼 클릭 실행 함수
  const handleClickAddBtn = () => {
    let dataArr = [...list];

    // 각 요소 별 초기값 삽입
    dataArr.push({
      id: id,
      category: "",
      importance: "",
      content: "",
    });

    setId(id + 1);
    setList(dataArr);
  };

  const onDragEnd = ({ source, destination }) => {
    console.log(source, destination);
    if (!destination) return;

    let dataArr = [...list];

    let destinationEl = dataArr[source.index];

    dataArr.splice(source.index, 1);
    dataArr.splice(destination.index, 0, destinationEl);

    setList(dataArr);
  };

  // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  // --- requestAnimationFrame 초기화 END

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="mb-10 ml-3 flex h-fit min-h-[100px] w-4/5 flex-col items-center justify-center rounded-xl bg-listContainerColor p-10 drop-shadow-md">
          <Droppable key="dropId" droppableId="dropId">
            {(provided, snapshot) => (
              <div
                key="dropId"
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="h-fit w-full rounded-xl bg-listContainerColor"
              >
                {list &&
                  list.map((el, idx) => {
                    return (
                      <Draggable
                        key={el.id}
                        draggableId={el.id.toString()}
                        index={idx}
                      >
                        {(provided, snapshow) => (
                          <ListContent
                            innerRef={provided.innerRef}
                            provided={provided}
                            index={idx}
                            data={el}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <button
            onClick={handleClickAddBtn}
            className="flex h-fit w-32 flex-col items-center justify-center rounded-md bg-sideBarColor p-2 font-NMSNeo3 text-sm text-white hover:bg-sideBarColor/80"
          >
            문항 추가
          </button>
        </div>
      </DragDropContext>
    </>
  );
};

export default ListContainer;
