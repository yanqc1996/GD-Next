export async function getDataTest() {
  const [res] = await Promise.all([
    fetch(
      `http://114.55.106.181:7300/mock/60e01906a67078595d9aac7f/pangu/hms/nuwa/appApi/admin/setMeal/makeup`
    ),
  ])
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`)
  }
  return res.json()
}
