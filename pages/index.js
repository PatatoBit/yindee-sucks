import Head from 'next/head'
import Image from 'next/image'

import HTMLCode from '../public/images/HTML_Code.png'
import HTMLPreview from '../public/images/HTML_Preview.png'
import CSSCode from '../public/images/CSS_Code.png'
import CSSPreview from '../public/images/CSS_Preview.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>How to Website | Home</title>
      </Head>

      <h1>A website is created with HTML, CSS, JavaScript</h1>
      <h2>HTML</h2>
      <p>HTML is the basic skeleton of what a website is, the order of what is. What text.</p>
      <div className="image-wrapper">
        <Image className="image" src={HTMLCode}/>
        <Image className="image" src={HTMLPreview}/>
      </div>
      <h2>CSS</h2>
      <p>CSS is very simple, it just makes a ugly looking website looks better.</p>
      <div className="image-wrapper">
        <Image className="image" src={CSSCode}/>
        <Image className="image" src={CSSPreview}/>
      </div>
      <h2>JavaScript</h2>
      <p>JavaScript makes everything function, a button when clicked to do what.</p>
    </>
    // YINDEE IS A STUPID SON ON A BITCH
  )
} 
