scrapbox.PageMenu.addMenu({
	title: 'thKanban',
	image: 'https://i.gyazo.com/4ed2632026642b12cb669657b803df5e.png'
});
function navigateWithoutReload(navigateTo){
 	var elem = document.createElement("a");
	elem.href = navigateTo;
	document.body.appendChild(elem);
	elem.click();
	elem.remove();
}
scrapbox.PageMenu('thKanban').addItem({
	title: 'open Roadmap',
	onClick: function () {
		navigateWithoutReload("Roadmap");
	}
});
scrapbox.PageMenu('thKanban').addItem({
  	title: 'open Roadmap in new tab/window',
  	onClick: function () {
		window.open("Roadmap");
  	}
});
scrapbox.PageMenu('thKanban').addItem({
	title: 'mkinbox',
	onClick: function () {
		navigateWithoutReload('newTask?body=%23inbox');
	}
});
scrapbox.PageMenu('thKanban').addItem({
 	title: 'mkinbox in new tab/window',
 	onClick: function () {
 		window.open('newTask?body=%23inbox');
 	}
 });
/*
	古いタグを除去する
	コードブロック内のタグも巻き添えになるので注意
 */
function thKanbanChstateDeleteOldState(){
	window.scrapbox.Page.lines.forEach(function(line,i){
		var lineText = line.text
		var lineTagRemoved = line.text.replace(
			new RegExp('#inbox|#todo|#doing|#done|#close', 'g')
			, "");
		if(lineTagRemoved != lineText){
			window.scrapbox.Page.updateLine(lineTagRemoved,i);
			console.log("tag removed in line",i);
		}
	});
}
function thKanbanChstateInsertNewState(state){
	window.scrapbox.Page.insertLine("#"+state,1);
	console.log("new state:",state)
}
// コードの冗長性を減らすためボタン作成用関数を定義
function thKanbanChstateMakeButton(state){
	scrapbox.PageMenu('thKanban').addItem({
 		title: 'chstate to '+state,
 		onClick: function () {
 			thKanbanChstateDeleteOldState();
 			thKanbanChstateInsertNewState(state);
 		}
 	});
}
thKanbanChstateMakeButton("inbox");
thKanbanChstateMakeButton("todo");
thKanbanChstateMakeButton("doing");
thKanbanChstateMakeButton("done");
thKanbanChstateMakeButton("close");
 
