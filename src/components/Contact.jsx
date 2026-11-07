export default function Contact() {
    return (
        <>
            <section style={{ marginTop: '24px', display: 'flex', flexDirection: 'column',gap: '8px' }}>
                <div>
                    <h2>KONTAK SAYA</h2>
                    <small>Hubungi saya di:</small>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <td><a mailto="hadisumanjaya282@gmail.com">hadisumanjaya282@gmail.com</a></td>
                        </tr>
                        <tr>
                            <th>Github</th>
                            <td><a href="https://github.com/Kazoosane" target="_blank">https://github.com/Kazoosane</a></td>
                        </tr>
                    </thead>
                </table>
            </section>
        </>
    )
}