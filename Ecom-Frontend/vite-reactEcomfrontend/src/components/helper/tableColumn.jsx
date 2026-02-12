// import React from 'react'
// import { FaEdit } from 'react-icons/fa';
// import Globalmodal from '../shared/Globalmodal';


// export  const adminOrderTableColumn = [
//      {
//     sortable: false,
//     disableColumnMenu: true,
//     field:"id",
//     headerName: "orderId",
//     minWidth: 180,
//     headerAlign: "center",
//     align: "center",
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Order ID</span>,
//    },
//     // Column for customer email
//     {
//     sortable: false,
//     disableColumnMenu: true,
//     field:"email",
//     headerName: "Email",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 250,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Email</span>,
//    },

//    // Column for showing total amount of the order
//   {
//     sortable: true,
//     disableColumnMenu: true,
//     field:"totalAmount",
//     headerName: "Total Amount",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Total Amount</span>,
//    },
   
//    //Column to display order status(eg, Pending, shipped).

//    {
//     sortable: false,
//     disableColumnMenu: true,
//     field:"status",
//     headerName: "Status",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Status</span>,
//    },

//    // Column for Order creation date

//    {
//     sortable: false,
//     disableColumnMenu: true,
//     field:"date",
//     headerName: "Order Date",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Order Date</span>,
//    },

//    //Custom action column with an "Edit" button

//    {
//     sortable: false,
//     disableColumnMenu: true,
//     field:"action",
//     headerName: "Action",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 250,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: (params) => <span>Action</span>,
//     renderCell: (params) =>{
//       return (
//         <div className= 'flex justify-center items-center  space-x-2 h-full pt-2'>
//           <button 
//           className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md'>
//             <FaEdit className='mr-2'/>
//             Edit
//           </button>
//         </div>
//       );
//     },
//    },
   
// ];


// import React from 'react';
// import { FaEdit } from 'react-icons/fa';

// export const adminOrderTableColumn = (setOpen) => [
//   {
//     sortable: false,
//     disableColumnMenu: true,
//     field: "id",
//     headerName: "orderId",
//     minWidth: 180,
//     headerAlign: "center",
//     align: "center",
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Order ID</span>,
//   },
//   {
//     sortable: false,
//     disableColumnMenu: true,
//     field: "email",
//     headerName: "Email",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 250,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Email</span>,
//   },
//   {
//     sortable: true,
//     disableColumnMenu: true,
//     field: "totalAmount",
//     headerName: "Total Amount",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Total Amount</span>,
//   },
//   {
//     sortable: false,
//     disableColumnMenu: true,
//     field: "status",
//     headerName: "Status",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Status</span>,
//   },
//   {
//     sortable: false,
//     disableColumnMenu: true,
//     field: "date",
//     headerName: "Order Date",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 200,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Order Date</span>,
//   },
//   {
//     sortable: false,
//     disableColumnMenu: true,
//     field: "action",
//     headerName: "Action",
//     headerAlign: "center",
//     align: "center",
//     minWidth: 250,
//     editable: false,
//     headerClassName: "text-black font-semibold border",
//     cellClassName: "text-slate-700 font-normal border",
//     renderHeader: () => <span>Action</span>,
//     renderCell: () => (
//       <div className='flex justify-center items-center space-x-2 h-full pt-2'>
//         <button
//           onClick={() => setOpen(true)}   // OPENS MODAL
//           className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md'
//            >
//           <FaEdit className='mr-2' />
//           Edit
//         </button>
//       </div>
//     ),
//   },
// ];


// import React from 'react';
// import { FaEdit } from 'react-icons/fa';

// export const adminOrderTableColumn = (setOpen) => [
//   {
//     field: "id",
//     headerName: "Order ID",
//     minWidth: 180,
//     headerAlign: "center",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Order ID</span>,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     minWidth: 250,
//     headerAlign: "center",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Email</span>,
//   },
//   {
//     field: "totalAmount",
//     headerName: "Total Amount",
//     minWidth: 200,
//     headerAlign: "center",
//     align: "center",
//     sortable: true,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Total Amount</span>,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     minWidth: 200,
//     headerAlign: "center",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Status</span>,
//   },
//   {
//     field: "date",
//     headerName: "Order Date",
//     minWidth: 200,
//     headerAlign: "center",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Order Date</span>,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     minWidth: 250,
//     headerAlign: "center",
//     align: "center",
//     sortable: false,
//     disableColumnMenu: true,
//     editable: false,
//     renderHeader: () => <span>Action</span>,
//     renderCell: () => (
//       <div className='flex justify-center items-center h-full pt-2'>
//         <button
//           onClick={() => setOpen(true)}   // OPENS MODAL
//           className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md'
//         >
//           <FaEdit className='mr-2' />
//           Edit
//         </button>
//       </div>
//     ),
//   },
// ];


import React from 'react';
import { FaEdit, FaTrash, FaEye, FaImage, FaTrashAlt } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';


export const adminProductTableColumn = (
  handleEdit,
  handleDelete,
  handleImageUpload,
  handleProductView,
) => [
   
  {
    field: "id",
    headerName: "ID",
    minWidth: 180,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Product ID</span>,
  },
  {
    field: "productName",
    headerName: "Product Name",
    minWidth: 220,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Product Name</span>,
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 300,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Description</span>,
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Price</span>,
  },
  {
    field: "specialPrice",
    headerName: "Special Price",
    minWidth: 170,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Special Price</span>,
  },
  {
    field: "discount",
    headerName: "Discount (%)",
    minWidth: 160,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Discount</span>,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    minWidth: 140,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: () => <span>Quantity</span>,
  },
  {
    field: "image",
    headerName: "Image",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className='ps-10'>Image</span>,
    // renderCell: (params) => (
    //   <img
    //     src={params.value}
    //     alt="product"
    //     className="h-12 w-12 object-cover mx-auto rounded"
    //   />
    // ),
  },

   {
    field: "action",
    headerName: "Action",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Action</span>,
     renderCell: (params) => (
  <div className="flex justify-center items-center space-x-2 h-full">
    <button
      onClick={() => handleImageUpload(params.row)}
      className="flex items-center bg-green-500 hover:bg-green-600 px-3 h-8 rounded-md text-sm text-white"
    >
      <FaImage className="mr-1" size={16} />
      Image
    </button>

    <button
      onClick={() => handleEdit(params.row)}
      className="flex items-center bg-custom-blue hover:bg-blue-600 px-3 h-8 rounded-md text-sm text-white"
    >
      <FaEdit className="mr-1" size={16} />
      Edit
    </button>

    <button
      onClick={() => handleDelete(params.row)}
      className="flex items-center bg-red-500 hover:bg-red-600 px-3 h-8 rounded-md text-sm text-white"
    >
      <FaTrashAlt className="mr-1" size={16} />
      Delete
    </button>

    <button
      onClick={() => handleProductView(params.row)}
      className="flex items-center bg-slate-800 hover:bg-slate-700 px-3 h-8 rounded-md text-sm text-white"
    >
      <FaEye className="mr-1" size={16} />
      View
    </button>
  </div>
)



  },



];


export const adminOrderTableColumn = (handleEdit) => [
  {
    field: "id",
    headerName: "Order ID",
    minWidth: 180,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Order ID</span>,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 250,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Email</span>,
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: true,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Total Amount</span>,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Status</span>,
  },
  {
    field: "date",
    headerName: "Order Date",
    minWidth: 200,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Order Date</span>,
  },
  {
    field: "action",
    headerName: "Action",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    sortable: false,
    disableColumnMenu: true,
    editable: false,
    renderHeader: () => <span>Action</span>,
    renderCell: (params) => (
      <div className='flex justify-center items-center h-full pt-2'>
        <button
          onClick={() => handleEdit(params.row)}
          className='flex items-center bg-blue-500 text-white px-4 h-9 rounded-md'
        >
          <FaEdit className='mr-2' />
          Edit
        </button>
      </div>
    ),
  },
];


//table column for categories in admin panel
export const categoryTableColumns = (handleEdit, handleDelete) => [
  {
    sortable: false,
    disableColumnMenu: true,
    field: "id",
    headerName: "CategoryId",
    minWidth: 300,
    headerAlign: "center",
    align: "center",
    editable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">CategoryId</span>,
  },
  {
    disableColumnMenu: true,
    field: "categoryName",
    headerName: "Category Name",
    align: "center",
    width: 400,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border ",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Category Name</span>,
  },

  {
    field: "action",
    headerName: "Action",
    headerAlign: "center",
    editable: false,
    headerClassName: "text-black font-semibold text-center",
    cellClassName: "text-slate-700 font-normal",
    sortable: false,
    width: 400,
    renderHeader: (params) => <span>Action</span>,
    renderCell: (params) => {
      return (
        <div className="flex justify-center space-x-2 h-full pt-2">
          <button
            onClick={() => handleEdit(params.row)}
            className="flex items-center bg-blue-500 text-white px-4 h-9 rounded-md "
          >
            <FaEdit className="mr-2" />
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(params.row)}
            className="flex items-center bg-red-500 text-white px-4   h-9 rounded-md"
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      );
    },
  },
];


//table column for seller in admin Panel
export const sellerTableColumns = [
  {
    disableColumnMenu: true,
    field: "id",
    headerName: "ID",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    editable: false,

    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">SellerID</span>,
  },
  {
    disableColumnMenu: true,
    field: "username",
    headerName: "UserName",
    minWidth: 400,
    headerAlign: "center",
    align: "center",
    editable: false,
    sortable: false,
    headerClassName: "text-black font-semibold border",
    cellClassName: "text-slate-700 font-normal border",
    renderHeader: (params) => <span className="text-center">UserName</span>,
  },
  {
    disableColumnMenu: true,
    field: "email",
    headerName: "Email",
    align: "center",
    width: 400,
    editable: false,
    sortable: false,
    headerAlign: "center",
    headerClassName: "text-black font-semibold text-center border ",
    cellClassName: "text-slate-700 font-normal border text-center",
    renderHeader: (params) => <span>Email</span>,
    renderCell: (params) => {
      return (
        <div className="flex items-center justify-center gap-1">
          <span>
            <MdOutlineEmail className="text-slate-700 text-lg" />
          </span>
          <span>{params?.row?.email}</span>
        </div>
      );
    },
  },
];