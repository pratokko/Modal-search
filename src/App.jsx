import { useState } from "react";
import { BiSearch } from "react-icons/bi";


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-1
        px-0
        md:px-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
      onClick={toggleModal}
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            font-semibold 
            px-2
            md:px-6
          "
        >
          Architecture
        </div>
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          Renders
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">Interior</div>
          <div
            className="
              p-2 
              bg-orange-600 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
      {modalVisible && (
        <div
          className="
            fixed 
            top-0 
            left-0 
            w-full 
            h-full 
            flex 
            items-center 
            justify-center 
            z-50 
            bg-gray-500 
            bg-opacity-50
          "
          onClick={toggleModal}
        >
          <div
            className="
              relative 
              bg-white 
              w-full 
              md:w-[600px] 
              max-h-[calc(100vh-100px)] 
              overflow-y-auto 
              rounded-lg 
              shadow-xl 
              p-8
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="
                text-gray-900 
                font-bold 
                text-2xl 
                mb-4
              "
            >
              What are you looking for?
            </div>

            <div
              className="
                  flex 
                  flex-row 
                  items-center 
                  gap-2
                "
            >
              <input
                type="text"
                placeholder="Search"
                className="
                    w-full 
                    py-2 
                    px-3 
                    text-gray-900 
                    text-sm 
                    font-semibold 
                    outline-none 
                    
                    rounded-lg
                  "
              />
              <button
                className="
                    bg-orange-500 
                    text-white 
                    py-2 
                    px-4 
                    rounded-md 
                    hover:bg-orange-600 
                    transition 
                    duration-300
                  "
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
