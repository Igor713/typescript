export interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]

  // 7 - Enum
  category: Category
}

export enum Category {
  JS = 'JavaScript',
  TS = 'TypeScript',
  P = 'Python'
}

export default function Destructuring({ title, content, commentsQty, tags, category }: Props) {
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
      <div>Categoria é {category}</div>
    </div>
  );
}
