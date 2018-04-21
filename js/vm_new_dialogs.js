// Объект отвечающий за создание нового диалога
var newDialogs = new Vue({
  el: '#new-dialogs-list',
  data: {
    consumers: newConsumers,
    addDialogPanel: false
  },
  methods: {
  	// Выбор пользователя для диалога
  	'selectDialog': function (id) {
	  	this.back();
	  	chatBlockMessage.consumer = id;
  	},
  	'back': function(){
  		this.addDialogPanel = false;
  	}
  }
});