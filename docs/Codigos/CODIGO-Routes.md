# Routes

:::info

>## App React

:::

## main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

## index.css

```css
body {
  margin: 0;
  background-color: #242424;
  color: #fff;
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
section {
  background-color: #676464;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
}
```

## App.jsx

```jsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Articulos from "./pages/Articulos";
import Apis from "./pages/Apis";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/apis" element={<Apis />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
```

## Navbar.jsx

```jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="link-list">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/articulos">Articulos</NavLink>
        </li>
        <li>
          <NavLink to="/apis">Apis </NavLink>
        </li>
        <li>
          <NavLink to="/services">Services </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

## Navbar.css

```css
.link-list {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  background-color: #c1c1f6;

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
    font-size: 1.5rem;
  }
  a:hover {
    color: #f31e1e;
  }

  a.active {
    color: red;
    border-bottom: 2px solid red;
  }
}
```



## Header.jsx

```jsx
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title"> Juamaya 🍺 Welcome!</h1>
    </header>
  );
};

export default Header;
```

## Header.css

```css
.header {
  background-color: blue;
  color: #fff;
  padding: 1px;
}
.title {
  text-align: center;
}
```

## Footer.jsx

```jsx
const Footer = () => {
  return <h3 className="footer">Master en React &copy; Juamaya 🍺 2025</h3>;
};

export default Footer;
```

## Footer.css

```css
.footer {
  color: #fff;
}
```
