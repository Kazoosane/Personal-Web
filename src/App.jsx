import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Contact from './components/Contact.jsx'

function App() {

    return (
        <>
            <Header />
            <h1>HADI SUMANJAYA</h1>
            <small>Pelajar aktif yang tertarik dengan pengembangan perangkat lunak.</small>
            <Section 
                title="PENGENALAN"
                titleDescription="Perkenalan tentang diri saya."
                content={
                <p>
                    Haloo, perkenalkan saya adalah salah satu murid di Jakarta Selatan yang masih aktif saat ini dan bersekolah di SMK Negeri 8 Jakarta.
                </p>
                }
            />
            <Section 
                title="Section Title"
                titleDescription="This is a description for the section."
                content={<p>This is the content of the section.</p>}
            />
            <Contact/>
        </>
    )
}

export default App