# m4v3r4 Hugo Blog

Hugo ile hazırlanmış, GitHub Pages üzerinde yayımlanmak üzere tasarlanmış kişisel yazı/arşiv sitesi.

## Yerelde çalıştırma

Windows'ta Hugo kurmak için örneğin:

```powershell
winget install Hugo.Hugo
```

Ardından proje klasöründe:

```bash
hugo server -D
```

Tarayıcıdan:

```text
http://localhost:1313
```

## Yeni yazı oluşturma

```bash
hugo new content yazilar/yeni-yazi.md
```

Oluşturulan dosyayı düzenle. Yazı hazır olduğunda front matter içindeki:

```toml
draft = true
```

değerini:

```toml
draft = false
```

yap.

İstersen doğrudan `content/yazilar/` altında `.md` dosyası da oluşturabilirsin.

## GitHub Pages'e yayınlama

Bu proje `m4v3r4.github.io` kullanıcı sitesi için ayarlanmıştır.

1. GitHub'da `m4v3r4.github.io` isimli repository oluştur.
2. Bu klasörü repository'ye gönder:

```bash
git init
git add .
git commit -m "İlk Hugo blog"
git branch -M main
git remote add origin git@github.com:m4v3r4/m4v3r4.github.io.git
git push -u origin main
```

3. GitHub repository içinde `Settings > Pages` bölümüne gir.
4. `Build and deployment > Source` alanını `GitHub Actions` olarak seç.
5. Actions tamamlandığında site `https://m4v3r4.github.io/` adresinde yayımlanır.

Bundan sonra her `git push` sonrasında site otomatik yeniden oluşturulur.

## İçerik yapısı

```text
content/
├── _index.md
├── yazilar/
│   ├── _index.md
│   └── ilk-yazi.md
├── arsiv/
│   └── _index.md
└── hakkinda/
    └── _index.md
```

## Yazı front matter örneği

```yaml
---
title: "Özgür Yazılım ve Mülkiyet Sorunu"
date: 2026-08-10T11:00:00+03:00
draft: false
description: "Yazının kısa açıklaması."
tags:
  - özgür yazılım
  - marksizm
categories:
  - teknoloji
---
```

## Tasarımı değiştirmek

Ana stil dosyası:

```text
assets/css/main.css
```

Ana sayfa:

```text
layouts/index.html
```

Yazı sayfası:

```text
layouts/_default/single.html
```

Site başlığı, açıklaması, menüler ve URL:

```text
hugo.toml
```
