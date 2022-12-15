import "./header.css"
const Header = (props) => {
    const {setEdit} = props;
    const handleEdit = () => {
        setEdit(true);
    }
    return (
        <>
            <header style={{backgroundColor: '#ff9081', backgroundImage: 'linear-gradient(180deg, #ff9081 2%, #ff9081, 65%, #181818 100%)'}}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img className="info-ava" src="https://i.redd.it/snoovatar/avatars/8658e16c-55fa-486f-b7c7-00726de2e742.png" alt="" />
                    <div className="info-username">tharod</div>
                    <div className="info-age">23 years old</div>
                    <div className="info-about">a di meo meo</div>
                </div>
            </header>
        </>
    );
};

export default Header;
