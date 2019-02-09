import { Component, OnInit } from '@angular/core';
import { PairsService } from 'ng2pairs';

const CLASSES_PREFIX = 'emopair pair--';
const CLASSES = ['turtle', 'monkey', 'robot', 'ghost', 'poo', 'snake', 'alien', 'tiger',
                'sunglasses', 'fear', 'skull', 'clown', 'monster', 'kiss', 'heart',
                'collision', 'bomb', 'eyes', 'gorilla', 'dog', 'wolf', 'lion', 'unicorn',
                'pig']

@Component({
    selector: 'emopairs',
    templateUrl: 'emopairs.html',
})
export class EmoPairsComponent implements OnInit {

    constructor(private pairsService: PairsService) {
    }

    ngOnInit() {
        this.pairsService.setCssClasses(this.randomEmojis().map(c => CLASSES_PREFIX + c));
    }

    randomEmojis(): String[] {
        const array = [].concat(CLASSES);
        let currentIndex = array.length, randomIndex, temporaryValue;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
  }

}
