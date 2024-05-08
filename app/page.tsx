import RegexCheckerForm from '../components/RegexCheckerForm';
import '../style/globals.css';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold">正規表現チェッカー</h1>
      <RegexCheckerForm />
    </div>
  );
}
