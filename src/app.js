import React, { useCallback, useState, useEffect } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const cartList = store.getState().cartList;

  const [modal, setModal] = useState(false);
  const [totalSum, setTotalSum] = useState(0);

  const callbacks = {
    onDeleteCartItem: useCallback((code) => {
      store.deleteCartItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddToCart: useCallback((item) => {
      store.addToCart(item);
    }, [store]),
  }

  useEffect(() => {
    let sum = 0

    cartList.map(cartItem => {
      sum += (cartItem.price * cartItem.count)
    })
    setTotalSum(sum)
  }, [cartList])

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls
        setModal={setModal}
        count={cartList.length}
        total={totalSum} />
      <List
        list={list}
        onAddToCart={callbacks.onAddToCart} />
      {modal &&
        (<Modal
          cartList={cartList}
          setModal={setModal}
          total={totalSum}
          onDeleteItem={callbacks.onDeleteCartItem}
        />)}
    </PageLayout>
  );
}

export default App;
