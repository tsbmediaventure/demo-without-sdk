import Script from 'next/script';


export const ApplicationWrapper = ({ children }: {
    children: any,
}) => {


    return (
        <>
       
            <div>{children}</div>
        </>
    )
}

