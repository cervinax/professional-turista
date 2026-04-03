exports.handler = async function(event, context) {
  try {
    const res = await fetch(
      'https://professionalturista.substack.com/api/v1/posts?limit=5&offset=0'
    );
    if (!res.ok) throw new Error('Substack API ' + res.status);
    const posts = await res.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(posts)
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
