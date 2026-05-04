# glowopt.org statik web sitesi

Bu proje Vite + React + Tailwind ile hazırlanmış statik bir tanıtım sitesidir.

## Yerelde çalıştırma

```powershell
npm install
npm run dev
```

## Build alma

```powershell
npm run build
```

## Düzenlenecek yerler

`src/App.jsx` dosyasının en üstündeki `brand` alanında:

- `phoneDisplay`
- `phoneRaw`
- `email`
- `address`
- `mapsQuery`

alanlarını gerçek bilgilerle değiştirin.

Galeri fotoğrafları için `galleryItems` içindeki `image`, `title`, `category`, `description` alanlarını değiştirin.

## Vercel deploy

1. Projeyi GitHub'a yükleyin.
2. Vercel'de New Project ile GitHub reposunu import edin.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Domain ayarlarından `glowopt.org` ve `www.glowopt.org` ekleyin.
