"use client";

import { useState } from 'react';
import parse from 'html-react-parser';

const RegexCheckerForm: React.FC = () => {
  const [regex, setRegex] = useState<string>('');
  const [inputString, setInputString] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const checkRegex = () => {
    const trimmedRegex = regex.trim();
    const trimmedInputString = inputString.trim();

    if (trimmedRegex === '' || trimmedInputString === '') {
      setResult('正規表現または検証文字列を入力してください');
      return;
    }

    const regexObject = new RegExp(trimmedRegex);

    const matched = trimmedInputString.replace(regexObject, (match) => `<span class="code-block">${match}</span>`);
    setResult(matched);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form className="mb-8">
        <label htmlFor="regex" className="block mb-2">正規表現:</label>
        <input
          type="text"
          id="regex"
          className="block w-full p-2 border border-gray-300 rounded"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
        />
        <label htmlFor="inputString" className="block mt-4 mb-2">検証文字列:</label>
        <textarea
          id="inputString"
          className="block w-full p-2 border border-gray-300 rounded"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button
          type="button"
          onClick={checkRegex}
          className="block w-full py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          検証する
        </button>
      </form>
      <div className="result border border-gray-300 p-4 rounded">{parse(result)}</div>
    </div>
  );
};

export default RegexCheckerForm;