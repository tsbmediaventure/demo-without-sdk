import React from "react";
import { useRouter } from "next/router";
import style from "./subBlogLarge.module.scss";

const BusinessFree = (props: any) => {
  const data = props.passData;
  const router = useRouter()
const handleClick = ((e:any , id : string)=>{
  router.push(`/business/${id}`)
})
  

  return (
    <div
      className={style["large-blog"]}
      key={data.id} onClick={(e)=>handleClick(e , data.id)} >
      <img src={data.img.src} alt="tvChannels" className={style["cover-img"]} />
      <div className={style["overlay"]}>
        <div className={style["wrap-content"]}>
          <p className={style["title"]}>{data.title}</p>
          <p className={style["sub-title"]}>{data.subTitle}</p>
          <div className={style["wrap-name-date"]}>
            <p className={style["name"]}>{data.name}</p>
            <p className={style["date"]}>{data.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFree;
