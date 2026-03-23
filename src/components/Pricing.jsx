function Pricing() {
  return (
    <section className="pricing">
      <h2>Choose a pricing plan</h2>
      <p>No hidden fees. Cancel anytime.</p>

      <div className="pricing-cards">
        <div className="card">
          <h3>Starter</h3>
          <p>$0/mo</p>
          <button>Start for Free</button>
        </div>

        <div className="card highlight">
          <h3>Growth</h3>
          <p>$15/mo</p>
          <button>Try Now</button>
        </div>

        <div className="card">
          <h3>Pro</h3>
          <p>$60/mo</p>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;