import React, { useState } from "react";
import ShowProduct from "./showProduct/ShowProduct";
import HideProduct from "./hideProduct/HideProduct";

const MobileProductDetail: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      {!show ? (
        <ShowProduct setShow={setShow} />
      ) : (
        <HideProduct setShow={setShow} />
      )}
    </>
  );
};

export default MobileProductDetail;
