type GreetProps = {
  name: string;
  messageCount: number;
  isLOggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLOggedIn
        ? ` Hey {props.name}!. You have {props.messageCount} messages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
