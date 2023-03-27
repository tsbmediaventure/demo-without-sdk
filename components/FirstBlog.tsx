import React from "react";

import style from "./firstBlog.module.scss";

const FirstBlog = (props: any) => {
  const data = props.passData;

  return (
    <div key={data.id}>
      <img src={data.img.src} alt="topImg" className={style["top-img"]} />
      <div className={style["top-img-content"]}>
        <p className={style["article-link"]}>
          <u style={{ textUnderlinePosition: "under" }}>THE BIG </u>STORY
        </p>
        <p className={style["top-img-title"]}>{data.title}</p>
        <p className={style["top-img-subtitle"]}>{data.subTitle}</p>
        <p className={style["top-img-name"]}>{data.name}</p>
        <p className={style["top-img-date"]}>{data.date}</p>
      </div>
    </div>
  );
};

export default FirstBlog;
