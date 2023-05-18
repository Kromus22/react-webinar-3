import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Modal from "../modal";

function Controls({ modal, setModal, onOpenCart }) {

  return (
    <>
      <div className='Controls'>
        <div>В корзине:</div>
        <div className='Controls-price'>2 товара / 223 ₽</div>
        <button onClick={() => onOpenCart()}>Перейти</button>
      </div>

    </>
  )
}

Controls.propTypes = {
  onOpenModal: PropTypes.func
};

Controls.defaultProps = {
  onOpenModal: () => { }
}

export default React.memo(Controls);
