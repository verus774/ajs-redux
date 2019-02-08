import template from './card-list.component.html';
import './card-list.component.css';

class controller {
    constructor($ngRedux, cardService) {
        this.cardService = cardService;
        this.$ngRedux = $ngRedux;
    }

    $onInit() {
        this.cards = [];

        this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, this.cardService)(this);

        // TODO: work solution
        this.$ngRedux.subscribe(() => {
            let state = this.$ngRedux.getState();
            this.cards = state.cards.items;
        });

        this.getCards();
        // console.log(this.cards);
    }

    $onDestroy() {
        this.unsubscribe();
    }

    mapStateToThis(state) {
        return {
            cards: state.items,
        }
    }
}

export default {
    template,
    controller,
}
