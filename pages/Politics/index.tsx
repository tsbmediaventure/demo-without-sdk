import React from "react";
import { PoliticsData } from "./PoliticsDemoData";
import classes from "./Politics.module.scss";
import Header from "../../components/Header";

import PoliticsPaid from "./PoliticsPaid";
const Politics = () => {
  return (
    <>
      <div className={classes.header}>
        <Header headerColor={"white"} />
      </div>

      <div className={classes.main}>
        {PoliticsData.map((item: any, index: any) => (
          <div key={index}>
            <PoliticsPaid passData={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Politics;
