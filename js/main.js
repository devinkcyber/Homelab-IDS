/* === Navigation Toggle === */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  /* === Collapsible Sections === */
  document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('open');
    });
  });

  /* === Copy Buttons === */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block-wrapper').querySelector('pre').textContent;
      navigator.clipboard.writeText(code).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  /* === Lightbox === */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.screenshot img, .hero-diagram img').forEach(img => {
    img.addEventListener('click', () => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target !== lightboxImg) lightbox.classList.remove('active');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') lightbox.classList.remove('active');
    });
  }

  /* === KQL Syntax Highlighting === */
  document.querySelectorAll('pre code.language-kql').forEach(block => {
    block.innerHTML = highlightKQL(block.textContent);
  });

  /* === Active nav link === */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* === TOC scroll spy === */
  const tocLinks = document.querySelectorAll('.toc-sidebar a');
  if (tocLinks.length > 0) {
    const sections = [];
    tocLinks.forEach(link => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) sections.push({ el, link });
    });

    window.addEventListener('scroll', () => {
      let current = sections[0];
      for (const s of sections) {
        if (s.el.getBoundingClientRect().top <= 120) current = s;
      }
      tocLinks.forEach(l => l.classList.remove('active'));
      if (current) current.link.classList.add('active');
    });
  }
});

/* === KQL Syntax Highlighter === */
function highlightKQL(code) {
  // Tables
  const tables = ['SecurityEvent', 'Event', 'Syslog', 'DeviceProcessEvents', 'DeviceNetworkEvents',
    'DeviceFileEvents', 'DeviceLogonEvents', 'IdentityLogonEvents', 'IdentityQueryEvents',
    'SigninLogs', 'AADSignInEventsBeta', 'AlertEvidence', 'AlertInfo'];
  // Operators/Keywords
  const keywords = ['where', 'summarize', 'project', 'extend', 'parse', 'order by', 'take',
    'join', 'on', 'let', 'union', 'render', 'sort by', 'top', 'count', 'distinct', 'limit',
    'mv-expand', 'evaluate', 'make-series', 'lookup', 'datatable', 'print', 'invoke',
    'kind', 'inner', 'leftouter', 'rightouter', 'fullouter', 'leftanti', 'rightanti',
    'asc', 'desc', 'by', 'and', 'or', 'not', 'in', 'has', 'has_any', 'has_all',
    'contains', 'startswith', 'endswith', '!has', '!contains'];
  // Functions
  const functions = ['count', 'sum', 'avg', 'min', 'max', 'dcount', 'make_set', 'make_list',
    'strcat', 'tostring', 'toint', 'tolong', 'todatetime', 'ago', 'now', 'bin', 'format_datetime',
    'split', 'array_length', 'isempty', 'isnotempty', 'iff', 'iif', 'case', 'pack'];

  let result = escapeHtml(code);

  // Strings
  result = result.replace(/(["'])((?:(?!\1).)*)\1/g,
    '<span class="kql-string">$1$2$1</span>');

  // Comments
  result = result.replace(/(\/\/.*$)/gm, '<span class="kql-comment">$1</span>');

  // Numbers
  result = result.replace(/\b(\d+)\b/g, '<span class="kql-number">$1</span>');

  // Tables
  tables.forEach(t => {
    result = result.replace(new RegExp('\\b(' + t + ')\\b', 'g'),
      '<span class="kql-table">$1</span>');
  });

  // Pipe operator
  result = result.replace(/^(\|)/gm, '<span class="kql-operator">|</span>');

  // Keywords after pipe
  keywords.forEach(kw => {
    const re = new RegExp('(?<=\\| )(' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'g');
    result = result.replace(re, '<span class="kql-keyword">$1</span>');
  });

  // let keyword
  result = result.replace(/^(let)\s/gm, '<span class="kql-keyword">let</span> ');

  // Functions
  functions.forEach(fn => {
    result = result.replace(new RegExp('\\b(' + fn + ')\\s*\\(', 'g'),
      '<span class="kql-function">$1</span>(');
  });

  // == and other operators
  result = result.replace(/(==|!=|&gt;=|&lt;=|&gt;|&lt;)/g,
    '<span class="kql-operator">$1</span>');

  return result;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}
