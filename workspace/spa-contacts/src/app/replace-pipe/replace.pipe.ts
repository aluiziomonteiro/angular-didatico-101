import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    resp: string = '';
    array: string;

    transform(value: string, oldItem: string, newItem: string): string {
        this.array = String(value);

        for (let index = 0; index < this.array.length; index++) {
            this.resp += this.array[index].replace(oldItem, newItem);
        }

        return this.resp;
    }
}