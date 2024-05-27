import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const countUp = () => {
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  // 毎回実行される
  useEffect(() => {
    console.log("Current count is...", count)
  });

  // 初回レンダリング後のみ実行される
  useEffect(() => {
    // APIからデータをフェッチ
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArticles(data); // APIから取得したデータを状態に保存
        setLoading(false); // ローディング状態を解除
      })
      .catch((error) => {
        console.error(error);
        setError(error); // エラー状態を設定
        setLoading(false); // ローディング状態を解除
      });
  }, []);

  // 初回レンダリング後のみ実行される
  useEffect(() => {
    console.log("ACurrent count is...", count)
  }, []);
  // triggerが変更されるたびに実行される
  // useEffect(() => {
  //   console.log("Current count is...", count)
  // }, [trigger]);

  // trigger1 or trigger2が変更されるたびに実行される
  // useEffect(() => {
  //   console.log("Current count is...", count)
  // }, [trigger1, trigger2]);

  return (
    <div>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {!loading && !error && (
        <div>
          <h1>Articles</h1>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Counter