import styles from "./styles.module.scss";

interface CommentSlideProps {
  username: string;
  avatar: string;
  comment: string;
  rating: number;
}

const CommentSlide = ({
  username,
  avatar,
  comment,
  rating,
}: CommentSlideProps) => {
  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <div className={styles.userInfo}>
          <div className={styles.userRate}>
            {
                Array(rating).fill(0).map(it=>(<img src="/icons/fullStar.svg" alt="star" />)
                )
            }{
                Array(5-rating).fill(0).map(it=>{
                    return  <img src="/icons/emptyStar.svg" alt="star" />
                 })
            }
          </div>
          <h3>{username}</h3>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CommentSlide;
