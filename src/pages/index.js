import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { withApollo } from '../lib/apollo';
import Layout from '../components/layout';
import HabitForm from '../components/habit-form';
import HabitList from '../components/habit-list';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(['Go to gym']);
  if (loading) return <div>Loading...</div>;
  return (
    <Layout>
      <div className="mt-12 px-4 relative">
        <HabitForm setHabits={setHabits} />
        <HabitList habits={habits} />
      </div>
    </Layout>
  );
};

export default withApollo(Home);
