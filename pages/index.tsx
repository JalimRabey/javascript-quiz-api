import DefaultLayout from 'layouts/Default';

import BaseUrl from 'components/BaseUrl';
import Endpoints from 'components/Endpoints';

export default function Home() {
  return (
    <DefaultLayout>
      <h1 className="text-4xl font-bold text-primary-400">
        Javascript Quiz API
      </h1>

      <BaseUrl />
      <Endpoints />
    </DefaultLayout>
  );
}
