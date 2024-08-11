import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard";

const Details = () => {
  const { appleproduct } = useSelector((s) => s);
  const [params, setParams] = useState("");
  const { id } = useParams();

  function ParamId() {
    let product = appleproduct.find((el) => el.id == id);
    setParams(product);
  }
  useEffect(() => {
    ParamId();
  });
  return (
    <div>
      <div className="container w-[90%]">{<DetailsCard el={params} />}</div>
    </div>
  );
};

export default Details;
