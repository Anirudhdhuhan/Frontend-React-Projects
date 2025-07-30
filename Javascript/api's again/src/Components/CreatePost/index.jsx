import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function CreatePost() {
  const [formDetails, setFormDetails] = useState({
    // setting while typing
    title: "",
    body: "",
    userId: "",
    tags: [],
  });

  const [finalDetails, setFinalDetails] = useState(""); // setting after hitting submit btn

  const [tags, setTags] = useState(""); // setting while typing

  console.log("Typing Tags", tags);

  const TypingTags = (e) => {
    setTags(e.target.value);
  };

  const HandleTags = () => {
    let flag = false;
    formDetails.tags.find((row) => {
      row === tags ? (flag = true) : (flag = false);
    });
    if (flag == true) {
      alert("Can't enter same value");
    } else {
      setFormDetails({ ...formDetails, tags: [...formDetails.tags, tags] });
    }
    return;
  };

  console.log("Typing:-", formDetails);

  const HandleFormDetails = (name, e) => {
    //while typing in the form
    const value = e.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const [submitClicked, setSubmitClicked] = useState(false);

  const SaveDetails = () => {
    // after clicking on submit
    setSubmitClicked(true);
    setFinalDetails(formDetails);
  };
  useEffect(() => {
    if (submitClicked == true) {
      PostApi();
      setSubmitClicked(false);
    }
  }, [submitClicked]);

  console.log("Saved Details :-", finalDetails);

  const DeleteTags = (i) => {
    const updatedTags = formDetails.tags.filter((tag, index) => index !== i);
    setFormDetails({ ...formDetails, tags: updatedTags });
    setTags("");
  };

  const PostApi = async () => {
    const payload = {
      title: formDetails.title,
      userId: formDetails.userId,
      body: formDetails.body,
      tags: formDetails.tags,
    };
    const resPostApi = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const jsonResPostApi = await resPostApi.json();
    console.log("jsonResPostApi  ", jsonResPostApi);
  };

  const navigate = useNavigate();

  function home() {
    navigate("/");
  }

  return (
    <div className="mt-4 ml-4">
      <button
        onClick={home}
        className="border p-1 rounded mr-2 hover:bg-white hover:text-black"
      >
        Home
      </button>
      This is CreatePost
      <br />
      <br />
      Title:-{" "}
      <input
        type="text"
        name="title"
        className="border pl-1"
        onChange={(e) => {
          HandleFormDetails("title", e);
        }}
      />
      <br />
      <br />
      Body:-{" "}
      <input
        type="text"
        name="body"
        className="border pl-1"
        onChange={(e) => {
          HandleFormDetails("body", e);
        }}
      />
      <br />
      <br />
      UserID:-{" "}
      <input
        type="text"
        name="userId"
        className="border pl-1"
        onChange={(e) => {
          HandleFormDetails("userId", e);
        }}
      />
      <br />
      <br />
      Tags:-{" "}
      <input
        type="text"
        name=""
        value={tags}
        className="border mr-2 ml-1 pl-1"
        onChange={TypingTags}
      />
      <button
        className="border px-2 rounded ml-2 hover:bg-blue-500 hover:text-black"
        onClick={HandleTags}
      >
        Add Tags
      </button>
      <div className="ml-4 mt-5">
        {" "}
        {formDetails.tags.map((tag, index) => (
          <p className="mb-3">
            {tag}{" "}
            <button
              className="border px-2 rounded ml-2 hover:bg-red-500 hover:text-black"
              onClick={() => {
                DeleteTags(index);
              }}
            >
              Delete
            </button>{" "}
          </p>
        ))}
      </div>
      <br />
      <button
        className="border p-2 rounded ml-2 hover:bg-green-500 hover:text-black"
        onClick={SaveDetails}
      >
        Submit
      </button>
    </div>
  );
}
