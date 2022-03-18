import Head from 'next/head'
import Image from 'next/image'

import HTMLCode from '../public/images/HTML_Code.png'
import HTMLPreview from '../public/images/HTML_Preview.png'
import CSSCode from '../public/images/CSS_Code.png'
import CSSPreview from '../public/images/CSS_Preview.png'

export default function Home() {

  function Alert() {
    alert("Very Cool JavaScript")
  }

  return (
    <>
      <Head>
        <title>How to Website | Home</title>
      </Head>
      <div class="center">
        <h1>A website is created with HTML, CSS, JavaScript</h1>
        <hr />

        <h2>HTML</h2>
        <p>HTML is the basic skeleton of what a website is, the order of what is. What text is what component.</p>
        <div className="image-wrapper">
          <div class="image">
            <Image src={HTMLCode} />
          </div>
          <Image className="image" src={HTMLPreview} />
        </div>

        <h2>CSS</h2>
        <p>CSS is very simple, it beautifies the html.</p>
        <div className="image-wrapper">
          <div class="image">
            <Image className="image" src={CSSCode} />
          </div>
          <Image className="image" src={CSSPreview} width={150.77777777778} height={118} />
        </div>

        <br />
        <h2>JavaScript</h2>
        <p>JavaScript makes everything function, a button when clicked to do what.</p>
        <button className="demo-btn">No JavaScript</button>
        <button className="demo-btn" onClick={Alert}>With JavaScript</button>
      </div>
    </>
    // YINDEE IS A STUPID SON ON A BITCH
  )
} 
