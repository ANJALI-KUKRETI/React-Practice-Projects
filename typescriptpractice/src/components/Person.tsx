type PersonProps = {
  name: {
    first: string;
    last: string;
  };
  age?: number;
};
const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
