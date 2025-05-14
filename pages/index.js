import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Plataforma de Ensino - Igreja Cristã Família no Altar</h1>
      <p>Bem-vindo! Escolha um módulo para iniciar seus estudos:</p>
      <ul>
        <li><Link href="/modulo1">Módulo 1 - Introdução</Link></li>
        <li><Link href="/modulo2">Módulo 2 - Fundamentos Bíblicos</Link></li>
        <li><Link href="/modulo3">Módulo 3 - Vida Cristã e Comunhão</Link></li>
      </ul>
    </main>
  );
}
