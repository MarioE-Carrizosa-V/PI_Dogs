//import { useSelector, useDispatch } from "react-redux"
//import React from "react";
//import { paginate } from "../../redux/action"
//
//const Paginate = () => {
//
//    const dispatch = useDispatch();
//    const dogs = useSelector(state => state.allDogs)
//    const numberPage = useSelector(state => state.page)
//    const elements = useSelector(state => state.elementsForPage)
//
//  const cards = Math.ceil(dogs.length / elements);
//  const page = [];
//
//  for (let i = 0; i < cards; i++) {
//    page.push(i + 1);
//  }
//
//  const onChange = (page) => {
//    dispatch(paginate(page));
//  };
//  
//
//  return (
//    <ul className={styles.numPages}>
//      {page.map((page, i) => (
//        <li
//          key={i}
//          onClick={() => onChange(page)}
//          className={page === numberPage ? styles.currentPage : ""}
//        >
//          {page}
//        </li>
//      ))}
//    </ul>
//  );
//}
//
//export default Paginate