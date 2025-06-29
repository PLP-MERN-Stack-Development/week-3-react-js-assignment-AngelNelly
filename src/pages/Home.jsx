// import Layout from '../layout/Layout';
// import Card from '../components/Card';
// import Button from '../components/Button';

// export default function Home() {
//   return (
//     <Layout>
//       <div className="space-y-4">
//         <Card title="Welcome to the Card Test">
//           <p>This is a test of the reusable Card component.</p>
//           <div className="mt-4 space-x-2">
//             <Button variant="primary">Primary Button</Button>
//             <Button variant="secondary">Secondary Button</Button>
//             <Button variant="danger">Danger Button</Button>
//           </div>
//         </Card>

//         <Card>
//           <p>This is a card without a title prop. It still works!</p>
//         </Card>
//       </div>
//     </Layout>
//   );
// }


// export default function Home() {
//   return (
//     <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>React is working 🎉</h1>
//   );
// }

// import Card from '../components/Card';

// export default function Home() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <Card title="Test Card">
//         <p>This is a working card test!</p>
//       </Card>
//     </div>
//   );
// }

// import Button from '../components/Button';

// export default function Home() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <Button variant="primary">Test Button</Button>
//     </div>
//   );
// }



// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <h1 className="text-2xl p-4">Testing Navbar and Footer</h1>
//       <Footer />
//     </>
//   );
// }


// import Layout from '../layout/Layout';

// export default function Home() {
//   return (
//     <Layout>
//       <h1 className="text-2xl font-bold text-center">Layout, Navbar & Footer are Working 🎉</h1>
//     </Layout>
//   );
// }


import Layout from '../layout/Layout';
import TaskManager from '../components/TaskManager';

export default function Home() {
  return (
    <Layout>
      <TaskManager />
    </Layout>
  );
}
