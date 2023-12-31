import React from "react";
import style from "./subBlogLarge.module.scss";
import { useRouter } from "next/router";

const PoliticsPaid = (props: any) => {
  const router = useRouter();
  const data = props.passData;
 

  const handleClick = (e: any, id: string) => {
    router.push(`/politics/${id}`);
  };

  return (
    <div
      className={style["large-blog"]}
      key={data?.id}
      onClick={(e) => handleClick(e, data?.id)}
    >
      <img
        src={data?.img.src}
        alt="tvChannels"
        className={style["cover-img"]}
      />
      <div className={style["overlay"]}>
        <div className={style["wrap-content"]}>
          <p className={style["title"]}>{data?.title}</p>
          <p className={style["sub-title"]}>{data?.subTitle}</p>
          <div className={style["wrap-name-date"]}>
            <p className={style["name"]}>{data?.name}</p>
            <p className={style["date"]}>{data?.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticsPaid;
