import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";

const Search = () => {
  const { appleproduct, search } = useSelector((s) => s);
  const dispatch = useDispatch();
  const { name } = useParams();

  function ParamId() {
    const allSearch = appleproduct.filter((item) => item.name === name);
    dispatch({ type: "SEARCH", payload: allSearch });
  }

  useEffect(() => {
    ParamId();
  }, [appleproduct]);

  return (
    <div>
      <div className="container w-[90%] mt-[50px] flex items-center flex-wrap gap-[30px]">
        {search.map((el, id) => (
          <ProductCard el={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
