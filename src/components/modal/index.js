import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import CartItem from "../cartItem";

// какое-то время ковырял Item, чтобы юзать его и тут, и в List
// в итоге почитал сообщения в чате, кажется, что это не нужно
// и необходимо просто сделать новый компонент. ну ок, сделал просто новый.
function Modal({ cartList, setModal, total, onDeleteItem }) {

  return (
    <>
      <div className={'Modal-background'}>
        <div className={'Modal-container'}>
          <div className={'Modal-header'}>
            <h1 className={'Modal-title'}>Корзина</h1>
            <button className={'Modal-close'} onClick={() => setModal(false)}>Закрыть</button>
          </div>

          <div className={'Modal-list'}>
            {cartList.length > 0 ?
              cartList.map(item =>
                <div key={item.code} className='List-item'>
                  <CartItem
                    item={item}
                    onDelete={onDeleteItem}
                  />
                </div>
              ) :
              <div className="Modal-empty">Ваша корзина пуста</div>
            }

          </div>
          <div className={'Modal-footer'}>
            <h3 className={'Modal-title'}>Итого</h3>
            <h3 className={'Modal-count'}>{total.toLocaleString('ru-RU')} ₽</h3>
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  setModal: PropTypes.func
};

Modal.defaultProps = {
  setModal: () => { }
}

export default React.memo(Modal);