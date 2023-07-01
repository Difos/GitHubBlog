import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useContextSelector } from 'use-context-selector'
import { SummaryCard, SummaryContainer } from './styled'
import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
  ArrowLeft,
  ChatCircle,
  CalendarBlank,
} from 'phosphor-react'
import { BlogContext } from '../../contexts/BlogContext'

export function Summary() {
  const { isShowCompleted, selectedBlog, bloprofile, setIsShowCompleted } =
    useContextSelector(BlogContext, (context) => ({
      isShowCompleted: context.isShowCompleted,
      selectedBlog: context.selectedBlog,
      bloprofile: context.bloprofile,
      setIsShowCompleted: context.setIsShowCompleted,
    }))

  // const data = new Date(selectedBlog.updated_at)
  // const timeRunning = formatDistanceToNow(data, { locale: ptBR })

  return (
    <SummaryContainer>
      <SummaryCard>
        {isShowCompleted ? (
          <div className="BlogContainer">
            <img src={bloprofile.avatar_url} />
            <div className="BlogText">
              <div className="IdentifyText">
                <span>{bloprofile.name}</span>
                <span>
                  <a href={bloprofile.html_url}>
                    GITHUB
                    <ArrowSquareUpRight />
                  </a>
                </span>
              </div>
              <span>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </span>
              <div className="LogoContainer">
                <span>
                  <GithubLogo />
                  {bloprofile.login}
                </span>
                <span>
                  <Buildings /> {bloprofile.name}
                </span>
                <span>
                  <Users /> {bloprofile.followers} seguidores
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="BlogText2">
              <div className="IdentifyText2">
                <span onClick={() => setIsShowCompleted(true)}>
                  <ArrowLeft />
                  Voltar
                </span>
                <span>
                  <a href={bloprofile.html_url}>
                    GITHUB
                    <ArrowSquareUpRight />
                  </a>
                </span>
              </div>
              <div className="spanTitle">
                <span>{selectedBlog.title}</span>
              </div>

              <div className="LogoContainer">
                <span>
                  <GithubLogo />
                  {bloprofile.login}
                </span>
                <span>
                  <CalendarBlank />
                </span>
                <span>
                  <ChatCircle /> {selectedBlog.comments} comentários
                </span>
              </div>
            </div>
          </div>
        )}
      </SummaryCard>
    </SummaryContainer>
  )
}
