import { type ReactNode, useState, useEffect } from 'react';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import { get } from './util/http.ts'
import fetchingImg from './assets/data-fetching.png'
import ErrorMessage from './components/ErrorMessage.tsx';

// getting this from dummy data site
type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  // to give users a loading screen
  const [isFetching, setIsFetching] = useState(false)
  // for error state
  const [error, setError] = useState<string>()

  // to prevent infinite loop
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      try {
         // fetching dummy data
        const data = (await get(
          'http://jsonplaceholder.typicode.com/posts'
        )) as RawDataBlogPost[]

        const blogPosts: BlogPost[] = data.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        })

        setFetchedPosts(blogPosts)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }

      setIsFetching(false)
    }

    fetchPosts()
  }, [])

  let content: ReactNode

  if (error) {
    content = <ErrorMessage text={error}></ErrorMessage>
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }
  
  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
      {content}
    </main>
  )
}

export default App;
