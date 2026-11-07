export default function Section({title, titleDescription, content}) {
    return (
        <section style={{ marginTop: '24px', display: 'flex', flexDirection: 'column',gap: '12px' }}>
            <div>
                <h2>{title}</h2>
                <small>{titleDescription}</small>
            </div>
            <div>{content}</div>
        </section>
    )
}