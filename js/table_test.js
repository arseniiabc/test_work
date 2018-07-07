 //table_test задание rev 1.0
 //код далле будет оптимизироватся в плане кроссбраузерности и адаптивности
 //планируется создание сниппета для Sublime Text 3
var elem;
var n=5,m=5;
var start_p;

//функция срабатывающая по событию наведения
function f(a, b, c){//console.log(a,b,c);

 var obj2 = document.getElementsByClassName('top00');
 var obj3 = document.getElementsByClassName('left00');
 var obj4 = document.getElementsByClassName('table_other');
// функция получения координат элемента относительно элемента где он находится

  var obj = document.getElementsByClassName(c+a+b); // берем интересующий элемент  

	if (c=="other"){ 
		  var posX = obj[0].offsetTop;  // верхний отступ эл-та от родителя
		  var posY = obj[0].offsetLeft; // левый отступ эл-та от родителя
		//  console.log('x=[' + posX + '] y=[' + posY + ']'); // печатаем координаты

		 

		//#######################move############################
		//right-left
		if(obj2[0].offsetLeft!=posY-2){

			obj2[0].style.left=(posY-2)+'px';
			obj2[0].setAttribute('onmouseover', 'f('+0+','+b+',"minus"'+')');
			obj2[0].setAttribute('onclick', 'fclick('+0+','+b+',"minus_col"'+')');
		/*перемещение */
			obj2[0].style.transitionTimingFunction = "ease-in";
			obj2[0].style.transitionDuration = ".2s";
		}

		//up-down
		if(obj3[0].offsetTop!=posX-2){
			obj3[0].style.top=(posX-2)+'px';
			obj3[0].setAttribute('onmouseover', 'f('+a+','+0+',"minus"'+')');
			obj3[0].setAttribute('onclick', 'fclick('+a+','+0+',"minus_row"'+')');

		/*перемещение */
			obj3[0].style.transitionTimingFunction = "ease-in";
			obj3[0].style.transitionDuration = ".2s";

		}


	}

	if (c=="table_other"||c=="minus"){
		//показываем минусы стиляим
	
	//	obj2[0].style.opacity = 1;
	//	obj3[0].style.opacity = 1;



		//колличество рядков
		var	len_i = obj4[0].rows.length;
		//колличество столбцов
		var	len_j = obj4[0].rows[0].cells.length;
	console.log("Перед появлением "+len_i+len_j);

		if (len_j!=1){obj2[0].style.visibility = "visible"; //console.log("Появился ");
	}
		if (len_i!=1){obj3[0].style.visibility = "visible"; //console.log("Появился ");
	}
	}



//console.log(obj2[0].style.opacity);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//функция срабатывающая по событию при убирании
function f_out(a, b, c){

	console.log("Убрал "+c,a,b);

//скрываем минусы стилями
var obj2 = document.getElementsByClassName('top00');
var obj3 = document.getElementsByClassName('left00');	
obj2[0].style.visibility = "hidden";
obj3[0].style.visibility = "hidden";

		
/*
	if (c=="table_other")||(c!="minus")){ 


		
//скрытие visibility: visible | hidden
//console.log("Затемнение "+c);	
	
/// нужно убрать минусы

function some(){
		var obj2 = document.getElementsByClassName('top00');
		var obj3 = document.getElementsByClassName('left00');
		obj2[0].style.visibility = "hidden";
		obj3[0].style.visibility = "hidden";	
}

	

	var timerId=setInterval(some, 500);
//
	//	obj2[0].style.visibility = "visible";
	//	obj3[0].style.visibility = "visible";
	

/*
	  	while(obj2[0].style.opacity>0){
//+++++++++++++++++
	console.log("Затемнение");
//прозрачность
		obj2[0].style.opacity = obj2[0].style.opacity-0.01;
		obj3[0].style.opacity = 0;
		}
*/
//	}


//	console.log("Убрал "+c,a,b);
}

//+++++++++++++++++++++++++++++++++++


//функция срабатывающая по событию нажатия
function fclick(a, b, c){
//console.log("Нажал ",a,b, c);
	var obj2 = document.getElementsByClassName('top00');
	var obj3 = document.getElementsByClassName('left00');
	var obj4 = document.getElementsByClassName('table_other');


//колличество рядков
//console.log ("Колличество рядков ",obj4[0].rows.length);
var	len_i = obj4[0].rows.length;

//колличество столбцов
//console.log ("Колличество столбцов ",obj4[0].rows[0].cells.length);
var	len_j = obj4[0].rows[0].cells.length;


//                             вставка рядка
if (c=="plus_row"){
	//create rows

		 var tr = document.createElement('tr');
		 tr.className = 'tr_other'+n+0;


		 obj4[0].appendChild(tr);

	//create elements
		for (var j = 0; j < len_j; j++) {

		var td = document.createElement('td');
		td.className = 'other'+n+j;
		td.classList.add('other');

		td.setAttribute('onmouseover', 'f('+n+','+j+',"other"'+')');
		td.setAttribute('onclick', 'fclick('+n+','+j+',"other"'+')');
			 	
		tr.appendChild(td);

		 	 }
n++;
}	

//                            вставка столбца 
//не использую elem.cloneNode(true), тк нужно наследовать с другими атрибутами
//хотя их можно подправить elem.querySelector('').
// elem.appendChild(td)
//   elem.hasAttribute(name) – проверяет наличие атрибута
//   elem.getAttribute(name) – получает значение атрибута
//  elem.setAttribute(name, value) – устанавливает атрибут
//   elem.removeAttribute(name) – удаляет атрибут

	if (c=="plus_col"){

		//change rows
		for (var i = 0 ; i < len_i; i++) {
		//create elements
			 	
			var td = document.createElement('td');
			td.className = 'other'+i+m;
			td.classList.add('other');

			td.setAttribute('onmouseover', 'f('+i+','+m+',"other"'+')');
			td.setAttribute('onclick', 'fclick('+i+','+m+',"other"'+')');
				 	
			obj4[0].rows[i].appendChild(td);
			 	
		}

	}	
	m++;
//                             удаление рядка
	if (c=="minus_row"){
		// rows

	
var obj5 = document.getElementsByClassName('tr_other'+a+b);


	console.log("Нажал minus_row len_i =" + len_i);

	// верхний отступ эл-та от родителя
	//up-down
	
	if (len_i>1){
		//восстановление скорости анимации
		obj3[0].style.transitionDuration = ".0s";

		obj5[0].remove();
		obj3[0].style.visibility = 'hidden';
	}

}	

//                            удаление столбца
	if (c=="minus_col"){
console.log("Нажал minus_col len_j=" + len_j);

//***********************


for (var i = 0 ; i < n; i++) {
//	var obj6 = document.getElementsByClassName('other'+i+b);
	if (len_j>1){
		obj4[0].rows[i].cells[b].remove();
	
	//восстановление скорости анимации
		obj2[0].style.transitionDuration = ".0s";


	//	obj6[0].remove();
		obj2[0].style.visibility = 'hidden';
	}

}

	












//**************************
	
	}	

}




console.log("Не дожидаясь загрузки " + start_p);

window.onload = function start() {
		elem = document.getElementById('table_test');

//***************************************************************		 
	//create table #1
		 var table = document.createElement('table');

		 var tblB = document.createElement('tbody');
		 table.appendChild(tblB);

	//create rows
		
		 	var i=0; var j = 0
		 	var tr = document.createElement('tr');
		 	tblB.appendChild(tr);

	//create elements
		 	

			 	var td = document.createElement('td');
			 	td.className = 'top'+i+j;
			 
	//класс оформления минуса		 	
				td.classList.add('minus');
	//анимация  turnright turnstyle

			 	
			 	

			 	td.setAttribute('onmouseover', 'f('+i+','+j+',"minus"'+')');
			 	td.setAttribute('onclick', 'fclick('+i+','+j+',"minus_col"'+')');

			 	td.innerHTML = '<p>-</p>';
//скрываем стилями - свойство прозрачности

		td.setAttribute("style", "visibility: hidden;");



			 	tr.appendChild(td);
		 	 
	
		elem.appendChild(table);

//****************************************************************
 
	//create table #2
		 var span = document.createElement('span');
		 var table = document.createElement('table');
		 var tblB = document.createElement('tbody');
		 
		 table.appendChild(tblB);
		 span.appendChild(table);
//создание горизонтальной структуры
		 span.classList.add('conteiner');

	//create rows

		var i = 0; var j = 0;
		
		 	
		 	var tr = document.createElement('tr');
		 	tblB.appendChild(tr);

	//create elements
			var td = document.createElement('td');
			 	td.className = 'left'+i+j;
			td.classList.add('minus');

		//	 td.getAttribute("class").value += " plus";	

			 //	td.className = 'td'+i+j;
			 // plus класс для плюса
			td.setAttribute('onmouseover', 'f('+i+','+j+',"minus"'+')');
			td.setAttribute('onclick', 'fclick('+i+','+j+',"minus_row"'+')');
			 	td.innerHTML = '<p>-</p>';
			//вставляет занчние между тегами 	td.innerHTML += 'onmouseover="click_e()"';
		 	
//скрываем стилями - свойство прозрачности	
		 td.setAttribute("style", "visibility: hidden;");


			 	tr.appendChild(td);
		 	
		
	
	//	 elem.appendChild(table);
//***************************
		 //create table #3
		 var table = document.createElement('table');
		 table.className = 'table_other';
		 table.setAttribute('onmouseout', 'f_out('+0+','+0+',"table_other"'+')');
		 table.setAttribute('onmouseover','f('+0+','+0+',"table_other"'+')');
		 span.appendChild(table);
		

	//create rows
		for (var i = 0 ; i < n; i++) {
		 	
		 	var tr = document.createElement('tr');
		 	tr.className = 'tr_other'+i+0;


		 	table.appendChild(tr);

	//create elements
		 	for (var j = 0; j < m; j++) {

			 	var td = document.createElement('td');
			 	td.className = 'other'+i+j;
				td.classList.add('other');

			 	td.setAttribute('onmouseover', 'f('+i+','+j+',"other"'+')');
			  	td.setAttribute('onclick', 'fclick('+i+','+j+',"other"'+')');
			 	

		 	 	tr.appendChild(td);
		 	 }

		 }
	//table to span
	
	//	elem.appendChild(table);

//*************************************************
 
	//create table #4
		 var table = document.createElement('table');
		 
		 
		
		 span.appendChild(table);
		

	//create rows

		var i = 0 ; var j = 0;
		
		 	
		 	var tr = document.createElement('tr');
		 	table.appendChild(tr);

	//create elements
			var td = document.createElement('td');
			 	td.className = 'tright'+i+j;
			td.classList.add('plus');

		//	 td.getAttribute("class").value += " plus";	

			 //	td.className = 'td'+i+j;
			 // plus класс для плюса
			 td.setAttribute('onmouseover', 'f('+i+','+j+',"plus"'+')');
			 td.setAttribute('onclick', 'fclick('+i+','+j+',"plus_col"'+')');



			 	td.innerHTML = '<p>+</p>';
	
		 	
			 	tr.appendChild(td);
		 	
		 table.setAttribute("style", "opacity: 1;");
		 elem.appendChild(span);

//#######################ancors table4 ancors for adaptation
  			
  			var obj = document.getElementsByClassName('other00'); // берем интересующий элемент  
 			var posX = obj[0].offsetTop; // левый отступ эл-та от родителя
			td.style.top=(posX-2)+'px';



//**********************************************
	//create table #5
		 var table = document.createElement('table');
			//create rows
		
		 	var i=0; j = 0;
		 	var tr = document.createElement('tr');
		 	table.appendChild(tr);

	//create elements
	

			 	var td = document.createElement('td');
			 	td.className = 'bottom'+i+j;
				td.classList.add('plus');
				

			 	
			 td.setAttribute('onmouseover', 'f('+i+','+j+',"plus"'+')');
			 td.setAttribute('onclick', 'fclick('+i+','+j+',"plus_row"'+')');

//#######################ancors	table5 for adaptation
  			
  			var obj = document.getElementsByClassName('other00'); // берем интересующий элемент  
 			var posY = obj[0].offsetLeft; // левый отступ эл-та от родителя
			td.style.left=(posY-2)+'px';





			 	td.innerHTML = '<p>+</p>';

			 	tr.appendChild(td);
		 	
	//table to div
		table.setAttribute("style", "opacity: 1;");
		elem.appendChild(table);



	console.log("перед ретурн");
	start_p = true;
		return (start_p);


 }


//*********************************************


