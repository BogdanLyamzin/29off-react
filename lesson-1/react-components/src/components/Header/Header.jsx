const Header = ({title, subtitle})=> {
    // console.log(props)
    // const {title, subtitle} = props;
    return (
        <>
            <h2>{title}</h2>
            {subtitle && <h3>{subtitle}</h3>}
        </>
    )
}

export default Header;