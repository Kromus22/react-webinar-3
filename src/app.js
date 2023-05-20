import React, { useCallback, useState } from 'react';
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
  const cartCount = cartList.length;
  const totalSum = store.getState().totalSum;

  const [modal, setModal] = useState(false);

  const callbacks = {
    onDeleteCartItem: useCallback((code) => {
      store.deleteCartItem(code);
      store.setTotalSum();
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddToCart: useCallback((item) => {
      store.addToCart(item);
      store.setTotalSum();
    }, [store]),
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls
        setModal={setModal}
        count={cartCount}
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
