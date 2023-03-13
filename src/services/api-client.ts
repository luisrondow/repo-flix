type GitHubRepo = {
  id: number
  full_name: string
  html_url: string
}

export default async function client(endpoint: string, customConfig = {}): Promise<GitHubRepo[]> {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(import.meta.env.VITE_API_KEY && {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      }),
    },
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
