import Head from 'next/head';
import Script from 'next/script';
import { Partytown } from '@builder.io/partytown/react';
import { partytownSnippet } from '@builder.io/partytown/integration';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js</title>
        <link
          rel="icon"
          id="favicon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>"
        />
        {/* <Partytown debug={true} /> */}
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: partytownSnippet(),
          }}
        /> */}
      </Head>

      <main>
        <h1>Next.js with 🎉</h1>

        <p id="output" suppressHydrationWarning></p>

        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          document.getElementById('output').textContent = 'passed';
        `,
          }}
        />
      </main>
    </div>
  );
}
