import { NextPage } from 'next';

import Layout from '../../components/Layout';

export const createdDate = new Date('2021. 9. 21.');
export const title = 'Javascript Promise';

const Page: NextPage = () => (
  <Layout subTitle={title}>
    <p>Content here</p>
  </Layout>
);

export default Page;
