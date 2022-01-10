import Page from "../components/page.client"
import Story from "../components/story.client"
import Footer from "../components/footer.client"
// Utils
import fetchData from "../lib/fetch-data"
import { transform } from "../lib/get-item"

// 不基于流媒体渲染数据，采用之前的方式 ~~~ 为啥demo这样写就可以

export async function getServerSideProps() {
  const storyIds = await fetchData("topstories", 500)
  console.log(storyIds)
  const data = await Promise.all(
    storyIds.slice(0, 30).map((id) => fetchData(`item/${id}`).then(transform))
  )

  return {
    props: {
      data,
    },
  }
}

export default function News({ data }) {
  return (
    <Page>
      {data.map((item, i) => {
        return <Story key={i} {...item} />
      })}
      <Footer />
    </Page>
  )
}
