function highlightText(container, searchText) {
    const regex = new RegExp('(' + searchText + ')', 'gi');
    const nodes = container.childNodes;

    for (const node of nodes) {
      if (node.nodeType === Node.TEXT_NODE) {
        const matches = node.nodeValue.match(regex);
        if (matches) {
          const span = document.createElement('span');
          span.className = 'highlight';
          node.parentNode.replaceChild(span, node);

          matches.forEach(match => {
            const textNode = document.createTextNode(match);
            span.appendChild(textNode);
          });
        }
      } else {
        highlightText(node, searchText);
      }
    }
  }

  $(document).ready(function() {
    $('#search-button').click(function() {
      const searchQuery = $('#search-input').val();
      const contentContainer = document.getElementById('abcd');
      
      // Remove existing highlights
      const highlighted = contentContainer.querySelectorAll('.highlight');
      highlighted.forEach(el => {
        const parent = el.parentNode;
        parent.replaceChild(document.createTextNode(el.textContent), el);
      });
      
      // Highlight the search query in the content
      highlightText(contentContainer, searchQuery);
    });
  });