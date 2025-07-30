import { useState } from "react";
import Headerr from "./components/header.jsx";
import BG from "./components/bg.jsx";
import Inputs from "./components/inputs.jsx";
import AddUpdate from "./components/add-update.jsx";
import ClearAll from "./components/clearAll.jsx";
import List from "./components/list.jsx";

export default function NewText() {
  const [list, setList] = useState([]); // for displaying
  const [updatingIndex, setUpdatingIndex] = useState(null); // index which is updating or null

  const DeletebtnClick = (itemIndex) => {
    console.log("Delete button Clicked ", itemIndex);
    const newList = list.filter((element, index) => index !== itemIndex);
    console.log(`Deleted item :- ${list[itemIndex]}`);
    console.log(`New list is :- [${newList}]`);
    setList(newList);
  };

  console.log(`The Original List`, list);

  const undoneDoneBtnClick = (itemIndex) => {
    console.log("Clicked on", itemIndex, "Done/Undone button");
    const newList = list.map((row, index) => {
      if (index === itemIndex) row.isDone = !row.isDone;
      return row;
    });
    setList(newList);
  };

  function handleUpdateItem(text, ttime, date, ussers) {
    const prevTask = list[updatingIndex];
    const newTask = {
      text,
      time: prevTask.time,
      ttime,
      date,
      isDone: prevTask.isDone,
      currdate: prevTask.currdate,
      ussers,
    };
    const newList = list.map((row, index) => {
      if (index === updatingIndex) row = newTask;
      return row;
    });
    setList(newList);
    setUpdatingIndex(null);
    // setText("");
    // setDate("");
    // setTime("");
    // setUssers("")
  }

  const updateBtnClick = (itemIndex) => {
    // console.log("Update Button Clicked!", itemIndex);
    // const item = list[itemIndex];
    // setText(item.text);
    // setDate(item.date);
    // setTime(item.ttime);
    // setUssers(item.ussers);
    setUpdatingIndex(itemIndex);
  };

  const clearAll = () => {
    setUpdatingIndex(null);
    setList([]);
  };

  return (
    <div className="bg-green-200 min-h-screen w-screen justify-center pt-20 flex fixed">
      <BG />
      <div className="ml-4 p-5 z-[1]">
        <Headerr />
        <Inputs
          updatingIndex={updatingIndex}
          list={list}
          handleUpdateItem={handleUpdateItem}
          setList={setList}
        />
        <div className="flex mt-4 mb-9">
          {/* <AddUpdate
            AddbtnClick={AddbtnClick}
            handleUpdateItem={handleUpdateItem}
            updatingIndex={updatingIndex}
          /> */}

          <ClearAll clearAll={clearAll} />
        </div>
        <div>
          <p>
            {list.map((task, index) => (
              <List
                task={task}
                index={index}
                DeletebtnClick={DeletebtnClick}
                undoneDoneBtnClick={undoneDoneBtnClick}
                updateBtnClick={updateBtnClick}
              />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
