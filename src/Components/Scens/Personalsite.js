import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import '../../Styles/PersonalSite.css'
import personalsitepic from './Assets/personalsitepic.jpg'


export default function Personalsite(props) {
    const { h1_, p_ } = props

    useEffect(() => {
        let tl = gsap.timeline({ defaults: { opacity: 0 } })



        tl.from(".title", { duration: 1, x: 100 })
        .from(".intro", { duration: 0.9, x: - 100 }, "-=0.5")
        .from(".author",{ duration: 0.9, y: - 10 }, "-=0.5")
        .from(".personalsite_text",{ duration: 0.9, y: - 10 }, "-=0.5")
            .from(".hr_",{ duration: 0.9, x: - 10 }, "-=0.5")
    },[])

    return (
        <div className="panel personalsite_panel" style={{ fontFamily: p_ }}>

            <section className="personalsite">
                <header className="personalsite_header">
                    <img src={personalsitepic} width="100%" alt="a portrait of a pretty women" />
                    <p>
                        <i className="fas fa-bars"></i>
                    </p>
                </header>

                <main className="personalsite_main">
                    <nav className="personalsite_nav">
                        <p>Home</p>
                        <p>Trends</p>
                        <p id="about">About</p>
                        <p>Contact</p>
                    </nav>

                    <article className="personalsite_article">
                        <p className="intro">Introductions</p>
                        <h4 className="title" style={{ fontFamily: h1_ }}>Design Thinking</h4>
                        <hr  className="hr_"/>
                        <p className="author"> <span style={{ fontSize: "12px" }}>by</span> <span style={{ fontWeight: "500", fontSize: "12px" }}>Alice Henok</span></p>


                        <div className="personalsite_text">
                            <p>
                                started painting as a hobby when I was little.                              I didn't know I had any talent. I believe talent is
                                just a pursued interest. Anybody can do what I do.
                                Just go back and put one little more happy tree in
                                there. Everybody's different. Trees are different.
                                Let them all be individuals. We'll put some happy
                                little leaves here and there. These things happen
                                automatically. All you have to do is just let them
                                ppen. Everyone wants to enjoy the good parts - but
                                you have to build the framework first. Let's do that
                                again. I'm gonna start with a little Alizarin crimson
                                touch of Prussian blue.
                            </p>

                        </div>
                    </article>
                </main>
            </section>


        </div>
    )
}
