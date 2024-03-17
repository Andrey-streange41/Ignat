import "./App.css";
import ActualNewsSlider from "./components/organisms/ActualNewsSlider/ActualNewsSlider";
import CommentsSlider from "./components/organisms/CommentsSlider/CommentsSlider";
import EmailSubscriptiont from "./components/organisms/EmailSubscription/EmailSubscriptiont";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import HotProductsSlider from "./components/organisms/HotProductsSlider/HotProductsSlider";
import { Post } from "./components/organisms/Post/Post";
import { post } from "./utils/consts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div className="App">
      <Header />
      <ActualNewsSlider />
      <Post
        title={post.title}
        imageUrl={post.imageUrl}
        content={post.content}
      />
      <HotProductsSlider />
      <div className="border"></div>
      <EmailSubscriptiont />
      <CommentsSlider />
      <Footer />
    </div>
  );
}

export default App;
