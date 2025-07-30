export default function List({task, index, DeletebtnClick, undoneDoneBtnClick, updateBtnClick}){
    return(
        <>
        <div key={index} className="flex ">
              <p
                style={{
                  display: "flex",
                  textDecoration: task.isDone ? "line-through" : "none",
                  color: task.isDone ? "red" : "green",
                  marginRight: "20px",
                  background: "white",
                  padding: "10px",
                  marginBottom: "1px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
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
                className="bg-white mr-3 rounded-md p-1 shadow-md hover:shadow-lg hover:bg-gray-200 h-10"
                onClick={() => DeletebtnClick(index)}
              >
                Delete
              </button>
              <button
                className="bg-white mr-3 rounded-md p-1 shadow-md hover:shadow-lg hover:bg-gray-200 h-10"
                onClick={() => undoneDoneBtnClick(index)}
              >
                Done/Undone
              </button>
              <button
               className="bg-white mr-3 rounded-md p-1 shadow-md hover:shadow-lg hover:bg-gray-200 h-10"
                onClick={() => updateBtnClick(index)}
              >
                Update
              </button>
            </div>
        </>
    )
}