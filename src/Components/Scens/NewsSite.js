import React from 'react'
import '../../Styles/NewsSite.css'
export default function NewsSite(props) {
    const { h1_, p_ } = props

    return (
        <div className="panel newssite_panel"  style={{ fontFamily: p_ }}>
            <section className="newssite">
                <h1 style={{ fontFamily: h1_ }}>NewsSite</h1>
                <p>Coming soon</p>
            </section>
        </div>
    )
}
