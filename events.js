class EventEmitter {
	
	constructor() {
		this.eventos = {};
	}

	on(evento, funcion) {

        if (!this.eventos[evento]) {
            this.eventos[evento] = [];
        } 

        this.eventos[evento].push(funcion);
        
	}

	emit(evento, ...args) {
             for(let event of this.eventos[evento]) {
                event(...args);
            }
	}
}

exports = module.exports = EventEmitter;