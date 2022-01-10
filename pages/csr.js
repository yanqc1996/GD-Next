import { Suspense } from "react"

// Shared Components
import Spinner from "../components/spinner"

// Client Components
import Page from "../components/page.client"
import Story from "../components/story.client"

// Utils
import fetchData from "../lib/fetch-data"
import { transform } from "../lib/get-item"
import useData from "../lib/use-data"

// 这里面hydration会有报错，需要看下是什么原因
function StoryWithData({ id }) {
  const data = useData(`s-${id}`, () => fetchData(`item/${id}`).then(transform))
  console.log(data)
  return <Story {...data} />
}

function NewsWithData() {
  const storyIds = useData("top", () => fetchData("topstories"))
  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense key={id} fallback={<Spinner />}>
            <StoryWithData id={id} />
          </Suspense>
        )
      })}
    </>
  )
}

export default function News() {
  return (
    <Page>
      {typeof window === "undefined" ? (
        <Spinner />
      ) : (
        <Suspense fallback={<Spinner />}>
          <NewsWithData />
        </Suspense>
      )}
    </Page>
  )
}
