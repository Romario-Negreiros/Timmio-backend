class Validator {
  static cpf(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder: number;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.charAt(i - 1)) * (11 - i);

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.charAt(i - 1)) * (12 - i);

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;

    return remainder === parseInt(cpf.charAt(10));
  }

  static cellphone(cellphone: string): boolean {
    const cleaned = cellphone.replace(/[^\d]+/g, "");

    // Must have 11 digits: 2 for area code (DDD) + 9-digit mobile number starting with 9
    const regex = /^(\d{2})(9\d{8})$/;
    return regex.test(cleaned);
  }

  static email(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

export default Validator;
