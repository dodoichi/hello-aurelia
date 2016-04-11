export class Welcome {
  heading = 'Welcome to Aurelia!';
  firstName = 'Dodo';
  lastName = 'Ichi';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}

