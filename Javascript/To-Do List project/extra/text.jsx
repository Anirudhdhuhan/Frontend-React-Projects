import { useState } from "react";
import "./text.css"

export default function Text() {
  const [list, setList] = useState([]); // for displaying
  const [text, setText] = useState(""); // for typing
  const [date, setDate] = useState(""); // for displaying
  const [ttime, setTime] = useState(""); // for displaying
  const [updatingIndex, setUpdatingIndex] = useState(null); // index which is updating or null
  const [ussers, setUssers] = useState(null);

  const AddbtnClick = () => {
    console.log("Add button clicked");
    const now = new Date();
    const currtime = now.toLocaleTimeString();
    const currdate = now.toLocaleDateString();
    const newTask = {
      text,
      time: currtime,
      ttime,
      date,
      isDone: false,
      currdate,
      ussers,
    };
    // if (text == "" || date == "" || ttime == "") {
    //   alert(" Please fill all of them !");
    // } else {
    setList([newTask, ...list]);
    // }
    setText("");
    setDate("");
    setTime("");
    setUssers("")
  };

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

  function handleUpdateItem() {
    const prevTask = list[updatingIndex];
    const newTask = {
      text,
      time: prevTask.time,
      ttime,
      date,
      isDone: prevTask.isDone,
      currdate: prevTask.currdate,
      ussers
    };
    const newList = list.map((row, index) => {
      if (index === updatingIndex) row = newTask;
      return row;
    });
    setList(newList);
    setUpdatingIndex(null);
    setText("");
    setDate("");
    setTime("");
    setUssers("")
  }

  const updateBtnClick = (itemIndex) => {
    console.log("Update Button Clicked!", itemIndex);
    const item = list[itemIndex];
    setText(item.text);
    setDate(item.date);
    setTime(item.ttime);
    setUssers(item.ussers);
    setUpdatingIndex(itemIndex);
    
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleTime = (f) => {
    setTime(f.target.value);
  };

  const handleDate = (g) => {
    setDate(g.target.value);
  };

  const handleUser = (u) => {
    setUssers(u.target.value);
  };

  const clearAll = () => {
    setUpdatingIndex(null);
    setList([]);
  }

  return (
    <>
      <div>
        <input
        
          type="text"
          className="input"
          placeholder="Type your task here"
          value={text}
          onChange={handleText}
        />

        <input type="date" name="" id="" value={date} onChange={handleDate}  className="input-date"/>

        <input
          type="time"
          name=""
          id=""
          value={ttime}
          onChange={handleTime}
         className="input-time"
        />

       <label
          htmlFor="user"
          style={{
            height: 20,
            marginTop: "20px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          Choose a user : <span style={{marginLeft:"5px"}}></span>
        </label>

        <select id="user" name="user" onChange={handleUser} value={ussers} className="dropdown">
          <option value="--">Select User</option>
          <option value="Nilesh">Nilesh</option>
          <option value="Yash">Yash</option>
          <option value="Manish">Manish</option>
          <option value="Rhythm">Rhythm</option>
        </select>


        <button
          className="clrAll"
          onClick={clearAll}
        >
          Clear All
        </button>

        {updatingIndex === null && (
          <button onClick={AddbtnClick} className="addTask">Add Task</button>
        )}
        {updatingIndex !== null && (
          <button onClick={handleUpdateItem} className="update">Update</button>
        )}

       

    
        <p>
          {list.map((task, index) => (
            <div key={index}>
              <p
                style={{
                  display: "flex",
                  textDecoration: task.isDone ? "line-through" : "none",
                  color: task.isDone ? "violet" : "gold",
                }}
              >
                Task:- {task.text} <span style={{ marginLeft: "15px" }}> </span>{" "}
                Time task added:-
                {task.time}, <span style={{ marginLeft: "5px" }}></span>{" "}
                {task.currdate} <span style={{ marginLeft: "15px" }}></span>{" "}
                Deadline:- {task.ttime},{" "}
                <span style={{ marginLeft: "5px" }}></span> {task.date}{" "}
                <span style={{ marginLeft: "15px" }}></span>
                Task assigned to:- {task.ussers}
              </p>

              <button
                className="delete"
                onClick={() => DeletebtnClick(index)}
              >
                Delete
              </button>
              <button
                className="done-undone"
                onClick={() => undoneDoneBtnClick(index)}
              >
                Done/Undone
              </button>
              <button
               className="update2"
                onClick={() => updateBtnClick(index)}
              >
                Update
              </button>
            </div>
          ))}
        </p>
      </div>
    </>
  );
}
