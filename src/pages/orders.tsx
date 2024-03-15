
const Orders = () => {
  return (
    <div>orders</div>
  )
}

export default Orders



// import { ReactElement } from "react";
// import TableHOC from "../components/admin/TableHOC";

// type DataType = {
//     _id: string;
//     amount: number;
//     quantity: number;
//     discount: number;
//     status: ReactElement;
//     action: ReactElement;
//   };
//   const column: Column<DataType>[] = [
//     {
//       Header: "ID",
//       accessor: "_id",
//     },
//     {
//       Header: "Quantity",
//       accessor: "quantity",
//     },
//     {
//       Header: "Discount",
//       accessor: "discount",
//     },
//     {
//       Header: "Amount",
//       accessor: "amount",
//     },
//     {
//       Header: "Status",
//       accessor: "status",
//     },
//     {
//       Header: "Action",
//       accessor: "action",
//     },
//   ];
  
// const Orders = () => {
// const Table = TableHOC<DataType>()();

//   return (
//     <div className="container">
//         <h1>MY ORDERS</h1>
//         {Table}
//     </div>
//   )
// }

// export default Orders