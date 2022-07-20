import React from "react";

function List({ todoData, setTodoData }) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    // state 변경.
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 rounded">
            <div className="items-center">
              <input
                className="mr-2"
                type="checkbox"
                defaultChecked={false}
                onClick={() => handleCompleteChange(data.id)}
              />
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500">edit</span>
              <button
                className="px-4 py-2 float-right text-gray-500"
                onClick={() => handleClick(data.id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
