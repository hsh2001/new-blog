import { NextPage } from 'next';

import JSCode from '../../components/JSCode';
import Layout from '../../components/Layout';
import SecondTitle from '../../components/SecondTitle';
import TOC from '../../components/TOC';

export const createdDate = new Date('2021. 9. 21.');
export const title = 'Javascript Promise';

const Page: NextPage = () => (
  <Layout subTitle={title}>
    <TOC titles={['CallBack', 'Promise', 'async await']} />

    <SecondTitle text="CallBack" />

    <p>
      자바스크립트에서 함수는 값으로 취급됩니다. 따라서 아래와 같이 변수에
      담아서 사용할 수도 있습니다.
    </p>

    <JSCode
      code={`
const fn = function name(params) {
  console.log('hello world');
}

fn();
      `}
    />
  </Layout>
);

export default Page;
