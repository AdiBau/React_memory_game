import './menu.css';
import React, { useState } from 'react';
import { createRandomTable, tableColors } from './table';
import { clickOnCart } from './clickOnCart'


function Menu() {
	const [cart, setCart] = useState([]);
	const [size, setSize] = useState('');
	
	const startGame = (nr) => {
		if (nr === 6 || nr === 8) { setSize(() => 'auto auto auto auto') }
		else { setSize(() => 'auto auto auto auto auto auto') }
		const cartList = createRandomTable(nr)
		setCart(() => { return cartList.map((el, index) => { return <div className='cartBorder' key={index} onClick={clickOnCart} >
					<div className="cart noVisible" key={index} data-index={index} data-id={el} style={{ backgroundColor: tableColors[el] }}> </div>
				</div>
			})}
		);
	}
	
	return (
		<>
			<section className="menu" >
				<button className="btn" onClick={() => startGame(6)}>4 x 3</button>
				<button className="btn" onClick={() => startGame(8)}>4 x 4</button>
				<button className="btn" onClick={() => startGame(15)}>6 x 5</button>
				<button className="btn" onClick={() => startGame(18)}>6 x 6</button>
				<p></p>
			</section>
			<section className='table' style={{ gridTemplateColumns: `${size}` }} >
				{cart}
			</section>
		</>
	);
}

export default Menu;
