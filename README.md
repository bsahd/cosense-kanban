機能
* 一つの[PageMenu]のボタンとしてインターフェースを作成する
* 次のメニューが含まれている
  * mkinbox
  * chstate inbox
  * chstate todo
  * chstate doing
  * chstate done
  * chstate close
* mkinbox
 	* `#inbox`とのみ書かれた空のページを作る
* chstate
 	* `#inbox`, `#todo`, `#doing`, `#done`, `#close` を除去
 	* メニューで設定したのタグををページ先頭に挿入

* 設計思想
  * トランスパイル、依存関係なし: UserScriptをオンにして自分のページのscript.jsに貼り付けるだけ
    * それに加え読みやすい短いコード: 安心して使える
  * ツールボックス

* 事前準備
  * `inbox`, `todo`, `doing`, `done`, `close`のページと被リンクがないことを確認する
    * タグ名のプレフィックスは必要か?
  * ロードマップページを作る
    * `Roadmap`という名前にする
		* `#inbox`, `#todo`, `#doing`, `#done`, `#close` にリンクすること
