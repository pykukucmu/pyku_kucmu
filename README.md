# Nastya — Visual Content Creator Portfolio

Статический сайт-портфолио визуального контент-креатора.

Сайт сделан без сборщиков и фреймворков, поэтому подходит для публикации на GitHub Pages.

## Структура

```text
index.html
style.css
script.js
assets/
  images/
  videos/
```

## Публикация на GitHub Pages

1. Загрузите все файлы из этой папки в корень репозитория.
2. Убедитесь, что `index.html` лежит в корне, а не внутри вложенной папки.
3. В настройках репозитория откройте `Settings` → `Pages`.
4. В разделе `Build and deployment` выберите:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Сохраните настройки и дождитесь публикации.

## Важно

Папку `assets` нужно загружать целиком. В ней находятся изображения, WebM-видео, курсор и QR-код.
