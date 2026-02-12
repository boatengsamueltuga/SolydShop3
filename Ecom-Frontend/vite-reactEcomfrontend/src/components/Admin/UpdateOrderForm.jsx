import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Spinners from '../shared/Spinners';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import { updateOrderStatusFromDashboard } from '../../store/actions';




const ORDER_STATUSES = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
    "Accepted",

];

const UpdateOrderForm = ({setOpen, selectedId, selectedItem, loader, setLoader}) => {
const [orderStatus, setOrderStatus] = useState(selectedItem?.status || 'Accepted');
const [error, setError] = useState("");
const dispatch = useDispatch();

const { user } = useSelector((state) => state.auth);
const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

const updateOrderStatus = (e) => {
    e.preventDefault();
    if(!orderStatus) {
        setError("Order Status is required");
        return;
    }
    dispatch(updateOrderStatusFromDashboard(
        selectedId,
        orderStatus,
        toast,
        setLoader,
        isAdmin
    ));
};

  return (
    <div className='py-5 relative h-full'>
        <form className='space-y-4' onSubmit={updateOrderStatus}>
           <FormControl fullWidth variant='outlined' error={!!error}>
              <InputLabel id="order-status-label">Order Status</InputLabel>
              <Select 
              labelId='order-status-label'
              label='Order Status'
              value={orderStatus}
              onChange={(e) =>{
                setOrderStatus(e.target.value);
                setError("");
              }}>
              {
                ORDER_STATUSES.map((status) =>(
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                ))
              }
               
              </Select>
              {error && <FormHelperText>{error}</FormHelperText>}
           </FormControl>

           <div className='flex w-full justify-between items-center absolute bottom-14'>
            <Button disabled={loader}
            onClick={() => setOpen(false)}
            variant='outlined'
            className='text-white py-[10px] px-4 text-sm font-medium' >
                Cancel
            </Button>
            <Button 
            disabled={loader}
            type='submit'
            variant='contained'
            color='primary'
            className='bg-custom-blue text-white py-[-10px] px-4 text-sm font-medium'>
               { loader ? (
                 <div className='flex gap-2 items-center'>
                    <Spinners /> Loading...
                 </div>
               ):(

                "Update"
               )}
            </Button>
           </div>
        </form>
    </div>
  )
}

export default UpdateOrderForm


// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import FormHelperText from '@mui/material/FormHelperText';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import Spinners from '../shared/Spinners';
// import { useDispatch } from 'react-redux';
// import toast from "react-hot-toast";
// import { updateOrderStatusFromDashboard } from '../../store/actions';

// const ORDER_STATUSES = [
//   "Pending",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
//   "Accepted",
// ];

// const UpdateOrderForm = ({ setOpen, selectedId, selectedItem, loader, setLoader }) => {

//   // Safe initial value (prevents MUI out-of-range error)
//   const [orderStatus, setOrderStatus] = useState(
//     ORDER_STATUSES.includes(selectedItem?.status)
//       ? selectedItem.status
//       : "Accepted"
//   );

//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
   
//   const updateOrderStatus = (e) => {
//   e.preventDefault();

//   console.log("FORM SUBMITTED");

//   const orderId = selectedId || selectedItem?.id; // FIXED

//   console.log("ABOUT TO DISPATCH", orderId, orderStatus);

//   if (!orderId) {
//     toast.error("Invalid order selected");
//     return;
//   }

//   if (!orderStatus) {
//     setError("Order Status is required");
//     return;
//   }

//   dispatch(
//     updateOrderStatusFromDashboard(
//       orderId,
//       orderStatus,
//       toast,
//       setLoader
//     )
//   );
// };

 

//   return (
//     <div className='py-5 relative h-full'>
//       <form className='space-y-4' onSubmit={updateOrderStatus}>
//         <FormControl fullWidth variant='outlined' error={!!error}>
//           <InputLabel id="order-status-label">Order Status</InputLabel>
//           <Select
//             labelId='order-status-label'
//             label='Order Status'
//             value={orderStatus}
//             onChange={(e) => {
//               setOrderStatus(e.target.value);
//               setError("");
//             }}
//           >
//             {ORDER_STATUSES.map((status) => (
//               <MenuItem key={status} value={status}>
//                 {status}
//               </MenuItem>
//             ))}
//           </Select>
//           {error && <FormHelperText>{error}</FormHelperText>}
//         </FormControl>

//         <div className='flex w-full justify-between items-center absolute bottom-14'>
//           <Button
//             disabled={loader}
//             onClick={() => setOpen(false)}
//             variant='outlined'
//             className='text-white py-[10px] px-4 text-sm font-medium'
//           >
//             Cancel
//           </Button>

//           <Button
//             disabled={loader}
//             type='submit'
//             variant='contained'
//             color='primary'
//             className='bg-custom-blue text-white py-[-10px] px-4 text-sm font-medium'
//           >
//             {loader ? (
//               <div className='flex gap-2 items-center'>
//                 <Spinners /> Loading...
//               </div>
//             ) : (
//               "Update"
//             )}
            
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateOrderForm;
