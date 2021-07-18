import React from "react";
import Table from "./Table";

const ListTasks = ({ data, showTask, updateTask }) => {
  return (
    <Table
      data={data}
      updateTask={updateTask}
      showTask={showTask}
    />
  );
};

export default ListTasks;