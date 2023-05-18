import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import { plural } from "../../utils";
import List from "../list";

function Modal(list, modal, setModal) {
  console.log(list.list)

  function onCloseModal() {
    setModal(false);
  }

  return (
    <div className={'Modal-background'}>
      <div className={'Modal__container'}>
        <div className={'Modal-header'}>
          <h1 className={'Modal-title'}>Корзина</h1>
          <button className={'Modal-close'} onClick={() => onCloseModal()}>Закрыть</button>
        </div>

        <div className={'Modal-list'}>
          <List
            list={list.list}
            //removeProduct={removeProduct}
            modal={modal}
          />
        </div>

        <div className={'Modal-footer'}>
          <h3 className={'Modal-title'}>Итого</h3>
          <h3 className={'Modal-count'}>{' ₽'}</h3>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Modal);