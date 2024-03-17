import styles from './styles.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
        <img src="/icons/search.svg" alt="search" />
        <input type="text" />
    </div>
  )
}

export default Search