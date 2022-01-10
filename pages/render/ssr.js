import { getDataTest } from "../../api"
import styles from "../../styles/Home.module.css"
function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {posts.map((item) => (
          <div key={item.id}>{item.setMealName}</div>
        ))}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // SSR渲染-每次页面刷新都会重新请求一次接口数据
  console.log("getData", "ssr")
  const res = await getDataTest()
  return {
    props: {
      posts: res.data.list,
    },
  }
}
export default Blog
