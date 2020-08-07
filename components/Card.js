const Card = () => (
  <div className="card">
    This is a test card
    <p>
      <button className="view" type="submit">View</button>
    </p>
  <style jsx>{`
    .card {
      height: 100%;
      width:100%;
      background: #1e1e1e;
      box-shadow: 0 5px 2px -2px rgba(0, 0, 0, .3);
      border-radius: 5px;
      color: white;
      padding: 1em;
    }
    .view {
      background-color: #0edcef;
      color: white;
      padding 5px 15px;
      border-radius: 5px;
      text-transform: uppercase;
      border: none;
      outline: 0;
    }
  
  `}</style>

  </div>
  
);

export default Card;