# 機能
* 一つのPageMenuのボタンとしてインターフェースを作成する
* 次のメニューが含まれている
  	* open Roadmap
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

# 設計思想
* トランスパイル、依存関係なし: UserScriptをオンにして自分のページのscript.jsに貼り付けるだけ
	* それに加え読みやすい短いコード: 安心して使える
* ツールボックス

# 事前準備
1. `inbox`, `todo`, `doing`, `done`, `close`のページと被リンクがないことを確認する
	* すでにある場合はページを消し、被リンクを非リンク化する
2. ロードマップページを作る
	1. `Roadmap`という名前にする
	2. `#inbox`, `#todo`, `#doing`, `#done`, `#close` にリンクすること
