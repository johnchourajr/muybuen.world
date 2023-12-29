// components/CustomHead.js
import Script from "next/script"

const GtagScripts = () => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DRTQYLBHFZ"
        strategy="afterInteractive"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DRTQYLBHFZ', {
                page_path: window.location.pathname,
              });
            `,
        }}
        strategy="afterInteractive"
      />
    </>
  )
}

export default GtagScripts
