import React from "react";
import { CultureData } from "./CultureDemoData";
import classes from "./Culture.module.scss";
import Header from "../../components/Header";

import CulturePaid from "./CulturePaid";

const Culture = () => {
  return (
    <>
      <div className={classes.header}>
        <Header headerColor={"white"} />
      </div>

      <div className={classes.main}>
        {CultureData.map((item: any, index: any) => (
          <div key={index}>
            <CulturePaid passData={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Culture;
