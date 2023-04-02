import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform{
  transform(phone: string, oldItem: string, newItem: string): string {
    return phone.replaceAll(oldItem, newItem);
  }
}
