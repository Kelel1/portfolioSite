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
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.75) 0px 1px 1px 0px;
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