import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
  ];
  return (
    <div className="App">
      <Greet name="Anjali" messageCount={100} isLOggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>10</Heading>
      <Oscar>
        <Heading>Oscar</Heading>
      </Oscar>
      <Button
        handleClick={(event) => {
          console.log("Button Clicked", event);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.currentTarget.value)}
      />
    </div>
  );
}

export default App;
