# 🚀 Setup Instructions

## Pasos para instalar y ejecutar el proyecto

### 1. Instalar dependencias

```bash
npm install
```

Esto instalará:
- React y React DOM
- Tailwind CSS
- Lucide React (iconos)
- React Scripts

### 2. Iniciar el proyecto en desarrollo

```bash
npm start
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

### 3. Build para producción

```bash
npm run build
```

Esto generará una carpeta `build/` con los archivos optimizados para producción.

---

## 📁 Estructura del Proyecto

```
portfolio-project/
├── public/
│   └── index.html              # HTML principal
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx      # Barra de navegación
│   │   ├── sections/
│   │   │   ├── Hero.jsx        # Sección principal
│   │   │   ├── About.jsx       # Sobre mí
│   │   │   ├── Services.jsx    # Qué ofrezco
│   │   │   ├── Projects.jsx    # Proyectos con filtros
│   │   │   ├── Skills.jsx      # Habilidades
│   │   │   ├── Experience.jsx  # Experiencia
│   │   │   └── Contact.jsx     # Contacto
│   │   └── ui/
│   │       ├── ProjectCard.jsx # Tarjeta de proyecto
│   │       ├── ServiceCard.jsx # Tarjeta de servicio
│   │       └── FilterButton.jsx # Botón de filtro
│   ├── data/
│   │   ├── projects.js         # Datos de proyectos
│   │   ├── skills.js           # Datos de habilidades
│   │   └── services.js         # Datos de servicios
│   ├── styles/
│   │   └── animations.css      # Animaciones personalizadas
│   ├── App.jsx                 # Componente principal
│   ├── index.js                # Entry point
│   └── index.css               # Estilos globales + Tailwind
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Personalización

### Agregar un proyecto nuevo

Edita `src/data/projects.js`:

```javascript
{
  title: "Nuevo Proyecto",
  description: "Descripción del proyecto",
  technologies: ["React", "Node.js"],
  link: "https://...",
  image: "URL de imagen",
  status: "Producción",
  filterType: "freelance", // o "trabajo" o "universidad"
  category: "Web Development"
}
```

### Agregar un servicio nuevo

Edita `src/data/services.js`:

```javascript
{
  emoji: "🚀",
  title: "Nombre del Servicio",
  color: "blue", // blue, purple, green, pink, gradient
  description: "Descripción del servicio"
}
```

### Modificar skills

Edita `src/data/skills.js`:

```javascript
"Nueva Categoría": ["Skill 1", "Skill 2", "Skill 3"]
```

---

## 🌐 Deployment

### Vercel (Recomendado)

1. Subí tu proyecto a GitHub
2. Conectá tu repo en [Vercel](https://vercel.com)
3. Deploy automático ✅

### Netlify

1. `npm run build`
2. Arrastra la carpeta `build/` a [Netlify](https://netlify.com)
3. Deploy listo ✅

### GitHub Pages

```bash
npm install gh-pages --save-dev
```

Agrega a `package.json`:
```json
"homepage": "https://camilovil.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Luego:
```bash
npm run deploy
```

---

## 🔧 Troubleshooting

### Error de Tailwind CSS

Si Tailwind no funciona:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Error de módulos

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Notas

- El proyecto usa **React 18** y **Tailwind CSS 3**
- Las animaciones están en `src/styles/animations.css`
- Los íconos vienen de **Lucide React**
- Todo es completamente responsive

---

¡Listo para desarrollar! 🚀
