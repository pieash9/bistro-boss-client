const RecommendsCard = ({rec}) => {
    const {name,recipe,image} = rec
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-x-0 border-t-0">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsCard;
