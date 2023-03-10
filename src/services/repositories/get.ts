import client from '../api-client'

const PER_PAGE = 10

export default async function getRepositories(techName: string, sort: string, page = 1) {
  const data = await client(
    `/repositories?q=language%3A${techName}%20stars%3A%3E1000%20license%3Amit&per_page=${PER_PAGE}&page=${page}&sort=${sort}`,
  )

  return data.map((repository) => {
    const { id, full_name, html_url } = repository

    const image = `https://opengraph.githubassets.com/repoflix123rondow/${full_name}`

    return {
      id: id.toString(),
      name: full_name,
      url: html_url,
      image,
    }
  })
}
