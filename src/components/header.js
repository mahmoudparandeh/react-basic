const Header = () => {
    const getYear = () => {
        const newYear = new Date();
        return newYear.getFullYear();
    };

    return (
        <>
            This is my header and the time is {getYear()}
        </>
    );

}
export default Header;

