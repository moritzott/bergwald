import { Link } from "react-router-dom";

const MenuModal = (props) => {

    const toggleModal = props.toggleModal;

    return ( 
        <div className="modal-container" onClick={() => { toggleModal() }} >
            <div className="modal-content">
                <span  className="close-button" style={ { float: 'right', cursor: 'pointer' } } >&times;</span>
                <br />
                <Link to='/'>Home</Link>
                <Link to="/about" >About</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/faq' >FAQ</Link>
            </div>
        </div>
     );
}
 
export default MenuModal;