import './HomePage.css';

const HomePage = () => (
  <main className="HomePage">
    <section className="HomePage__hero">
      <h1>React Feature Flag Demo</h1>
      <p>
        This project provides a starting point for experimenting with feature flags
        in a React application.
      </p>
    </section>
    <section className="HomePage__instructions">
      <h2>Getting Started</h2>
      <ol>
        <li>Run <code>npm install</code> to install dependencies.</li>
        <li>Execute <code>npm start</code> to launch the development server.</li>
        <li>
          Customize this page to integrate your feature flag provider and display
          conditional UI.
        </li>
      </ol>
    </section>
  </main>
);

export default HomePage;
