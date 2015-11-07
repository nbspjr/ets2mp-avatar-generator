(function(){
	var element, avatar, regions, bg;

	initRegions();
	initCanvas();
	
	document.getElementById('download').addEventListener('click', download, false);

	function download() {
		var jpeg = element.toDataURL('image/jpeg');
   		this.href = jpeg;
	}

	function initRegions() {
		var select = document.getElementById('regions');
		var option;

		regions = {
			AA: 'Київ',
			AB: 'Вінницька область',
			AC: 'Волинська область',
			AE: 'Дніпропетровська область',
			AH: 'Донецька область',
			//AI: 'Київська область',
			AK: 'АР Крим',
			AM: 'Житомирська область',
			AO: 'Закарпатська область',
			AP: 'Запорізька область',
			AT: 'Івано-Франківська область',
			AX: 'Харківська область',
			BA: 'Кіровоградська область',
			BB: 'Луганська область',
			BC: 'Львівська область',
			BE: 'Миколаївська область',
			BH: 'Одеська область',
			//BI: 'Полтавська область',
			BK: 'Рівненська область',
			BM: 'Сумська область',
			BO: 'Тернопільська область',
			BT: 'Херсонська область',
			BX: 'Хмельницька область',
			CA: 'Черкаська область',
			CB: 'Чернігівська область',
			CE: 'Чернівецька область',
			CH: 'Севастополь'
		};



		for (k in regions) {
			if (regions.hasOwnProperty(k)) {
				option = document.createElement('option');
				option.text	= regions[k];
				option.value = k;

				select.add(option);
			}
		}

		select.addEventListener("change", function(){
			draw(this.value);
		});
	}

	function initCanvas() {
		element = document.getElementById('avatar');
		avatar = element.getContext('2d');
		avatar.textAlign = "center";
		avatar.textBaseline = "bottom";
		avatar.fillStyle = "#000";
		avatar.strokeStyle = "#000";
		avatar.font = "normal 130px RoadNumbers";

		bg = new Image();

		bg.src = 'images/bg.jpg';
		bg.onload = function() {
			draw();
		}
	}

	function draw(text) {
		var textHeight = getFontHeight(avatar.font);

		var yPos = element.height/2 + textHeight/2 - 10; // font offset

		if ('string' != typeof text)
			text = '';

		avatar.drawImage(bg, 0, 0);
		avatar.fillText(text, 140, yPos);
	}

	function getFontHeight(font) {
        var parent = document.createElement("span");
        parent.style.position = "absolute";
        parent.style.visibility = "hidden";
        parent.style.zIndex = "-1";
        parent.appendChild(document.createTextNode("height"));
        document.body.appendChild(parent);
        parent.style.cssText = "font: " + font + "; white-space: nowrap; display: inline;";
        var height = parent.offsetHeight;
        document.body.removeChild(parent);
        return height;
    }

}())
