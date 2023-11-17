import styles from "./home.modules.css";
import logo from "../../Assets/insta.png";
import home from "../../Assets/home.png";
import search from "../../Assets/search.png";
import explore from "../../Assets/explore.png";
import reels from "../../Assets/reels.png";
import messages from "../../Assets/messages.png";
import notification from "../../Assets/notification.png";
import create from "../../Assets/create.png";
import more from "../../Assets/more.jpg";
import { Link } from "react-router-dom";
import { PostCard } from "../../Components/PostCard/PostCard";
import { auth } from "../../config/firebase/firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const handleSignout = () => {
    if (auth.currentUser) {
      signOut(auth)
        .then(() => {
          alert("Signed Out");
        })
        .catch((error) => {
          alert("Some Error");
        });
    }
  };

  return (
    <div className="main">
      <div className="sideMenu">
        <div className="logo">
          <img src={logo} height="40px" />
        </div>
        <div>
          <div className="row">
            <img src={home} height="25px" />
            <h4 className="active">Home</h4>
          </div>
          <div className="row">
            <img src={search} height="25px" />
            <h4>Search</h4>
          </div>
          <div className="row">
            <img src={explore} height="25px" />
            <h4>Explore</h4>
          </div>
          <div className="row">
            <img src={reels} height="25px" />
            <h4>Reels</h4>
          </div>
          <div className="row">
            <img src={messages} height="25px" />
            <h4>Message</h4>
          </div>
          <div className="row">
            <img src={notification} height="25px" />
            <h4>Notification</h4>
          </div>
          <Link to="/createPost">
            <div className="cust_row">
              <img src={create} height="45px" />
              <h4>Create</h4>
            </div>
          </Link>
          <div className="row">
            <div className="profile">B</div>
            <h4>Profile</h4>
          </div>
          <div className="cust_row">
            <img src={more} height="45px" />
            <h4>More</h4>
          </div>
        </div>
      </div>
      <div className="container commonRow">
        <div className="post">
          <div className="commonRow" style={{ paddingLeft: "250px" }}>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
            <div className="status">
              <div className="subStatus"></div>
              <div className="name">
                <span className="ellipsis">user</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <PostCard />
            </div>
          </div>
          <div></div>
        </div>
        <div className="suggestion">
          <div className="postRow">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">
                  {auth.currentUser
                    ? auth.currentUser.displayName
                    : "Click on login"}
                </span>
                <br />
                <span
                  style={{ cursor: "pointer" }}
                  className="signOut"
                  onClick={handleSignout}
                >
                  {auth.currentUser ? "Sign Out" : "to login"}
                </span>
              </div>
            </div>
            <Link to={auth.currentUser ? "/signIn" : "/signUp"}>
              <div>{auth.currentUser ? "Switch" : "Log In"}</div>
            </Link>
          </div>
          <div className="postRow Suggested">
            <div>Suggested for you</div>
            <div className="seeAll">See All</div>
          </div>
          <div className="postRow pding">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">user</span>
                <br />
                <span className="followedBy">Followed by user</span>
              </div>
            </div>
            <div className="switch">Follow</div>
          </div>
          <div className="postRow pding">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">user</span>
                <br />
                <span className="followedBy">Followed by user</span>
              </div>
            </div>
            <div className="switch">Follow</div>
          </div>
          <div className="postRow pding">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">user</span>
                <br />
                <span className="followedBy">Followed by user</span>
              </div>
            </div>
            <div className="switch">Follow</div>
          </div>
          <div className="postRow pding">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">user</span>
                <br />
                <span className="followedBy">Followed by user</span>
              </div>
            </div>
            <div className="switch">Follow</div>
          </div>
          <div className="postRow pding">
            <div className="commonRow">
              <div className="postProfile"></div>
              <div className="suggestionProfile">
                <span className="postName">user</span>
                <br />
                <span className="followedBy">Followed by user</span>
              </div>
            </div>
            <div className="switch">Follow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
