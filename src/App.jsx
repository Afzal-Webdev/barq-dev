import React from "react";
import RTable from "./RTable";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Visits",
        accessor: "visits"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Profile Progress",
        accessor: "progress"
      }
    ],
    []
  );

  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      visits: 5,
      status: "Single",
      progress: 80
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 32,
      visits: 7,
      status: "Married",
      progress: 95
    },
    {
      firstName: "Tom",
      lastName: "Brown",
      age: 45,
      visits: 3,
      status: "Divorced",
      progress: 50
    },
    {
      firstName: "Lucy",
      lastName: "Green",
      age: 27,
      visits: 8,
      status: "Single",
      progress: 65
    }
  ];

  return (
    <div>
      <RTable columns={columns} data={data} />
    </div>
  );
}

export default App;
