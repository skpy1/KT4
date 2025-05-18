import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addItem } from './store';
import './App.css';

const App = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAdd = () => {
        const title = prompt('Введите название товара:');
        if (title && title.trim()) {
            dispatch(addItem(title.trim()));
        }
    };

    return (
        <div className="container">
            <h1 className="header">Корзина</h1>
            <button onClick={handleAdd} className="addButton">
                Добавить товар
            </button>

            <ul className="cartList">
                {cartItems.map(item => (
                    <li key={item.id} className="cartItem">
                        <span className="itemTitle">{item.title}</span>

                        <div className="controls">
                            <button
                                onClick={() => dispatch(decrement(item.id))}
                                className="button"
                            >
                                -
                            </button>

                            <span className="count">{item.count}</span>

                            <button
                                onClick={() => dispatch(increment(item.id))}
                                className="button"
                                disabled={item.count >= 25}
                            >
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;