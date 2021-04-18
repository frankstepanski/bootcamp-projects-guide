import React from 'react';
import Header from './components/Header';
import './App.css';

import { faFeatheralt, fasStar, faImage, faCamera, faChartBar, faCheckcircle, faComment, faRetweet, faHeart, faShareAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import user1 from './assets/user1.jpg';
import user2 from './assets/user2.jpg';
import user3 from './assets/user3.jpg';
import user4 from './assets/user4.jpg';
import user5 from './assets/user5.jpg';
import postImg1 from './assets/post-img-1.jpg';
import postImg2 from './assets/post-img-2.jpg';
import postImg3 from './assets/post-img-3.jpg';
import postImg4 from './assets/post-img-4.jpg';

function App () {

    return (
  
      <section className="feeds-page">

        < Header />

        <div className="feeds-content ">
          
           <div className="feeds-header">
              <div className="header-top ">
                 <h4>Home</h4>
                 <FontAwesomeIcon icon={fasStar} />
             </div>
             <div className="header-post ">
                <div className="header-img-wrapper">
                   <img src={user1} alt="user1" />
                </div>
                <input type="text" placeholder="What's happening?" />
                <FontAwesomeIcon icon={faImage} /> &nbsp;
                <FontAwesomeIcon icon={faCamera} /> &nbsp;
                <FontAwesomeIcon icon={faChartBar} />
             </div>
           </div>
      
           <div className="posts">
               <div className="post">
                  <div className="user-avatar">
                      <img src={user1} alt="user1" />
                  </div>
                  <div className="post-content">
                    <div className="post-user-info ">
                       <h4>Helen Brown</h4>
                       <FontAwesomeIcon icon={faCheckcircle} />
                      <span>@helenbrown 15m</span>
                    </div>
                    <p className="post-text ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                        fuga necessitatibus.
                    </p>
                    <div className="post-img">
                       <img src={postImg1} alt="postImg1" />
                    </div>
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
              </div>
              <div className="post">
                  <div className="user-avatar">
                      <img src={user2} alt="user2" />
                  </div>
                  <div className="post-content">
                    <div className="post-user-info ">
                       <h4>Helen Brown</h4>
                       <FontAwesomeIcon icon={faCheckcircle} />
                      <span>@helenbrown 15m</span>
                    </div>
                    <p className="post-text ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                        fuga necessitatibus.
                    </p>
                    <div className="post-img">
                       <img src={postImg2} alt="postImg2" />
                    </div>
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
              </div>
              <div className="post">
                  <div className="user-avatar">
                      <img src={user3} alt="user3" />
                  </div>
                  <div className="post-content">
                    <div className="post-user-info ">
                       <h4>Helen Brown</h4>
                       <FontAwesomeIcon icon={faCheckcircle} />
                      <span>@helenbrown 15m</span>
                    </div>
                    <p className="post-text ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                        fuga necessitatibus.
                    </p>
                    <div className="post-img">
                       <img src={postImg3} alt="postImg3" />
                    </div>
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
              </div>
              <div className="post">
                  <div className="user-avatar">
                      <img src={user4} alt="user4" />
                  </div>
                  <div className="post-content">
                    <div className="post-user-info ">
                       <h4>Helen Brown</h4>
                       <FontAwesomeIcon icon={faCheckcircle} />
                      <span>@helenbrown 15m</span>
                    </div>
                    <p className="post-text ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Voluptates et voluptatibus vel tenetur quos, id omnis sed error
                        fuga necessitatibus.
                    </p>
                    <div className="post-img">
                       <img src={postImg4} alt="postImg4" />
                    </div>
                    <FontAwesomeIcon icon={faComment} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faShareAlt} />
                  </div>
              </div>
            </div>
           
            <div className="follow">
              <h3 className="follow-heading  ">Who to follow</h3>
              <div className="follow-user ">
                 <div className="follow-user-img">
                   <img src={user3} alt="user3" />
                 </div>
                 <div className="follow-user-info ">
                   <h4>Ann Smith</h4>
                   <p>@annsmith</p>
                 </div>
                <button type="button" className="follow-btn ">Follow</button>
              </div>
              <div className="follow-user ">
                 <div className="follow-user-img">
                    <img src={user4} alt="user4" />
                 </div>
                 <div className="follow-user-info ">
                   <h4>Nick Doe</h4>
                   <p>@nickdoe</p>
                 </div>
                 <button type="button" className="follow-btn ">Follow</button>
             </div>
             <div className="follow-user ">
                <div className="follow-user-img">
                   <img src={user5} alt="user5" />
                </div>
                <div className="follow-user-info ">
                   <h4>James Black</h4>
                   <p>@jamesblack</p>
                </div>
                <button type="button" className="follow-btn ">Follow</button>
            </div>
            <div className="follow-link">
                <a href="#">Show more</a>
            </div>
            <footer className="follow-footer ">
               <ul>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Cookies</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">More</a></li>
               </ul>
            </footer>
        </div>
      </div>

      <button type="button" className="post-btn">
        + <FontAwesomeIcon icon={faFeatheralt} /> Post
      </button>


      </section>

    )
}

export default App;
