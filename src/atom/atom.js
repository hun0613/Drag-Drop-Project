import { atom } from "recoil";

const itemList = atom({
  key: "itemList",
  default: [],
});

const pickItemState = atom({
  key: "pickItemState",
  default: {
    group: 0,
    title: "",
  },
});

const pickImportanceState = atom({
  key: "pickImportanceState",
  default: {
    group: 0,
    title: "",
  },
});

const idState = atom({
  key: "idState",
  default: 1,
});

export { itemList, pickItemState, pickImportanceState, idState };
