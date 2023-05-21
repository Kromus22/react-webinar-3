import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Modal from "../modal";

function ModalLayout({ setModal, cartList, total, onDeleteItem }) {
  const onCloseModel = (e) => {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  };

  return (
    <div className={'Modal-background'}
      onClick={onCloseModel}>
      <div className={'Modal-container'}>
        <Modal
          setModal={setModal}
          cartList={cartList}
          total={total}
          onDeleteItem={onDeleteItem} />
      </div>
    </div>
  );
}

ModalLayout.propTypes = {
  children: PropTypes.node,
  setModal: PropTypes.func,
}

Modal.defaultProps = {
  setModal: () => { },
}

export default React.memo(ModalLayout);
