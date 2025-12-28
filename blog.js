// Blog Listesini Yükle (blog.html için)
const blogListContainer = document.getElementById('blog-list');
const searchInput = document.getElementById('blog-search');
const sortSelect = document.getElementById('blog-sort');
const tagsFilterContainer = document.getElementById('blog-tags-filter');

let allBlogPosts = [];
let activeTag = 'all';

if (blogListContainer) {
    fetch('blog/posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Hatası: ${response.status} (Dosya bulunamadı veya yol yanlış)`);
            }
            return response.json();
        })
        .then(posts => {
            allBlogPosts = posts;
            renderFilterTags();
            filterPosts(); // İlk yüklemede de filtreleme/sıralama fonksiyonunu çağır
        })
        .catch(err => {
            console.error(err);
            let msg = `<p>Blog yazıları yüklenirken bir hata oluştu: <strong>${err.message}</strong></p>`;
            if (window.location.protocol === 'file:') {
                msg += '<p style="color: #e74c3c; font-size: 0.9rem; margin-top: 10px;"><b>Dikkat:</b> Tarayıcı güvenlik kısıtlamaları nedeniyle yerel dosyalardan (file://) veri çekilemez. Lütfen projeyi VS Code "Live Server" gibi bir yerel sunucu üzerinde çalıştırın.</p>';
            }
            blogListContainer.innerHTML = msg;
        });
}

function renderPosts(posts) {
    if (!blogListContainer) return;

    if (posts.length === 0) {
        blogListContainer.innerHTML = '<p style="text-align: center; width: 100%; padding: 2rem; opacity: 0.7;">Aradığınız kriterlere uygun yazı bulunamadı. / No posts found matching your criteria.</p>';
        return;
    }

    let html = '';
    posts.forEach(post => {
        // Etiketleri oluştur
        let tagsHtml = post.tags ? post.tags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('') : '';
        
        html += `
            <div class="blog-card">
                <div>
                    <span class="blog-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <h3><a href="post.html?id=${post.slug}">${post.title}</a></h3>
                    <p>${post.description}</p>
                </div>
                <div class="blog-tags">
                    ${tagsHtml}
                </div>
            </div>
        `;
    });
    blogListContainer.innerHTML = html;
}

function renderFilterTags() {
    if (!tagsFilterContainer) return;
    
    const allTags = new Set();
    allBlogPosts.forEach(post => {
        if (post.tags && Array.isArray(post.tags)) {
            post.tags.forEach(tag => allTags.add(tag));
        }
    });

    let html = `<button class="filter-tag active" data-tag="all">Tümü / All</button>`;
    allTags.forEach(tag => {
        html += `<button class="filter-tag" data-tag="${tag}">#${tag}</button>`;
    });
    tagsFilterContainer.innerHTML = html;

    const buttons = tagsFilterContainer.querySelectorAll('.filter-tag');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeTag = btn.getAttribute('data-tag');
            filterPosts();
        });
    });
}

function filterPosts() {
    const searchTerm = searchInput ? searchInput.value.toLocaleLowerCase('tr').trim() : '';
    const sortValue = sortSelect ? sortSelect.value : 'newest';
    
    // 1. Filtreleme
    let filtered = allBlogPosts.filter(post => {
        const title = post.title ? post.title.toLocaleLowerCase('tr') : '';
        const desc = post.description ? post.description.toLocaleLowerCase('tr') : '';
        
        const matchesSearch = title.includes(searchTerm) || desc.includes(searchTerm);
        
        const matchesTag = activeTag === 'all' || (post.tags && post.tags.includes(activeTag));
        
        return matchesSearch && matchesTag;
    });
    
    // 2. Sıralama
    filtered.sort((a, b) => {
        const dateA = parseTurkishDate(a.date);
        const dateB = parseTurkishDate(b.date);
        
        if (sortValue === 'newest') {
            return dateB - dateA; // Yeniden eskiye
        } else {
            return dateA - dateB; // Eskiden yeniye
        }
    });

    renderPosts(filtered);
}

if (searchInput) {
    searchInput.addEventListener('input', filterPosts);
}

if (sortSelect) {
    sortSelect.addEventListener('change', filterPosts);
}

// Blog Yazısını Yükle (post.html için)
const postContentContainer = document.getElementById('post-content');
if (postContentContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        postContentContainer.innerHTML = '<p>Yazı bulunamadı.</p>';
    } else {
        fetch(`blog/${postId}.md`)
            .then(response => {
                if (!response.ok) throw new Error(`Dosya bulunamadı (HTTP ${response.status})`);
                return response.text();
            })
            .then(text => {
                // Frontmatter'ı ayır (--- ile başlayan kısım)
                const frontMatterRegex = /^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]+([\s\S]*)$/;
                const match = text.match(frontMatterRegex);

                let markdownContent = text;
                let metaData = {};

                if (match) {
                    // Frontmatter varsa parse et (basitçe)
                    const metaBlock = match[1];
                    markdownContent = match[2];
                    
                    metaBlock.split('\n').forEach(line => {
                        const parts = line.split(':');
                        if (parts.length >= 2) {
                            const key = parts[0].trim();
                            const value = parts.slice(1).join(':').trim().replace(/^"|"$/g, '');
                            metaData[key] = value;
                        }
                    });
                }

                // Markdown'ı HTML'e çevir
                if (typeof marked !== 'undefined') {
                     const htmlContent = marked.parse(markdownContent);
                     
                     // Başlığı ve içeriği ekle
                     let headerHtml = metaData.title ? `<h1>${metaData.title}</h1><p class="blog-date">${metaData.date || ''}</p><hr style="margin: 1rem 0; opacity: 0.2;">` : '';
                     
                     postContentContainer.innerHTML = headerHtml + htmlContent;
                     document.title = (metaData.title || 'Blog') + ' | Salih Berkay Uluçay';
                } else {
                    postContentContainer.innerHTML = '<p>Markdown parser yüklenemedi.</p>';
                }
            })
            .catch(err => {
                console.error(err);
                let msg = `<p>İçerik yüklenemedi: <strong>${err.message}</strong></p>`;
                if (window.location.protocol === 'file:') {
                    msg += '<p style="color: #e74c3c; font-size: 0.9rem; margin-top: 10px;"><b>Dikkat:</b> Tarayıcı güvenlik kısıtlamaları nedeniyle yerel dosyalardan (file://) veri çekilemez. Lütfen projeyi VS Code "Live Server" gibi bir yerel sunucu üzerinde çalıştırın.</p>';
                }
                postContentContainer.innerHTML = msg;
            });
    }
}