:root{
  --bg: #0b0b14;
  --panel: rgba(255,255,255,.06);
  --panel2: rgba(255,255,255,.10);
  --border: rgba(255,255,255,.14);
  --text: #f2f2ff;
  --muted: rgba(230,230,255,.72);
  --shadow: 0 18px 55px rgba(0,0,0,.45);
  --radius: 18px;
}

*{ box-sizing:border-box; }
html,body{ height:100%; }
body{
  margin:0;
  font-family: system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
  color:var(--text);
  background:
    radial-gradient(1200px 700px at 25% -10%, rgba(85,160,255,.28), transparent 55%),
    radial-gradient(900px 700px at 115% 20%, rgba(255,90,200,.22), transparent 55%),
    radial-gradient(900px 700px at 45% 120%, rgba(120,255,210,.12), transparent 60%),
    var(--bg);
  overflow-x:hidden;
}

#fx{
  position:fixed;
  inset:0;
  width:100%;
  height:100%;
  z-index:-1;
  opacity:.9;
}

.wrap{
  width:min(1050px, 92vw);
  margin: 24px auto 64px;
}

.topbar{
  width:min(1050px, 92vw);
  margin: 22px auto 0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding: 14px 14px;
  border:1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.brand{
  margin:0;
  font-size: 28px;
  letter-spacing:.4px;
}
.subtitle{
  margin: 4px 0 0;
  color:var(--muted);
  font-size: 13px;
}

.pill{
  display:flex;
  align-items:center;
  gap:10px;
  padding: 10px 14px;
  border-radius: 999px;
  border:1px solid var(--border);
  background: rgba(0,0,0,.20);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.05);
  user-select:none;
}
.dot{
  width:10px;height:10px;border-radius:999px;
  background: rgba(180,180,255,.7);
  box-shadow: 0 0 14px rgba(180,180,255,.7);
}
.pillText{ color:var(--muted); font-size:12px; }

.section{ margin-top: 18px; }

.hero{
  margin-top: 18px;
}

.heroGrid{
  display:grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 16px;
}
@media (max-width: 900px){
  .heroGrid{ grid-template-columns: 1fr; }
}

.heroCard{
  border:1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow:hidden;
  backdrop-filter: blur(10px);
  transform: translateY(0);
  transition: transform .25s ease, border-color .25s ease;
}
.heroCard:hover{
  transform: translateY(-4px);
  border-color: rgba(255,255,255,.22);
}

.heroImgWrap{ position:relative; height: 100%; }
.heroImg{
  width:100%;
  height: 430px;
  object-fit: cover;
  display:block;
  filter: saturate(1.05) contrast(1.03);
}
.heroTag{
  position:absolute;
  left:14px; bottom:14px;
  padding: 10px 12px;
  border-radius: 14px;
  border:1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 12px 34px rgba(0,0,0,.35);
}
.heroTagTitle{ font-weight:800; letter-spacing:.4px; }
.heroTagSub{ font-size:12px; color:var(--muted); margin-top:2px; }

.heroCopy{ padding: 18px 18px 16px; }
.heroCopy h2{ margin:0 0 8px; font-size: 22px; }
.heroCopy p{ margin: 0 0 12px; color:var(--muted); line-height: 1.45; }

.chips{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin: 10px 0 14px;
}
.chip{
  font-size:12px;
  padding: 7px 10px;
  border-radius: 999px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.18);
}

.heroBtns{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top: 8px;
}

.btn{
  appearance:none;
  border:none;
  cursor:pointer;
  text-decoration:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 10px 14px;
  border-radius: 12px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.18);
  color: var(--text);
  font-weight:700;
  letter-spacing:.2px;
  transition: transform .18s ease, background .18s ease, border-color .18s ease;
}
.btn:hover{ transform: translateY(-2px); border-color: rgba(255,255,255,.24); }
.btn:active{ transform: translateY(0); }

.btn.primary{
  background: linear-gradient(135deg, rgba(120,160,255,.28), rgba(255,90,200,.18));
}

.btn.mini{
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 12px;
}

.tinyHint{
  margin-top: 10px;
  font-size: 12px;
  color: rgba(240,240,255,.72);
}

.card{
  border:1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 16px;
  backdrop-filter: blur(12px);
}

.cardTop{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:12px;
  border-bottom: 1px solid rgba(255,255,255,.10);
  padding-bottom: 10px;
  margin-bottom: 12px;
}
.cardTop h3{ margin:0; font-size:18px; }
.muted{ color:var(--muted); margin:0; }

.reasonBox{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
}
.reasonLine{
  font-size: 18px;
  font-weight: 800;
  letter-spacing:.2px;
  line-height: 1.35;
  padding: 12px 14px;
  border-radius: 14px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.18);
  min-height: 54px;
  flex:1;
}
.reasonLine.pop{
  animation: pop .35s ease;
}
@keyframes pop{
  0%{ transform: translateY(2px); opacity:.8; }
  100%{ transform: translateY(0); opacity:1; }
}

.grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 950px){
  .grid{ grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 620px){
  .grid{ grid-template-columns: 1fr; }
}

.flip{
  perspective: 1000px;
  border-radius: 16px;
}
.flipInner{
  position:relative;
  width:100%;
  height: 260px;
  transform-style: preserve-3d;
  transition: transform .6s ease;
}
.flip.isFlipped .flipInner{
  transform: rotateY(180deg);
}

.flipFront, .flipBack{
  position:absolute;
  inset:0;
  border-radius: 16px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(0,0,0,.18);
  backface-visibility: hidden;
  box-shadow: 0 14px 40px rgba(0,0,0,.35);
}

.flipFront img{
  width:100%;
  height:100%;
  object-fit: cover;
  display:block;
  filter: saturate(1.05) contrast(1.02);
  transform: scale(1.02);
  transition: transform .4s ease;
}
.flip:hover .flipFront img{
  transform: scale(1.08);
}

.flipLabel{
  position:absolute;
  left:12px; bottom:12px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.14);
  font-size: 12px;
  color: rgba(255,255,255,.9);
  backdrop-filter: blur(10px);
}

.flipBack{
  transform: rotateY(180deg);
  padding: 14px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.flipBack h4{ margin:0; }
.flipBack p{ margin: 8px 0 0; color: var(--muted); }

.footer{
  margin-top: 16px;
  text-align:center;
}
.footer .tiny{
  margin-left: 8px;
  opacity: .8;
  font-size: 12px;
}

/* LIGHTBOX */
.lightbox{
  position:fixed;
  inset:0;
  display:none;
  place-items:center;
  background: rgba(0,0,0,.72);
  z-index: 50;
  padding: 18px;
}
.lightbox.open{ display:grid; }
#lbImg{
  width: min(900px, 92vw);
  max-height: 75vh;
  object-fit: contain;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: 0 18px 70px rgba(0,0,0,.55);
}
.lbCap{
  width: min(900px, 92vw);
  margin: 10px 0 0;
  color: rgba(255,255,255,.85);
  text-align:center;
}
.lbClose{
  position:fixed;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.18);
  background: rgba(0,0,0,.35);
  color: white;
  font-size: 18px;
  cursor:pointer;
}

/* TOAST */
.toast{
  position:fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  padding: 10px 14px;
  border-radius: 999px;
  border:1px solid rgba(255,255,255,.16);
  background: rgba(0,0,0,.35);
  color: rgba(255,255,255,.92);
  box-shadow: 0 16px 55px rgba(0,0,0,.4);
  opacity: 0;
  pointer-events:none;
  transition: opacity .2s ease, transform .2s ease;
}
.toast.show{
  opacity:1;
  transform: translateX(-50%) translateY(-2px);
}

/* 🍓 EASTER EGG MODE */
body.strawberry{
  background:
    radial-gradient(900px 600px at 30% 10%, rgba(255,70,120,.28), transparent 58%),
    radial-gradient(900px 700px at 110% 20%, rgba(255,160,220,.20), transparent 55%),
    radial-gradient(900px 700px at 45% 120%, rgba(255,60,90,.14), transparent 60%),
    #0b0610;
}
body.strawberry .dot{
  background: rgba(255,110,160,.85);
  box-shadow: 0 0 18px rgba(255,110,160,.9);
}
body.strawberry .pill{
  border-color: rgba(255,140,180,.28);
}
