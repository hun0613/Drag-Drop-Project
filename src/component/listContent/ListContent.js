import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRecoilState } from "recoil";
import { itemList, pickImportanceState, pickItemState } from "../../atom/atom";

const ListContent = (props) => {
  const { provided, innerRef } = props;

  const [list, setList] = useRecoilState(itemList);
  const [pickItem, setPickItem] = useRecoilState(pickItemState);
  const [pickImportance, setPickImportance] =
    useRecoilState(pickImportanceState);

  // 문항삭제 버튼 클릭 실행 함수
  const handleClickDeleteBtn = () => {
    let data = [...list];

    // 선택한 아이템 삭제
    data.splice(props.index, 1);

    setList(data);
  };

  // 문항 내용 input 실행 함수
  const handleChangeInput = (e) => {
    let data = [...list];

    // 전역변수 리스트의 content값 변경
    data.splice(props.index, 1, {
      id: props.data.id,
      category: props.data.category,
      importance: props.data.importance,
      content: e.target.value,
    });

    setList(data);
  };

  // 문항분류 Drop 이벤트 실행 함수
  const handleClassificationDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (pickItem.group === 1) {
      let data = [...list];
      data.splice(props.index, 1, {
        id: props.data.id,
        category: pickItem.title,
        importance: props.data.importance,
        content: props.data.content,
      });

      setList(data);
      setPickItem({
        group: 0,
        title: "",
      });
    } else {
      toast.error("항목에 적합하지 않습니다", {
        autoClose: 1000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // 중요도 Drop 이벤트 실행 함수
  const handleImportanceDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (pickImportance.group === 2) {
      let data = [...list];
      data.splice(props.index, 1, {
        id: props.data.id,
        category: props.data.category,
        importance: pickImportance.title,
        content: props.data.content,
      });

      setList(data);
      setPickImportance({
        group: 0,
        title: "",
      });
    } else {
      toast.error("항목에 적합하지 않습니다", {
        autoClose: 1000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClickCategorizationDelete = () => {
    let data = [...list];
    data.splice(props.index, 1, {
      id: props.data.id,
      category: "",
      importance: props.data.importance,
      content: props.data.content,
    });

    setList(data);
  };

  const handleClickImportanceDelete = () => {
    let data = [...list];
    data.splice(props.index, 1, {
      id: props.data.id,
      category: props.data.category,
      importance: "",
      content: props.data.content,
    });

    setList(data);
  };

  return (
    <div
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="relative !left-auto !top-auto mb-8 flex h-fit w-full flex-row items-center justify-center rounded-md bg-white p-8 drop-shadow-md"
    >
      <div
        onClick={handleClickDeleteBtn}
        className="absolute right-6 top-6 flex h-fit w-fit cursor-pointer flex-col items-center justify-center font-NMSNeo3 text-xs text-red-500/80 hover:text-red-500/30"
      >
        문항삭제
      </div>
      <div className="flex h-fit w-1/5 flex-col items-center justify-center">
        <div className="mb-3 flex h-fit w-full flex-col items-center justify-center font-NMSNeo4 text-sm text-sideBarColor">
          문항 분류
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleClassificationDrop}
          className="flex h-20 w-full flex-col items-center justify-center rounded-md border border-inputBorderColor bg-itemColor"
        >
          {props.data.category ? (
            <div
              onClick={handleClickCategorizationDelete}
              className="flex h-fit w-fit cursor-pointer flex-col items-center justify-center rounded-md border border-inputBorderColor bg-white p-2 font-NMSNeo4 text-sm text-sideBarColor hover:bg-sideBarColor/40"
            >
              {props.data.category}
            </div>
          ) : null}
        </div>
      </div>
      <div className="ml-10 flex h-fit w-1/5 flex-col items-center justify-center">
        <div className="mb-3 flex h-fit w-full flex-col items-center justify-center font-NMSNeo4 text-sm text-sideBarColor">
          중요도
        </div>
        <div
          onDragOver={handleDragOver}
          onDrop={handleImportanceDrop}
          className="flex h-20 w-full flex-col items-center justify-center rounded-md border border-inputBorderColor bg-itemColor"
        >
          {props.data.importance ? (
            <div
              onClick={handleClickImportanceDelete}
              className="flex h-fit w-fit cursor-pointer flex-col items-center justify-center rounded-md border border-inputBorderColor bg-white p-2 font-NMSNeo4 text-sm text-sideBarColor hover:bg-sideBarColor/40"
            >
              {props.data.importance}
            </div>
          ) : null}
        </div>
      </div>
      <div className="ml-10 flex h-fit w-3/5 flex-col items-center justify-center">
        <div className="mb-3 flex h-fit w-full flex-col items-center justify-center font-NMSNeo4 text-sm text-sideBarColor">
          문항 내용
        </div>
        <input
          type="text"
          value={props.data.content}
          placeholder="문항 내용을 입력하세요"
          onChange={handleChangeInput}
          className="flex h-20 w-full flex-col items-center justify-center rounded-md border border-inputBorderColor bg-itemColor/10 p-3 text-center font-NMSNeo2 text-black/70 outline-none"
        />
      </div>
    </div>
  );
};

export default ListContent;
