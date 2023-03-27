import Script from 'next/script';


export const ApplicationWrapper = ({ children }: {
    children: any,
}) => {


    return (
        <>
        <Script id="show-banner" >
  {`    
          const clientId = "process.env.NEXT_PUBLIC_CLIENT_ID";
            (function (w, d, s, o, f, cid) {             
              if (!w[o]) {
                w[o] = function () {
                  w[o].q.push(arguments);
                };
                w[o].q = [];
              }
              (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
              js.id = o;
              js.src = f;
              js.async = 1;
              js.title = cid;
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, 'script', '_csc', 'https://sandbox-sdk.conscent.in/csc-sdk.js', clientId);
  `}
</Script>
            <div>{children}</div>
        </>
    )
}

