# Design System — Portfólio Marcelo Brasiliense
> **v1.0.0 · 2026** · Estruturado por Níveis · Fusão criativa: Monolith × Luminal × Aura

---

## ◈ Filosofia Central

> *"Integração transparente no fluxo do ser humano."*

O design system deste portfólio não é apenas um guia de estilo — é um **sistema vivo de expressão identitária**. Ele nasce da fusão de três linguagens visuais e se ancora nos dados reais de Marcelo Brasiliense: desenvolvedor full-stack, designer UI/UX e arquiteto de soluções digitais com mais de 4 anos de experiência.

**Os três pilares de influência:**
| Template | DNA Visual | O que emprestar |
|---|---|---|
| **Monolith Architecture** | Dark brutalist · grandes tipografias · bordas expostas | Grandiosidade tipográfica, uso de espaço negativo, estrutura arquitetônica |
| **Luminal Studio** | Creative agency · motion · overlay de texto | Sobreposição criativa, animações reveladoras, identidade de agência |
| **Aura AI Fashion** | Futurismo · stone tones · orange accent · GSAP word reveals | Word reveals, halftones, seções de cor sólida contrastante |

**Regra inquebrável:** *Manter bordas ao encontrar.* Quando dois elementos se tocam, a borda é o encontro — jamais escondê-la, sempre celebrá-la com `border: 1px solid var(--color-border)`.

---

## NÍVEL 0 — Fundação Humana (Quem é Marcelo)

> *Base informativa extraída do CV 2026*

Este é o nível invisível — os dados que alimentam todo o sistema.

```
IDENTIDADE
  Nome         : Marcelo Brasiliense
  Função       : Desenvolvedor Full-Stack & Designer UI/UX
  Localização  : Brasil
  Experiência  : 4+ anos
  
STACK TÉCNICA
  Frontend     : React · Next.js · TypeScript · HTML/CSS
  Backend      : Node.js · Express · APIs REST
  Design       : Figma · UI/UX · Design Systems · Prototipagem
  Dados        : SQL · MongoDB · Firebase
  Infra        : Git · Docker · CI/CD
  
DIFERENCIAIS
  ✦ Pensamento sistêmico — vê o produto inteiro, não só o componente
  ✦ Ponte entre design e engenharia
  ✦ Foco em experiência humana e fluxo natural do usuário
  ✦ Build de design systems do zero
  
PROJETOS RELEVANTES
  · Plataformas SaaS com design customizado
  · Landing pages de alta conversão
  · Sistemas de gestão com UX consistente
  · Portfólio pessoal iterativo (este sistema)
```

---

## NÍVEL 1 — Tokens de Design (Fundação Visual)

> *O DNA visual em variáveis CSS — inspirado pelo Monolith, refinado pelo Luminal*

### 1.1 · Paleta de Cores

**Filosofia de cor:** Dark como silêncio, Primário como sinal elétrico, Accent como profundidade.

```css
/* ── FUNDAÇÃO DARK (Monolith) ──────────────────── */
--color-bg:          #080808;   /* Vazio absoluto — herança Monolith */
--color-surface:     #111111;   /* Superfície primária */
--color-surface-2:   #1a1a1a;   /* Superfície elevada */
--color-border:      #252525;   /* Borda visível — NUNCA remover */
--color-border-soft: #1e1e1e;   /* Separador interno */

/* ── SINAL (Aura Primary) ──────────────────────── */
--color-primary:     #e2ff00;   /* Amarelo elétrico — chamada à ação */
--color-primary-dim: rgba(226,255,0,0.08);  /* Glow suave */

/* ── PROFUNDIDADE (Luminal Accent) ─────────────── */
--color-accent:      #7b61ff;   /* Roxo estelar — hover, gradiente */
--color-accent-dim:  rgba(123,97,255,0.12); /* Glassmorphism base */

/* ── TIPOGRAFIA ────────────────────────────────── */
--color-text:        #f5f5f5;   /* Texto máximo */
--color-text-muted:  #888888;   /* Texto secundário */
--color-text-faint:  #444444;   /* Rótulos, monoespaçados */

/* ── SEMÂNTICA ─────────────────────────────────── */
--color-success:     #22c55e;
--color-warning:     #f59e0b;
--color-error:       #ef4444;
--color-info:        #38bdf8;
```

**Regra de uso por contexto:**
- `bg` → corpo da página
- `surface` → cards, sidebar, nav
- `surface-2` → estado hover dos containers
- `primary` → botão principal, highlight de texto, ícone ativo
- `accent` → efeitos glass, gradientes de fundo, links secundários

---

### 1.2 · Tipografia

**Filosofia:** três vozes, três funções — construção (Sans), comunicação (Body), código (Mono).

```css
--font-sans:  'Space Grotesk', 'Inter', sans-serif;  /* Títulos — herança Monolith */
--font-body:  'Inter', sans-serif;                    /* Corpo — clareza máxima */
--font-mono:  'Space Mono', monospace;                /* Labels, tokens, coords */
```

**Escala tipográfica:**
| Token | Valor | Uso |
|---|---|---|
| `--text-xs` | 0.75rem | Labels, monospace hints |
| `--text-sm` | 0.875rem | Corpo reduzido, helpers |
| `--text-base` | 1rem | Parágrafo padrão |
| `--text-lg` | 1.125rem | Lead text, destaque de parágrafo |
| `--text-2xl` | 1.5rem | Section heading secundário |
| `--text-4xl` | 2.25rem | Section heading principal |
| `--text-6xl` | 3.75rem | Hero display |
| `clamp(2.5rem, 5vw, 4rem)` | fluid | Hero responsivo |

**Propriedades obrigatórias em headings:**
```css
font-family: var(--font-sans);
letter-spacing: -0.04em;  /* Tracking tight — assinatura do sistema */
font-weight: 700 / 800;
line-height: 1 / 1.1;
```

---

### 1.3 · Espaçamento

Base: **4px** · Multiplicadores: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

```
4px   space-1  · micro — gap entre ícone e label
8px   space-2  · pequeno — padding interno compacto
12px  space-3  · base — gap de lista
16px  space-4  · padrão — padding de componente
24px  space-6  · médio — padding de card
32px  space-8  · secção small
48px  space-12 · secção média — respiro entre blocos
64px  space-16 · secção grande
80px  space-20 · hero padding
96px  space-24 · espaçamento entre seções principais
```

---

### 1.4 · Border Radius

```
4px    radius-sm   · botões pequenos, badges
8px    radius-md   · botões, inputs, cards compact
12px   radius-lg   · cards padrão, alerts
20px   radius-xl   · cards principais, containers
9999px radius-full · chips, tags, pílulas, avatares
```

---

### 1.5 · Motion Tokens

> *Inspiração direta: GSAP word reveals do Aura AI + transitions do Luminal*

```css
--ease:     cubic-bezier(0.22, 1, 0.36, 1);  /* Decelera elegante — "power3.out" */
--duration: 0.3s;                              /* Base de transições normais */

/* Entradas dramáticas (hero, seção) */
--duration-slow: 0.8s;

/* Word reveal (clip-path / translateY) */
--word-reveal-duration: 0.6s;
--word-reveal-stagger:  0.03s;
--word-reveal-ease:     power3.out;

/* Parallax */
--parallax-strength: 20%;  /* yPercent no ScrollTrigger */
```

---

## NÍVEL 2 — Componentes Base

> *Blocos atômicos — cada um independente, todos coerentes*

### 2.1 · Botões

**Hierarquia de ação (inspirado nos CTAs do Aura):**

```
PRIMÁRIO   → bg: primary (#e2ff00) · color: #000 · glow on hover
SECUNDÁRIO → bg: surface-2 · border: color-border · muda para primary no hover
ACCENT     → bg: #7b61ff · white text · glow roxo
GHOST      → bg: transparent · border suave · muda para surface-2 no hover
DANGER     → bg: error/10% · texto error · preenche vermelho no hover
```

**CSS de referência:**
```css
.btn {
  padding: 10px 20px;
  font-family: var(--font-sans);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--duration) var(--ease);
  cursor: pointer;
}

.btn-primary {
  background: var(--color-primary);
  color: #000;
  box-shadow: 0 0 24px rgba(226,255,0,0.18);
}

.btn-primary:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}
```

**Tamanhos:**
- `btn-sm` → 6px 14px · xs text
- `btn` (default) → 10px 20px · sm text
- `btn-lg` → 14px 28px · base text

---

### 2.2 · Cards

**Três personalidades de card:**

#### Card Default (Monolith DNA)
```
fundo:    surface (#111)
borda:    color-border (#252525) — sempre visível
radius:   radius-xl (20px)
hover:    borda → primary/30% + translateY(-3px) + glow primary
```

#### Card Glass (Luminal DNA)
```
fundo:    rgba(255,255,255,0.03)
borda:    rgba(255,255,255,0.07)
blur:     backdrop-filter: blur(20px)
hover:    borda → accent/35% + glow accent
contexto: usar sobre fundos com gradiente/imagem
```

#### Card Stat (Aura DNA)
```
estrutura: número grande (3xl · font-sans · weight-700 · letter-spacing -0.04em)
           label pequeno (xs · text-muted)
exemplo:   "24" / "Projetos entregues"
```

---

### 2.3 · Inputs & Formulários

```css
/* Estado padrão */
.input {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  padding: 10px 14px;
  font-family: var(--font-body);
}

/* Focus */
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(226,255,0,0.1);
  outline: none;
}

/* Erro */
.input-error { border-color: var(--color-error); }
.input-error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.12); }
```

---

### 2.4 · Badges & Tags

**Badges** → status permanente (success/error/warning)
**Tags** → filtro clicável (active state com primary)

```
badge-primary  · fundo primary-dim · texto primary · borda primary/20%
badge-success  · fundo success/10% · texto success · borda success/25%
badge-warning  · fundo warning/10% · texto warning · borda warning/25%
badge-error    · fundo error/10%   · texto error   · borda error/25%

tag (default)  · fundo surface-2   · texto muted   · borda border
tag.active     · borda primary     · texto primary  · fundo primary-dim
```

---

### 2.5 · Alertas

```
alert-info    · borda-esquerda info    · fundo info/7%
alert-success · borda-esquerda success · fundo success/7%
alert-warning · borda-esquerda warning · fundo warning/7%
alert-error   · borda-esquerda error   · fundo error/7%
```

---

## NÍVEL 3 — Padrões de Layout

> *A arquitetura das páginas — onde Monolith encontra Luminal*

### 3.1 · Grid Principal

```css
/* Wrapper de página — inspirado no max-w-[1400px] do Aura */
.page-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

/* Grid de conteúdo padrão */
.content-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Sidebar layout (DS Navigator) */
.sidebar-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}
```

### 3.2 · Seções por Nível (Pattern de Página)

Inspirado no ritmo do Aura AI Fashion — seções contrastantes de cor:

```
SEÇÃO 0 → Nav fixa · bg surface/80% · backdrop-blur · border-b
SEÇÃO 1 → Hero · bg bg (#080808) · tipografia gigante · parallax bg
SEÇÃO 2 → Sobre / Intro · bg bg ou surface · conteúdo leve
SEÇÃO 3 → Feature accent · bg com color block (primary-dim ou accent-dim)
SEÇÃO 4 → Grid de projetos · bg bg · cards dark com hover
SEÇÃO 5 → Skills / Stats · bg surface · progress bars + números grandes
SEÇÃO 6 → Contato · bg gradiente · CTA principal
SEÇÃO 7 → Footer · bg bg · links + créditos mono
```

**Regra de transição entre seções:**
```css
/* Halftone mask — herdado do Aura */
.section-halftone-transition {
  background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: linear-gradient(to bottom, transparent, black);
  height: 96px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
```

---

### 3.3 · Nav Pattern

```
Posição:    fixed · top-0 · full-width · z-40
Fundo:      surface/80% + backdrop-blur(12px)
Borda:      border-b border (#252525) — MANTIDA ao encontrar
Height:     80px
Transição:  shadow-lg no scroll (ScrollTrigger toggle)
Conteúdo:   logo | nav links (hidden mobile) | CTA link
```

---

## NÍVEL 4 — Animações & Motion

> *"Motion que não interrompe — acompanha." — Filosofia do fluxo humano*

### 4.1 · Word Reveal (Herdado do Aura)

```javascript
/* Padrão de split + reveal para todos os headings */
const wordReveal = {
  y: '110%',           // começa abaixo do clip
  duration: 0.6,
  stagger: 0.03,
  ease: 'power3.out',
  scrollTrigger: {
    start: 'top 85%',
    toggleActions: 'play none none reverse'
  }
}

/* Estrutura HTML necessária */
/*
<div class="overflow-hidden">
  <span class="word-inner" style="transform: translateY(110%)">
    Palavra
  </span>
</div>
*/
```

### 4.2 · Fade Up (Cards e blocos)

```javascript
gsap.from('.card', {
  y: 30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power3.out',
  scrollTrigger: { start: 'top 80%' }
})
```

### 4.3 · Parallax de Fundo

```javascript
/* Hero background — exato do Aura AI */
gsap.to('.hero-bg', {
  yPercent: 20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
})
```

### 4.4 · Hover States (CSS puro)

```css
/* Hover de navegação (Luminal) */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width var(--duration) var(--ease);
}
.nav-link:hover::after { width: 100%; }

/* Hover de card (Monolith) */
.card {
  transition: border-color var(--duration) var(--ease),
              transform var(--duration) var(--ease),
              box-shadow var(--duration) var(--ease);
}
.card:hover {
  border-color: rgba(226,255,0,0.3);
  transform: translateY(-3px);
  box-shadow: 0 0 24px rgba(226,255,0,0.18);
}
```

### 4.5 · Marquee Infinito (Logos / Skills)

```css
/* Inspirado no marquee de logos do Aura */
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee {
  animation: scroll 30s linear infinite;
  display: flex;
  width: max-content;
}
.marquee-mask {
  mask-image: linear-gradient(
    to right,
    transparent, black 10%, black 90%, transparent
  );
}
```

---

## NÍVEL 5 — Identidade & Voz

> *O que o portfólio diz e como diz*

### 5.1 · Tom Verbal

| Contexto | Tom | Exemplo |
|---|---|---|
| Hero | Impactante, declarativo | *"Full-Stack · Design-Driven · Human-First"* |
| Sobre | Direto, humano | *"Construo produtos que as pessoas querem usar."* |
| Skills | Técnico, claro | *"React · Next.js · Node.js · Figma"* |
| CTA | Convidativo | *"Vamos construir algo juntos →"* |
| Footer | Minimalista | *"mbrasiliense · 2026"* |

### 5.2 · Voz do Eyebrow (acima dos títulos)

Padrão `font-mono · xs · uppercase · letter-spacing: 0.12em · color: primary`:
```
01 | Sobre
02 | Projetos
03 | Skills
04 | Contato
```
*Alternativa Luminal:* `[01] · [02]`
*Alternativa Aura:* `01 |` com separador sem colchetes

### 5.3 · Counters / Stats (dados reais do CV)

```
24+    Projetos entregues
4+     Anos de experiência  
98%    Satisfação estimada dos clientes
12+    Tecnologias no arsenal
```

---

## NÍVEL 6 — Integração Humana

> *"Transparente no fluxo do ser humano" — o nível mais importante*

### 6.1 · O que significa integração transparente

Um design transparente é aquele que **desaparece**. O usuário não percebe o design — apenas sente o resultado. Isso se alcança por:

1. **Hierarquia visual clara** → o olho sabe para onde ir sem instrução
2. **Micro-animações que confirmam** → feedback visual a cada interação
3. **Espaço em branco generoso** → respiração entre blocos
4. **Consistência absoluta** → mesmo padrão em todo lugar
5. **Velocidade** → transições que não bloqueiam o fluxo

### 6.2 · Regras de UX do Sistema

```
✓  Nunca bloquear o scroll com animações
✓  Sempre ter um CTA visível na viewport
✓  Mobile-first — toda decisão começa no telefone
✓  Contraste mínimo: 4.5:1 (WCAG AA)
✓  Focus ring visível em todos os interativos
✓  Bordas SEMPRE ao encontrar — não esconder limites
✗  Nunca usar mais de 2 fontes na mesma tela
✗  Nunca animar ao mesmo tempo mais de 3 elementos
✗  Nunca usar cor como único indicador de estado
```

### 6.3 · Fluxo do Usuário no Portfólio

```
[ENTRADA]
  ↓ Hero — impacto visual, nome, tagline
  ↓ Sobre — quem é Marcelo em 3 frases
  ↓ Stats — números que provam  
  ↓ Projetos — mostrar, não contar
  ↓ Skills — stack técnica visual
  ↓ Contato — CTA final + links

[REGRA DE SCROLL]
  Cada seção deve ser auto-suficiente.
  O usuário pode sair a qualquer momento — o mais importante vem primeiro.
```

---

## NÍVEL 7 — Tokens Avançados & Extensão

> *Para quando o sistema precisar crescer*

### 7.1 · Shadows

```css
--shadow-sm:           0 1px 3px rgba(0,0,0,0.5);
--shadow-md:           0 4px 16px rgba(0,0,0,0.6);
--shadow-glow-primary: 0 0 24px rgba(226,255,0,0.18);
--shadow-glow-accent:  0 0 24px rgba(123,97,255,0.25);
--shadow-strong:       0 25px 50px rgba(0,0,0,0.4);
```

### 7.2 · Z-Index Scale

```
0     conteúdo base
10    elementos elevados (cards em hover)
20    overlays de seção
30    sticky headers internos
40    nav fixa
50    modais / drawers
999   tooltips
9999  notificações
```

### 7.3 · Breakpoints

```css
/* Mobile-first */
sm:  640px   /* telefone grande */
md:  768px   /* tablet */
lg:  1024px  /* desktop */
xl:  1280px  /* desktop largo */
2xl: 1400px  /* max-width padrão do sistema */
```

### 7.4 · Gradientes Recorrentes

```css
/* Hero overlay (Monolith) */
background: linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.95));

/* Accent section (Luminal) */
background: linear-gradient(135deg, #0d0d1a, #111111);

/* CTA section (Aura) */
background: linear-gradient(to bottom, #111, #0a0a0a);

/* Text gradient (display) */
background: linear-gradient(to bottom, #fff, rgba(255,255,255,0.7));
-webkit-background-clip: text;
color: transparent;
```

---

## NÍVEL 8 — Checklist de Implementação

> *Do design system à página real*

### 8.1 · Base (obrigatório primeiro)
- [ ] Importar fontes: Space Grotesk + Inter + Space Mono
- [ ] Definir todos os tokens em `:root`
- [ ] Reset CSS + `box-sizing: border-box`
- [ ] Configurar `scroll-behavior: smooth`
- [ ] Importar GSAP + ScrollTrigger

### 8.2 · Componentes (na ordem de uso)
- [ ] Nav fixa com backdrop-blur
- [ ] Hero section com parallax
- [ ] Seção "Sobre" com word reveal
- [ ] Grid de cards de Projetos
- [ ] Seção de Stats com progress bars
- [ ] Marquee de tecnologias
- [ ] Formulário de contato
- [ ] Footer minimalista

### 8.3 · Qualidade
- [ ] Testar contraste de todas as combinações de cor
- [ ] Verificar responsividade (320px → 1400px)
- [ ] Testar navegação por teclado (Tab + Enter)
- [ ] Verificar `prefers-reduced-motion` nos GSAP
- [ ] Validar que toda borda ao encontrar está visível
- [ ] Revisar dados reais do CV em todos os textos

---

## Referência Rápida — Card de Bolso

```
╔════════════════════════════════════════════╗
║  DS Marcelo · v1.0.0                       ║
║                                            ║
║  CORES        PRIMARY  #e2ff00             ║
║               ACCENT   #7b61ff             ║
║               BG       #080808             ║
║               SURFACE  #111111             ║
║               BORDER   #252525  ← SEMPRE  ║
║                                            ║
║  FONTES       TITLE   Space Grotesk        ║
║               BODY    Inter                ║
║               CODE    Space Mono           ║
║                                            ║
║  MOTION       EASE    cubic(0.22,1,0.36,1) ║
║               TIME    0.3s base            ║
║               REVEAL  word by word         ║
║                                            ║
║  REGRA #1     BORDAS AO ENCONTRAR          ║
║  REGRA #2     FLUXO HUMANO SEMPRE          ║
║  REGRA #3     MOBILE PRIMEIRO              ║
╚════════════════════════════════════════════╝
```

---

*Documento gerado em 27·02·2026 · Portfólio Marcelo Brasiliense*
*Fusão: Monolith Architecture × Luminal Studio × Aura AI Fashion*
