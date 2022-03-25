const Head = ( props) => {
    const toggleModal = props.toggleModal;
    return ( 
        <div className="header">
          <span onClick={() => { toggleModal() }} style={ { float: "left" } }  className="menu">
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
          </span>
          <span style={ { float: "right" } }  className="company-name">Bergwald</span>
          <div style={ { clear: "both" } } ></div>
        </div>
    );
}
 
export default Head;