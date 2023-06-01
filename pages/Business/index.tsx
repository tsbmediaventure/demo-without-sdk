import React from "react";
import { BusinessDemoData } from "../../components/BusinessDemoData";
import classes from "../../components/Business.module.scss";
import Header from "../../components/Header";
import BusinessFree from "../../components/BusinessFree";

const Business = () => {
  return (
    <>
      <div className={classes.header}>
        <Header headerColor={"white"} />
      </div>

      <div className={classes.main}>
        {BusinessDemoData.map((item: any, index: any) => (
          <div key={index}>
            <BusinessFree passData={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Business;
