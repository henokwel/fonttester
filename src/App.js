import { useEffect, useState, useReducer, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import useEffectonLoad from './utils/onloadEffect';
import Personalsite from './Components/Scens/Personalsite';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import appReducer from './utils/reducer';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [fontState, dispatch] = useReducer(appReducer, { h1: "Sarabun", p: "Roboto" })
  const [fontFolder, setFontFolder] = useState(["Roboto", "Ravi Prakash", "Righteous"])

  useEffectonLoad(async () => {
    const getFont = await fetch("/api/getFonts")
    const resFont = await getFont.json()
    setFontFolder(resFont)

    let sections = gsap.utils.toArray(".panel")
    gsap.to(sections, {
      xPercent: - 100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".App",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    })
  })

  const handleRandom = () => {
    let randomFont_H1 = fontFolder[Math.floor(Math.random() * fontFolder.length)];
    let randomFont_P = fontFolder[Math.floor(Math.random() * fontFolder.length)];
    dispatch({ type: "random", payload: { h1: randomFont_H1, p: randomFont_P } })
  }

  useEffect(() => {
    const googleFontCDN_link = document.querySelector("#gfont")
    if (fontState.h1 === "" || fontState.p === "") return
    googleFontCDN_link.href = `https://fonts.googleapis.com/css2?family=${fontState.h1}&family=${fontState.p}&display=swap `
  }, [fontState])

  const handleOptionSubmit = (e, type) => {
    if (type === undefined) return
    if (type === "p") return dispatch({ type: "p", payload: { p: e.target.textContent, h1: fontState.h1 } })
    else if (type === "h1") return dispatch({ type: "h1", payload: { h1: e.target.textContent, p: fontState.p } })
  }

  return (
    <div className="App">
      <nav>
        <Autocomplete
          id="input_h1"
          options={fontFolder}
          style={{ width: "50%", backgroundColor: "white", border: "none" }}
          onChange={(e) => handleOptionSubmit(e, "h1")}
          onSubmitCapture={(e) => console.log("submited")}
          renderInput={(params) => <TextField inputProps={{ style: { textAlign: "center", height: "100%" } }} {...params} value={fontState.h1} placeholder="Title font" />}
        />
        <hr id="inputLine" />
        <Autocomplete
          id="input_p"
          options={fontFolder}
          style={{ width: "50%", backgroundColor: "white" }}
          onChange={(e) => handleOptionSubmit(e, "p")}
          renderInput={(params) => <TextField {...params} value={params} placeholder="Text font" />}
        />
        <button onClick={() => handleRandom()}>
          <i className="fas fa-random"></i>
        </button>
      </nav>

      <main>

        <article className="container" >
          <Personalsite
            h1_={fontState.h1}
            p_={fontState.p}
          />
          <div className="panel"></div>
        </article>

        <section>
          {/* <button>
            <span><i className="fas fa-copy"></i></span>
            <p>CDN</p>
          </button>
          <button>
            <span><i className="fas fa-copy"></i></span>
            <p>{`font-family: '${fontState.h1}' font-family: '${fontState.p}' `}</p>
          </button> */}
        </section>

      </main>
    </div>
  );
}

export default App;

