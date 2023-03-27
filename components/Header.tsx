import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./header.module.scss";


const Header = (props: any) => {
  const [click, setClick] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const handleClick = () => setClick(!click);

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
 

  const renderlogin = () => {
    console.log("button clicked");
    // @ts-ignore
    const csc = window._csc as any;

    csc("conscent-login", {
      debug: true,
      clientId: clientId,
      defaultEmail: "",
      defaultName: "",
      defaultPhone: "",
      wrappingElementId: "embed",
      successCallback: async (userDetailsObject: any) => {
        console.log(
          "Success callback received from conscent login",
          userDetailsObject
        );
       

        setIsLogin(true);
      },
      onCrossBtnClickSuccess: async () => {
        console.log("cross btn click successfully");
    
      },
      unauthorizedCallback: () => {
        console.log("unauthorized callback called");
      },
    });
  };
  
  const logout = () => {
    // @ts-ignore
    const csc = window._csc as any;
    csc("logout", {
      debug: true,
      clientId: clientId,
      wrappingElementId: "embed",
      logoutCallback: async () => {
        alert("logout successful");
        window.location.reload();
      },
      unauthorizedCallback: () => {
        console.log("unauthorized callback called");
      },
    });
  };

  return (
    <>
      <div
        className={style["header"]}
        style={{ backgroundColor: props.headerColor }}
      >
       <Link href="/"><img src="../../assets/conscentLogo.png" alt="logo" className={style["logo-img"]} /></Link> 
          
        
        <ul
          className={click ? style["nav-options-active"] : style["nav-options"]}
        >
          <li className={style["option"]} >
            <Link href={'/Politics'}>POLITICS</Link>
          </li>
          <li className={style["option"]} >
            <Link href={'/Business'}>BUSINESS</Link>
          </li>
          <li className={style["option"]} >
            <Link href={'/Culture'}>CULTURE</Link>
          </li>
          <li
            className={style["option"]} >
            <Link href={'/International'}>INTERNATIONAL</Link>
          </li>

          <li className={style["option"]}>
            <button
              className={style["login-btn"]}
              onClick={isLogin ? logout : renderlogin}
            >
              {isLogin ? "LOGOUT" : "LOGIN"}
            </button>
          </li>
        </ul>
        <div className={style["mobile-menu"]} onClick={handleClick}>
          {click ? (
            <div className={style["menu-icon"]}>&#10005;</div>
          ) : (
            <div className={style["menu-icon"]}>&#9776;</div>
          )}
        </div>
      </div>
      <div className={style["login-popup"]} id="embed"></div>
    </>
  );
};

export default Header;
