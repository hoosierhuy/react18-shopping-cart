export default function Basket(props) {
  const {cartItems, onAdd, onRemove} = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0: 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return <aside className="block col-1">
    <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <section>Cart is empty</section>}
      {cartItems.map((item) => (
        <section key={item.id} className="row">
          <article className="col-1">{item.name}</article>
          <article className="col-1">
            <button onClick={() => onRemove(item)} className="remove">-</button>
            <button onClick={() => onAdd(item)} className="add">+</button>
          </article>
          <article className="col-1 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </article>
        </section>
      ))}

      {
        cartItems.length !== 0 && (
          <>
            <hr />
            <section className="row">
              <article className="col-2">Items Price</article>
              <article className="col-1 text-right">${itemsPrice.toFixed(2)}</article>
            </section>
            <section className="row">
              <article className="col-2">Tax Price</article>
              <article className="col-1 text-right">${taxPrice.toFixed(2)}</article>
            </section>
            <section className="row">
              <article className="col-2">Shipping Price</article>
              <article className="col-1 text-right">${shippingPrice.toFixed(2)}</article>
            </section>
            <section className="row">
              <article className="col-2">
                <strong>Total Price</strong>
              </article>
              <article className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </article>
            </section>
            <hr />
            <section className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </section>
          </>
        )
      }
    </div>
  </aside>
}