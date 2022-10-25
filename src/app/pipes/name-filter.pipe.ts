import { Pipe,PipeTransform } from "@angular/core"
@Pipe({
    name:'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
    transform(value: any) {
        return value.toUpperCase()
    }
}