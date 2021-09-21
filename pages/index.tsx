import { join as joinPath, parse as parsePath } from 'path';

import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '../components/Layout';

type Article = {
  title: string;
  createdDate: string;
  fileName: string;
};

interface PageProps {
  articles: Article[];
}

const Page: NextPage<PageProps> = ({ articles }) => (
  <Layout>
    <h1>DEVDEV</h1>
    <p
      style={{
        textAlign: 'center',
      }}
    >
      개발자 황승현의 기술 블로그.
    </p>

    <h2>최신 게시글</h2>

    {!articles.length && <p>게시글이 없어요 ㅠㅜ</p>}

    {articles.map(({ fileName, createdDate, title }) => {
      const _createdDate = new Date(createdDate);
      const year = _createdDate.getFullYear();
      const month = _createdDate.getMonth() + 1;
      const date = _createdDate.getDate();
      return (
        <li>
          <Link href={`/article/${fileName}`}>
            <a>{title}</a>
          </Link>
          {` - ${year}. ${month}. ${date}`}
        </li>
      );
    })}
  </Layout>
);

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const { promises: fs } = await import('fs');
  const fileList = await fs.readdir(joinPath(process.cwd(), 'pages/article'));
  const articles: Article[] = [];

  for (const filePath of fileList.slice(0, 5)) {
    const { ext, name } = parsePath(filePath);

    if (ext != '.tsx') {
      continue;
    }

    const { title, createdDate }: Article = await import(`./article/${name}`);
    articles.push({
      title,
      fileName: name,
      createdDate: createdDate.toString(),
    });
  }

  return {
    props: { articles },
  };
};

export default Page;
