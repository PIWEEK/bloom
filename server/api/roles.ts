export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const posthogUrl = config.postHogHost
  const projectId = config.postHogProjectId
  const personalApiKey = config.posthogApiKey

  const url = `${posthogUrl}/api/projects/${projectId}/query/`

  console.log('Fetching roles from PostHog API...')

  try {
    const response = await $fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${personalApiKey}`,
      },
      body: {
        query: {
          kind: 'HogQLQuery',
          query: `
          SELECT role, person_id
          FROM onboarding_replies
          WHERE role IS NOT NULL
          LIMIT 50
          `,
        },
      },
    }) as { results: string[][] }

    const data = response

    return data
  }
  catch (err) {
    console.error('Error fetching roles from PostHog:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch roles from PostHog',
    })
  }
})
