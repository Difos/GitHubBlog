import { useCallback, useEffect, ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface IBlogProfile {
  login: string
  id: number
  avatar_url: string
  followers: number
  following: number
  name: string
  html_url: string
}

export interface IBlogPost {
  body: string
  title: string
  node_id: string
  updated_at: string
  comments: string
  is_selected: boolean
}

interface IBlogProviderProps {
  children: ReactNode
}

interface IBLogContextType {
  bloprofile: IBlogProfile[]
  blogpost: IBlogPost[]
  fetchUserProfile: () => Promise<void>
  fetchRepo: (query?: string) => Promise<void>
  handleCardClick: (nodeId: string) => void
  setIsShowCompleted: () => void
  isShowCompleted: boolean
  selectedBlog?: IBlogPost
  setSearchText: (text: string) => void
}

export const BlogContext = createContext({} as IBLogContextType)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [bloprofile, setBlogProfile] = useState<IBlogProfile[]>([])
  const [blogpost, setBlogPost] = useState<IBlogPost[]>([])
  const [selectedBlog, setSelectedBlog] = useState<IBlogPost>()
  const [searchText, setSearchText] = useState('')

  const [isShowCompleted, setisShowCompleted] = useState(true)

  const handleCardClick = (nodeId: string) => {
    const updatedBlogPost = blogpost.map((post) => {
      if (post.node_id === nodeId) {
        return {
          ...post,
          is_selected: !post.is_selected,
        }
      }
      return post
    })
    setBlogPost(updatedBlogPost)
    setSelectedBlog(updatedBlogPost.find((post) => post.node_id === nodeId))
    setisShowCompleted(false)
  }

  const setIsShowCompleted = () => {
    if (isShowCompleted) {
      setisShowCompleted(false)
    } else {
      setisShowCompleted(true)
    }
  }

  const fetchUserProfile = useCallback(async () => {
    try {
      const response = await api.get('/users/difos', {
        params: {},
      })

      setBlogProfile(response.data)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const fetchRepo = useCallback(async (query?: string) => {
    try {
      const repo = 'rocketseat-education/reactjs-github-blog-challenge' // Repositório desejado
      const searchQuery = query ? `${query} repo:${repo}` : `repo:${repo}`

      const response = await api.get(
        `/search/issues?q=${encodeURIComponent(searchQuery)}`,
      )
      setBlogPost(response.data.items)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchUserProfile()
    fetchRepo('Boas')
  }, [fetchUserProfile, fetchRepo])

  useEffect(() => {
    const filteredBlogpost = blogpost.filter((post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()),
    )
    setBlogPost(filteredBlogpost)
  }, [searchText, blogpost])

  return (
    <BlogContext.Provider
      value={{
        bloprofile,
        blogpost,
        fetchUserProfile,
        isShowCompleted,
        handleCardClick,
        selectedBlog,
        setIsShowCompleted,
        setSearchText,
        fetchRepo,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
