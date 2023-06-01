import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FirstBlog from "../components/FirstBlog";
import SubBlogSmall from "../components/SubBlogSmall";
import SubBlogLarge from "../components/SubBlogLarge";
import LastBlog from "../components/LastBlog";
import { data } from "../components/DemoData";
import style from "../components/blogMain.module.scss";

const Blog = () => {
 
  const [color, setColor] = useState("");
  const listenScrollEvent = () => {
    if (window.scrollY > 90) {
      setColor("#fff");
    } else {
      setColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);




  const fristBlog = [];
  const indents = [];
  const lastBlog = [];
  for (let index = 0; index < data.length; index++) {
    if (index === 0) {
      fristBlog.push(<FirstBlog passData={data[index]} key={index} />);
    } else if (index === data.length - 1) {
      lastBlog.push(<LastBlog passData={data[index]} key={index} />);
    } else {
      if (index % 3 === 0) {
        indents.push(<SubBlogLarge passData={data[index]} key={index} />);
      } else {
        indents.push(<SubBlogSmall passData={data[index]} key={index} />);
      }
    }
  }

  return (
    <>
   

      <div className={style["header-wrap"]}>
        
        <Header headerColor={color} />
      </div>
      {fristBlog}
    
      <div className={style["second-part"]}>
        <p className={style["article-link"]}>TOP STORIES</p>
        <div className={style["second-part-content"]}>{indents}</div>
        {lastBlog}
      </div>
    </>
  );
};

export default Blog;
