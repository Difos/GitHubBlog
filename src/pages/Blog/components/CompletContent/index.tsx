import { CompletContentContainer } from './styled'
import { IBlogPost } from '../../../../contexts/BlogContext'
import ReactMarkdown from 'react-markdown'

export function CompletText({ selectedBlog }: IBlogPost) {
  return (
    <CompletContentContainer>
      <div>
        <ReactMarkdown>{selectedBlog.body}</ReactMarkdown>
        {/* <span>{selectedBlog.body}</span> */}
      </div>
    </CompletContentContainer>
  )
}
