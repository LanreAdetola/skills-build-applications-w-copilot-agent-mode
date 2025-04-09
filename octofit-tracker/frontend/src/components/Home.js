import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="text-center py-5">
        <h1>Welcome to <span style={{ color: '#007bff' }}>Octofit</span> 🐙</h1>
        <p className="lead">
          Your all-in-one platform for fitness tracking, team challenges, and performance insights.
        </p>
      </section>

      <section className="container my-5">
        <h2 className="mb-3">💪 What You Can Do with Octofit</h2>
        <ul>
          <li><strong>Track Activities:</strong> Log workouts and stay consistent with your fitness goals.</li>
          <li><strong>Climb the Leaderboard:</strong> Compete with friends and see where you stand.</li>
          <li><strong>Join Teams:</strong> Work out together, motivate each other, and win challenges.</li>
          <li><strong>Explore Workouts:</strong> Find workouts curated by the Octofit community.</li>
          <li><strong>Manage Users:</strong> Admin tools to manage profiles and performance data.</li>
        </ul>
      </section>

      <section className="bg-light py-4 text-center">
        <h3>🚀 Ready to Get Started?</h3>
        <p>Create your profile, join a team, and let the gains begin!</p>
        <a href="/activities" className="btn btn-primary mt-2">Start Logging Activities</a>
      </section>
    </div>
  );
};

export default Home;
