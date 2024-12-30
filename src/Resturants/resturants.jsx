import Card from "./card";
import styles from "./resturants.module.css";
import Data from "./list";
import { useState } from "react";
const Resturants = () => {
  const [search, setSearch] = useState("");
  const findRestrant = (search) => {
    return setSearch(search);
  };
  const [rating, setRating] = useState(0);
  const onRating = (e) => {
    setRating(Number(e.target.value));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const searchFilter = (item) => {
    return (
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.address.toLowerCase().includes(search.toLowerCase()) ||
        item.type_of_food.toLowerCase().includes(search.toLowerCase())) &&
      item.rating >= rating
    );
  };
  const mapFnc = (item, idx) => {
    return <Card key={item._id} {...item} />;
    
  };
  const filteredData = Data.filter(searchFilter);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.filterContainer}>
        <input
          type="text"
          onChange={(e) => {
            findRestrant(e.target.value);
          }}
          placeholder="Search Restaurants..."
        />
        <label htmlFor="rating">
          Minimum ration:
          <input
            type="number"
            onChange={onRating}
            min="0"
            value={rating || 0}
            max="6"
          />
        </label>
      </div>
      <div className={styles.cardsContainer}>{currentItems.map(mapFnc)}</div>

      <div className={styles.pagination}>
        <button onClick={() => changePage(1)} disabled={currentPage === 1}>
          First
        </button>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
};
export default Resturants;
