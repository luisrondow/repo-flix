type GitHubRepo = {
  id: number
  full_name: string
  html_url: string
}

export default async function client(endpoint: string, customConfig = {}): Promise<GitHubRepo[]> {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  const response = await fetch(`https://api.github.com/search${endpoint}`, config)
  const data = await response.json()

  if (response.ok) {
    return data?.items
  } else {
    return Promise.reject(data)
  }
}
