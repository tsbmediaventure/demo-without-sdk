import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import style from "../../components/Article.module.scss";
import { InternationalData } from "../../components/InternationalDemoData";
import { useRouter } from "next/router";
import Link from "next/link"

const InternationalArticle = () => {
  const router = useRouter()
  const {id} = router.query as { id: string };
  console.log(id , "id hai")
  const [calledOnce, setCalledOnce]=useState(false)
  
  
  
  useEffect(()=>{
    console.log(id,'ljhgc')
   
    if(id&&!calledOnce){
      setCalledOnce(true)
      // console.log(id,'ljhgc')
      // paywallId()
    }  
  },[calledOnce,id])
    
  
  
  
   const data = InternationalData.filter(function (entry) { return entry.id === id; })[0] as {
      id: string|number;
      title: string;
      subTitle: string;
      name: string;
      date: string;
      img: any;
    };
  

  const [paid, setPaid] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const storyId = data?.id?.toString() ; 

  // const paywallId = () =>{
  //   console.log( "new paywall function")
  //   //@ts-ignore
  //   const csc = window._csc as any;
  //   csc("init", {
  //     debug: true,
  //     contentId: data?.id, // your story id here
  //     clientId: clientId, // your clientID here
  //     title:data.title,
    
  //     successCallback: async (validationObject: any) => {
        
  //       setPaid(true);
  //     },
  //     wrappingElementId: "csc-paywall",
  //     fullScreenMode: "false",
  //   });
  // }
  
  
  // useEffect(() => {
  //   // @ts-ignore
   
  // }, []);

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
            <img src="../../assets/blog/Story/Roboto.png" alt="topImg" className={style["small-img"]} />
            Humanoid robots are now used as research tools in several scientific
            areas. Researchers study the human body structure and behavior
            (biomechanics) to build humanoid robots. On the other side, the
            attempt to simulate the human body leads to a better understanding
            of it. Human cognition is a field of study which is focused on how
            humans learn from sensory information in order to acquire perceptual
            and motor skills. T
            <span
              className={ style["paragraph"]}
            >
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
          <p className={paid ? style["paragraph"] : style["blur-text-eight"]}>
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
          <p className={paid ? style["paragraph"] : style["blur-text-nine"]}>
            They are also becoming increasingly popular as entertainers. For
            example, Ursula, a female robot, sings, plays music, dances and
            speaks to her audiences at Universal Studios. Several Disney theme
            park shows utilize animatronic robots that look, move and speak much
            like human beings. Although these robots look realistic, they have
            no cognition or physical autonomy. Various humanoid robots and their
            possible applications in daily life are featured in an independent
            documentary film called Plug &amp; Pray, which was released in 2010.
          </p>
          <p className={paid ? style["paragraph"] : style["blur-text-ten"]}>
            Humanoid robots, especially those with artificial intelligence
            algorithms, could be useful for future dangerous and/or distant
            space exploration missions, without having the need to turn back
            around again and return to Earth once the mission is completed.
          </p>
          <Link href="/">
            <p onClick={() => window.scrollTo(0, 0)}    style={{ paddingTop: "250px" }}>&lt;&lt; Back</p>
          </Link>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              ...(paid && { width: 0 }),
            }}
          >
             <div
              className={style["overlay"]}
              // id="csc-paywall"
              style={{
                ...(paid && { width: 0 }),
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InternationalArticle;
