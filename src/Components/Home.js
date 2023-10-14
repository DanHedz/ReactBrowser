import Hero from "./Hero";

const Home = () => {
return (
   <>
   <Hero text="Welcome to React 201" />
   <div className="container">
      <div className="row">
         <div className="col-lg-8 offset-lg-2 my-5">
         <h2>React 201 project:</h2>
            <p className="lead">
               I created movie browser that's API driven. There's a search function,
               movie detail view, about page, all built into a single page application / progressive web application.
            </p>
            <p className="lead">
               
            </p>
            <p className="lead">
               Just a few bugs that have not been solved yet:
            </p>
            <ul className="lead">
               <li>There is no 404 page</li>
               <li>Sometimes a search result doesn't have an image</li>
               <li>There is no handler if there are no search results</li>
               <li>The search button in the navigation doesn't work</li>
            </ul>
         </div>
      </div>
   </div>
   </>
);
};

export default Home;
