import "./Home.css"; // This line is like saying, "I want to use some special decorations for my web page, and they are stored in a file called 'Home.css'." Think of it as picking out colorful stickers to make your Lego house look nice.
import logo from "../images/logo22.png.png";
//This line is like saying, "I have a special picture that I want to put on my web page, and it's stored in a file called 'logo22.png.png'." It's like choosing a special Lego piece with a picture on it.

export function Home({ user, setUser }) {
  const handleLogout = () => {
    setUser([]);
  };

  //export function Home({ user, setUser }) {: This part is like saying, "I'm going to make a special place on my web page, and I'll call it 'Home'. Inside this place, I can do some things." The { user, setUser } part is like telling the computer that you might need to use some information about the user and a way to change it later.

  //const handleLogout = () => { setUser([]); };: This is like saying, "I'm going to make a special button. When someone clicks it, we will do something. In this case, when the button is clicked, we will make the user go away by setting it to be an empty list."

  //The return statement in JavaScript is used to specify what value or component should be sent back or displayed when a function is called.
  return (
    <div className="home-container">
      <h2 className="home-title">
        Bienvenido a <br /> <br />{" "}
        <img src={logo} classNAme="home-logo" alt="Logo"></img>
        <h2 className="home-logo"> </h2>
        Hilos y Sueños: Un rincón mágico de crochet.
      </h2>
      <button className="logout-button" onClick={handleLogout}>
        Close session
      </button>
    </div>
  );
}
//<button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>: Finally, you're adding a button to your paper. When someone clicks this button, it will do something special. In this case, it's saying "Log out" or "Cerrar sesión," and it's connected to the handleLogout function you defined earlier.
