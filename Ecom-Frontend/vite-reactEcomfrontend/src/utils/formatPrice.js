export const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-US", {
       style:"currency",
       currency:"USD",
    }).format(amount);
}

// export const formatPriceCalculation = (quantity, price) => {
//     return (Number(quantity) * Number(price)).toFixed(2);

// };

export const formatPriceCalculation = (quantity, price) => {
  const q = Number(quantity);
  const p = Number(price);

  if (!Number.isFinite(q) || !Number.isFinite(p)) {
    return "0.00";
  }

  return (q * p).toFixed(2);
};

export const formatRevenue = (value) =>{
  if(value >= 1e9){
   return (value / 1e9).toFixed(1) + "B";
  }else if(value >= 1e6){
    return (value / 1e6).toFixed(1) + "M";
  }
  else if(value >= 1e3){
    return (value / 1e3).toFixed(1) + "K";
  }else{
    return value;
  }
}