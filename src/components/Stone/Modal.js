import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ stone, isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="detail__content">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
            </button> 
          <div className="detail__image">
            <img className="detail__img"
              src={`${process.env.PUBLIC_URL}/${stone.image}`}
              alt={stone.name}
              />
          </div>
          <div className="detail__text-box">
              <div className="detail__name">
                  <h3 className="detail__head">{stone.name}</h3>
                      <p className="detail__type">{stone.type}</p> 
              </div>
              <div className="detail__info">
                  <h3 className="detail__head">Origine:</h3>
                      <p className="detail__type">{stone.origin}</p>
                  <h3 className="detail__head">Finition:</h3>
                      <p className="detail__type">{stone.finish}</p>
                  <h3 className="detail__head">Epaisseur:</h3>
                      <p className="detail__type">{stone.thickness}</p> 
              </div>
              <div className="detail__thumbs">
                  {/* <img src="img/materials/BiancoSivec2.jpg" class="detail__thumb" alt="BiancoSivec2">
                  <img src="img/materials/BiancoSivec3.jpg" class="detail__thumb" alt="BiancoSivec3">
                  <img src="img/materials/BiancoSivec4.jpg" class="detail__thumb" alt="BiancoSivec4">
                  <img src="img/materials/BiancoSivec5.jpg" class="detail__thumb" alt="BiancoSivec5"> */}
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  ) : null;
  
  export default Modal;