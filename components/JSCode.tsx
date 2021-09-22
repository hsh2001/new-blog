import dynamic from 'next/dynamic';

interface JSCodeProps {
  code: string;
}

const JSCode = dynamic(
  async () => {
    const { default: SyntaxHighlighter } = await import(
      'react-syntax-highlighter'
    );

    const { atomOneLight } = await import(
      'react-syntax-highlighter/dist/cjs/styles/hljs'
    );

    return ({ code }: JSCodeProps) => (
      <SyntaxHighlighter style={atomOneLight} language="javascript">
        {code.trim()}
      </SyntaxHighlighter>
    );
  },
  { ssr: false },
);

export default JSCode;
