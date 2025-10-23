class Order {
  constructor(number, person, isCompleted) {
    this._number = number;
    this._person = person;
    this._isCompleted = isCompleted;
  }

  get person() {
    return this._person;
  }

  set person(value) {
    this._person = value;
  }

  get number() {
    return this._number;
  }

  set number(value) {
    this._number = value;
  }

  get status() {
    return this._isCompleted;
  }

  set status(value) {
    this._isCompleted = value;
  }

  show() {
    console.log(this._number+",заказчик:"+this._person+",выполнен:"+this._isCompleted);
  }

  delete() {
    this._number = null;
    this._person = null;
    this._isCompleted = null;
  }

  copy() {
    return new Order(this._number, this._person, this._isCompleted);
  }

  #completeOrder() {
    this._isCompleted = true;
  }

  static clone() {
    return new Order(2, "Max", true);
  }
}
