import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Contact from './components/Contact.jsx'

function App() {

    return (
        <>
            <Header />

            <main className="container">
                <section className="intro">
                    <h1>HADI SUMANJAYA</h1>
                    <small>Pelajar aktif yang tertarik dengan pengembangan perangkat lunak.</small>
                </section>

                <Section
                    id="intro"
                    title="PENGENALAN"
                    titleDescription="Perkenalan tentang diri saya."
                    content={
                        <p>
                            Haloo, perkenalkan saya adalah salah satu murid di Jakarta Selatan yang masih aktif saat ini dan bersekolah di SMK Negeri 8 Jakarta.
                        </p>
                    }
                />

                <Section
                    id="skills"
                    title="KEAHLIAN SAYA"
                    titleDescription="Beberapa teknologi dan kemampuan yang sedang saya pelajari dan kembangkan."
                    content={
                        <div className="skills">
                            <div className="skills-list">
                                <p>React</p>
                                <p>Laravel</p>
                                <p>Github</p>
                            </div>
                            <div className="skills-divider"></div>
                            <div className="skills-detail">
                                <p>Membangun web yang interaktif</p>
                                <p>Membangun backend dengan menerapkan REST API</p>
                                <p>Mengelola kode dan aplikasi sebelum lanjut ketahap berikutnya</p>
                            </div>
                        </div>
                    }
                />

                <Section
                    id="future-plan"
                    title="RENCANA KEDEPAN"
                    titleDescription="Rencana saya 1 tahun kedepan"
                    content={
                        <ol>
                            <li>Menguasai backend Laravel</li>
                            <li>Menerapkan frontend dan backend dalam satu projek (misalnya Laravel + React)</li>
                            <li>Semakin konsisten dan menyelesaikan projek besar</li>
                            <li>Belajar bahasa pemrograman GO</li>
                        </ol>
                    }
                />

                <Contact />
            </main>
        </>
    )
}

export default App