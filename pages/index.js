import Head from 'next/head'
import React, { useState } from 'React';
import Page from 'next'
// import

import "../styles/Index.module.css"

 function Home({answer}) {



    const onClickHandel = (e) =>{
        // console.log(answer)
        const f = fetch("/api/whoIsTheFaggot").then((e)=>{
            e.json().then((e)=>{
                console.log(e)
                alert("Педик это:"+e.theFaggot.name+" "+e.theFaggot.surname+". Ну а вообще главный пидор - это ты!")
            })
        })
    }

  return (
      <>
          <Head>
              <title>Хто пидор? Я пидор? Да пашол ты нахуй</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div className={"container"}>
              <h2>Кто пидор?</h2>
              <button onClick={onClickHandel} className={"btn"}>Найти ответ!</button>
              <div className="content">
                  {answer}
              </div>
          </div>
      </>

  )
}

export async function getStaticProps() {

    return {
        props: {
            answer: "",
        },
    }
}

export default Home;