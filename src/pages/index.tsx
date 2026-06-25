import { Link } from '@umijs/max';

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Master</h1>
      <p>Host application running @umijs/max 4.6.67.</p>
      <Link to="/app1/">Open app1</Link>
    </main>
  );
}
