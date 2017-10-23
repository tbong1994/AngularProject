import { Pipe, PipeTransform } from '@angular/core';
/*
 * Usage:
 *   wizardname | akaPipe
 * Example:
 *   {{ {{wizard.name}} | akaPipe }}
 *   formats to: whatever aka name the wizard is known for.
*/
@Pipe({name: 'akaPipe'})
export class AkaPipe implements PipeTransform {
    public akaName = "";
    transform( value: string ): string {
        if(value.startsWith("Har")){this.akaName="The Boy Who Lived";}
        else if(value.startsWith("Ron")){this.akaName="Ron";}
        else if(value.startsWith("Her")){this.akaName="Know-It-All";}
        else if(value.startsWith("Dobby")){this.akaName="The House Elf";}
        else if(value.startsWith("Sev")){this.akaName="The Half Blood Prince";}
        else if(value.startsWith("Vol")){this.akaName="The Dark Lord";}
        return this.akaName.toUpperCase();
    }
}