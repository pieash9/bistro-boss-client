

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
        />
      </figure>
      <p className="absolute right-5 bg-slate-900 text-white px-4 py-1 top-5 w-16 text-center">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-orange-400 border-b-4 bg-slate-100 border-t-0 border-x-0 mt-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
