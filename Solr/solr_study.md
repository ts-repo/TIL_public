

- [Apache Solr](#apache-solr)
  - [参考サイト](#参考サイト)
  - [Solr管理画面を使って検索をしてみる](#solr管理画面を使って検索をしてみる)
  - [](#)
  - [検索](#検索)



# Apache Solr



## 参考サイト
* [KandaSearch ではじめる Apache Solr 入門 - 株式会社ロンウイット](https://www.rondhuit.com/kandasearch_1.html)

* [Apache Solr（ソーラ）の入門知識、全文検索の構築、solrjの使い方など](https://www.zealseeds.com/searchEngine/solr/index.html)

* [Apache Solr -もう誰も苦しまないように - もう眠いんだ、寝させておくれ](https://bmrcx862.hatenablog.com/entry/20150308/1425825046)


## Solr管理画面を使って検索をしてみる
- Solr Admin URLをブラウザのアドレスバーに直接入力する
```code


```


##
Core選択後のNum Docs




## 検索
```
q=検索したいワード
wt=出力するファイル形式
indent=インデントをつけるかどうか

rows=検索結果の表示数
※適宜増やしたり減らしたりして確認しても良いかも。増やしすぎるとブラウザが停止するので注意

```

```
「q」は、検索項目と検索語を入力できるようになっていて、「検索項目:検索語」という風に書くことになっているのですが、「:」で、すべての項目のすべての言葉、という風に検索できます。ここで例えば「project:"石本"」という風に入力して「Execute Query」ボタンをクリックすると、「project」項目に「石本」が含まれるドキュメントがヒットします。

きちんと「富山」として検索したい時は「textConn:"富山"」のように、検索語を二重引用符で囲めば、その文字列として検索してくれるようになります。


```

```
"response"⇒"numFound"でヒットした件数が表示される
```