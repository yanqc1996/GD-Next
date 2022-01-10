module.exports = {
  experimental: {
    reactRoot: true,
    concurrentFeatures: true, // 启动SSR流媒体/实验性特性，需要删除getInitialProps静态方法和getServerSideProps导出，目前流组件和原来的写法是不兼容的~~~~~~~~~~~~哈哈哈哈哈
    serverComponents: true,
  },
}
