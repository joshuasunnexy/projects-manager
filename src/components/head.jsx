import './head.css'

const Head = ({ children }) => {
  return <div className="head">{children}</div>;
};

const Brand = () => {
  return <h2 className="brand">Montask.</h2>;
};

const Search = () => {
  return (
    <div className="search">
      <label htmlFor="search">
        <img src="/src/assets/icons/default/search.png" alt="search" />
      </label>
      <input type="search" name="searchBar" id="search" placeholder="Search" />
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="notifications">
      <img src="/src/assets/icons/default/comment-alt-dots.png" alt="comments" />
      <img src="/src/assets/icons/default/bell.png" alt="notifications" />
    </div>
  );
};

const User = () => {
  return (
    <div className="user">
      <div className="profileImage">
        <img src="/public/vite.svg" alt="profile photo" />
      </div>
      <div className="details">
        <h4 className="userName">Joshua</h4>
        <h5 className="emailAddress">joshuasundaysunnexy@gmail.com</h5>
      </div>
    </div>
  );
};

export default Head;
export { Brand, Search, Notifications, User };
