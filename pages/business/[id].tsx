import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import style from "../../components/Article.module.scss";
import { BusinessDemoData } from "../../components/BusinessDemoData";
import { useRouter } from "next/router";
import Link from "next/link"


const BusinessArticle = () => {
  const router = useRouter()
  const id = router.query.id
  const newId = id as string 

  const data = BusinessDemoData[parseInt(newId) - 1] as {
    id: number;
    title: string;
    subTitle: string;
    name: string;
    date: string;
    img: any;
  };

  return (
    <>
      <Header headerColor="#fff" />
      <div className={style["main"]}>
        <p className={style["title"]}>{data?.title}</p>
        <p className={style["sub-title"]}>{data?.subTitle}</p>
        <div className={style["name-date"]}>
          <div>
            <p className={style["sub-title"]} style={{ color: "#53B2C5" }}>
              {data?.name}
            </p>
            <p className={style["sub-title"]}>{data?.date}</p>
          </div>
          <p className={style["middle-title"]}>
            THE <u style={{ textUnderlinePosition: "under" }}>BIG STORY</u>
          </p>
        </div>
        <img src={data?.img?.src} alt="topImg" className={style["large-img"]} />
        <p className={style["source"]}>Source: WikiPedia</p>
        <div className={style["overlay-wrap"]}>
          <p className={style["paragraph"]}>
            <img src='../../assets/blog/Story/Roboto.png' alt="topImg" className={style["small-img"]} />
            The Trinamool Congress began their foot march in Agartala today,
            with just days left until Tripura votes on February 16. Party chief
            and Bengal Chief Minister Mamata Banerjee and her nephew and MP
            Abhishek Banerjee are leading the march. Humanoid robots are now
            used as research tools in several scientific areas. Researchers
            study the human body structure and behavior (biomechanics) to build
            humanoid robots. On the other side, the attempt to simulate the
            human body leads to a better understanding of it. Human cognition is
            a field of study which is focused on how humans learn from sensory
            information in order to acquire perceptual and motor skills. T
            <span className={style["paragraph"]}>
              his knowledge is used to develop computational models of human
              behavior and it has been improving over time. <br />
              <br />
              It has been suggested that very advanced robotics will facilitate
              the enhancement of ordinary humans. See transhumanism. <br />
              <br />
              Although the initial aim of humanoid research was to build better
              orthosis and prosthesis for human beings, knowledge has been
              transferred between both disciplines. A few examples are powered
              leg prosthesis for neuromuscularly impaired, ankle-foot orthosis,
              biological realistic leg prosthesis and forearm prosthesis.
            </span>
          </p>
          <p className={style["paragraph"]}>
            Besides the research, humanoid robots are being developed to perform
            human tasks like personal assistance, through which they should be
            able to assist the sick and elderly, and dirty or dangerous jobs.
            Humanoids are also suitable for some procedurally-based vocations,
            such as reception-desk administrators and automotive manufacturing
            line workers. In essence, since they can use tools and operate
            equipment and vehicles designed for the human form, humanoids could
            theoretically perform any task a human being can, so long as they
            have the proper software. However, the complexity of doing so is
            immense.
          </p>
          <p className={style["paragraph"]}>
            They are also becoming increasingly popular as entertainers. For
            example, Ursula, a female robot, sings, plays music, dances and
            speaks to her audiences at Universal Studios. Several Disney theme
            park shows utilize animatronic robots that look, move and speak much
            like human beings. Although these robots look realistic, they have
            no cognition or physical autonomy. Various humanoid robots and their
            possible applications in daily life are featured in an independent
            documentary film called Plug &amp; Pray, which was released in 2010.
          </p>
          <p className={style["paragraph"]}>
            Humanoid robots, especially those with artificial intelligence
            algorithms, could be useful for future dangerous and/or distant
            space exploration missions, without having the need to turn back
            around again and return to Earth once the mission is completed.
          </p>
          <Link href="/">
            <p onClick={() => window.scrollTo(0, 0)}>&lt;&lt; Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default BusinessArticle;