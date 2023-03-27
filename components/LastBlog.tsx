import React from "react";
import style from "./subBlogSmall.module.scss";
const LastBlog = (props: any) => {
  const data = props.passData;

  
  return (
    <div
      className={style["last-blog"]}
      key={data.id}>
      <div className={style["last-blog-img"]}>
        <img src={data.img.src} alt="whiskey" />
      </div>
      <div className={style["last-blog-text"]}>
        <p className={style["left-blog-title"]}>{data.title}</p>
        <p className={style["left-blog-subtitle"]}>{data.subTitle}</p>
        <div className={style["name-date"]}>
          <p>{data.name}</p>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default LastBlog;
