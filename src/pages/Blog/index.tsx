import { useContextSelector } from 'use-context-selector'
import { Card } from '../../components/Card'
import { CardBlogContainer } from '../../components/Card/styled'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { CompletText } from './components/CompletContent'
import { SearchForm } from './components/SearchForm'
import { BlogContext } from '../../contexts/BlogContext'

export function Blog() {
  const { blogpost, isShowCompleted, handleCardClick, selectedBlog } =
    useContextSelector(BlogContext, (context) => ({
      blogpost: context.blogpost,
      isShowCompleted: context.isShowCompleted,
      handleCardClick: context.handleCardClick,
      selectedBlog: context.selectedBlog,
    }))

  return (
    <div>
      <Header />

      {isShowCompleted ? (
        <div>
          <Summary />
          <SearchForm />
          <CardBlogContainer>
            {blogpost.map((blog) => (
              <div
                key={blog.node_id}
                onClick={() => handleCardClick(blog.node_id)}
              >
                <Card blogpost={blog} />
              </div>
            ))}
          </CardBlogContainer>
        </div>
      ) : (
        <div>
          <Summary isShowCompleted={isShowCompleted} />
          <CompletText selectedBlog={selectedBlog} />
        </div>
      )}
    </div>
  )
}
