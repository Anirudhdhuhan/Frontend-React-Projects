import { useEffect, useState } from "react";
import Dropdown from "./dropdown";

export default function Inputs({
  updatingIndex,
  handleUpdateItem,
  list,
  setList,
}) {


  const [formData, setFormData] = useState({
    text: "",
    date: "",
    ttime: "",
    ussers: "",
  });

  const handleForm = (name, e) => {
    const { value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };



  function handleReset() {
    setFormData({text: "", ttime: "", date: "", ussers: ""});
  }

  function handleAdd() {
    AddbtnClick(list, setList);
    handleReset();
  }

  function handleUpdate() {
    handleUpdateItem(formData.text, formData.ttime, formData.date, formData.ussers);  //error
    handleReset();
  }

  const AddbtnClick = (list, setList) => {
    console.log("Add button clicked");
    const now = new Date();
    const currtime = now.toLocaleTimeString();
    const currdate = now.toLocaleDateString();
    const newTask = {
      text: formData.text,
      time: currtime,
      ttime: formData.ttime,
      date: formData.date,
      isDone: false,
      currdate,
      ussers: formData.ussers
    };

    // if (text == "" || date == "" || ttime == "") {
    //   alert(" Please fill all of them !");
    // } else {
    setList([newTask, ...list]);
    // }
  };

  //setting update index to 0
  useEffect(() => {
    if (updatingIndex !== null) {
      const item = list[updatingIndex];
    //   setText(item.text);
    //   setDate(item.date);
    //   setTime(item.ttime);
    //   setUssers(item.ussers);
    setFormData({
        text: item.text,
        date: item.date,
        ttime: item.ttime,
        ussers: item.ussers
    })
    }
  }, [updatingIndex]);
  return (
    <div className="flex max-w-screen relative">
      <input
        type="text"
        className="bg-white pl-3 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 w-180 h-10"
        placeholder="Type your task here"
        value={formData.text}
        onChange={(e) => handleForm("text", e)}
      />

      <input
        type="date"
        className="hover:bg-gray-100 hover:shadow-lg shadow-md bg-white  mr-3 ml-4 pl-2 pr-3 rounded-md"
        name=""
        id=""
        value={formData.date}
        onChange={(e) => handleForm("date",e)}
      />

      <input
        type="time"
        name=""
        id=""
        value={formData.ttime}
        onChange={(e) => handleForm("ttime",e)}
        className="bg-white mr-3 p-1 pl-3 pr-2 rounded-md shadow-md hover:shadow-lg hover:bg-gray-100"
      />
      {updatingIndex === null && (
        <button
          onClick={handleAdd}
          className="hover:bg-gray-200 bg-white mr-3 rounded-md p-1 px-3 shadow-md hover:shadow-lg"
        >
          Add Task
        </button>
      )}
      {updatingIndex !== null && (
        <button
          onClick={handleUpdate}
          className="hover:bg-gray-200 bg-white mr-3 rounded-md px-3 p-1 shadow-md hover:shadow-lg"
        >
          Update
        </button>
      )}
      <Dropdown ussers={formData.ussers} handleUser={(e) => handleForm("ussers",e)} />
    </div>
  );
}
