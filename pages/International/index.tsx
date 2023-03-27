import React from "react";
import { InternationalData } from "./InternationalDemoData";
import classes from "./International.module.scss";
import Header from "../../components/Header";
import InternationalFree from "./InternationalFree";

const International = () => {
  return (
    <>
      <div className={classes.header}>
        <Header headerColor={"white"} />
      </div>

      <div className={classes.main}>
        {InternationalData.map((item: any, index: any) => (
          <div key={index}>
            <InternationalFree passData={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default International;
