import Image from 'next/image';
import Icon from '../components/Icon';

const FEATURES = [
  {
    icon: 'science',
    title: 'Consenso de 3 modelos',
    body: 'Isolation Forest, LOF y K-Means corren en paralelo; un cliente solo se marca sospechoso si ≥ 2 coinciden, recortando falsos positivos ~35%.',
  },
  {
    icon: 'monitoring',
    title: 'Dashboard interactivo',
    body: 'Gráficos Plotly (histogramas, boxplots, scatter) inyectados directo desde la API, sin frameworks de frontend.',
  },
  {
    icon: 'psychology',
    title: 'ML no supervisado',
    body: 'Sin "fraude confirmado" etiquetado en el dataset: detecta comportamientos estadísticamente alejados de la norma.',
  },
  {
    icon: 'bolt',
    title: 'API REST rápida',
    body: 'Respuestas de 110–150 ms por análisis de cliente y 40–60 ms por transacción, con Swagger UI en /docs.',
  },
  {
    icon: 'dashboard',
    title: 'Gestión completa',
    body: 'CRUD de clientes, cajeros, tipos de transacción y reportes de anomalías, todo navegable desde el dashboard.',
  },
  {
    icon: 'dataset',
    title: 'Dataset real',
    body: '~4.500 clientes y ~100.000 transacciones de un banco nigeriano (Kaggle), procesado y normalizado.',
  },
];

const STACK = [
  'Python 3.9+',
  'FastAPI',
  'scikit-learn',
  'SQLAlchemy + SQLite',
  'Plotly Express',
  'Bootstrap 5',
  'Swagger / OpenAPI',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-on-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
            <Icon name="shield_person" filled className="text-accent" />
            <span className="text-sm font-bold">Fraud Detector</span>
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Detección de fraude bancario sin depender de un dataset etiquetado
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Sistema de detección de anomalías en transacciones bancarias. Tres modelos de ML no
            supervisado (Isolation Forest, Local Outlier Factor, K-Means) analizan cada cliente en
            paralelo — un caso se marca sospechoso solo si al menos 2 de los 3 coinciden, lo que
            reduce falsos positivos ~35% frente a un modelo único. Dashboard interactivo con
            Plotly sobre un dataset real de ~100k transacciones bancarias.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://lorengrz.github.io/FraudDetector/"
              className="flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-bold text-white shadow-md transition-transform hover:scale-[1.02]"
            >
              <Icon name="open_in_new" />
              Probar la app
            </a>
            <a
              href="https://github.com/LorenGrz/FraudDetector"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              <Icon name="code" />
              Ver el código
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="overflow-hidden rounded-2xl border border-outline-variant bg-surface shadow-lg">
            <Image
              src="/dashboard.png"
              alt="Dashboard de Fraud Detector mostrando KPIs en vivo y gráficos de distribución de montos"
              width={1440}
              height={900}
              className="w-full"
            />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-on-surface-variant">
            Dashboard en vivo: clientes y transacciones totales, transacciones/min y distribución
            de montos sobre el dataset real.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold text-primary">
          Cómo detecta el fraude
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-on-surface-variant">
          Cada cliente y cada transacción pasan por el mismo circuito de consenso antes de llegar
          al dashboard.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon name={f.icon} className="text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-on-surface">{f.title}</h3>
              <p className="text-sm text-on-surface-variant">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold">Stack técnico</h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/70">
            Backend Python con detección de anomalías corriendo íntegramente en el servidor;
            frontend vanilla enfocado en consumir la API y renderizar gráficos dinámicos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-1.5">
          <Icon name="shield_person" filled className="text-accent" />
          <span className="font-display font-bold text-primary">Fraud Detector</span>
        </div>
        <p className="text-sm text-on-surface-variant">Proyecto de portfolio — Lorenzo Graizzaro.</p>
        <a
          href="mailto:lorenzograizzaro55@gmail.com"
          className="text-sm font-semibold text-primary underline underline-offset-4"
        >
          lorenzograizzaro55@gmail.com
        </a>
      </footer>
    </main>
  );
}
