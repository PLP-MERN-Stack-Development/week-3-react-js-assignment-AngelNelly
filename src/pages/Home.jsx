import Layout from '../layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import TaskManager from '../components/TaskManager';

export default function Home() {
  return (
    <Layout>
      <section className="space-y-4">
        <Card title="Welcome, Angela 💖">
          <p>This is your smart dashboard — everything's coming together!</p>
        </Card>

        <div className="space-x-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>

        <TaskManager />
      </section>
    </Layout>
  );
}



