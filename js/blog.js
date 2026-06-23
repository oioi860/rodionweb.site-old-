console.log('[blog] script loaded');

const GITHUB_REPO = 'oioi860/rodionweb-blog';
const POSTS_FOLDER = '_posts';
const FRONTMATTER_REGEX = /---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)/;

async function loadBlogPosts() {
  try {
    console.log('[blog] loadBlogPosts: start');
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${POSTS_FOLDER}`);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const files = await response.json();
    
    const markdownFiles = files.filter(file => file.name.endsWith('.md'));
    
    const posts = await Promise.all(
      markdownFiles.map(async file => {
        const contentResponse = await fetch(file.download_url);
        const content = await contentResponse.text();
        const frontmatch = content.match(FRONTMATTER_REGEX);
        
        if (frontmatch) {
          const meta = {};
          frontmatch[1].split('\n').forEach(line => {
            const [key, ...value] = line.split(':');
            if (key && value.length) {
              meta[key.trim()] = value.join(':').trim();
            }
          });
          
          return {
            ...meta,
            filename: file.name,
            content: frontmatch[2],
            url: `blog-post.html?post=${file.name.replace('.md', '')}`
          };
        }
        return null;
      })
    );
    
    return posts.filter(p => p).sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Ошибка загрузки блога:', error);
    return [];
  }
}

async function loadSinglePost(filename) {
  try {
    const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/${POSTS_FOLDER}/${encodeURIComponent(filename)}.md`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Single post error: ${response.status}`);
    const content = await response.text();
    const frontmatch = content.match(FRONTMATTER_REGEX);
    
    if (frontmatch) {
      const meta = {};
      frontmatch[1].split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value.length) {
          meta[key.trim()] = value.join(':').trim();
        }
      });
      return { ...meta, content: frontmatch[2] };
    }
    return null;
  } catch (error) {
    console.error('Ошибка загрузки статьи:', error);
    return null;
  }
}