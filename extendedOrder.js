class ExtendedOrder extends Order {
  constructor(number, person, isCompleted, date) {
    super(number, person, isCompleted);
    this._date = date;
  }

  get date() {
    return this._date;
  }

  set date(value) {
    this._date = value;
  }

  show() {
    console.log(this._number+",заказчик:"+this._person+",выполнен:"+this._isCompleted+",дата:"+this._date);
  }

  delete() {
    super.delete();
    this._date = null;
  }

  clone() {
    return new ExtendedOrder(this.number, this.person, this.isCompleted, this.date);
  }
}

// Создание экземпляров
const elem1 = new Order(1, "Oleg", false);
const elem2 = new ExtendedOrder(2, "Petr", false, "16/09/2025");

let mas = [elem1, elem2];
elem1.show();
elem2.show();
