import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CardBlog } from './styled'
interface IBlogContent {
  body: string
  title: string
}
export function Card({ blogpost }: IBlogContent) {
  const data = new Date(blogpost.updated_at)
  const timeRunning = formatDistanceToNow(data, { locale: ptBR })

  return (
    <CardBlog>
      <div className="CardContainer">
        <span>{blogpost.title}</span>
        <span>{timeRunning}</span>
      </div>
      <div>{blogpost.body ? blogpost.body.slice(0, 182) : ''}</div>
    </CardBlog>
  )
}
