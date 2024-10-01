import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age >= minAge ? null : {ageInvalid: {value: control.value}};
  };
}

export function atLeastOneSkillValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const skills = control.value;
    return skills && skills.length > 0 ? null : {atLeastOneSkill: true};
  };
}
