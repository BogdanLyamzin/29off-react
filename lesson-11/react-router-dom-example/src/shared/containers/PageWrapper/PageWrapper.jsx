const PageWrapper = ({title, children}) => {
    return (
        <main>
            <h2>{title}</h2>
            {children}
        </main>
    )
}

export default PageWrapper;