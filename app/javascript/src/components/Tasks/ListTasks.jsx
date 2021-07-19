import React from "react";
import Table from "./Table";

const ListTasks = ({ data, showTask, updateTask, destroyTask }) => {
  return (
    <Table
      data={data}
      updateTask={updateTask}
      showTask={showTask}
      destroyTask={destroyTask}
    />
  );
};

export default ListTasks;