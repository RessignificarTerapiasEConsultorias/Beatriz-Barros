// ============================================================
// CONFIGURAÇÃO: troque pelo WhatsApp da Beatriz.
// Formato: código do país + DDD + número, só dígitos.
// Exemplo Brasil: "5511999999999"
// ============================================================
const WHATSAPP_NUMBER = "5500000000000";

document.querySelectorAll(".js-wa").forEach((a) => {
  const msg = a.dataset.msg || "Olá, Beatriz!";
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

// Navegação: fundo ao rolar
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("solid", window.scrollY > 60);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Animações de entrada
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// FAQ: abre um por vez
document.querySelectorAll(".faq-list details").forEach((d) => {
  d.addEventListener("toggle", () => {
    if (d.open) document.querySelectorAll(".faq-list details").forEach((o) => { if (o !== d) o.open = false; });
  });
});

// Vídeos: se o arquivo não existir, esconde o elemento e mostra o fundo
document.querySelectorAll("video").forEach((v) => {
  const s = v.querySelector("source");
  if (s) s.addEventListener("error", () => v.classList.add("empty"));
  v.play && v.play().catch(() => {});
});
