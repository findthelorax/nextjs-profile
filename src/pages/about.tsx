import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";

const stats = {
    name: "Brett",
    class: "Developer",
    weapon: "Yo-Yo",
    level: 13,
    exp: 36518,
    health: "100/100",
    mana: "100/100",
    strengths: ["Fire Poi", "Cooking", "Mountaineering", "Irish Goodbye"],
    weaknesses: ["Large Bugs", "Jellyfish", "Rye Bread", "Beets"],
};

export default function About() {
    return (
        <>
            <NavBar />
            <section className="about-section">
                <div className="about-card-centered">
                    <div
                        className="about-card-grid"
                        style={{
                            gridTemplateColumns: '120px 1fr 1fr',
                            gridTemplateRows: 'repeat(8, auto)',
                            transform: 'rotate(10deg)',
                            fontFamily: 'PressStart, Fjalla One, Arial, sans-serif',
                        }}
                    >
                        {/* Left column: image only, centered vertically */}
                        <div style={{ gridColumn: 1, gridRow: '1 / span 8', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', alignSelf: 'start' }}>
                            <Image
                                src="/assets/rpg_char_2.png"
                                alt="Pixelated Redhead Bearded Man in a Suit"
                                width={120}
                                height={120}
                                className="about-pic-img"
                            />
                        </div>
                        {/* Row 1: Name | LVL */}
                        <div style={{ gridColumn: 2, gridRow: 1, alignSelf: 'center'}} className="about-name">{stats.name}</div>
                        <div style={{ gridColumn: 3, gridRow: 1, alignSelf: 'center'}} className="about-level">LVL {stats.level}</div>
                        {/* Row 2: Class: | Exp. */}
                        <div style={{ gridColumn: 2, gridRow: 2, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 0 }}>
                            <span className="about-labels">Class:</span>
                            <span className="about-class">{stats.class}</span>
                        </div>
                        <div style={{ gridColumn: 3, gridRow: 2, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 0, paddingRight: '1em' }}>
                            <span className="about-labels">Exp.</span>
                            <span className="about-exp">{stats.exp}</span>
                        </div>
                        {/* Row 3: Weapon: Yo-Yo | Yo-Yo image */}
                        <div style={{ gridColumn: 2, gridRow: 3, alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <span className="about-labels">Weapon:</span>
                            <span className="about-weapon">{stats.weapon}</span>
                        </div>
                        <div className="about-weapon-img" style={{ gridColumn: 3, gridRow: 3, alignSelf: 'center', display: 'flex', alignItems: 'center', paddingRight: '1em' }}>
                            <Image
                                src="/assets/yo-yo.png"
                                alt="Yo-Yo"
                                width={40}
                                height={40}
                                className="yo-yo"
                            />
                        </div>
                        {/* Row 4: Health & Mana | Health & Mana value (same row, stacked) */}
                        <div style={{ gridColumn: 2, gridRow: 4, alignSelf: 'center', display: 'flex', flexDirection: 'column', margin: 0, gap: 0 }}>
                            <span className="about-labels" style={{ margin: 0, padding: 0 }}>Health:</span>
                            <span className="about-labels" style={{ margin: 0, padding: 0 }}>Mana:</span>
                        </div>
                        <div style={{ gridColumn: 3, gridRow: 4, alignSelf: 'center', display: 'flex', flexDirection: 'column', margin: 0, gap: 0, paddingRight: '1em' }}>
                            <span className="about-values" style={{ margin: 0, padding: 0, marginTop: '1em' }}>{stats.health}</span>
                            <span className="about-values" style={{ margin: 0, padding: 0 }}>{stats.mana}</span>
                        </div>
                        {/* Row 5: Strengths | Weaknesses */}
                        <div style={{ gridColumn: 2, gridRow: 5, alignSelf: 'start' }} className="about-strengths">
                            <span className="about-labels" style={{ display: 'block', margin: 0 }}>Strengths:</span>
                            <ul style={{ marginTop: '1.5em', marginBottom: 0 }}>
                                {stats.strengths.map(strengths => (
                                    <li key={strengths}>{strengths}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ gridColumn: 3, gridRow: 5, alignSelf: 'start', display: 'flex', flexDirection: 'column', paddingRight: '1em' }} className="about-weaknesses">
                            <span className="about-labels" style={{ display: 'block', color: '#ff0000', margin: 0 }}>Weaknesses:</span>
                            <ul style={{ marginTop: '1.5em', marginBottom: 0 }}>
                                {stats.weaknesses.map(w => (
                                    <li key={w}>{w}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}