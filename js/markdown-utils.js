function parseMarkdown(markdownText) {
  if (!markdownText) return '';
  
  let html = markdownText;
  
  // Заголовки
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Жирный и курсив
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
  
  // Ссылки
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  
  // Код
  html = html.replace(/```(\w*)\n([\s\S]*?)```/gim, '<pre><code class="language-$1">$2</code></pre>');
  html = html.replace(/`(.*?)`/gim, '<code>$1</code>');
  
  // Списки (ненумерованные)
  html = html.replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');
  html = html.replace(/<\/ul>\s*<ul>/g, '');
  
  // Списки (нумерованные)
  html = html.replace(/^\d+\. (.*$)/gim, '<ol><li>$1</li></ol>');
  html = html.replace(/<\/ol>\s*<ol>/g, '');
  
  // ========== НОВОЕ: Обработка таблиц ==========
  // Ищем блоки с таблицами: строки с | и разделители с |---|
  const tableRegex = /\n(\|.*\|)\n(\|[\s\-:|]+\|)\n((\|.*\|\n)+)/g;
  
  html = html.replace(tableRegex, (match, headerRow, separatorRow, bodyRows) => {
    // Парсим заголовки
    const headers = headerRow.split('|')
      .filter(cell => cell.trim() !== '')
      .map(cell => `<th>${cell.trim()}</th>`)
      .join('');
    
    // Парсим строки тела
    const rows = bodyRows.trim().split('\n').map(row => {
      const cells = row.split('|')
        .filter(cell => cell.trim() !== '')
        .map(cell => `<td>${cell.trim()}</td>`)
        .join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    
    return `\n<div class="table-wrapper"><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
  });
  // ========== КОНЕЦ ОБРАБОТКИ ТАБЛИЦ ==========
  
  // Абзацы (только для строк, которые не начинаются с HTML-тега)
  html = html.replace(/^(?!<[a-z]|<\/?table|<div|<thead|<tbody).+$/gim, '<p>$&</p>');
  
  // Убираем лишние пустые строки
  html = html.replace(/\n\s*\n/g, '\n');
  
  return html;
}