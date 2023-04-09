import React from 'react';
import './AddToCart.css';
import { Link } from 'react-router-dom';

const AddToCart = () => {
    return (
        <div>
            <div className="addToCartMain">

                <p className='cartTitle'>YOUR CART :</p>

                <div className="addToCartContainer">

                    <table>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Tour-Type</th>
                            <th>Total-Member</th>
                            <th>Price</th>
                            <th>Last-Date</th>
                            <th>Checkout</th>
                            <th>Edit</th>
                        </tr>
                        <tr>
                            <td><i class="uil uil-cancel"></i></td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td><button className='btn-outline'>Procced to checkout</button></td>
                            <td><i class="uil uil-edit-alt"></i></td>
                        </tr>

                    </table>



                </div>
            </div>

            {/* <Link to='/checkout'>checkout</Link> */}
        </div>
    );
};

export default AddToCart;