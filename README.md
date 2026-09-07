# EDGERUNNERS // LUNA

Landing inmersiva inspirada en la estética de *Cyberpunk: Edgerunners*. Reúne una experiencia visual de Night City con parallax, perfiles interactivos, narrativa, música embebida y un panel de información desarrollado con Streamlit.

> Proyecto visual no oficial creado con fines educativos y de demostración. *Cyberpunk: Edgerunners* y sus personajes pertenecen a sus respectivos titulares.

## 🚀 Características

- Hero de Night City con video de fondo y control de audio  
- Escena lunar con efectos de neón, grano y scanlines  
- Animaciones al scroll: revelados, transmisión de imagen y parallax por capas  
- HUD lateral que indica la sección actual y navegación superior activa  
- Fichas de David, Lucy y la Luna: zoom, glitch, datos rápidos y panel lateral expandible  
- Modal “Ver el momento” con escena visual y texto contextual  
- Terminal de inteligencia en Streamlit con métricas, cronología, perfiles y archivos narrativos  
- Diseño adaptable para escritorio y móvil  

## 🛠️ Requisitos

| Herramienta        | Uso                        | Obligatoria |
|--------------------|----------------------------|-------------|
| Navegador moderno  | Ver la landing             | Sí |
| Python 3.9+        | Servidor local y Streamlit | Sí |
| VS Code + Live Server | Alternativa al servidor estático | No |

Verifica Python con:

```powershell
python --version
```

Si Windows no reconoce `python` o `pip`, instala Python desde [python.org](https://www.python.org/downloads/) y marca **Add Python to PATH**. Reinicia la terminal después.

## ⚡ Inicio rápido

Abre dos terminales en la carpeta del proyecto:

```powershell
cd C:\Users\elias\OneDrive\Desktop\VSC\frotn
```

En la primera, inicia la landing estática:

```powershell
python -m http.server 8000
```

En la segunda, instala dependencias e inicia Streamlit:

```powershell
pip install -r requirements.txt
streamlit run app.py
```

Accede a [http://localhost:8000](http://localhost:8000). La landing carga el panel de Streamlit desde `http://localhost:8501`.

Detén cualquier servidor con `Ctrl + C`.

## ☁️ Despliegue en Render

Este proyecto está preparado para desplegar la landing y Streamlit juntos en un único servicio de Render. El contenedor sirve la página en `/` y el panel Streamlit en `/terminal/`, por lo que no hay que cambiar URLs manualmente después de publicar.

1. Sube los cambios al repositorio:

   ```powershell
   git add .
   git commit -m "Add Render deployment configuration"
   git push
   ```

2. En [Render](https://render.com/), selecciona **New → Blueprint**.
3. Conecta el repositorio `Front-Topicos-IA` y confirma el archivo `render.yaml`.
4. Pulsa **Apply**. Render construirá el `Dockerfile` y entregará una URL con el formato `https://edgerunners-luna.onrender.com`.

Render asigna el puerto público `10000`; Nginx lo recibe y redirige internamente `/terminal/` hacia Streamlit. En planes gratuitos, el servicio puede entrar en reposo tras un período sin visitas y tardará un momento en reactivarse.

## 💻 Usar Live Server

1. Instala la extensión **Live Server** en VS Code  
2. Abre `index.html`  
3. Pulsa **Go Live**  
4. Mantén Streamlit corriendo en otra terminal con `streamlit run app.py`  

> No abras `index.html` con doble clic: YouTube bloquea el reproductor en rutas `file://`. Usa `localhost` o Live Server.

## 🎮 Cómo usar la experiencia

| Elemento              | Acción |
|-----------------------|--------|
| `AUDIO`               | Controla el sonido del video |
| `VER EL MOMENTO`      | Abre escena narrativa visual |
| Tarjetas de personajes| Hover para ficha rápida; clic o `Enter` para expediente |
| `Esc`                 | Cierra escenas o paneles laterales |
| Menú/HUD              | Indica la sección actual |
| Terminal de inteligencia | Consulta cronología, perfiles y archivos en Streamlit |

## 📂 Estructura del proyecto

```text
frotn/
├── app.py                 # Panel Streamlit
├── requirements.txt       # Dependencias Python
├── Dockerfile             # Contenedor único para Render
├── render.yaml            # Configuración de despliegue Render
├── docker/                # Nginx + Supervisor para landing y Streamlit
├── index.html             # Landing principal
├── styles.css             # Estilos base y responsive
├── image-overrides.css    # Estilos para imágenes locales
├── interactions.css       # Animaciones, HUD, parallax
├── terminal.css           # Contenedor visual del panel
├── script.js              # Lógica de interacción
├── assets/                # Imágenes
└── README.md              # Esta guía
```

## 🎨 Personalización

- **Música:** cambia el ID de YouTube en `index.html` y `script.js`  
- **Contenido del terminal:** edita cronología, perfiles y métricas en `app.py`  
- **Paleta de color:** ajusta variables CSS (`--cyan`, `--pink`, `--acid`) en `styles.css`  
- **Imágenes:** agrega archivos en `assets/` y actualiza rutas en `index.html`  

## 🛠️ Solución de problemas

### El panel Streamlit no aparece
1. Comprueba que Streamlit siga corriendo  
2. Abre `http://localhost:8501`  
3. Recarga la landing en `http://localhost:8000`  

### `python`, `pip` o `streamlit` no se reconocen
Instala Python y reinicia la terminal. Alternativa:

```powershell
py -m pip install -r requirements.txt
py -m streamlit run app.py
```

### Error en video de YouTube
Ejecuta la landing desde servidor local (`localhost`).  

### El audio no se activa solo
Es normal: los navegadores bloquean autoplay con sonido. Pulsa `AUDIO` → `ACTIVAR SONIDO`.

## 📜 Licencia

El código puede reutilizarse y adaptarse para fines personales o educativos. Los recursos audiovisuales y marcas asociadas conservan los derechos de sus propietarios.
