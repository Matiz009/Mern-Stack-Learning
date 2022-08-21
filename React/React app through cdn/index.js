/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

function MainComponent() {
  return <h1>I'm learning React!</h1>;
}

const page = (
  <nav>
    <h1>~Matiz</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
//react components
ReactDOM.render(page, document.getElementById("root"));
console.log(MainComponent);