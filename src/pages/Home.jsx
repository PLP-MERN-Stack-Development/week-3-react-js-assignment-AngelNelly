import { Link } from "react-router-dom";
import TaskManager from "../components/TaskManager";



export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to My App</h1>

      <div className="flex justify-center gap-4 mt-6">
        <Link to="/posts" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Posts
        </Link>
        <Link to="/create" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Create Post
        </Link>
      </div>

      <div className="mt-10">
        <TaskManager />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="text-center space-y-6">
//       <h1 className="text-3xl font-bold text-blue-600">Welcome to My App</h1>

//       <div className="flex justify-center gap-4 mt-6">
//         <Link to="/posts" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//           View Posts
//         </Link>
//         <Link to="/create" className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//           Create Post
//         </Link>
//       </div>
//     </div>
//   );
// }




// import Layout from '../layout/Layout';
// import Card from '../components/Card';
// import Button from '../components/Button';
// import TaskManager from '../components/TaskManager';

// export default function Home() {
//   return (
//     <Layout>
//       <section className="space-y-4">
//         <Card title="Welcome, Angela 💖">
//           <p>This is your smart dashboard — everything's coming together!</p>
//         </Card>

//         <div className="space-x-2">
//           <Button variant="primary">Primary</Button>
//           <Button variant="secondary">Secondary</Button>
//           <Button variant="danger">Danger</Button>
//         </div>

//         <TaskManager />
//       </section>
//     </Layout>
//   );
// }



