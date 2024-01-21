const FilterRestaurant = () => {
  return (
    <aside className=" flex flex-col bg-white border border-red-400 ">
      <div>
        <h1>Place Typee</h1>
        <div className=" ">
          <label htmlFor="restaurants">Restaurants</label>
          <input type="checkbox" id="restaurants" />
        </div>
      </div>
    </aside>
  );
};

export default FilterRestaurant;
