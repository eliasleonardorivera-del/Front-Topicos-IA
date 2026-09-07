import streamlit as st

st.set_page_config(
    page_title="Edgerunners // Terminal",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed",
)

st.markdown(
    """
    <style>
      [data-testid="stHeader"], [data-testid="stToolbar"] { display: none; }
      .stApp { background: #090a16; color: #e9eff8; }
      .block-container { padding: 1.4rem 2rem 2rem; max-width: 1160px; }
      h1, h2, h3 { font-family: sans-serif; letter-spacing: -.04em; }
      .terminal-label { color:#44f1ff; font: 700 .72rem monospace; letter-spacing:.14em; }
      .terminal-title { font-size: clamp(2rem, 5vw, 4.4rem); line-height:.82; margin:.3rem 0 1.4rem; }
      .terminal-title em { color:#ff346f; font-style:normal; }
      [data-testid="stMetric"] { background:linear-gradient(135deg,#15162b,#0b1421); border:1px solid #ffffff26; padding:.8rem; }
      [data-testid="stMetricLabel"] { color:#44f1ff; font:700 .68rem monospace; }
      [data-testid="stMetricValue"] { color:#eff0f5; }
      div[data-baseweb="tab-list"] { gap: .4rem; }
      button[data-baseweb="tab"] { color:#a7a6b4; font:700 .72rem monospace; }
      button[aria-selected="true"] { color:#44f1ff !important; border-bottom-color:#ff346f !important; }
      .signal { border-left:2px solid #ff346f; padding:.75rem 1rem; background:#ffffff08; margin:.7rem 0; font-family:monospace; font-size:.78rem; }
      .status { color:#d7fd54; font:700 .7rem monospace; }
    </style>
    <div class="terminal-label">SISTEMA DE INTELIGENCIA // NC-2076</div>
    <h1 class="terminal-title">RESUMEN DE<br><em>TRANSMISIÓN.</em></h1>
    """,
    unsafe_allow_html=True,
)

metrics = st.columns(4)
metrics[0].metric("RIESGO DE CIBERPSICOSIS", "87%", "+12%")
metrics[1].metric("DISTANCIA A LA LUNA", "384,400 KM")
metrics[2].metric("ESTADO DE SEÑAL", "ACTIVA", "ESTABLE")
metrics[3].metric("CONTACTOS", "03", "VERIFICADOS")

tab_story, tab_profiles, tab_archive = st.tabs(["CRONOLOGÍA", "PERFILES", "ARCHIVO"])

with tab_story:
    st.subheader("La ruta de un edgerunner")
    timeline = [
        ("01 // PÉRDIDA", "David cae del mundo corporativo y descubre que Night City no perdona a nadie."),
        ("02 // ENTRADA", "Se une a Maine y su tripulación; el Sandevistan cambia su lugar en la ciudad."),
        ("03 // CONEXIÓN", "Lucy comparte un sueño que no cabe entre los edificios de Night City: la Luna."),
        ("04 // LEGADO", "La leyenda de David se convierte en una señal que sigue viajando más allá de la atmósfera."),
    ]
    for title, text in timeline:
        st.markdown(f"<div class='signal'><b>{title}</b><br>{text}</div>", unsafe_allow_html=True)

with tab_profiles:
    left, center, right = st.columns(3)
    left.markdown("### DAVID MARTÍNEZ\n**Rol:** Edgerunner  \n**Implante:** Sandevistan  \n**Estado:** Al límite")
    center.markdown("### LUCY KUSHINADA\n**Rol:** Netrunner  \n**Implante:** Cyberdeck  \n**Estado:** En ruta")
    right.markdown("### LA LUNA\n**Rol:** Destino  \n**Coordenada:** Órbita terrestre  \n**Estado:** Promesa")
    st.caption("Selecciona las fichas de personajes de la página principal para abrir sus expedientes completos.")

with tab_archive:
    st.markdown("<p class='status'>● ENLACE ENCRIPTADO // ARCHIVO RECUPERADO</p>", unsafe_allow_html=True)
    st.write("Night City funciona como una máquina de promesas: ofrece una salida, pero siempre cobra algo a cambio. Esta transmisión reúne los fragmentos que David y Lucy dejaron en el camino.")
    st.info("Dato de archivo: el sueño de Lucy no era escapar sola, sino que alguien pudiera llegar allí con ella.")

