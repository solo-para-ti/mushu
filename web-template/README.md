# Plantilla: Poema — Para ti

Pequeña plantilla lista para publicar en GitHub Pages.

Contenido:
- `index.html` — página principal con tres variantes de frases.
- `css/styles.css` — estilos separados.
- `js/main.js` — interacciones: copiar, descargar y tema.

Cómo publicar (PowerShell):

```powershell
cd "C:\Users\leona\OneDrive\Documentos\babosadas\web-template"
git init
git add .
git commit -m "Plantilla inicial del poema"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Para GitHub Pages (sitio estático):
- Opción A: Publicar la rama `main` y carpeta `/` en Settings → Pages → Source.
- Opción B: Generar una rama `gh-pages` y publicar desde ahí.

Consejo: reemplaza `TU_USUARIO` y `TU_REPO` por tus datos reales.
