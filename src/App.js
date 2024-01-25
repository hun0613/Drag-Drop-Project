import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ListContainer from "./component/ListContainer";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="flex h-fit min-h-screen w-full min-w-[1028px] flex-col items-center justify-start bg-bgColor">
        <div className="flex h-fit w-full max-w-[1028px] flex-col items-center justify-center">
          {/* header */}
          <div className="flex h-24 w-full flex-row items-center justify-center font-NMSNeo5 text-xl text-titleColor">
            문항설계시스템
          </div>
          <div className="flex w-full flex-row items-start justify-center">
            <Sidebar />
            <ListContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
