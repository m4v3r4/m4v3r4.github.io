// Dil Değiştirme İşlevi
const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.documentElement;

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        const currentLang = htmlTag.getAttribute('lang');
        if (currentLang === 'tr') {
            htmlTag.setAttribute('lang', 'en');
            langToggleBtn.textContent = 'TR';
        } else {
            htmlTag.setAttribute('lang', 'tr');
            langToggleBtn.textContent = 'EN';
        }
    });
}

// Tema Değiştirme İşlevi
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;    

// Kayıtlı temayı kontrol et
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark' && themeIcon) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

// Distro (Tema) Değiştirme İşlevi
const distroBtns = document.querySelectorAll('.distro-btn');

// Kayıtlı distroyu kontrol et
const currentDistro = localStorage.getItem('distro');
if (currentDistro) {
    document.documentElement.setAttribute('data-distro', currentDistro);
} else {
    document.documentElement.setAttribute('data-distro', 'mint'); // Varsayılan
}

distroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const distro = btn.getAttribute('data-set-distro');
        document.documentElement.setAttribute('data-distro', distro);
        localStorage.setItem('distro', distro);
    });
});

// GitHub Projeleri Çekme
const projectsGrid = document.getElementById('github-projects');

async function fetchProjects() {
    if (!projectsGrid) return;
    try {
        const response = await fetch('https://api.github.com/users/m4v3r4/repos?sort=updated&direction=desc');
        
        // Yanıt başarılı mı kontrol et (404, 403 vb.)
        if (!response.ok) {
            throw new Error(`API Hatası: ${response.status} (Muhtemelen hız sınırı aşıldı veya kullanıcı bulunamadı)`);
        }

        const repos = await response.json();
        
        // Gelen verinin dizi olup olmadığını kontrol et
        if (!Array.isArray(repos)) {
            throw new Error('GitHub verisi beklenen formatta değil.');
        }

        const latestRepos = repos.slice(0, 6);
        let projectsHTML = '';
        
        if (latestRepos.length === 0) projectsHTML = '<p style="text-align:center;">Gösterilecek proje bulunamadı.</p>';

        latestRepos.forEach(repo => {
            projectsHTML += `
                <div class="project-card">
                    <div class="project-info">
                        <h3>${repo.name}</h3>
                        <p>${repo.description ? repo.description : 'Açıklama bulunmuyor / No description.'}</p>
                        <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                            <span class="skill-tag" style="font-size: 0.8rem; padding: 4px 8px;">${repo.language || 'Code'}</span>
                            <a href="${repo.html_url}" target="_blank" style="color: var(--primary-color); font-weight: bold;">GitHub &rarr;</a>
                        </div>
                    </div>
                </div>
            `;
        });
        projectsGrid.innerHTML = projectsHTML;
    } catch (error) {
        console.error('GitHub Error:', error);
        projectsGrid.innerHTML = `<p style="text-align:center;">Projeler yüklenemedi.<br><small>${error.message}</small></p>`;
    }
}
fetchProjects();

// Hero Slider Script
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    if (slides.length === 0) return;

    // Döngüsel geçiş
    slideIndex = n;
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Hepsini gizle
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Aktif olanı göster
    slides[slideIndex].classList.add('active');
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function currentSlide(n) {
    showSlide(n);
}

// Otomatik geçiş (5 saniye)
if (slides.length > 0) {
    setInterval(() => {
        showSlide(slideIndex + 1);
    }, 5000);
}

// Yukarı Çık Butonu
const scrollTopBtn = document.getElementById("scrollTopBtn");

function scrollFunction() {
    if (!scrollTopBtn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

window.addEventListener('scroll', () => {
    scrollFunction();
});

// Blog Listesini Yükle (blog.html için)
const blogListContainer = document.getElementById('blog-list');
if (blogListContainer) {
    fetch('blog/posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Hatası: ${response.status} (Dosya bulunamadı veya yol yanlış)`);
            }
            return response.json();
        })
        .then(posts => {
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

// Türkçe Tarih Ayrıştırıcı (Ortak Fonksiyon)
function parseTurkishDate(dateStr) {
    if (!dateStr) return new Date(0);
    
    const months = {
        'ocak': 0, 'şubat': 1, 'mart': 2, 'nisan': 3, 'mayıs': 4, 'haziran': 5,
        'temmuz': 6, 'ağustos': 7, 'eylül': 8, 'ekim': 9, 'kasım': 10, 'aralık': 11,
        'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
        'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
    };

    const parts = dateStr.trim().split(/\s+/);
    if (parts.length < 3) return new Date();

    const day = parseInt(parts[0]);
    const monthName = parts[1].toLocaleLowerCase('tr');
    const month = months[monthName] !== undefined ? months[monthName] : 0;
    const year = parseInt(parts[2]);

    return new Date(year, month, day);
}

// Ana Sayfa Son Yazılar (index.html için)
const latestBlogContainer = document.getElementById('latest-blog-list');
if (latestBlogContainer) {
    fetch('blog/posts.json')
        .then(response => {
            if (!response.ok) throw new Error('Veri alınamadı');
            return response.json();
        })
        .then(posts => {
            // Tarihe göre sırala (En yeni en üstte)
            posts.sort((a, b) => parseTurkishDate(b.date) - parseTurkishDate(a.date));
            
            // İlk 3 yazıyı al
            const latestPosts = posts.slice(0, 3);
            
            let html = '';
            latestPosts.forEach((post, index) => {
                // Animasyon gecikmesi (her kart biraz daha geç gelir)
                const delay = index * 0.2; 
                
                html += `
                    <div class="blog-card animate-card" style="animation-delay: ${delay}s">
                        <div>
                            <span class="blog-date"><i class="far fa-calendar-alt"></i> ${post.date}</span>
                            <h3><a href="post.html?id=${post.slug}">${post.title}</a></h3>
                            <p>${post.description}</p>
                        </div>
                    </div>
                `;
            });
            latestBlogContainer.innerHTML = html;
        })
        .catch(err => {
            console.error(err);
            latestBlogContainer.innerHTML = '<p style="text-align:center;">Yazılar yüklenemedi.</p>';
        });
}

// Mobil Menü İşlemleri
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // İkonu değiştir (Hamburger <-> Çarpı)
        const icon = menuBtn.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Menüdeki bir linke tıklanınca menüyü kapat
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// Header Scroll Efekti
const header = document.querySelector('header');
function checkScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
if (header) {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Sayfa yüklendiğinde veya yenilendiğinde kontrol et
}
