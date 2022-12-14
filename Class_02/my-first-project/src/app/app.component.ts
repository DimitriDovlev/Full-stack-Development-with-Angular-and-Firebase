import { Component } from '@angular/core';
import { Person } from './helpers/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';
  classOfToday: string = 'Svelte';
  public numberOfClasses: number = 15;
  public titleForTheChild = 'Angular!';

  person: Person = {
    firstName: 'firstName',
    lastName: 'lastName',
    age: 40,
    petName: 'petName',
  };

  person2: Person = {
    firstName: 'firstName2',
    lastName: 'lastName2',
    age: 45,
    petName: 'petName2',
  };

  pet3 = {
    title: 'name1',
    type: 'Cat',
  };

  randomInputValues: string = '';
  likeSum: number = 0;

  srcToAngularLogo =
    'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  altForAngularLogo = 'The Logo of Angular';

  returnFullName(person: Person): string {
    const { firstName, lastName, age, petName } = person;
    return `First name: ${firstName} ${lastName}, age:${age} and has a pet with name ${petName}`;
  }

  changeSubjectName(): void {
    console.log('Clicked button');
    this.classOfToday = 'Angular';
  }

  handleTextChange(event: Event): void {
    // const targetValue = (<HTMLInputElement>event.target).value;
    // The other way to do casting
    const target = event.target as HTMLInputElement;
    // console.log(target.value);
    this.randomInputValues = target.value;
  }
  onTitleReceived(value: string) {
    console.log(value);
    this.title = value;
  }
  onChangeNav(event: string) {
    this.title = event;
  }
  onAddLike() {
    this.likeSum++;
  }
}
