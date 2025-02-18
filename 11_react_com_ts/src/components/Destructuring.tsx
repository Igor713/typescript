export interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

export default function Destructuring({ title, content, commentsQty, tags }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>Quantidade de comentários: {commentsQty}</div>
      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
    </div>
  );
}
