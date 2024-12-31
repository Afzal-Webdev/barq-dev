import React, { useState, useEffect } from "react";
import RTable from "./RTable";


const logos = {
  store: 'https://path-to-store-logo.png',
  shop: 'https://path-to-shop-logo.png',
  default: 'https://path-to-default-logo.png',
};


const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    visits: 5,
    status: "Single",
    progress: 80,
    orders: [
      { orderId: "ORD123", productName: "Laptop", quantity: 1, orderDate: "2024-01-05" },
      { orderId: "ORD124", productName: "Headphones", quantity: 2, orderDate: "2024-02-15" }
    ]
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 32,
    visits: 7,
    status: "Married",
    progress: 95,
    orders: [
      { orderId: "ORD125", productName: "Smartphone", quantity: 1, orderDate: "2024-03-10" }
    ]
  },
  {
    firstName: "Tom",
    lastName: "Brown",
    age: 45,
    visits: 3,
    status: "Divorced",
    progress: 50,
    orders: [
      { orderId: "ORD126", productName: "Tablet", quantity: 1, orderDate: "2024-04-20" },
      { orderId: "ORD127", productName: "Keyboard", quantity: 1, orderDate: "2024-05-30" }
    ]
  },
  {
    firstName: "Lucy",
    lastName: "Green",
    age: 27,
    visits: 8,
    status: "Single",
    progress: 65,
    orders: [
      { orderId: "ORD128", productName: "Monitor", quantity: 2, orderDate: "2024-06-25" }
    ]
  }
];

const columns = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Visits",
    accessor: "visits",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Progress",
    accessor: "progress",
  },
  {
    Header: "Orders",
    accessor: "orders",
    Cell: ({ value }) => {
  
      return (
        <div>
          {value.map((order, index) => (
            <div key={index}>
              <strong>Order {order.orderId}: </strong>
              {order.productName} (x{order.quantity}) - {order.orderDate}
            </div>
          ))}
        </div>
      );
    },
  },
];

function App() {
  const [subdomain, setSubdomain] = useState(null);

  useEffect(() => {
    
    const pathParts = window.location.pathname.split('/');
    const currentSubdomain = pathParts[1] || 'default'; // Default subdomain if none is found
    setSubdomain(currentSubdomain);
  }, []);

  const logoUrl = logos[subdomain] || logos.default;

  return (
    <div>
      <header>
        <img src={logoUrl} alt={`${subdomain} logo`} width="100" />
      </header>

      <h1>{subdomain.charAt(0).toUpperCase() + subdomain.slice(1)} Orders</h1>

      <RTable columns={columns} data={data} />
    </div>
  );
}

export default App;
