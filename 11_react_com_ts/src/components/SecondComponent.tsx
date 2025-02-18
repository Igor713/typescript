interface Props {
  name: string
}

export default function SecondComponent(props: Props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}
