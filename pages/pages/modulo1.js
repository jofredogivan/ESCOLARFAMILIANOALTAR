import { useState } from 'react';
import Link from 'next/link';

export default function Modulo1() {
  const [concluido, setConcluido] = useState(false);

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Módulo 1 - Introdução</h2>
      <p>Assista à aula: <a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank">Ver aula</a></p>
      <button onClick={() => setConcluido(true)}>
        Marcar como concluído
      </button>
      {concluido && <p style={{ color: 'green' }}>✔ Módulo concluído!</p>}
      <p><Link href="/">← Voltar</Link></p>
    </main>
  );
}
