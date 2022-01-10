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

export async function getStaticProps() {
  // SSR渲染-每次页面刷新都会重新请求一次接口数据
  console.log("getData", "isr")
  const res = await getDataTest()
  return {
    props: {
      posts: res.data.list,
    },
    // 開啟 ISR，最多每60s重新生成一次頁面
    revalidate: 60,
  }
}
export default Blog
