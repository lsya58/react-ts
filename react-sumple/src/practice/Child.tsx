type Props = {
  name: string;
};

export default function Child({ name }: Props) {
  return <p>こんにちは、{name}さん！</p>;
}
