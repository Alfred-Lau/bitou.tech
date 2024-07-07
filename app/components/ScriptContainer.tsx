'use client';

import React, { useEffect } from 'react';

import Script from 'next/script';

export default function ScriptClientComponent() {

  return (
    <>
      <Script id='show-clarity'>
        {
          `
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "n0zjefjzpq");
          `
        }
      </Script>
    </>
  );
}
