import { useContextSelector } from 'use-context-selector'
import { SearchFormContainer } from './styled'
import { BlogContext } from '../../../../contexts/BlogContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>
export function SearchForm() {
  const { fetchRepo, blogpost } = useContextSelector(
    BlogContext,
    (context) => ({
      fetchRepo: context.fetchRepo,
      blogpost: context.blogpost,
    }),
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchRepo(data: SearchFormInputs) {
    await fetchRepo(data.query)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchRepo)}>
      <div className="TextContent">
        <span>Publicações</span>
        <span>{blogpost.length} publicações</span>
      </div>
      <div className="ContainerControls">
        <input
          type="text"
          placeholder="busque conteúdo"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass />
          Buscar
        </button>
      </div>
    </SearchFormContainer>
  )
}
