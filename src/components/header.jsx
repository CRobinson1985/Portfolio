export default function Header(props) {
  return (
<header>
  <h1>{props.isCoolGuy ? "Welcome To This Cool Guy's Portfolio" : "Welcome to My Portfolio"}</h1>
</header>
  );

}