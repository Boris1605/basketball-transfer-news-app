'use client';

import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Teams page',
//   description: 'Teams page',
// };

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = '/api/teams';

  useEffect(() => {
    // Function to fetch guest data on initial render
    console.log(process.env);
    const firstFetch = () => {
      fetch(baseUrl, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          setTeams(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log('Error fetching guest list:', error);
          setIsLoading(false);
        });
    };

    // Call the initial fetch function
    firstFetch();
  }, []);

  return (
    <main>
      <div>Teams</div>
    </main>
  );
}
