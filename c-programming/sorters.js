class SIMSorters {
	static go() {
		SIMSorters.MAX_LABEL_WIDTH = 25; // maximum width of letter/number in bar

		// WARNING FOR IE FOLKS
		if (window.navigator.userAgent.includes("MSIE")) window.alert("Please note: this applet will not work on Internet Explorer. IE is an outdated browser. For the love of all that is holy, please download Firefox, Chrome, or Edge.");

		// DEFAULT STYLE SHEET
		let style = document.createElement("style");
		document.head.appendChild(style);
		style.sheet.insertRule(".sorter-text{font-family:sans-serif;font-size:large;width:100%;padding-top:2px;padding-bottom:5px;}");
		style.sheet.insertRule(".right{text-align:right;}");
		style.sheet.insertRule(".sorter-bar-container {display: flex; flex-direction: row; justify-content: space-between; align-items: flex-end;}");		
		//style.sheet.insertRule(".sorter-bar {border: 1px solid black; background-color: red; box-sizing: border-box; color:#fff; font-family: sans; text-align:center; overflow: hidden; display: inline; vertical-align:middle}");
		style.sheet.insertRule(".sorter-bar {border: 1px solid black; background-color: red; box-sizing: border-box; color:#fff; font-family: sans; overflow: hidden; display: inline; display:flex; justify-content:center; align-items:center; fill:#fff;}");
		style.sheet.insertRule(".sorter-cache {border:1px solid #777; background-color:#7773; padding:5px; border-radius:5px; margin-left:auto; margin-right:auto;}");
		style.sheet.insertRule(".sorter-bar-label {display:block; width:75%; max-width:" +SIMSorters.MAX_LABEL_WIDTH+ "px; max-height:100%;}");
		
		let elements = {...document.getElementsByTagName("canvas"), ...document.getElementsByTagName("div") }
		for (let e in elements) {
			if (elements[e].getAttribute("data-program") === "sorters") new SIMSorters(elements[e]);
		}
	}

	constructor(element) {
		element.style.display = "flex";
		element.style.flexWrap = "wrap";
		element.style.flexDirection = "row";
		element.style.justifyContent = "space-between";
		//element.style.alignItems = "center";

		// get info from the HTML fields
		let types = element.getAttribute("data-types").split(",");
		this.size = Number(element.getAttribute("data-size"));
		this.sorters = Array(types.length);
		this.numColumns = Math.max(Number(element.getAttribute("data-columns")), 1);
		let numCaches = 0;
		for (let i=0; i<types.length; i++) {
			if (SIMSorters_Sorter.extractClass(types[i]) === SIMSorters_MergeSorter) numCaches++;
		}
		this.numRows = Math.ceil((types.length + numCaches)/ this.numColumns);

		// figure out how many duplicates there are, and if they should be labeled
		let duplicateParameters = SIMSorters.parseParameters(element.getAttribute("data-duplicates"), 3);
		this.NUM_DUPLICATES = SIMSorters.findNumberInSet(duplicateParameters);
		if (!this.NUM_DUPLICATES) this.NUM_DUPLICATES = 1;
		if (duplicateParameters.has("LET") || duplicateParameters.has("ALP")) this.BASE_LABEL = "A";
		else if (duplicateParameters.has("NUM")) this.BASE_LABEL = 1;
		else this.BASE_LABEL = undefined;
		
		// fill out data in masterArray (initially in order)
		this.masterArray = new Array(this.size);
		if (this.BASE_LABEL) this.masterLabels = new Array(this.masterArray.length);
		this.orderSorters();

		// figure out how to order the various sorters & set up the control panel
		let orderParameters = SIMSorters.parseParameters(element.getAttribute("data-order"), 3);
		this.isLocked = orderParameters.has("LOC");
		let allowTestButton = element.getAttribute("data-testbutton") === "yes";
		let seedNumber = SIMSorters.findNumberInSet(orderParameters);
		
		// set up control panel & buttons (don't add to master div until end)
		let controlPanel = this.makeControlPanelDiv(this.isLocked, allowTestButton);
		this.buttons = controlPanel.buttons;

		if (orderParameters.has("REV") || orderParameters.has("BAC")) this.orderSortersBackwards();
		else if (orderParameters.has("ORD") || orderParameters.has("FOR")); // no function needed
		else this.shuffleSorters(seedNumber); // if seedNumber is null/undefined, this is an unpredictable shuffle

		// some calculations
		let totalHeight = element.offsetHeight;
		let textHeight = this._findTextHeight();
		let barHeight = (totalHeight - 35 - (this.numRows * (10 + textHeight))) / this.numRows;
		let divWidth = (this.numColumns >= 2) ? (100 / (this.numColumns + 0.25)) : 100;

		// fill in the sorter <div>s
		//let extraOptions = undefined;
		//if (useLetters) extraOptions = ["#AL"];
		//else if (useNumbers) extraOptions = ["#NU"];

		// ACTUALLY MAKE THE SORTERS HERE 
		for (let i=0; i<types.length; i++) {
			this.sorters[i] = SIMSorters_Sorter.makeNewSorter(types[i], this.masterArray, barHeight, this.masterLabels);
			if (this.numColumns >= 2) this.sorters[i].setDivWidth(divWidth);
			element.append(this.sorters[i].getDiv());
			if (this.sorters[i].needsCache()) element.append(this.sorters[i].getCacheDiv());
		}

		// put place-holder <div>s in remaining positions
		for (let i=types.length + numCaches; i < (this.numColumns * this.numRows); i++) {
			let emptyDiv = document.createElement("div");
			emptyDiv.style.width = divWidth +"%";
			emptyDiv.style.height = "1px";
			emptyDiv.style.backgroundColor = "gray";
			element.append(emptyDiv);
		}

		// buttons
		element.appendChild(controlPanel);
	}

	// if there's a number in a set, return it--otherwise undefined
	static findNumberInSet(set) {
		for (let e of set) {
			if (!isNaN(e)) return Number(e);
		}
		return undefined;
	}

	// make a set of the parameters: strings will be all-caps & maxSize long, numbers will be cast as numbers
	static parseParameters(string, maxSize, delimiter) {
		let paramSet = new Set();
		if (!string) return paramSet;
		if (!delimiter) delimiter = ",";
		if (!maxSize) maxSize = 1000;
		let tokens = string.split(delimiter);
		for (let i in tokens) {
			if (isNaN(tokens[i])) paramSet.add(tokens[i].substring(0,maxSize).toUpperCase());
			else paramSet.add(Number(tokens[i]));
		}
		return paramSet;
	}
	
	makeControlPanelDiv(isLocked, makeTestButton) {
		//if (!SIMSorters_Button.styleSheet) SIMSorters_Button.makeStyleSheet();

		let controlPanelDiv = document.createElement("div");
		controlPanelDiv.classList.add("sorter-control-panel");

		let numButtons = 5;
		if (!isLocked) numButtons += 3;
		if (makeTestButton) numButtons++;
		controlPanelDiv.style.width = numButtons * SIMSorters_Button.SIZE + (numButtons-1) * 10 + "px";
		
		// make the buttons
		let buttons = {}

		buttons.reset = new SIMSorters_Button("RESET", this.resetSorters.bind(this), "#f08");
		controlPanelDiv.appendChild(buttons.reset.getDiv());

		buttons.undo = new SIMSorters_Button("UNDO", this.undoAll.bind(this), "#cf");
		controlPanelDiv.appendChild(buttons.undo.getDiv());

		buttons.play = new SIMSorters_Button("PLAY", this.playAll.bind(this, false), "#082", "FASTFORWARD", this.playAll.bind(this, true), "#6c0");
		controlPanelDiv.appendChild(buttons.play.getDiv());
		//buttons.play.setToAltIcon();

		buttons.stop = new SIMSorters_Button("PAUSE", this.stopAll.bind(this), "#f00");
		controlPanelDiv.appendChild(buttons.stop.getDiv());

		buttons.step = new SIMSorters_Button("STEP", this.stepAll.bind(this), "#ff0");
		controlPanelDiv.appendChild(buttons.step.getDiv());

		if (!isLocked) {
			buttons.order = new SIMSorters_Button("ORDER", this.orderSorters.bind(this, false), "#04c");
			controlPanelDiv.appendChild(buttons.order.getDiv());

			buttons.backorder = new SIMSorters_Button("BACKORDER", this.orderSortersBackwards.bind(this), "#f80");
			controlPanelDiv.appendChild(buttons.backorder.getDiv());

			// no more move 1 (will be done manually)
			//buttons.move1 = new SIMSorters_Button("MOVEONE", this.move1Element.bind(this), "#0aa");
			//controlPanelDiv.appendChild(buttons.move1.getDiv());

			buttons.shuffle = new SIMSorters_Button("SHUFFLE", this.shuffleSorters.bind(this, undefined), "#608");
			controlPanelDiv.appendChild(buttons.shuffle.getDiv());
		}

		//~~//
		if (makeTestButton) {
			buttons.shuffle = new SIMSorters_Button("DEBUG", this.testSorters.bind(this, null), "#f00");
			controlPanelDiv.appendChild(buttons.shuffle.getDiv());
		}

		controlPanelDiv.buttons = buttons;
		return controlPanelDiv;
	}	

	// RESETS ALL THE SORTERS TO INITIAL CONDITIONS
	resetSorters() {
		this.stopAll();
		this.stepNum = 0;
		for (let i=0; i<this.sorters.length; i++) {
			if (this.sorters[i]) this.sorters[i].reset(this.masterArray, this.masterLabels);
		}

		// buttons
		this.buttons.step.enable();
		this.buttons.play.enable();
		this.buttons.stop.disable();
		this.buttons.reset.disable();
		this.buttons.undo.disable();
	}

	// move 1 element of the master array, propagate to all the sorters
	move1Element() {
		//this.isPlaying = false;
		if (this.masterArray.length <= 1) return; // just in case

		// figure out which bars to swap
		let which = Math.floor(Math.random() * this.masterArray.length);
		let where = which;
		while (where === which) where = Math.floor(Math.random() * this.masterArray.length);

		// do it
		let movedValue = this.masterArray[which];
		if (where > which) { for (let i=which; i<where; i++) this.masterArray[i] = this.masterArray[i+1]; }
		else { for (let i=which; i>where; i--) this.masterArray[i] = this.masterArray[i-1]; }
		this.masterArray[where] = movedValue;
		
		this.resetSorters();
	}
	
	// F-Y the master array, propagate to all the sorters
	// seed is optional, does a predefined sort
	shuffleSorters(seed) {
		//if (seed) console.log("Seeding with #", seed);
		//if (seed) console.log(this.sorters);

		for (let i=1; i<this.masterArray.length; i++) {
			let j;
			if (seed === undefined) j = Math.floor(Math.random()*(i+1));
			else j = SIMSorters.mulberry32(seed++) % (i+1);
			[this.masterArray[i], this.masterArray[j]] = [this.masterArray[j], this.masterArray[i]];
			//if (this.masterLabels) [this.masterLabels[i], this.masterLabels[j]] = [this.masterLabels[j], this.masterLabels[i]];
		}
		if (this.masterLabels) this.masterLabels = SIMSorters.makeLabelArray(this.masterArray, this.BASE_LABEL, this.masterLabels);
		console.log("this.masterLabels", this.masterLabels);

		if (this.sorters[0]) this.resetSorters();
	}

	static makeLabelArray(array, baseLabel, labelArray) {
		if (labelArray === undefined) labelArray = new Array(array.length);
		let labelsAreNumbers = (!isNaN(Number(baseLabel)));
		let base = labelsAreNumbers? baseLabel : baseLabel.charCodeAt(0);

		let min = Math.min(...array), max = Math.max(...array);
		let counts = new Array(max-min+1).fill(0);
		for (let i in array) {
			let num = counts[array[i] - min]++;
			labelArray[i] = labelsAreNumbers ? (num + base) : String.fromCharCode(num + base);
		}

		return labelArray;
	}

	orderSorters() {
		let labelsAreNumbers = (this.BASE_LABEL && !isNaN(Number(this.BASE_LABEL)));
		for (let i=0; i<this.masterArray.length; i++) {
			this.masterArray[i] = Math.floor(i / this.NUM_DUPLICATES) + 1;
			if (this.masterLabels) {
				if (i===0 || this.masterArray[i] !== this.masterArray[i-1]) this.masterLabels[i] = this.BASE_LABEL;
				else if (labelsAreNumbers) this.masterLabels[i] = this.masterLabels[i-1] + 1;
				else this.masterLabels[i] = String.fromCharCode(this.masterLabels[i-1].charCodeAt(0) + 1);
			}
		}
		if (this.sorters[0]) this.resetSorters();
	}

	orderSortersBackwards() {
		let labelsAreNumbers = (this.BASE_LABEL && !isNaN(Number(this.BASE_LABEL)));
		let offset = this.masterArray.length - 1;
		for (let i=0; i<this.masterArray.length; i++) {
			//this.masterArray[offset - i] = Math.floor(i / this.NUM_DUPLICATES) + 1;
			this.masterArray[i] = Math.floor((offset-i) / this.NUM_DUPLICATES) + 1;
			if (this.masterLabels) {
				if (i===0 || this.masterArray[i] !== this.masterArray[i-1]) this.masterLabels[i] = this.BASE_LABEL;
				else if (labelsAreNumbers) this.masterLabels[i] = this.masterLabels[i-1] + 1;
				else this.masterLabels[i] = String.fromCharCode(this.masterLabels[i-1].charCodeAt(0) + 1);
			}
		}
		if (this.sorters[0]) this.resetSorters();
	}

	playAll(goFast) {
		// if was already running, stop it (temporarily)
		if (this.runner) {
			clearInterval(this.runner);
			this.runner = null;
		}
		// otherwise, do a step now
		else this.stepAll();
		
		// old interval value was 33
		let rate = goFast? 10:100; // in ms
		this.runner = setInterval(this.stepAll.bind(this), rate);
		if (goFast) this.buttons.play.setToMainIcon();
		else this.buttons.play.setToAltIcon();
		this.buttons.stop.enable();
	}

	stopAll() {
		if (!this.runner) return; // don't do anything if already stopped
		clearInterval(this.runner);
		this.runner = null;
		this.buttons.play.setToMainIcon();
		this.buttons.stop.disable();
	}
	
	// step everything forward
	stepAll() {
		this.stepNum++;

		let doneCount = 0;
		for (let i in this.sorters) {
			if (this.sorters[i].stepForward()) doneCount++;
		}

		
		if (doneCount === this.sorters.length) {
			this.stopAll();
			this.buttons.step.disable();
			this.buttons.play.disable();
		}

		else if (this.stepNum === 1) {
			this.buttons.reset.enable();
			this.buttons.undo.enable();
		}

	}

	undoAll() {
		if (this.stepNum <= 0) return;
		this.stepNum--;

		this.buttons.play.enable();
		this.buttons.step.enable();
		for (let i in this.sorters) this.sorters[i].stepBackward(this.stepNum);
		if (this.stepNum === 0) this.resetSorters();
	}

	// figure out text height with a hidden element (stupid)
	_findTextHeight() {
		let tempDiv = document.createElement("div");
		tempDiv.classList.add("sorterText");
		tempDiv.style.visibility = "hidden";
		tempDiv.style.position = "fixed";
		tempDiv.innerHTML = "M";
		document.body.append(tempDiv);
		let textHeight = tempDiv.offsetHeight;
		tempDiv.remove();
		return textHeight;
	}

	// DEBUGGING--remove from production version //~~//
	testSorters(sorterType) {

		// ID the sorter to test
		let sorterX = null;
		if (sorterType) {
			for (let s in this.sorters) {
				if (this.sorters[s] instanceof sorterType) {
					sorterX = this.sorters[s];
				}
			}
		}
		
		for (let i=0; i<1000; i++) {
			if ((!sorterX || !sorterX.isDone()) && Math.random() < 0.666) this.stepAll();
			else if (this.stepNum > 0) this.undoAll();
			if (sorterX && this.stepNum > 0 && !sorterX.registerState(this.stepNum)) break;

			else if (this.stepNum > 0) {
				let problem = false;
				for (let s in this.sorters) {
					problem |= !(this.sorters[s].registerState(this.stepNum));
				}
				if (problem) break;
			}
		}

		// test all for being done
		let allDone = true;
		for (let s in this.sorters) {
			allDone &= this.sorters[s].isDone();
		}
		if (allDone) {
			this.buttons.step.disable();
			this.buttons.play.disable();
		}
	}

	// pseudo-random generator derived from [https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript]
	// takes int as input, returns some int from 0 to 2^32-1
	static mulberry32(a) {
		var t = a += 0x6D2B79F5;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0);// 4294967296;
    }
}

class SIMSorters_Sorter {
	constructor(name, startingArray, barHeight, color, options, labels, cacheSize) {
		// set up all the constant fields that are universal to all sorters--start with basics
		this.NAME = name;
		this.COLORS = SIMSorters_Sorter.makeColors(color);
		this.BARHEIGHT = barHeight;
		this.REVERSED = options.has("REV") || options.has("BAC");
		this.LABELED = Boolean(labels);
		//this.LABEL0 = undefined;
		//if (options.has("#AL")) this.LABEL0 = "A";
		//else if (options.has("#NU")) this.LABEL0 = 1;

		// startingArray may be just a number--if so, make it an array now
		if (startingArray instanceof Array) {
			this.array = [...startingArray];
			this.MAXVALUE = Math.max(...startingArray);
		}
		else {
			this.array = Array(startingArray);
			for (let i=0; i<this.array.length; i++) this.array[i] = (i+1);
			this.MAXVALUE = this.array.length;
		}

		// figure out what the minimum allowed height is
		//this.MINHEIGHT = 1 / this.MAXVALUE;
		//this.MINHEIGHT = this.BARHEIGHT * 0.25;
		//if (this.LABEL0 && this.MINHEIGHT < SIMSorters.MAX_LABEL_WIDTH) this.MINHEIGHT = SIMSorters.MAX_LABEL_WIDTH;

		// set up universal variables
		this.div = SIMSorters_Sorter.makeDiv(name, barHeight, this.array, this.MAXVALUE, this.COLORS[3], this.REVERSED, labels);
		this.stepDiv = this.div.lastChild.lastChild;

		this.bars = Array.from(this.div.firstChild.childNodes);
		if (this.REVERSED) {
			this.bars.reverse();
			this.array.reverse();
			for (let i=0; i<this.array.length; i++) this.array[i] = -this.array[i];
		}

		if (this.needsCache()) {
			//this.cacheDiv = SIMSorters_Sorter.makeCacheDiv(this.getCacheSize(), this.array.length, barHeight, this.COLORS[3]);
			this.cacheDiv = SIMSorters_Sorter.makeCacheDiv(cacheSize, this.array.length, barHeight, this.COLORS[3], Boolean(labels));
			this.cacheBars = Array.from(this.cacheDiv.firstChild.childNodes);
			this.cacheArray = new Array(this.array.length>>1).fill(0);
			//console.log(this.cacheBars);
		}
		
		this.history = [];
		this._done = false;
	}

	setDivWidth(width) {
		this.div.style.width = width+"%";
		if (this.cacheDiv) this.cacheDiv.style.width = this.div.style.width;
	}
	getDiv() { return this.div; }

	getCacheSize() { return 0; }
	needsCache() { return false; }
	getCacheDiv() { return this.cacheDiv; }

	isDone() { return this._done; }

	// swap bars i & j
	swapBars(i, j) {
		[this.array[i], this.array[j]] = [this.array[j], this.array[i]];

		let iStyle = this.bars[i].style, jStyle = this.bars[j].style;
		[iStyle.height, jStyle.height] = [jStyle.height, iStyle.height];
		[iStyle.backgroundColor, jStyle.backgroundColor] = [jStyle.backgroundColor, iStyle.backgroundColor];
		[iStyle.opacity, jStyle.opacity] = [jStyle.opacity, iStyle.opacity];
		if (this.LABELED) [this.bars[i].firstChild.firstChild.textContent, this.bars[j].firstChild.firstChild.textContent] = [this.bars[j].firstChild.firstChild.textContent, this.bars[i].firstChild.firstChild.textContent];
	}

	copyToCache(index, cacheIndex) {
		this.cacheArray[cacheIndex] = this.array[index];
		let bStyle = this.bars[index].style, cStyle = this.cacheBars[cacheIndex].style;
		cStyle.height = bStyle.height;
		cStyle.backgroundColor = bStyle.backgroundColor;
		cStyle.opacity = 1.0;
		this.ghostBar(index);

		if (this.LABELED) this.cacheBars[cacheIndex].firstChild.firstChild.textContent = this.bars[index].firstChild.firstChild.textContent;
	}

	copyFromCache(cacheIndex, index) {
		this.array[index] = this.cacheArray[cacheIndex];
		let bStyle = this.bars[index].style, cStyle = this.cacheBars[cacheIndex].style;
		bStyle.height = cStyle.height;
		bStyle.backgroundColor = cStyle.backgroundColor;
		cStyle.opacity = 0.1;
		this.unghostBar(index);

		if (this.LABELED) this.bars[index].firstChild.firstChild.textContent = this.cacheBars[cacheIndex].firstChild.firstChild.textContent;
	}

	resetCache() {
		for (let i=0; i<this.cacheArray.length; i++) {
			this.cacheArray[i] = 0;
			let style = this.cacheBars[i].style;
			style.height = 0;
			style.opacity = 0.1;
		}
	}

	colorBar(index, c) {
		//if (index < 0) index += this.bars.length; // allow negatives NOPE
		if (index<0 || index>=this.bars.length) return;
		let color = this.COLORS[c];
		if (this.bars[index].style.backgroundColor !== color) this.bars[index].style.backgroundColor = color;
	}

	colorBars(i0, i1, c) {
		for (let i=i0; i<i1; i++) this.colorBar(i, c);
	}

	colorCacheBar(index, c) {
		if (index<0 || index>=this.cacheBars.length) return;
		let color = this.COLORS[c];
		if (this.cacheBars[index].style.backgroundColor !== color) this.cacheBars[index].style.backgroundColor = color;
	}

	ghostBar(i) {
		this.bars[i].style.opacity = 0.1;
	}
	
	unghostBar(i) {
		this.bars[i].style.opacity = 1;
	}
	
	ghostBars(i0, i1) {
		for (let i=i0; i<i1; i++) this.bars[i].style.opacity = 0.1;
	}

	unghostBars(i0, i1) {
		for (let i=i0; i<i1; i++) this.bars[i].style.opacity = 1;
	}

	reset(masterArray, masterLabels) {
		this.colorBars(0, this.array.length, 3);
		this.unghostBars(0, this.array.length);
		this.stepDiv.innerHTML = 0;

		if (!this.REVERSED) {
			for (let i=0; i<this.array.length; i++) {
				this.array[i] = masterArray[i];
				this.bars[i].style.height = (this.BARHEIGHT * this.array[i] / this.MAXVALUE) + "px";
				if (masterLabels) this.bars[i].firstChild.firstChild.textContent = masterLabels[i];
			}
		}

		else {
			let offset = masterArray.length - 1;
			for (let i=0; i<this.array.length; i++) {
				this.array[i] = -masterArray[offset-i];
				this.bars[i].style.height = (this.BARHEIGHT * -this.array[i] / this.MAXVALUE) + "px";
				if (masterLabels) this.bars[i].firstChild.firstChild.textContent = masterLabels[offset-i];
			}
		}

		this.history = [];
		this._done = false;
		this.resetVars();
	}

	// STATIC STUFF (FOR RECURSIVE ALGORITHMS)
	// can store 4 signed 13-bit ints (-4096 to 4095)
	clearStack() {
		this.xStack = [];
	}

	isStackEmpty() {
		return (this.xStack.length === 0);
	}

	pushOntoStack(num1, num2, num3, num4) {
		console.log(num1, num2, num3, num4);
		let num = (num1+4096);
		if (num2 !== undefined) num += ((num2+4096)<<13);
		if (num3 !== undefined) num += ((num3+4096) * (1<<26));
		if (num4 !== undefined) num += ((num4+4096) * (2**39));

		console.log("pushing:", num1, num2, num3, num4, "->", num);
		this.xStack.push(num);
	}

	popFromStack(numNums) {
		if (this.xStack.length === 0) return null;
		let popped = this.xStack.pop();
		console.log("popped:", popped);
		if (numNums === 1) return [(popped & 8191)-4096];
		if (numNums === 2) return [(popped & 8191)-4096, ((popped>>13) & 8191) - 4096];
		if (numNums === 3) return [(popped & 8191)-4096, ((popped>>13) & 8191) - 4096, ((popped / (1<<26)) & 8191) - 4096];
		if (numNums === 4) return [(popped & 8191)-4096, ((popped>>13) & 8191) - 4096, ((popped / (1<<26)) & 8191) - 4096, ((popped / (2**39)) & 8191) - 4096];
	}
	
	// STATIC FUNCTIONS

	// build up a name
	static buildDefaultName(base, isUnlabeled) {
		if (isUnlabeled) return base;
		let name = base + " (";

		// tack on strings for any true results
		for (let i=2; i<arguments.length; i++) {
			if (arguments[i][0]) {
				if (name[name.length - 1] !== "(") name += ", ";
				name += arguments[i][1];
			}
		}

		if (name[name.length - 1] === "(") return base;
		else return name + ")";
	}

	// make an array of labels for the bars, in linear time
	/*static makeLabelArray(data, label0) {
		if (!label0) return undefined;
		let isNumber = !isNaN(Number(label0));
		if (!isNumber) {
			if (label0.length > 1) throw new Error("Can't make labels based on string \"" +label0+ "\".");
			label0 = label0.charCodeAt(0);
		}

		// make 
		let maxValue = Math.max(...data);
		let counters = new Array(maxValue).fill(0);
		let labels = new Array(data.length);

		for (let i=0; i<data.length; i++) {
			let current = counters[data[i]-1]++;
			if (isNumber) labels[i] = label0 + current;
			else labels[i] = String.fromCharCode(label0 + current);
		}

		return labels;
	}*/
	
	// this is the actual <div> element for an individual sorter
	static makeDiv(name, barHeight, startingData, maxValue, color, reversed, labels) {
		let div = document.createElement("div");

		div.style.width = "100%";

		let barDiv = document.createElement("div");
		barDiv.classList.add("sorter-bar-container");
		barDiv.style.height = barHeight +"px";
		barDiv.style.width = "100%";

		let barWidth = 100 / (startingData.length + (startingData.length-1)/3) + "%";

		//let labelArray = SIMSorters_Sorter.makeLabelArray(startingData, label0);
		//let minHeight = barHeight / 4;

		//console.log("makeLabels", makeLabels);
		
		for (let i=0; i<startingData.length; i++) {
			let bar = document.createElement("div");
			bar.style.width = barWidth;

			if (labels) bar.appendChild(SIMSorters_Sorter.makeLabelSVG(labels[i]));

			bar.classList.add("sorter-bar");
			//if (startingData[i] === maxValue) bar.style.height = barHeight + "px";
			//else if (startingData[i] === 1) bar.style.height = minHeight + "px";
			//else bar.style.height = minHeight + (startingData[i]-1) * (barHeight - minHeight) / maxValue + "px"; //
			bar.style.height = (barHeight * startingData[i] / maxValue) + "px";
			bar.style.backgroundColor = color;
			barDiv.appendChild(bar);
		}

		div.appendChild(barDiv);

		let infoDiv = document.createElement("div");
		infoDiv.classList.add("sorter-text");
		infoDiv.innerHTML = "<div style='position:absolute; z-index:-1;'>" +name+ "</div><div class='right'>0</div>";
		div.appendChild(infoDiv);

		return div;
	}

	// make an SVG to be a label inside of a bar
	static makeLabelSVG(string) {
		let labelSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		labelSVG.classList.add("sorter-bar-label");
		labelSVG.style.fontSize = "10px";
		labelSVG.setAttribute("viewBox", "0 0 10 10");
		labelSVG.innerHTML = '<text style="font-size:10px;" x="50%" y="60%" dominant-baseline="middle" text-anchor="middle">'+string+'</text>';
		return labelSVG;
	}

	static makeCacheDiv(size, fullSize, barHeight, color, isLabeled) {
		let div = document.createElement("div");

		div.style.width = "100%";
		div.style.height = barHeight + "px";

		let barDiv = document.createElement("div");
		barDiv.classList.add("sorter-bar-container");
		barDiv.classList.add("sorter-cache");
		barDiv.style.height = barHeight + "px";
		let barDivRatio = (size + (size-1)/3) / (fullSize + (fullSize-1)/3);
		barDiv.style.width = 100 * barDivRatio + "%";

		let mainBarWidth = 100 / (fullSize + (fullSize-1)/3);
		//let subdivWidth = mainBarWidth * 
		let barWidth = 100 / (size + (size-1)/3) + "%";

		for (let i=0; i<size; i++) {
			let bar = document.createElement("div");
			bar.style.width = barWidth;
			bar.style.opacity = 0.1;
			let index = i;
			bar.classList.add("sorter-bar");
			bar.style.height = "0px";
			bar.style.backgroundColor = color;
			if (isLabeled) bar.appendChild(SIMSorters_Sorter.makeLabelSVG(""));
			barDiv.appendChild(bar);
		}

		div.appendChild(barDiv);
		return div;
	}

	// get the class from a string
	static extractClass(typeString) {
		return SIMSorters_Sorter.TYPES[typeString.substring(0,3).toUpperCase()];
	}

	// figure out which constructor to call (by string), and do it
	static makeNewSorter(type, startingArray, barHeight, labels) {
		let code = type.substring(0,3).toUpperCase();
		let options = SIMSorters.parseParameters(type, 3, "-");

		if (code in SIMSorters_Sorter.TYPES) {
			return new SIMSorters_Sorter.TYPES[code](startingArray, barHeight, options, labels);
		}
		else {
			window.alert('ERROR: Could not identify sorter type "' +type+ '"!');
			return null;
		}
	}

	stepForward() {
		if (this._done) return true;

		if (this.doAlgoStep()) {
			this.colorBars(0, this.array.length, 2);
			this._done = true;
			return true;
		}
		else {
			this.stepDiv.innerHTML++;
			return false;
		}
	}

	stepBackward(stepNum) {
		if (stepNum > this.stepDiv.innerHTML || this.history.length === 0) return;

		if (!this._done) this.stepDiv.innerHTML--;
		this._done = false;

		let lastState = this.history.pop();
		let priorState = null;
		if (this.history.length > 0) priorState = this.history[this.history.length-1];
		this.undoStep(lastState, priorState);
	}

	// color can be array of numbers (0-255) or a named color
	static makeColors(color) {
		let r=0, g=0, b=0;
		if (color instanceof Array) [r,g,b] = color;
		else if (color in SIMSorters_Sorter.STOCKCOLORS) [r,g,b] = SIMSorters_Sorter.STOCKCOLORS[color];
		else throw new Error("Unknown color: " +color);

		// calculate HSV
		let h, s, v = Math.max(r,g,b);
		let min = Math.min(r,g,b);
		let delta = v-min;

		if (v===0) h=s=0;
		else {
			s = delta/v;
			if (r === v) h = (g-b)/delta;
			else if (g === v) h = 2 + (b-r)/delta;
			else h = 4 + (r-g)/delta;
			if (h<0) h += 6;
		}

		let maxV = Math.min(v*4, 384), penV = Math.min(v*2, 312);
		//let maxV = Math.min(v*2.25, 384), penV = Math.min(v*1.5, 312);

		//console.log("COLOR: (" +h+","+s+","+v+")");
		
		// make the 6 colors (#3 is original, 0-2 are darker, 4-5 are lighter)
		return [SIMSorters_Sorter.hsv2String(h, s, v*0.25),
				SIMSorters_Sorter.hsv2String(h, s, v*4/9),
				SIMSorters_Sorter.hsv2String(h, s, v*2/3),
				SIMSorters_Sorter.hsv2String(h, s, v),
				SIMSorters_Sorter.hsv2String(h, s, penV),
				SIMSorters_Sorter.hsv2String(h, s, maxV)];
	}

	// given ints for HSV, return string of form #rrggbb
	static hsv2String(h, s, v) {
		let r, g, b;

		// if we got brightness above allowed, adjust it back & take away saturation
		if (v > 255) {
			s -= (v-255)/255;
			v = 255;
			if (s < 0) s = 0;
		}

		// the actual HSV->RGB calculation
		if (s===0) r = g = b = v;
		else {
			let i = Math.floor(h);
			let f = h-i;
			let p = v*(1-s), q = v*(1-s*f), t = v*(1-s*(1-f));
			switch(i) {
			case 0: r = v; g = t; b = p; break;
			case 1: r = q; g = v; b = p; break;
			case 2: r = p; g = v; b = t; break;
			case 3: r = p; g = q; b = v; break;
			case 4: r = t; g = p; b = v; break;
			case 5: r = v; g = p; b = q; break;
			}
		}

		// final rounding/parsing
		return SIMSorters_Sorter.rgb2String(Math.round(r), Math.round(g), Math.round(b));
	}

	// return rgb ints as #rrggbb
	static rgb2String(r, g, b) {
		let string = "#";
		if (r < 16) string += "0";
		string += r.toString(16);
		if (g < 16) string += "0";
		string += g.toString(16);
		if (b < 16) string += "0";
		string += b.toString(16);
		return string;
	}
	
	// pseudo-random generator derived from [https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript]
	// takes int as input, returns some int from 0 to 2^32-1
	/*static mulberry32(a) {
		var t = a += 0x6D2B79F5;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0);// 4294967296;
    }*/
	
	// DEBUGGING (COMMENT OUT OF PRODUCTION VERSION) //~~//
	getBarColors() {
		let colors = [];
		for (let i=0; i<this.bars.length; i++) {
			let rgb = this.bars[i].style.backgroundColor.slice(4, -1).split(", ");
			let str = SIMSorters_Sorter.rgb2String(Number(rgb[0]), Number(rgb[1]), Number(rgb[2]));
			colors[i] = this.COLORS.indexOf(str);
		}
		return colors;
	}

	getStateVars() {
		let stateVars = [];
		let className = this.constructor.name;
		for (let i in SIMSorters_Sorter.STATEVARS[className]) stateVars.push(this[SIMSorters_Sorter.STATEVARS[className][i]]);
		return stateVars;
	}
	
	registerState(key) {
		key = Number(key);
		if (!this.stateRegistry) this.stateRegistry = [];
		let state = [String(this.getStateVars()), String(this.array), String(this.getBarColors())];
		if (key < this.stateRegistry.length) {
			let newState = [];
			let result = true;
			for (let i in state) {
				if (this.stateRegistry[key][i] === state[i]) newState.push(null);
				else {
					newState.push(state[i]);
					result = false;
				}
			}

			if (result) return true;

			console.log("MISMATCHED STATES (" +key+ ")\n", "\tOLD:", this.stateRegistry[key], /*String(this.stateRegistry[key][0])+"; "+ String(this.stateRegistry[key][1])+"; " +String(this.stateRegistry[key][2]), /*this.stateRegistry[key],*/ "\n", "\tNEW:", newState);
			console.log(this.getStateVars());
			return false;
		}
		else {
			this.stateRegistry[key] = state;
			return true;
		}
	}

	clearRegistry() {
		delete this.stateRegistry;
	}
	// END DEBUGGING */
}

////////////////////////////////////////////////////////////////////////////////
// BUBBLE SORT (always a classic!)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_BubbleSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		if (!name) name = SIMSorters_Sorter.buildDefaultName("Bubble Sort", options.has("UNL"), [options.has("UNO"), "Unoptimized"], [options.has("REV") || options.has("BAC"), "Bottom-Up"]);
		
		if (!color) color = "red";
		super(name, startingArray, barHeight, color, options, labels);

		this.OPTIMIZED = !options.has("UNO");
		this.DOSHAKER = (this instanceof SIMSorters_ShakerSorter);

		this.resetVars();
	}

	resetVars() {
		this._done = false;
		this.max = this.array.length-1;
		this.min = 0;
		this.foundSwap = false;
		this.goingForward = true;

		this.i = -1;
		this.runLength = 0;

		this.clearRegistry(); //~~//
	}
	
	doAlgoStep() {
		if (this._done) return true; //this.min >= this.max) return (this._done = true;

		// if we found a swap, spend this step to swap them
		if (this.foundSwap) {
			this.history.push("SWAP");
			this.swapBars(this.i, this.i+1);
			this.foundSwap = false;
			return false;
		}

		if (this instanceof SIMSorters_ShakerSorter) this.history.push([this.i, this.max, this.runLength, this.min, this.goingForward]);
		else this.history.push([this.i, this.max, this.runLength]);

		// unhighlight the old bars, increment
		if (this.goingForward) this.colorBar(this.i++, 3);
		else {
			this.colorBar(this.i+1, 3);
			this.i--;
		}

		if ((this.goingForward && this.i >= this.max) || (!this.goingForward && this.i < this.min)) {
			// adjust min/max, darken newly-sorted bars
			if (this.goingForward) { //(this.i >= this.max) {
				this.colorBars(this.max-this.runLength, this.max+1, 1);
				this.max -= (1+this.runLength);
			}
			else {
				this.colorBars(this.min, this.min+1+this.runLength, 1);
				this.min += (1+this.runLength);
			}

			// if we're done with everything, scram
			if (this.min >= this.max) return (this._done = true);

			// figure out where to go next
			if (this.DOSHAKER) this.goingForward = !this.goingForward;

			this.runLength = 0;
			if (this.goingForward) this.i = this.min;
			else this.i = this.max-1;

		}

		// highlight bars & do the actual comparison (keeping track of run length)
		this.colorBar(this.i, 4);
		this.colorBar(this.i+1, 4);
		if (this.array[this.i] > this.array[this.i+1]) {
			this.foundSwap = true;
			this.runLength=0;
		}
		else if (this.OPTIMIZED) this.runLength++;
		return false;
	}

	undoStep(lastState) {
		//[this.i, this.max, this.runLength, this.min, this.goingForward]);
		this._done = false;
		if (lastState === "SWAP") {
			this.swapBars(this.i, this.i+1);
			this.foundSwap = true;
		}
		else {
			// recover state
			[this.i, this.max, this.runLength, this.min, this.goingForward] = lastState;
			if (this.min === undefined) this.min = 0;
			if (this.goingForward === undefined) this.goingForward = true;
			this.foundSwap = false;

			// color the 5 regions
			this.colorBars(0, this.min, 1);
			this.colorBars(this.min, this.i, 3);
			this.colorBars(this.i, this.i+2, 4);
			this.colorBars(this.i+2, this.max+1, 3);
			this.colorBars(this.max+1, this.array.length, 1);
		}
	}
}

////////////////////////////////////////////////////////////////////////////////
// SHAKER SORT (mostly just bubble sort)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_ShakerSorter extends SIMSorters_BubbleSorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		let backwards = options.has("BAC") || options.has("REV");

		if (!name) name = SIMSorters_Sorter.buildDefaultName("Shaker Sort",  options.has("UNL"), [options.has("UNO"), "Unoptimized"], [backwards, "Reversed"]);
		
		if (!color) color = "orange";
		super(startingArray, barHeight, options, labels, name, color);
	}
}

////////////////////////////////////////////////////////////////////////////////
// SELECTION SORT (pretty basic)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_SelectionSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		if (!name) name = SIMSorters_Sorter.buildDefaultName("Selection Sort", options.has("UNL"), [options.has("UNO"), "Unoptimized"], [options.has("BAC") || options.has("REV"), "Bottom-Up"]);
		if (!color) color = "yellow";
		super(name, startingArray, barHeight, color, options, labels);

		this.UNOPTIMIZED = options.has("UNO");

		this.resetVars();
	}

	doAlgoStep() {
		if (this._done) return true;
		// add the memory frame
		let frame = [this.i, (this.oldBest>=0?~this.oldBest:this.best), /*(this.i===this.best)?~this.oldBest:this.best*/ this.limit];

		if (!this.UNOPTIMIZED) frame.push(this.run);
		this.history.push(frame);
		
		// old bars are unhighlighted, do separate actions
		if (this.oldBest !== -1) {
			this.colorBar(this.oldBest, 3);
			this.oldBest = -1;
		}
		if (this.i !== this.best) this.colorBar(this.i, 3);

		// actual step now
		this.i++;

		// usual compare
		if (this.i !== this.limit) {
			// did we find a new best?
			if (this.array[this.i] >= this.array[this.best]) {
				this.oldBest = this.best;
				this.best = this.i;
				this.colorBar(this.oldBest, 4);
				this.colorBar(this.best, 5);

				if (!this.UNOPTIMIZED) this.run++;
			}
			// or not?
			else {
				this.colorBar(this.i, 4);
				if (this.i===1) this.colorBar(0, 5);
				this.run = 0;
			}
		}

		// do the swap at the end
		else {
			this.swapBars(this.best, this.limit-1);
			this.colorBar(this.best, 3);
			let oldLimit = this.limit;
			this.limit -= Math.max(1, this.run);
			if (this.limit <= 1) return (this._done = true);

			this.colorBars(this.limit, oldLimit, 1);
			this.i = this.best = 0;
			if (this.UNOPTIMIZED) this.run = 0;
			else this.run = 1;
		}
	}

	// undo
	undoStep(lastState) {
		this._done = false;
		let doSwap = (this.i === 0);
		
		// extract the state vars
		this.oldBest = -1;
		[this.i, this.best, this.limit, this.run] = lastState;
		if (this.best < 0) {
			this.oldBest = ~this.best;
			this.best = this.i;
		}
		if (this.run === undefined) this.run = 0;

		if (doSwap) this.swapBars(this.i, this.best);
		
		// color things in
		this.colorBars(0, this.limit, 3);
		this.colorBars(this.limit, this.array.length, 1);
		if (this.i > 0) {
			this.colorBar(this.best, 5);
			if (this.oldBest !== -1) this.colorBar(this.oldBest, 4);
			if (this.i !== this.best) this.colorBar(this.i, 4);
		}
	}

	resetVars() {
		this._done = false;

		this.i = this.best = 0;
		this.limit = this.array.length;

		if (this.UNOPTIMIZED) this.run = 0;
		else this.run = 1;
		this.oldBest = -1;

		this.clearRegistry(); //~~//
	}
	

}

////////////////////////////////////////////////////////////////////////////////
// INSERTION SORT (best of the quadratics)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_InsertionSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		if (!name) name = SIMSorters_Sorter.buildDefaultName("Insertion Sort", options.has("UNL"), [options.has("EXH"), "Exhaustive"], [options.has("REV") || options.has("BAC"), "Top-Down"]);
		if (!color) color = "green";
		super(name, startingArray, barHeight, color, options, labels);

		this.EXHAUSTIVE = options.has("EXH");
		this.resetVars();
	}

	// 1 step of insertion sort
	doAlgoStep() {
		if (this._done) return true;

		// find the target
		if (this.isFinding) {
			if (this._step === -1) this.history.push([this.i, this.target]);
			else this.history.push([this.i, this.target, this._step]);

			// init round
			if (isNaN(this._step) || this._step === 0) {
				this.i++;
				this.colorBars(0,this.i, 3);
				if (this.i === this.array.length) return (this._done = true); // check for finishing
				this.colorBar(this.i, 5);
				this.target = this.i;
				this._step = -(this.i);
			}

			// turn off old target
			if (this.target < this.i) this.colorBar(this.target, 3);

			// figure out what the new step size should be
			if (this.EXHAUSTIVE) this._step = -1;
			else {
				this._step = Math.max(1, (Math.abs(this._step)+1) >> 1);
				if (this.i === this.target || this.array[this.target] > this.array[this.i]) this._step = -this._step; // always negative if just starting
				// don't let it go off the ends
				if (this.target + this._step < 0 && this.target != 0) this._step = -this.target;
				if (this.target + this._step >= this.i) this._step = this.i - this.target - 1;
			}

			// new target, highlight it
			this.target += this._step;
			this.colorBar(this.target, 4);

			// if target is just before i && array[target] <= array[i], then no moving needed at all; start new search with next i
			if (this.target === this.i-1 && this.array[this.target] <= this.array[this.i]) this._step = 0;

			// just went one left & element is <=: final target is 1 to right, switch to swapping
			else if (this._step === -1 && this.array[this.target] <= this.array[this.i]) {
				this.target++;
				this._step = ~this.i; // swapSite
				this.isFinding = false;
			}

			// just went one right && (array[target] > array[i]): found final target, switch to swapping
			else if (this._step === 1 && this.array[this.target] > this.array[this.i]) {
				this._step = this.i; // swapSite
				this.isFinding = false;
			}

			// currently at start but wants to go left: final target is 0
			else if (this.target === 0 && this.array[0] > this.array[this.i]) {
				this._step = this.i; // swapSite
				this.isFinding = false;
			}
		}
		
		// moving--the easy part
		else {
			this.history.push([~this.i, this.target, this._step]);

			// need to adjust the target coloration slightly
			if (this._step < 0) {
				this._step = ~this._step;
				this.colorBar(this.target, 4);
				this.colorBar(this.target-1, 3);
			}
			this.swapBars(this._step, this._step-1);
			this._step--;
			if (this._step === this.target) {
				this.colorBar(this.target+1, 3);
				this.isFinding = true;
				this._step = NaN;
			}
		}
		return false;

	}
	
	// -1 step of insertion sort
	undoStep(lastState) {
		this._done = false;

		[this.i, this.target, this._step] = lastState;
		if (this._step === undefined) this._step = -1;
		this.isFinding = true;
		if (this.i < 0) {
			this.i = ~this.i;
			this.isFinding = false;
		}

		this.colorBars(0, this.array.length, 3);
		if (this.isFinding) {
			if (isNaN(this._step)) this.colorBar(this.target, 5);
			else {
				this.colorBar(this.i, 5);
				this.colorBar(this.target, 4);
			}
		}
		else {
			let realStep = this._step >= 0? this._step : ~this._step;
			this.swapBars(realStep-1, realStep);
			if (this._step < 0) this.colorBar(this.target-1, 4);
			else this.colorBar(this.target, 4);
			this.colorBar(realStep, 5);
		}
	}

	// reset insertion sort
	resetVars() {
		this._done = false;
		this.isFinding = true;
		this.target = -1;
		this.i = 0;
		this._step = 0;
		this.history = [];
		this.clearRegistry(); //~~//
	}
	

}

////////////////////////////////////////////////////////////////////////////////
// HEAPSORT (good, except for caching on real machines)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_HeapSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		if (!name) name = SIMSorters_Sorter.buildDefaultName("Heap Sort", options.has("UNL"), [options.has("REV") || options.has("BAC"), "Bottom-Up"]);
		if (!color) color = "teal";
		super(name, startingArray, barHeight, color, options, labels);

		this.resetVars();
	}

	// +1 step of heapsort
	doAlgoStep() {
		// if we're done, just leave
		if (this.mode === -1) return true;

		// set up local vars
		let numActiveBars = Math.min(this.array.length, this.array.length + this.stage);
		let doAdvance = false, justSwapped = false;
		let left = (this.target<<1) + 1, right = left+1;
		let leftBigger = (right === numActiveBars || this.array[left] >= this.array[right]);
		if (this.mode === 0 && right === numActiveBars) this.mode = 1;
		this.history.push([this.stage, this.mode, this.target, this.oldMode, this.oldTarget]);

		// possible cleanup from last time
		if (this.mode === 4 || (this.oldTarget >= 0 && this.target !== this.oldTarget)) {
			if (this.oldTarget < numActiveBars) this.colorBar(this.oldTarget, 3);
			let oldLeft = (this.oldTarget<<1)+1;
			if (oldLeft < numActiveBars) this.colorBar(oldLeft, 3);
			if (oldLeft+1 < numActiveBars) this.colorBar(oldLeft+1, 3);
		}

		this.oldMode = this.mode;
		this.oldTarget = this.target;
		
		switch (this.mode) {

		// STEP 1: highlight left & right (for "compare")
		case 0:
			this.colorBar(0, 3);
			this.colorBar(this.target, 4);
			this.colorBar(left, 5);
			this.colorBar(right, 5);

			this.mode = 1;
			break;

		// STEP 2: highlight target & larger child (again a "compare")
		case 1:

			// make sure left is highlighted if we skipped step 1
			if (right === numActiveBars) this.colorBar(left, 5);

			// dull smaller child, highlight target
			if (leftBigger) {
				if (right < numActiveBars) this.colorBar(right, 3);
				doAdvance = (this.array[left] <= this.array[this.target]);
				this.mode = 2;
			}
			else {
				this.colorBar(left, 3);
				doAdvance = (this.array[right] <= this.array[this.target]);
				this.mode = 3;
			}
			this.colorBar(this.target, 5);

			break;

		// STEP 3: swap larger child with parent (shouldn't always do this)
		case 2:
		case 3:
			if (leftBigger) this.swapBars(this.target, left);
			else this.swapBars(this.target, right);

			doAdvance = true;
			justSwapped = true;
			break;

		// OCCASIONAL STEP: swap out head of heap
		case 4:
			numActiveBars--;
			this.stage--;
			this.swapBars(0, numActiveBars);

			// check for finish
			if (numActiveBars <= 1) {
				this.mode = -1;
				return (this._done = true);
			}

			// color just-swapped bars
			this.colorBar(0, 5);
			this.colorBar(numActiveBars, 1);

			// set up for next pass
			this.mode = 0;
			this.target = 0;

		}

		// do we need to advance the target bar?
		if (doAdvance) {
			this.mode = 0;

			// adjust the target to propagate the heapifying (if needed)
			if (justSwapped) {
				if (leftBigger) this.target = (this.target<<1) + 1;
				else this.target = (this.target<<1) + 2;
			}

			// if we didn't swap or we're at the end, we've done a heapify pass
			if (!justSwapped || ((this.target<<1) + 1) >= numActiveBars) {
				if (this.stage > 0) {
					this.stage--;
					this.target = this.stage;
				}
				else this.mode = 4;
			}
		}

		// possibly skip mode 0
		right = (this.target<<1)+2;
		if (this.mode === 0 && right >= numActiveBars) this.mode = 1;//this.colorBar(numActiveBars, 1);

		return false;
	}

	// -1 step of heapsort
	undoStep(lastState) {
		[this.stage, this.mode, this.target, this.oldMode, this.oldTarget] = lastState;

		let numActiveBars = Math.min(this.array.length, this.array.length + this.stage);

		// waking up?
		if (this.mode === 4 && numActiveBars === 2) this.colorBars(numActiveBars, this.array.length, 1);

		// easy case: just undo a swap & return (2 is left, 3 is right)
		if (this.mode === 2 || this.mode === 3) {
			let left = (this.target<<1) + 1, right = left+1;
			if (this.mode === 2) this.swapBars(this.target, left);
			else this.swapBars(this.target, right);
			return;
		}
		if (this.mode === 4) {
			this.swapBars(0, numActiveBars-1);
		}

		// and now color
		this.colorBars(0, numActiveBars, 3);
		let left = (this.oldTarget<<1) + 1, right = left+1;

		// triplet (parent & kids)
		if (this.oldMode === 0) {
			this.colorBar(this.oldTarget, 4);
			this.colorBar(left, 5);
			this.colorBar(right, 5);
		}

		// single at beginning
		else if (this.oldMode === 4) this.colorBar(0, 5);

		// parent & greater kid
		else {
			let leftBigger = (this.oldMode === 2 || right === numActiveBars || this.array[left] >= this.array[right]);
			if (this.oldMode === 3) leftBigger = false;
			this.colorBar(this.oldTarget, 5);
			if (leftBigger) this.colorBar(left, 5);
			else this.colorBar(right, 5);
		}

	}

	// heapsort reset
	resetVars() {
		this.mode = 0;
		this.stage = this.target = (this.array.length>>1)-1;
		this.oldMode = this.oldTarget = -1;
		this.clearRegistry(); //~~//
	}
}

////////////////////////////////////////////////////////////////////////////////
// MERGE SORT (very good!)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_MergeSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		let backwards = options.has("REV") || options.has("BAC"),
			nonrecursive = options.has("NON") || options.has("BOT"),
			natural = options.has("NAT");
		if (natural) nonrecursive = false;

		if (!name) name = SIMSorters_Sorter.buildDefaultName("Merge Sort", options.has("UNL"), [nonrecursive, "Nonrecursive"], [natural, "Natural"], [backwards, "Reversed"]);
		if (!color) color = "blue";

		// figure out how big the cache needs to be (usually 1/2 array)
		let arrayLength = (startingArray instanceof Array) ? startingArray.length : startingArray, 
			cacheSize = (natural? arrayLength-1 : arrayLength >> 1);
		
		super(name, startingArray, barHeight, color, options, labels, cacheSize);
		this.NONRECURSIVE = nonrecursive;
		this.NATURAL = natural;
		this.resetVars();
	}

	doAlgoStep() {
		if (this._done) return true;

		if (this.NONRECURSIVE) return this.doNonRecursiveStep();
		if (this.NATURAL) return this.doNaturalStep();
		
		let num = Number(this.stepDiv.innerHTML);

		let index = num%8;

		let size = this.highBound - this.lowBound;
		let mid = (this.highBound + this.lowBound) >> 1;

		console.log("MODE", this.mode);
		switch (this.mode) {
			// DEALING WITH STACK
		case 0:
			// 1st thing to do is to push right side, left side onto the stack
			if (this.highBound - mid >= 2) {
				this.pushOntoStack(this.lowBound, this.highBound, -1);
				this.pushOntoStack(mid, this.highBound, this.lowBound);
			}

			if (mid - this.lowBound >= 2) {
				this.pushOntoStack(this.lowBound, this.highBound, -1);
				this.pushOntoStack(this.lowBound, mid, this.highBound);
			}
			
			// pop
			let outside;
			[this.lowBound, this.highBound, outside] = this.popFromStack(3);

			if (outside === -1) this.unghostBars(this.lowBound, this.highBound);
			else if (outside < this.lowBound) this.ghostBars(outside, this.lowBound);
			else if (outside > this.highBound) this.ghostBars(this.highBound, outside);
		}
		
		//if ((num>>3)%2 === 0) this.copyToCache(index, index);
		//else this.copyFromCache(index, 7-index);
	}

	undoStep(lastState) {
		this._done = false;
	}

	resetVars() {
		this._done = false;

		if (this.NONRECURSIVE) {
			this.level = Math.floor(Math.log2(this.array.length - 1));
			this.i = this.group = 0;
			this.c = this.cacheArray.length;
		}

		else if (this.NATURAL) {
			this.c = this.i = this.low = this.mid = this.high = 0;
			this.isComparing = false;
		}
		
		else {
			this.mode = 0;
			this.lowBound = 0;
			this.highBound = this.array.length;
			this.clearStack();
		}

		this.resetCache();
		this.clearRegistry(); //~~//
	}

	// +1 step, for the natural varient (taking advantage of pre-existing runs)
	doNaturalStep() {
		// scanning to find a run
		if (this.high <= this.low) {
			// on 1st pass, turn off the old run
			if (this.c !== this.low) {
				if (this.c < this.low) this.colorBars(this.c, this.low, 3);
				else this.colorBars(this.c, this.array.length, 3);
				this.c = this.low;
			}

			// advance i
			this.i++;
			this.colorBar(this.i, 5);
			if (this.i === this.low+1) this.colorBar(this.i-1, 5);
			else this.colorBar(this.i-2, 4);

			// see if the run ended
			if (this.i >= this.array.length || this.array[this.i] < this.array[this.i-1]) {

				// ended 1st run--place mid & scan for 2nd
				if (this.mid === this.low) {
					this.mid = this.i;
					// special behavior if we placed the midpoint at the end of the array
					if (this.mid === this.array.length) { 
						if (this.low === 0) return (this._done = true);
						else this.i = this.low = this.mid = this.high = 0; // reset for another pass
					}
				}

				// ended 2nd run--about to merge
				else {
					this.high = this.i;
					this.i = this.low;
				}
			}
		}

		// copy down to buffer, copy back up
		else {
			// this should trigger on the first merge after a scan
			if (this.i === this.low) {
				this.colorBar(this.high-1, 4);
				this.colorBar(this.high, 3);
				this.isComparing = true;
				this.c = 0;
			}

			this.doMergeStep(this.low, this.mid, this.high);

			// this triggers when we're done -- set all elements to new starting point (except high)
			if (this.c === this.cacheArray.length) {
				if (this.low === 0 && this.high === this.array.length) return (this._done = true);
				this.c = this.low;
				if (this.high === this.array.length) this.high = 0;
				this.i = this.low = this.mid = this.high;
			}
			/*
				if (this.high === this.array.length) {
					this.mid = this.low; // mid holds old place to 
					this.i = this.low = this.high = 0;
				}
				else {
					this.mid = this.low;
					this.i = this.low = this.high;
					//this.high = this.low;
					//this.low = this.mid;
				}
			}*/
		}
	}


	// +1 step, for the non-recursive varient
	doNonRecursiveStep() {
		// recover low, high for this group
		let high = (((this.group+1) * this.array.length) >> this.level),
			low = ((this.group * this.array.length) >> this.level),
			high0 = high, low0 = low;

		// figure out if we need to advance groups (adjusting high & low)
		while ((this.c === this.cacheArray.length && this.i === high) || (high-low <= 1)) {
			this.group++;

			// check for new pass with bigger groups (reduced level)
			if (this.group === (1<<this.level)) {
				this.level--;
				this.i = this.group = 0;
				this.c = this.cacheArray.length;
				low = 0;
			}
			else low = high;
			high = (((this.group+1) * this.array.length) >> this.level);
		}
		
		let mid = (((this.group*2+1) * this.array.length) >> (this.level+1));

		// we have a new group--get ready
		if (this.i <= low && this.c === this.cacheArray.length) {
			this.i = low;
			this.c = 0;
			this.colorBars(low0, high0, 3);//((this.group-1) * this.array.length) >> this.level, low, 3);
			this.colorBars(low, high, 4);
			this.isComparing = true;
		}

		// EVERY STEP IS EITHER COPYING DOWN, OR COMPARING/COPYING UP
		// if i is less than mid, we're copying down to the cache (without looking)
		//if (this.i < mid) this.copyToCache(this.i, (this.i++)-low);
		this.doMergeStep(low, mid, high);
		if (this.level === 0 && this.c === (mid-low)) return (this._done = true);

		return false;
	}

	doMergeStep(low, mid, high) {
		// first part: copy down to cache
		if (this.i < mid) {
			this.copyToCache(this.i, this.i - low);
			this.i++;
			return;
		}

		// second part--copy back up
		else {
			// just highlight for comparison
			if (this.isComparing) {
				this.colorCacheBar(this.c, 5);
				this.colorBar(this.i, 5);
				this.isComparing = false;
			}

			// actually swap element back from cache or right side
			else {
				let cacheSize = mid-low;
				this.colorCacheBar(this.c, 4);
				let target = (this.i - mid) + this.c + low;
				if (this.i===high || this.cacheArray[this.c] <= this.array[this.i]) {
					this.copyFromCache(this.c, target);
					this.colorCacheBar(this.c++, 3);
				}
				else this.swapBars(this.i++, target);
				this.colorBar(target, 5);

				// if cache is copied back, shortcut i to end & be done with the cache
				if (this.c === cacheSize) {
					//if (this.level === 0) return (this._done = true);
					this.i = high;
					this.c = this.cacheArray.length;
				}
				else if (this.i < high) this.isComparing = true;
			}
		}
	}

	undoNonRecursiveStep() {

	}
	
	needsCache() { return true; }

	getCacheSize() {
		console.log("this.NATURAL", this.NATURAL);
		if (this.NATURAL) return this.array.length - 1;
		else return this.array.length >> 1;
	}

	//getCacheDiv() { return undefined; }
	
}

////////////////////////////////////////////////////////////////////////////////
// QUICK SORT (ultraquick!)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_QuickSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		let x3Way = options.has("3WA");
		let backwards = options.has("REV") || options.has("BAC");
		let shuffle = options.has("SHU");
		let randomPivot = options.has("RAN");
		let medianPivot = options.has("MED");
		let nondeterministic = options.has("NON");

		// eliminate contradictions in options
		if (medianPivot) randomPivot = false;
		if (!shuffle && !randomPivot) nondeterministic = false;

		if (!name) name = SIMSorters_Sorter.buildDefaultName("Quicksort", options.has("UNL"), [x3Way, "Three-Way"], [backwards, "Reversed"], [shuffle, "Initial Shuffling"], [randomPivot, "Random Pivot"], [medianPivot, "Median Pivot"], [nondeterministic, "Nondeterministic"]);
		
		if (!color) color = "purple";
		super(name, startingArray, barHeight, color, options, labels);

		this.NONDETERMINISTIC = nondeterministic;
		this.X3WAY = x3Way;
		this.SHUFFLE = shuffle;
		this.RANDOM_PIVOT = randomPivot;
		this.MEDIAN_PIVOT = medianPivot;
		this.RAND = Math.floor(Math.random() * 1000000000);
		this.resetVars();
	}

	doAlgoStep() {
		if (this._done) return true;

		//let mustRecurse = false;
		console.log("MODE:", this.mode);

		switch (this.mode) {
		case 0: // popping the statck
			if (this.isStackEmpty()) {
				this.mode = -1;
				return (this._done = true);
			}

			// init values
			let outside;
			[this.pivot, this.highBound, outside] = this.popFromStack(3);
			this.low = this.pivot;
			this.high = this.highBound;
			if (this.MEDIAN_PIVOT) this.mode = 6;
			else this.mode = 1;

			console.log("WAKING UP: ", this.low, this.high, " - outside: " +outside);
			
			// do coloring--"wake up" this section & dim later sibling section
			//this.colorBars(this.low, this.high, 3);
			this.unghostBars(this.low, this.high);

			if (outside === -1) this.mode = 0;
			else if (outside > this.high) {
				//this.colorBars(this.high+1, outside, 2);
				this.ghostBars(this.high, outside);
			}
			else if (outside < this.low) {
				this.colorBars(outside, this.low, 1);
				this.ghostBars(outside, this.low);
			}
			
			//else if (outside < this.low) this.colorBars(outside, this.low-1, 2);
			return false;

			// ADVANCE THE LOW SCAN
		case 1:
			// undo old conditions if needed
			if (this.low < 0 || this.high < 0) {
				if (this.low < 0) {
					this.colorBar(~this.low, 3);
					this.low = this.pivot;
				}
				if (this.high < 0) {
					this.colorBar(~this.high, 3);
					this.high = this.highBound;
				}
			}
			if (this.low === this.pivot) this.colorBar(this.pivot, 5);
			// scan forward
			if (this.low > this.pivot) this.colorBar(this.low, 3);
			this.low++;

			// not met yet: check if we switch to back-scan
			if (this.low < this.high) {
				if (this.low < this.high) this.colorBar(this.low, 4);
				if (this.low < this.array.length && this.array[this.low] >= this.array[this.pivot]) this.mode = 2;
			}

			// low meets high--switch mode to move pivot
			else this.mode = 4;

			return false;

			// ADVANCE THE HIGH SCAN
		case 2:

			// scan back
			if (this.high < this.highBound) this.colorBar(this.high, 3);
			this.high--;

			// usual: see if we swap
			if (this.low < this.high) {
				this.colorBar(this.high, 4);
				if (this.array[this.high] <= this.array[this.pivot]) this.mode = 3;
			}

			// low meets high
			else this.mode = 4;

			return false;

			// SWAP LOW SCAN & HIGH SCAN
		case 3:
			this.swapBars(this.low, this.high);

			this.mode = 1;
			return false;

			// SWAP THE PIVOT INTO PLACE
		case 4:
			if (this.low < this.highBound) this.colorBar(this.low, 3);
			//this.colorBar(this.low-1, 4);
			this.colorBar(this.pivot, 1);
			this.swapBars(this.low-1, this.pivot);

			let leftSize = (this.low - this.pivot - 1), rightSize = (this.highBound - this.low);
			// push high half (pivot now at low-1) (or black it out)
			//let pushedHigh = false;
			console.log("left size:", leftSize, "right size:", rightSize);

			if (rightSize >= 2) {
				this.pushOntoStack(this.pivot, this.highBound, -1);
				this.pushOntoStack(this.low, this.highBound, this.pivot);
			}
			else if (rightSize === 1) this.colorBars(this.low, this.highBound, 1);

			// push low half (or black it out)
			if (leftSize >= 2) {
				this.pushOntoStack(this.pivot, this.highBound, -1);
				this.pushOntoStack(this.pivot, this.low-1, this.highBound);
			}
			else if (leftSize === 1) this.colorBars(this.pivot, this.low-1, 1);

			this.mode = 0;
			return false;

			// INITIAL F-Y SHUFFLE
		case 5: 
			this.colorBar(this.high, 3);
			this.colorBar(this.low, 3);

			if (this.high === this.array.length) this.high = 1;
			else this.high++;
		
			if (this.NONDETERMINISTIC) this.low = Math.floor(Math.random() * (this.high + 1));
			else this.low = SIMSorters.mulberry32(this.RAND + this.high * Number(this.stepDiv.innerHTML)) % (this.high+1);
			console.log("this.RAND", this.RAND);
			this.colorBar(this.low, 5);
			this.colorBar(this.high, 5);
			this.swapBars(this.low, this.high);

			// if finished shuffling
			if (this.high === this.array.length-1) {
				this.high = ~this.high;
				this.low = ~this.low;
				this.mode = 1;
			}
			return false;

			// FINDING MEDIAN OF 3
		case 6:
			this.colorBar(this.high, 3);
			this.colorBar(this.low, 3);

			
		}
		
		/*if (mustRecurse) {
			let pivot = this.low-1;
			let lowBound = this.pivot;

			this.swapBars(pivot, lowBound);
			this.colorBar(pivot, 1);

			// push high half
			let pushedHigh = false;
			if (pivot < this.highBound-2) {
				this.pushOntoStack(pivot+1, this.highBound);
				//this.stack.push((pivot+1) + (this.highBound<<16));
				pushedHigh = true;
			}
			else this.colorBars(pivot, this.highBound, 1);

			// push low half
			if (pivot > lowBound+1) {
				this.pushOntoStack(lowBound, pivot);
				//this.stack.push((lowBound) + ((pivot)<<16));
				if (pushedHigh) this.colorBars(pivot+1, this.highBound, 2);
			}
			else this.colorBars(lowBound, pivot, 1);

			this.mode = 0;
			return false;
		}
		*/
		return true;
		
	}
	
	undoStep(lastState) {
		this._done = false;

	}

	resetVars() {
		this._done = false;
		this.stack = [this.array.length << 16];
		this.pivot = this.low = 0;
		this.highBound = this.high = this.array.length;
		if (this.SHUFFLE) this.mode = 5;
		else if (this.MEDIAN_PIVOT) this.mode = 6;
		else this.mode = 1;

		this.clearStack();
		//this.pushOntoStack(0, this.array.length);
		this.clearRegistry(); //~~//
	}
}

////////////////////////////////////////////////////////////////////////////////
// BOGO SORT (why not?)
////////////////////////////////////////////////////////////////////////////////

class SIMSorters_BogoSorter extends SIMSorters_Sorter {
	constructor(startingArray, barHeight, options, labels, name, color) {
		let nondeterministic = options.has("NON");
		if (!name) name = SIMSorters_Sorter.buildDefaultName("Bogosort", options.has("UNL"), [nondeterministic, "Nondeterministic"]);
		if (!color) color = "gray";
		super(name, startingArray, barHeight, color, options, labels);

		this.RAND = Math.floor(Math.random() * 1000000000);
		this.NONDETERMINISTIC = nondeterministic;

		this.resetVars();
	}

	// does an actual step in the crappy bogosort algorithm
	doAlgoStep() {
		if (this._done) return true;

		// SHUFFLE MODE
		this.i++;
		if (this.isShuffling) {
			this.history.push(this.random);

			// uncolor bars
			this.colorBar(this.i-1, 3);
			this.colorBar(this.random, 3);
			if (this.i === 1) this.colorBar(this.random-1, 3);

			// F-Y shuffle
			if (this.NONDETERMINISTIC) this.random = Math.floor(Math.random() * (this.i + 1));
			else this.random = SIMSorters.mulberry32(this.RAND + this.i * this.stepDiv.innerHTML) % (this.i+1);
			this.colorBar(this.i, 4);
			this.colorBar(this.random, 4);
			this.swapBars(this.i, this.random);

			// if finished shuffling
			if (this.i === this.array.length-1) {
				this.i = 0;
				this.isShuffling = false;
			}
		}

		// COMPARE MODE
		else {
			if (this.i === 1) this.history.push(this.random);
			else this.history.push(-1);
			// return true if we actually succeeded (which is seriously unlikely)
			if (this.i == this.array.length) return true;

			// color the bars
			if (this.i === 1) {
				this.colorBar(this.random, 3);
				this.colorBar(this.array.length-1, 3);
			}
			else this.colorBar(this.i-2, 3);
			this.colorBars(this.i-1, this.i+1, 4);

			// if we found something out of order, we switch to shuffling
			if (this.array[this.i-1] > this.array[this.i]) {
				this.isShuffling = true;
				this.random = this.i; // to make sure it's unhighlighted
				this.i = 0;
			}
			else this.random = -1; // probably not needed
		}
	}

	// -1 step in bogosort
	undoStep(lastState) {
		this._done = false;

		// we were just checking--back the bars up a bit
		if (lastState === -1) {
			// if we had found an out-of-order pair, go back into checking mode
			if (this.isShuffling) {
				this.isShuffling = false;
				this.i = this.random;
				this.random = -1;
			}
			
			this.colorBar(this.i, 3);
			this.i--;
			this.colorBar(this.i-1, 4);
		}

		// possible that we just began shuffling?
		else if ((this.i == 1 && !this.isShuffling) || (this.i === 0 && this.isShuffling)) {
			this.colorBars(0, 2, 3);
			this.i = 0;
			this.random = lastState;
			this.colorBar(this.array.length-1, 4);
			this.colorBar(this.random, 4);
			this.isShuffling = false;
		}
		
		else {
			// on the very last swap
			if (this.i === 0 && !this.isShuffling) {
				this.i = this.array.length-1;
				this.isShuffling = true;
			}
			this.swapBars(this.i, this.random);
			this.colorBar(this.i, 3);
			this.colorBar(this.random, 3);

			// from the beginning, need to go back to final (bad) check
			if (this.i === 1) {
				this.i = 0;
				this.random = lastState;
				this.colorBars(this.random-1, this.random+1, 4);
			}
			// otherwise, it was another swap
			else {
				this.i--;
				this.random = lastState;
				this.colorBar(this.i, 4);
				this.colorBar(this.random, 4);
			}
		}
	}

	// start anew!
	resetVars() {
		this._done = false;
		this.random = -1;
		this.i = 0;
		this.isShuffling = false;
		this.clearRegistry(); //~~//
	}
}

// define all the sorter types in a big dictionary
SIMSorters_Sorter.TYPES = {"BUB":SIMSorters_BubbleSorter, "SHA":SIMSorters_ShakerSorter, "SEL":SIMSorters_SelectionSorter, "INS":SIMSorters_InsertionSorter, "HEA":SIMSorters_HeapSorter, "MER":SIMSorters_MergeSorter,"QUI":SIMSorters_QuickSorter,"BOG":SIMSorters_BogoSorter};

SIMSorters_Sorter.STOCKCOLORS = {"red":[170,0,0], "orange":[200,100,0], "yellow":[210,210,0], "green":[0,170,33], "cyan":[0,170,170], "blue":[0,51,180], "purple":[128,0,128], "skyblue":[70,128,212], "rose": [204,0,102], "indigo":[80,0,160], "amber":[220,180,0], "chartreuse":[160,200,0], "gray":[128,128,128]};
SIMSorters_Sorter.STOCKCOLORS["teal"] = SIMSorters_Sorter.STOCKCOLORS["cyan"];
SIMSorters_Sorter.STOCKCOLORS["grey"] = SIMSorters_Sorter.STOCKCOLORS["gray"];

//~~// DEBUGGING (remove from production)
SIMSorters_BubbleSorter.STATEVARS = [];
SIMSorters_Sorter.STATEVARS = {"SIMSorters_BubbleSorter" : ["i", "min", "max", "foundSwap", "goingForward"],
							   "SIMSorters_ShakerSorter" : ["i", "min", "max", "foundSwap", "goingForward"],
							   "SIMSorters_SelectionSorter" : ["i", "best", "oldBest", "limit", "run"],
							   "SIMSorters_InsertionSorter" : ["i", "target", "_step", "isFinding"],
							   "SIMSorters_HeapSorter" : ["stage", "mode", "target", "oldMode", "oldTarget"], 
							   "SIMSorters_MergeSorter" : [], 
							   "SIMSorters_QuickSorter" : [], 
							   "SIMSorters_BogoSorter" : ["i", "random", "isShuffling"]};
// END DEBUGGING //~~//

////////////////////////////////////////////////////////////////////////////////
// BUTTONS
////////////////////////////////////////////////////////////////////////////////

// this button should be pretty reusable--a lot of it relies on style sheets
class SIMSorters_Button {
	// create a style sheet containing all the control panel stuff
	constructor(icon, action, color, altIcon, altAction, altColor) {
		if (!SIMSorters_Button.styleSheet) SIMSorters_Button.makeStyleSheet();
		this.div = document.createElement('div');
		this.div.classList.add("sorter-button");

		if (icon in SIMSorters_Button.ICONS) icon = SIMSorters_Button.ICONS[icon];
		
		this.div.style.width = this.div.style.height = SIMSorters_Button.SIZE+"px";

		this.action = this.div.onclick = action;
		if (altAction) this.altAction = altAction;

		this.icon = this.makeIcon(icon, color);
		this.div.appendChild(this.icon);

		// is there an alternate version? set up fields
		if (altIcon) {
			if (altIcon in SIMSorters_Button.ICONS) altIcon = SIMSorters_Button.ICONS[altIcon];
			this.altIcon = this.makeIcon(altIcon, altColor, "sim-alt");
			this.altIcon.style.visibility = "hidden";
			this.altIcon.style.position = "absolute";
			this.div.appendChild(this.altIcon);
		}
		
	}

	// getter for the div (to attach to a parent)
	getDiv() {
		return this.div;
	}

	// disable the button (all via stylesheets)
	disable() {
		this.div.onclick = null;
		this.div.classList.add("disabled");
	}

	// enable this button
	enable() {
		this.div.onclick = this.action;
		this.div.classList.remove("disabled");
	}

	// change the icon/functionality back from the alternate
	setToMainIcon() {
		this.icon.style.visibility = "visible";
		this.altIcon.style.visibility = "hidden";
		if (this.div.onclick) this.div.onclick = this.action;
	}

	// change the icon/functionality to the alternate
	setToAltIcon() {
		this.icon.style.visibility = "hidden";
		this.altIcon.style.visibility = "visible";
		if (this.div.onclick) this.div.onclick = this.altAction;
	}

	// make the actual icon SVG
	makeIcon(icon, color, isAlt) {
		// MAKE THE RAW SVG
		let iconSize = SIMSorters_Button.SIZE-2, halfSize = iconSize/2;
		let iconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		iconSVG.style.width = iconSVG.style.height = iconSize + "px";
		iconSVG.setAttribute("viewBox", -halfSize +" "+ -halfSize +" "+ iconSize +" "+iconSize);
		iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		iconSVG.innerHTML = SIMSorters_Button.makeSVGPath(icon, isAlt);

		// add style sheets for specific color (if needed)
		if (color) {
			let styleName = "sorter-button" + (SIMSorters_Button.numColoredButtons++);
			this.div.classList.add(styleName);
			let fillable = isAlt? "alt-fillable":"fillable";
			SIMSorters_Button.styleSheet.insertRule("."+styleName+":not(.disabled):active ." +fillable+ " { fill: " +color+ "a;}");
			SIMSorters_Button.styleSheet.insertRule("."+styleName+":not(.disabled):hover ." +fillable+ "{ fill: " +color+ "6;}");
		}

		return iconSVG;
	}

	// make a path within the svg
	static makeSVGPath(path, isAlt) {
		return '<path d="' +path+ '" class="' +(isAlt?"alt-fillable":"fillable")+ '" stroke="#000" fill="none" stroke-width="1.5" />';
	}

	// make a style sheet for the control panel
	static makeStyleSheet() {
		let style = document.createElement("style");
		document.head.appendChild(style);
		style.sheet.insertRule(".sorter-control-panel {margin-left:auto; margin-right:auto; text-align: center;border: 1px solid #0000;display: flex;justify-content: space-between;}");
		style.sheet.insertRule(".sorter-button {border:1px solid #0000; border-radius:5px; box-sizing: border-box; display:flex; justify-content:center; align-items:center;}");
		style.sheet.insertRule(".sorter-button:not(.disabled) {cursor:pointer;}");
		style.sheet.insertRule(".sorter-button:hover:not(.disabled) {border-color: #666;}");
		style.sheet.insertRule(".sorter-button:active:not(.disabled) {border-color: #666;background-color: #eee;}");
		style.sheet.insertRule(".sorter-button.disabled {opacity:0.25;}");

		SIMSorters_Button.styleSheet = style.sheet;
		SIMSorters_Button.numColoredButtons = 0;
	}

	/*static makeShadowedIcon(path) {
		return '<path d="' +path+ '" stroke="#0004" fill="none" stroke-width="2" transform="translate(1 1)" /><path d="' +path+ '" class="fillable" stroke="#000" fill="none" stroke-width="1" />';
	}*/
}

SIMSorters_Button.SIZE = 39;
SIMSorters_Button.ICONS = {
	"DEBUG":"M-12,-12 H12 V-6 H3 V12 H-3 V-6 H-12 Z",
	"RESET":"M12,-12 L12,12 L-6,0 Z M-12,-10 Q-12,-12,-10,-12 Q-8,-12,-8,-10 L-8,10 Q-8,12,-10,12 Q-12,12,-12,10 Z",
	"PLAY":"M-12,-12 L-12,12 L12,0 Z",
	"PAUSE":"M-12,12 H-3 V-12 H-12 Z M12,12 H3 V-12 H12 Z",
	//"FASTFORWARD":"M-12,-8 L-12,8 L1,0 Z M1,-8 L1,8 L14,0 Z",
	"FASTFORWARD":"M-12,-12 L-12,12 L1,0 Z M1,-12 L1,12 L14,0 Z",
	"STEP":"M 2,0 L-6,8 C-10,12,-6,14,-2,12 L10,0 L-2,-12 C-6,-14,-10,-12,-6,-8 Z",
	"UNDO":"M -2,0 L6,8 C10,12,6,14,2,12 L-10,0 L2,-12 C6,-14,10,-12,6,-8 Z",
	"SHUFFLE":"M-12,12 V-12 H-6 V12 Z M-3,12 V4 H3 V12 Z M6,12 V-4 H12 V12 Z",
	"ORDER":"M-12,12 V4 H-6 V12 Z M-3,12 V-4 H3 V12 Z M6,12 V-12 H12 V12 Z",
	"BACKORDER":"M-12,12 V-12 H-6 V12 Z M-3,12 V-4 H3 V12 Z M6,12 V4 H12 V12 Z",
	//"SWAP": "M-12,12 H-6 V-4 H-12 Z M-5,0 L-1,-2 L-1,2 Z M5,0 L1,-2 L1,2 Z M6,12 H12 V-12 H6 Z",
	"MOVEONE": "M-12,12 V-12 H-6 V12 Z M-3,12 V-4 H3 V12 Z M-3,-12 Q10,-12,     11,1 L13,1 L9,5 L5,1 L7,1        Q6,-8,-3,-8 Z"
	//"RESET":"M24,-24 L24,24 L-12,0 Z M-24,-20 Q-24,-24,-20,-24 Q-16,-24,-16,-20 L-16,20 Q-16,24,-20,24 Q-24,24,-24,20 Z",
	/*"RESET":"M18,-18 L18,18 L-9,0 Z M-18,-15 Q-18,-18,-15,-18 Q-12,-18,-12,-15 L-12,15 Q-12,18,-15,18 Q-18,18,-18,15 Z",
	"PLAY":"M-12,-12 L-12,12 L12,0 Z",
	"STEP":"M 2,0 L-6,8 C-10,12,-6,14,-2,12 L10,0 L-2,-12 C-6,-14,-10,-12,-6,-8 Z",
	"SHUFFLE":"M-12,12 V-12 H-6 V12 Z M-3,12 V4 H3 V12 Z M6,12 V-4 H12 V12 Z",
	"ORDER":"M-12,12 V4 H-6 V12 Z M-3,12 V-4 H3 V12 Z M6,12 V-12 H12 V12 Z",
	"BACKORDER":"M-12,12 V-12 H-6 V12 Z M-3,12 V-4 H3 V12 Z M6,12 V4 H12 V12 Z",
	//"SWAP": "M-12,12 H-6 V-4 H-12 Z M-5,0 L-1,-2 L-1,2 Z M5,0 L1,-2 L1,2 Z M6,12 H12 V-12 H6 Z",
	"MOVEONE": "M-12,12 V-12 H-6 V12 Z M-3,12 V-4 H3 V12 Z M-3,-12 Q10,-12,10,1 L12,1 L9,4 L6,1 L8,1 Q8,-10,-3,-10 Z"*/
}
	
window.addEventListener('load', SIMSorters.go, false);

/*if (low <= mid) {

}

else {

}*/