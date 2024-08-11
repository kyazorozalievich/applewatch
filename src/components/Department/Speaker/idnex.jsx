import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../ProductCard";

const Speaker = () => {
  const { appleproduct } = useSelector((s) => s);
  const dispatch = useDispatch();

  function addToSortProduct(e) {
    let sort = e.target.value;
    dispatch({ type: "SORT_PRODUCT", payload: sort });
  }
  return (
    <div className="mt-[50px]">
      <div className="container w-[90%]">
        <div className="flex items-center justify-between mb-[50px]">
          <h1 className="text-[40px] font-[600]">Speaker Products</h1>
          <select
            onChange={(e) => addToSortProduct(e)}
            className="w-[120px] h-[30px] rounded-[5px] outline-none"
          >
            <option value="">Filtration</option>
            <option value="expensive">Expensive</option>
            <option value="cheap">Cheap</option>
          </select>
        </div>
        <div className="flex items-center flex-wrap gap-[30px]">
          {appleproduct.map((el) =>
            el.category === "speakers" ? <ProductCard el={el} /> : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
