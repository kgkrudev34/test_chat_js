var dialogs = new Vue({
  el: '#chat_block_dialogs',
  data: {
    dialogList: dialogListArray
  },
  watch: {
  	'dialogList': function(){
  		// Функция отслеживания изменения переменной
  	}
  },
  methods: {
  	'selectDialog': function (id) {
  		// Выбор диалога, рендер блока с сообщениями
  		for (var i = 0; i < this.dialogList.length; i++) {	
  				this.dialogList[i].isActive = false;
  		}

  		for (var i = 0; i < this.dialogList.length; i++) {		
  			if(this.dialogList[i].id == id){
  				this.dialogList[i].isActive = true;
  				chatBlockMessage.chat_id = id;
  				break;
  			}
  		}

  		newDialogs.addDialogPanel = false;
  	},
  	// Обработка добавления нового диалога
  	'addDialog': function(){
  		for (var i = 0; i < this.dialogList.length; i++) {		
  				this.dialogList[i].isActive = false;
  		}
  		chatBlockMessage.consumer = null;
  		chatBlockMessage.chat_id = null;
		newDialogs.addDialogPanel = true;
  	},
  	'convertName': function (id) {
  		return getUserNameByUserId(id);
  	}
  }
});

converterUsername();
updateLastMessageForAll();