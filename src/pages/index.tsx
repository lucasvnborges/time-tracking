import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PATH_DASHBOARD } from '@routes/paths';
import Page from '@components/Page';

export default function HomePage() {
  const { push } = useRouter();

  useEffect(() => {
    push(PATH_DASHBOARD.root);
  }, [push]);

  return <Page title="The starting point for your next project" />;
}
