const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius:"0px 200px 200px 200px"}} className="w-[120px] " src={image} alt="" />
      <div >
        <h3 className="uppercase">{name} ----------------------------</h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
