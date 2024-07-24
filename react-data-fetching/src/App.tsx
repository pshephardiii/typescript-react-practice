import { type ReactNode, useState, useEffect } from 'react';
import BlogPosts, { BlogPost } from './components/BlogPosts.tsx';
import { get } from './util/http.ts'
import fetchingImg from './assets/data-fetching.png'

// getting this from dummy data site
type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()

  // to prevent infinite loop
  useEffect(() => {
    async function fetchPosts() {
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
    }

    fetchPosts()
  }, [])

  let content: ReactNode

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }
  
  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
      {content}
    </main>
  )
}

export default App;
